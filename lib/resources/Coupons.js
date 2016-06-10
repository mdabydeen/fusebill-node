'use strict';

module.exports = require('../FusebillResource').extend({
  path: 'coupons',
  includeBasic: ['create', 'list', 'update', 'retrieve', 'del'],
});

