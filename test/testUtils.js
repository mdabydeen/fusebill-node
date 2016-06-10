'use strict';

// NOTE: testUtils should be require'd before anything else in each spec file!

require('mocha');
// Ensure we are using the 'as promised' libs before any tests are run:
require('chai').use(require('chai-as-promised'));

var utils = module.exports = {

  getUserFusebillKey: function() {
    var key = process.env.STRIPE_TEST_API_KEY || 'tGN0bIwXnHdwOa85VABjPdSn8nWY7G7I';

    return key;
  },

  getSpyableFusebill: function() {
    // Provide a testable fusebill instance
    // That is, with mock-requests built in and hookable

    var Fusebill = require('../lib/fusebill');
    var fusebillInstance = Fusebill('fakeAuthToken');

    fusebillInstance.REQUESTS = [];

    for (var i in fusebillInstance) {
      if (fusebillInstance[i] instanceof Fusebill.FusebillResource) {
        // Override each _request method so we can make the params
        // available to consuming tests (revealing requests made on
        // REQUESTS and LAST_REQUEST):
        fusebillInstance[i]._request = function(method, url, data, auth, options, cb) {
          var req = fusebillInstance.LAST_REQUEST = {
            method: method,
            url: url,
            data: data,
            headers: options.headers || {},
          };
          if (auth) {
            req.auth = auth;
          }
          fusebillInstance.REQUESTS.push(req);
          cb.call(this, null, {});
        };
      }
    }

    return fusebillInstance;
  },

  /**
   * A utility where cleanup functions can be registered to be called post-spec.
   * CleanupUtility will automatically register on the mocha afterEach hook,
   * ensuring its called after each descendent-describe block.
   */
  CleanupUtility: (function() {
    CleanupUtility.DEFAULT_TIMEOUT = 20000;

    function CleanupUtility(timeout) {
      var self = this;
      this._cleanupFns = [];
      this._fusebill = require('../lib/fusebill')(
        utils.getUserFusebillKey(),
        'latest'
      );
      afterEach(function(done) {
        this.timeout(timeout || CleanupUtility.DEFAULT_TIMEOUT);
        return self.doCleanup(done);
      });
    }

    CleanupUtility.prototype = {

      doCleanup: function(done) {
        var cleanups = this._cleanupFns;
        var total = cleanups.length;
        var completed = 0;
        for (var fn; fn = cleanups.shift();) {
          var promise = fn.call(this);
          if (!promise || !promise.then) {
            throw new Error('CleanupUtility expects cleanup functions to return promises!');
          }
          promise.then(function() {
            // cleanup successful
            ++completed;
            if (completed === total) {
              done();
            }
          }, function(err) {
            // not successful
            throw err;
          });
        }
        if (total === 0) {
          done();
        }
      },
      add: function(fn) {
        this._cleanupFns.push(fn);
      },
      deleteCustomer: function(custId) {
        this.add(function() {
          return this._fusebill.customers.del(custId);
        });
      },
      deletePlan: function(pId) {
        this.add(function() {
          return this._fusebill.plans.del(pId);
        });
      },
      deleteCoupon: function(cId) {
        this.add(function() {
          return this._fusebill.coupons.del(cId);
        });
      },
      deleteInvoiceItem: function(iiId) {
        this.add(function() {
          return this._fusebill.invoiceItems.del(iiId);
        });
      },
    };

    return CleanupUtility;
  }()),

};

