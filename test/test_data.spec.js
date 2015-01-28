describe('Unit: Data', function () {
    beforeEach(module('trainingPlan'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function ($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('TrainingPlanCtrl', {
            $scope: scope
        });
    }));

    it('should be equal to 50 all summary stages percent',
            function () {
                scope.sports.forEach(function (sport) {
                    var summary = sport.stages.reduce(function (oldValue, newValue) {
                        return (typeof oldValue === "object" ? oldValue.percentOfSummary : oldValue) + newValue.percentOfSummary;
                    });
                    expect(summary === 50 || summary === 52).toBe(true); 
                });
            });

    it('should be equal to 100 all summary sport parts percent',
            function () {
                scope.sports.forEach(function (sport) {
                    //sport.parts[0].componentPercent
                    Array.isArray(sport.parts) && Object.keys(sport.showPartsFor).forEach(function (componentName) {
                        var componentPartsSummary = 0;
                        if (!sport.showPartsFor[componentName])
                            return;
                        sport.parts.forEach(function (part) {
                            componentPartsSummary += part.componentPercents[componentName] || 0;
                        });
                        expect(componentPartsSummary).toBe(100);
                    });
                });
            });

    it('should be equal to 100 all summary stage components and weeks',
            function () {
                scope.sports.forEach(function (sport) {
                    sport.stages.forEach(function (stage, index) {                        
                        //check components
                        var stageSummary = 0;
                        Object.keys(stage.componentPercents).forEach(function (componentName) {
                            stageSummary += stage.componentPercents[componentName]
                        });
                        expect(stageSummary).toBe(100);

                        //check weeks                       
                        expect(stage.weeks.reduce(function (oldValue, newValue) {
                            return (typeof oldValue === "object" ? oldValue.periodization : oldValue) + newValue.periodization;
                        })).toBe(100);
                    });
                });
            });
});