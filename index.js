var fs = require('fs');

module.exports = function(source) {
	var query = {};
	try {
		query = JSON.parse(this.query.substr(1));
	} catch(e) {}

	if(query.originalPath
	&& query.testCasePath
	&& this.resourcePath
	&& this.resourcePath.indexOf(
		query.originalPath
	) === 0) {
		var newPath = '';
		try {
			newPath = this.resourcePath.replace(
				new RegExp('^' + query.originalPath), query.testCasePath
			);
			fs.accessSync(newPath);
			const newSource = fs.readFileSync(newPath, 'utf-8');
			return newSource;
		} catch(e) {
			try {
				console.error("ERROR Replacing Test Case File")
				console.error("TEST CASE ID: " + query.TEST_CASE);
				console.error("Resource Path: " + this.resourcePath);
				console.error("Test Case Path: " + (newPath || "") );
				console.error(e);
				console.error("Reverting to original file for build.");
			} catch(e) {}
		}
	}

	return source;
}
