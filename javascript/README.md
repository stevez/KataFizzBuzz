Install node modules

1. Install karma-cli globally
   npm install -g karma-cli

2. Install gulp-cli globally
   npm install -g gulp-cli
   
3. Install the node-modules locally
   npm install
   
Run the test, you can either run thorough karma or gulp:
1. run through karma:
     karma start
	or 
	 karma start --auto-watch --no-single-run
	
2. run through gulp:
    gulp test
   or
    gulp tdd 
