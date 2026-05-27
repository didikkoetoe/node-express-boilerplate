process.env.NODE_ENV = 'test';
process.env.PORT = process.env.PORT || '3000';
process.env.MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/node-boilerplate';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-jwt-secret';
process.env.JWT_ACCESS_EXPIRATION_MINUTES = process.env.JWT_ACCESS_EXPIRATION_MINUTES || '30';
process.env.JWT_REFRESH_EXPIRATION_DAYS = process.env.JWT_REFRESH_EXPIRATION_DAYS || '30';
process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES = process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES || '10';
process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES = process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES || '10';
