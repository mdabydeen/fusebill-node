'use strict';

var FusebillResource = require('../FusebillResource');

module.exports = FusebillResource.extend({

  path: 'draftinvoices',
  includeBasic: ['retrieve',],
});
