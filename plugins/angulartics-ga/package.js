var name = "angulartics-ga";
var version = "0.17.2";
Package.describe({
  documentation: null,
  summary: name+" module for angular",
  name: "planettraining:"+name,
  version: version,
  git:"https://github.com/planet-training/meteor-angulartics.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');


  api.use("planettraining:angulartics@"+version, "client");

  api.addFiles([
    '../../bower_components/angulartics/dist/'+name+'.min.js'
  ], "client");
});
