angular.module("trainingPlan", []).run(["$templateCache", function($templateCache) {$templateCache.put("/templates/training_plan.html","<form ng-app=\"trainingPlan\" ng-controller=\"TrainingPlanCtrl\">\n    <p>\n        <label for=\"training-plan-sport\">Вид спорту:</label>                  \n        <select ng-model=\"sport\" ng-options=\"sport as sport.name for sport in sports\" id=\"training-plan-sport\"></select>\n    </p>\n    <p>\n        <label for=\"training-plan-summary\">Сумарний річний об’єм тренувань, годин чи хвилин:</label> <input type=\"number\" ng-model=\"summary\" id=\"training-plan-summary\"/>\n        <span class=\'training-plan-export\'>\n            <span>Експорт в:</span>\n            <a download=\"training_plan.xls\"  href=\"#\" onclick=\"return ExcellentExport.excel(this, \'training-plan-table\', \'Training plan\');\">Excel</a>\n            <a download=\"training_plan.csv\"  href=\"#\" onclick=\"return ExcellentExport.csv(this, \'training-plan-table\');\">CSV</a>\n        </span>\n    </p>   \n    <table id=\'training-plan-table\'>\n        <thead>\n            <tr>\n                <th>4-тижневий цикл</th>\n                <th ng-repeat=\"stage in sport.stages\" colspan=\"{{stage.weeks.length}}\">{{$index + 1}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>Етап підготовки</td>\n                <td ng-repeat=\"stage in sport.stages\" colspan=\"{{stage.weeks.length}}\">{{stage.name}}</td>\n            </tr>\n            <tr>\n                <td>% річного циклу</td>\n                <td ng-repeat=\"stage in sport.stages\" colspan=\"{{stage.weeks.length}}\">{{stage.percentOfSummary}}</td>\n            </tr>\n            <tr>\n                <td>Об’єм циклу</td>\n                <td ng-repeat=\"stage in sport.stages\" colspan=\"{{stage.weeks.length}}\">{{summary * stage.percentOfSummary / 100| number : 1}}</td>\n            </tr>\n            <tr>\n                <td>Тиждень</td>\n                <td ng-repeat=\"stage in sport.stages| flattenWeeks\">{{$index + 1}}</td>\n            </tr>\n            <tr>\n                <td>Періодизація (% від обєму 4-тижневого циклу)</td>\n                <td ng-repeat=\"stage in sport.stages| flattenWeeks\">{{stage.periodization}}</td>\n            </tr>\n            <tr style=\"color: #3276b1\">\n                <td>Тижневий об’єм</td>\n                <td ng-repeat=\"stage in sport.stages| flattenWeeks\">{{summary * stage.parent.percentOfSummary * stage.periodization / 10000| number : 1}}</td>\n            </tr>\n\n            <tr>\n                <td colspan=\"{{sport.stages.length * sport.stages[0].weeks.length + 1}}\">&nbsp;</td>\n            </tr>\n\n            <tr>\n                <td colspan=\"{{sport.stages.length * sport.stages[0].weeks.length + 1}}\">Нижче: відсотковий розподіл тижневого об’єму між окремими тренувальними компонентами підготовки на кожному 4-тижневому циклі</td>\n            </tr>\n\n            <tr ng-repeat=\"component in components\">\n                <td>{{component.label}}</td>\n                <td ng-repeat=\"stage in sport.stages\" colspan=\"{{stage.weeks.length}}\">{{stage.componentPercents[component.name]}}</td>\n            </tr> \n\n            <tr>\n                <td colspan=\"{{sport.stages.length * sport.stages[0].weeks.length + 1}}\">&nbsp;</td>\n            </tr>\n\n            <tr>\n                <td colspan=\"{{sport.stages.length * sport.stages[0].weeks.length + 1}}\">Нижче: розподіл часу між різними видами діяльності (помножте тижневий об’єм тренувального компонента на відсоткову величину для конкретного виду діяльності)</td>\n            </tr>\n\n            <tr ng-repeat=\"component in components\">\n                <td>{{component.label}} <p ng-show=\"sport.showPartsFor[component.name]\" ng-repeat=\"part in sport.parts\"  class=\"sport-part sport-part-label\">{{part.name}}</p></td>\n                <td ng-repeat=\"stage in sport.stages| flattenWeeks\">                            \n                    {{summary * stage.parent.componentPercents[component.name] * stage.parent.percentOfSummary * stage.periodization / 1000000| number : 1}}\n                    <p ng-show=\"sport.showPartsFor[component.name]\" ng-repeat=\"part in sport.parts\"  class=\"sport-part\">{{summary * part.componentPercents[component.name] * stage.parent.componentPercents[component.name] * stage.parent.percentOfSummary * stage.periodization / 100000000| number : 1}}</p>\n                </td>\n            </tr>\n\n        </tbody>\n    </table>\n\n</form>");}]);