// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({

    // path to external libraries
    "baseUrl": "lib",

    // cache bust!
    "urlArgs": "bust=" + (new Date()).getTime(),

    "paths": {

      // Remember: paths are relative to baseUrl
      "app": "../app", 
      "module": "../app/assets/js",

      // I dropped the support for IE < 9
      // But actually I'm not using jQuery.
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

// Load the main app module to start the app.
requirejs(["app/main"]);
