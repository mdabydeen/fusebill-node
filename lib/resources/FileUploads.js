'use strict';

var utils = require('../utils');
var FusebillResource = require('../FusebillResource');
var fusebillMethod = FusebillResource.method;
var multipartDataGenerator = require('../MultipartDataGenerator');

module.exports = FusebillResource.extend({

  overrideHost: 'uploads.fusebill.com',

  requestDataProcessor: function(method, data, headers) {
    data = data || {};

    if (method === 'POST') {
      return multipartDataGenerator(method, data, headers);
    } else {
      return utils.stringifyRequestData(data);
    }
  },

  path: 'files',

  includeBasic: [
    'retrieve',
    'list',
  ],

  create: fusebillMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
});
