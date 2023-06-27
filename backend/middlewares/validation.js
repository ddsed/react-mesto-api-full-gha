const { celebrate, Joi } = require('celebrate');

// User
const validationUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().hex().length(24),
  }),
});

const validationUserInfo = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().pattern(/^(.+)@(\S+)$/i),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/https*:\/\/\S+/i),
  }),
});

const validationUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

const validationUpdateUserAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(/https*:\/\/\S+/i),
  }),
});

// Card
const validationCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().hex().length(24),
  }),
});

const validationCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(/https*:\/\/\S+/i),
  }),
});

module.exports = {
  validationUserId,
  validationUserInfo,
  validationUpdateUser,
  validationUpdateUserAvatar,
  validationCardId,
  validationCard,
};
