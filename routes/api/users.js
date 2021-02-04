const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { User, Theme, Favorite } = require('../../db/models');

const router = express.Router();

/*
Route order matters, file reads top to bottom
*/

// // GET all users
// router.get('/', asyncHandler(async function (req, res, next) {
//     const users = await User.findAll();
//     res.json({ users });
// }));

// GET one user by id
router.get('/:userId', asyncHandler(async function (req, res, next) {
  const user = await User.findByPk(`${req.params.userId}`);
  res.json({ user });
}));

// GET one user's themes
router.get('/:userId/themes', asyncHandler(async function (req, res, next) {
  const userThemes = await Theme.findAll({
    where: {
      user_id: `${req.params.userId}`,
    },
  });
  return res.json({ userThemes });
}));

// GET one user's favorite themes
router.get(
  '/:userId/themes/favorites',
  asyncHandler(async function (req, res, next) {
    const favoriteThemes = await Favorite.findAll({
      where: {
        user_id: `${req.params.userId}`,
      },
    });
    return res.json({ favoriteThemes });
  }),
);

// GET one user's single theme
router.get(
  '/:userId/themes/:themeId',
  asyncHandler(async function (req, res, next) {
    const userTheme = await Theme.findByPk(`${req.params.themeId}`, {
      where: {
        user_id: `${req.params.userId}`,
      },
    });
    return res.json({ userTheme });
}));

module.exports = router;
