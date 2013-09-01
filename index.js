function dotAccess(obj, path) {
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
}

module.exports = dotAccess;

// Test
// console.log(dotAccess({
// 	user: {
// 		name: {
// 			first: 'nathan',
// 			last: 'tran'
// 		}
// 	}
// }, 'user.name.last'));