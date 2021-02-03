const router = require('express').Router();

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');

const routes = ['users'];

// EXAMPLE: router.use('/user', './user')
for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

router.get(
  '/set-token-cookie',
  asyncHandler(async ( req, res) => {
    const user = await User.findOne({
      where: {
        username: 'demo',
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  }),
);

module.exports = router;
