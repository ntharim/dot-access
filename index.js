exports.get = function (obj, path) {
  var parts = path.split('.');
  var value = obj;

  for (var i = 0; i < parts.length; i++) {
    try {
      value = value[parts[i]];
    } catch (e) {
      value = undefined;
      break;
    }
  }

  return value;
};

exports.set = function (obj, path, value) {
  var parts = path.split('.');
  var child = parts.pop();
  var parent = parts.length === 0 ? obj : exports.get(obj, parts.join('.'));

  if (parent && typeof parent === 'object') {
    parent[child] = value;
    return true;
  }

  return false;
};