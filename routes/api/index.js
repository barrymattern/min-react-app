const router = require('express').Router();

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');

const routes = ['users', 'session'];

// EXAMPLE: router.use('/users', './users')
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

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth');

router.get('/restore-user', restoreUser, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
