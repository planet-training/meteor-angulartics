Package.describe({
  summary: "angulartics module for angular",
  name: "planettraining:angulartics",
  version: "0.17.2",
  git:"https://github.com/planet-training/meteor-angulartics.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');


  api.use("angular:angular@1.3.15", "client");

  api.addFiles([
    'bower_components/angulartics/dist/angulartics.min.js'
  ], "client");
});
