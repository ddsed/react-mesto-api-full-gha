const router = require('express').Router();
const { validationUpdateUser, validationUpdateUserAvatar, validationUserId } = require('../middlewares/validation');
const usersController = require('../controllers/users');

router.get('/', usersController.getUsers);
router.get('/me', usersController.getCurrentUser);
router.get('/:userId', validationUserId, usersController.getUserById);
router.patch('/me', validationUpdateUser, usersController.updateUser);
router.patch('/me/avatar', validationUpdateUserAvatar, usersController.updateUserAvatar);

module.exports = router;
