const xss = require('xss');

const isPlainObject = (value) => Object.prototype.toString.call(value) === '[object Object]';

const sanitizeValue = (value) => {
  if (typeof value === 'string') {
    return xss(value);
  }

  if (Array.isArray(value)) {
    return value.map(sanitizeValue);
  }

  if (isPlainObject(value)) {
    return Object.entries(value).reduce((sanitized, [key, nestedValue]) => {
      sanitized[key] = sanitizeValue(nestedValue);
      return sanitized;
    }, {});
  }

  return value;
};

const setSanitizedQuery = (req, query) => {
  Object.defineProperty(req, 'query', {
    value: query,
    writable: true,
    enumerable: true,
    configurable: true,
  });
};

const xssSanitizer = () => (req, res, next) => {
  if (req.body) {
    req.body = sanitizeValue(req.body);
  }

  if (req.params) {
    req.params = sanitizeValue(req.params);
  }

  if (req.query) {
    setSanitizedQuery(req, sanitizeValue(req.query));
  }

  next();
};

module.exports = xssSanitizer;
