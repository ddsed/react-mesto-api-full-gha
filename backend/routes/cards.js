const router = require('express').Router();
const cardsController = require('../controllers/cards');
const { validationCard, validationCardId } = require('../middlewares/validation');

router.get('/', cardsController.getCards);
router.post('/', validationCard, cardsController.createCard);
router.delete('/:cardId', validationCardId, cardsController.deleteCardById);
router.put('/:cardId/likes', validationCardId, cardsController.likeCard);
router.delete('/:cardId/likes', validationCardId, cardsController.dislikeCard);

module.exports = router;
