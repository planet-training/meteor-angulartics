#angulartics

https://github.com/luisfarzati/angulartics

##Setup
```
meteor add planettraining:angulartics
```

###Google Analytics
```
meteor add planettraining:angulartics-ga
```
####Add ga script block
create a e.g. ```main.ga.js``` that contains a document.write statement adding the ga script block. (someone should check if this could maybe also done via regular js code in meteor)
```
document.write("<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');</script>");
```
####Init GA
```
Meteor.startup(function () {
  ga('create', 'UA-....', 'auto');
});
```
####Use the $analytics service
```
$analytics.pageTrack("/foo/bar/page");
```
