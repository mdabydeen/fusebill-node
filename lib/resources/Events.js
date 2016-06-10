'use strict';

module.exports = require('../FusebillResource').extend({
  path: 'events',
  includeBasic: ['list', 'retrieve'],
});

