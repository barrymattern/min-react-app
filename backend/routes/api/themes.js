const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');
const { User, Theme } = require('../../db/models');

const router = express.Router();

// GET all themes
router.get(
  '/',
  restoreUser,
  asyncHandler(async function (req, res, next) {
  const themes = await Theme.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'username', 'profileImageUrl'],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return res.json(themes);
}));

// GET one theme by id
router.get(
  '/:themeId',
  restoreUser,
  asyncHandler(async function (req, res, next) {
  const theme = await Theme.findByPk(`${req.params.themeId}`, {
    include: [
      {
        model: User,
        attributes: ['id', 'username', 'profileImageUrl'],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return res.json(theme);
}));

// POST new theme saved
router.post(
  '/',
  restoreUser,
  asyncHandler(async function (req, res, next) {
    const newTheme = await Theme.create({
      name: req.body.name,
      commentColor: req.body.commentColor,
      funcKeywordColor: req.body.funcKeywordColor,
      funcNameColor: req.body.funcNameColor,
      roundBraceColor: req.body.roundBraceColor,
      parameterColor: req.body.parameterColor,
      curlyBraceColor: req.body.curlyBraceColor,
      letConstColor: req.body.letConstColor,
      variableColor: req.body.variableColor,
      operatorColor: req.body.operatorColor,
      numberColor: req.body.numberColor,
      punctuationColor: req.body.punctuationColor,
      fatArrowColor: req.body.fatArrowColor,
      methodColor: req.body.methodColor,
      stringColor: req.body.stringColor,
      comment: req.body.comment,
      likes: req.body.likes,
      user_id: req.body.user_id,
    });
    res.status(201).json(newTheme);
  })
);

// BONUS FEATURES **************************************************************

// // GET all light themes
// router.get(
//   '/light',
//   restoreUser,
//   asyncHandler(async function (req, res, next) {
//   const lightTheme = await Theme.findAll({
//     where: {
//       light: true,
//     },
//     include: [
//       {
//         model: User,
//         attributes: ['id', 'username', 'profileImageUrl'],
//         through: {
//           attributes: [],
//         },
//       },
//     ],
//   });
//   return res.json(lightTheme); 
// }));

// // GET all dark themes
// router.get(
//   '/dark',
//   restoreUser,
//   asyncHandler(async function (req, res, next) {
//   const darkTheme = await Theme.findAll({
//     where: {
//       light: false,
//     },
//     include: [
//       {
//         model: User,
//         attributes: ['id', 'username', 'profileImageUrl'],
//         through: {
//           attributes: [],
//         },
//       },
//     ],
//   });
//   return res.json(darkTheme); 
// }));

module.exports = router;
