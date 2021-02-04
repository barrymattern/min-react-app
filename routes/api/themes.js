const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Theme } = require('../../db/models');

const router = express.Router();

// GET all themes
router.get('/', asyncHandler(async function (req, res, next) {
  const themes = await Theme.findAll({
    include: [{
      model: User,
      attributes: ['username', 'profileImageUrl'],
      through: {
        attributes: [],
      },
    }],
  });
  return res.json({ themes });
}));

// GET one theme by id
router.get('/:themeId', asyncHandler(async function (req, res, next) {
  const theme = await Theme.findByPk(`${req.params.themeId}`, {
    include: [{
      model: User,
      attributes: ['username', 'profileImageUrl'],
      through: {
        attributes: [],
      },
    }],
  });
  console.log(User);
  return res.json({ theme });
}));

module.exports = router;


// Model.findAll({
//   attributes: {
//     include: [
//       [sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']
//     ]
//   }
// });

// // GET one theme by id
// router.get('/:themeId', asyncHandler(async function (req, res, next) {
//   const theme = await Theme.findByPk(`${req.params.themeId}`, {
//     include: [{
//       model: User,
//       attributes: {
//         include: [['username', 'profileImageUrl']],
//         exclude: ['Favorite']},
//     }],
//   });
//   console.log(User);
//   return res.json({ theme });
// }));

// // ORIGINAL
// // GET one theme by id
// router.get('/:themeId', asyncHandler(async function (req, res, next) {
//   const theme = await Theme.findByPk(`${req.params.themeId}`, {
//     include: [{
//       model: User,
//       attributes: ['username', 'profileImageUrl'],
//     }],
//   });
//   console.log(User);
//   return res.json({ theme });
// }));

// // GET one theme by id
// router.get('/:themeId', asyncHandler(async function (req, res, next) {
//   const theme = await Theme.findByPk(`${req.params.themeId}`, {
//     include: [{
//       model: User,
//       attributes: {exclude: [
//         'id',
//         'email',
//         'hashedPassword',
//         'tokenId',
//         'createdAt',
//         'updatedAt',
//         'Favorite',
//       ]},
//     }],
//   });
//   console.log(User);
//   return res.json({ theme });
// }));
