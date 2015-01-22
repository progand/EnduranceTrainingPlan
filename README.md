# EnduranceTrainingPlan

This is Angular-based web-app for endurance training planning. 
All templates and dependencies (including Angular) was packed in one file. 
You can find in both development and compressed versions public_html/build

Usage
============

All you need to start is load only one script (it has no dependencies) and add particular html to your page.

Load script:
```html
<script src="/build/training-plan.min.js"></script>
```

Add html (include before script tag):
```html
<div ng-app="trainingPlan" ng-controller="TrainingPlanCtrl" training-plan></div>
```
> Important! Please, include script after html.