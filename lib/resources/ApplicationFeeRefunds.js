'use strict';

var FusebillResource = require('../FusebillResource');

/**
 * ApplicationFeeRefunds is a unique resource in that, upon instantiation,
 * requires an application fee id , and therefore each of its methods only
 * require the refundId argument.
 *
 * This streamlines the API specifically for the case of accessing refunds
 * on a returned application fee object.
 *
 * E.g. applicationFeeObject.refunds.retrieve(refundId)
 * (As opposed to the also-supported fusebill.applicationFees.retrieveRefund(chargeId,
 * refundId))
 */
module.exports = FusebillResource.extend({
  path: 'application_fees/{feeId}/refunds',
  includeBasic: ['create', 'list', 'retrieve', 'update'],
});
