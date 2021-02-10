const router = require('express').Router();

// GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth');
// const { User } = require('../../db/models');

const routes = ['users', 'session', 'themes'];

// EXAMPLE: router.use('/users', './users') – add new routes to array above
for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

// Test User Auth Middlewares **************************************************

// router.get(
//   '/set-token-cookie',
//   asyncHandler(async ( req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: 'demo',
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json(user);
//   }),
// );

// const { restoreUser } = require('../../utils/auth');

// // GET /api/restore-user
// router.get('/restore-user', restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// Test User Auth Middlewares **************************************************

module.exports = router;
