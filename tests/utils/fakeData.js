const crypto = require('crypto');

const randomId = () => crypto.randomUUID().replace(/-/g, '');

const fakeName = () => `Test User ${randomId().slice(0, 8)}`;

const fakeEmail = () => `user.${randomId()}@example.com`;

module.exports = {
  fakeEmail,
  fakeName,
};
