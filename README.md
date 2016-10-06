# Test Case Loader

This webpack loader makes it easy to create and build test cases by having delta-like paths in your source code.


### Example

*Project Structure*

```
/src/
	/myFiles/
		MyFile.js
	main.js
/test-cases/
	/TestCaseID/
		/myFiles/
			MyFile.js
```

*Webpack Loader Config*
```javascript
{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'testcase-loader',
    query: {
        testCaseID: 'TestCaseID',
        originalPath: '/absolute/path/to/src',
        testCasePath: '/absolute/path/to/test-cases/TestCaseID'
    }
}
```

With the configuration above, when Webpack attempts to resolve a file within the `originalPath` directory structure, this loader will first attempt to locate it within the `testCasePath`. If it exists, it will resolve the source code from the `testCasePath` as if it were in the `originalPath` structure.

This makes it easy to create Test Case folders, keeping your source directory clean of test case modifications, and slimming down the footprint of other solutions that may include copying the entire code base for test case changes.

Enjoy!
