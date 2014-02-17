exports.get = function (obj, path) {
  try {
    return new Function('_', 'return _.' + path)(obj);
  } catch (e) {
    return obj[path];
  }
};

exports.set = function (obj, path, value) {
  new Function('_', 'val', '_.' + path + ' = val')(obj, value);
};