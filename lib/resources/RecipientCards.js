'use strict';

var FusebillResource = require('../FusebillResource');

/**
 * RecipientCard is similar to CustomerCard in that, upon instantiation, it
 * requires a recipientId, and therefore each of its methods only
 * require the cardId argument.
 *
 * This streamlines the API specifically for the case of accessing cards
 * on a returned recipient object.
 *
 * E.g. recipientObject.cards.retrieve(cardId)
 * (As opposed to the also-supported fusebill.recipients.retrieveCard(recipientId, cardId))
 */
module.exports = FusebillResource.extend({
  path: 'recipients/{recipientId}/cards',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],
});
