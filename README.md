# Test Case Loader

## Use this with `testcase-plugin`

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
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'testcase-loader',
    query: {
        testCaseID: 'TestCaseID',
        originalPath: '/absolute/path/to/src',
        testCasePath: '/absolute/path/to/test-cases/TestCaseID'
    }
}
```

With the configuration above, after Webpack resolves a file within the `originalPath` directory structure, this loader will substitute the source code with the file within the `testCasePath` directory if it exists.

This makes it easy to create Test Case folders, keeping your source directory clean of test case modifications, and slimming down the footprint of other solutions that may include copying the entire code base for test case changes.

Enjoy!
