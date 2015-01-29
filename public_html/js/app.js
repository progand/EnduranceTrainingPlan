var app = angular.module('trainingPlan', ['templates'])
        .filter('flattenWeeks', function () {
            return function (rows) {
                var flatten = [];
                angular.forEach(rows, function (row) {
                    var weeks = row.weeks;
                    if (weeks) {
                        angular.forEach(weeks, function (week) {
                            flatten.push(angular.extend(week, {subrow: true, parent: row}));
                        });
                    }
                });
                return flatten;
            };
        })
        .directive('trainingPlan', function () {
            return {
                restrict: 'ECMA',
                templateUrl: '/templates/training_plan.html'
            };
        });
;

app.controller('TrainingPlanCtrl', function ($scope) {
    $scope.summary = 100;

    $scope.components = [
        {name: "speed", label: "Швидкість"},
        {name: "distance", label: "Дистанція"},
        {name: "race", label: "Темп/змагання"},
        {name: "interval", label: "Інтервали"},
        {name: "superDistance", label: "Супердистанція"},
        {name: "mountainInterval", label: "Гірські інтервали"},
        {name: "force", label: "Сила"}];

    $scope.sports = [
        {
            name: "Тріатлон (залізна та напівзалізна дистанції)",
            showPartsFor: {
                speed: true,
                distance: true,
                race: true,
                interval: true,
                superDistance: true,
                mountainInterval: true,
                force: false
            },
            parts: [
                {
                    name: "Плавання",
                    componentPercents: {
                        speed: 0,
                        distance: 20,
                        race: 20,
                        interval: 35,
                        superDistance: 20,
                        mountainInterval: 0
                    }
                },
                {
                    name: "Велосипед",
                    componentPercents: {
                        speed: 50,
                        distance: 50,
                        race: 50,
                        interval: 35,
                        superDistance: 50,
                        mountainInterval: 60
                    }
                },
                {
                    name: "Біг",
                    componentPercents: {
                        speed: 50,
                        distance: 30,
                        race: 30,
                        interval: 30,
                        superDistance: 30,
                        mountainInterval: 40
                    }
                }
            ],
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 65,
                        mountainInterval: 0,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 10,
                        race: 0,
                        interval: 5,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 10,
                        race: 0,
                        interval: 5,
                        superDistance: 60,
                        mountainInterval: 10,
                        force: 15
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 10,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 10,
                        race: 5,
                        interval: 10,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 10
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 10,
                        interval: 15,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 10
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 15,
                        interval: 15,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 5
                    }
                }
            ]
        },
        {
            name: "Дуатлон (спринтерська та середня дистанції)",
            showPartsFor: {
                speed: true,
                distance: true,
                race: true,
                interval: true,
                superDistance: true,
                mountainInterval: true,
                force: false
            },
            parts: [
                {
                    name: "Плаванння",
                    componentPercents: {                       
                        race: 20
                    }
                },
                {
                    name: "Велосипед",
                    componentPercents: {
                        speed: 50,
                        distance: 60,
                        race: 50,
                        interval: 60,
                        superDistance: 60,
                        mountainInterval: 60
                    }
                },
                {
                    name: "Біг",
                    componentPercents: {
                        speed: 50,
                        distance: 40,
                        race: 30,
                        interval: 40,
                        superDistance: 40,
                        mountainInterval: 40
                    }
                }
            ],
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 5,
                        superDistance: 55,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 0,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 5,
                        interval: 10,
                        superDistance: 45,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 10,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 10
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 15,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 10
                    }
                }
            ]
        },
        {
            name: "Довгий дуатлон",
            showPartsFor: {
                speed: true,
                distance: true,
                race: true,
                interval: true,
                superDistance: true,
                mountainInterval: true,
                force: false
            },
            parts: [
                {
                    name: "Велосипед",
                    componentPercents: {
                        speed: 50,
                        distance: 60,
                        race: 60,
                        interval: 60,
                        superDistance: 60,
                        mountainInterval: 60
                    }
                },
                {
                    name: "Біг",
                    componentPercents: {
                        speed: 50,
                        distance: 40,
                        race: 40,
                        interval: 40,
                        superDistance: 40,
                        mountainInterval: 40
                    }
                }
            ],
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 65,
                        mountainInterval: 0,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 10,
                        race: 0,
                        interval: 5,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 10,
                        race: 0,
                        interval: 5,
                        superDistance: 60,
                        mountainInterval: 10,
                        force: 15
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 10,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 10,
                        race: 5,
                        interval: 10,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 10
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 10,
                        interval: 15,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 10
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 15,
                        interval: 15,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 5
                    }
                }
            ]
        },
        {
            name: "Маунтинбайк (крос-кантрі)",
            showPartsFor: {
                speed: true,
                distance: true,
                race: true,
                interval: true,
                superDistance: true,
                mountainInterval: true,
                force: false
            },
            parts: [
                {
                    name: "Шосе",
                    componentPercents: {
                        speed: 60,
                        distance: 60
                    }
                },
                {
                    name: "Крос-кантрі",
                    componentPercents: {
                        speed: 40,
                        distance: 40
                    }
                },
                {
                    name: "Контрольні на шосейному",
                    componentPercents: {
                        race: 25
                    }
                },
                {
                    name: "Маунтинбайк",
                    componentPercents: {
                        race: 75
                    }
                },
                {
                    name: "Велосипед",
                    componentPercents: {
                        interval: 60,
                        superDistance: 60,
                        mountainInterval: 60
                    }
                },
                {
                    name: "Біг",
                    componentPercents: {
                        interval: 40,
                        superDistance: 40,
                        mountainInterval: 40
                    }
                }
            ],
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 5,
                        interval: 10,
                        superDistance: 45,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 10,
                        interval: 10,
                        superDistance: 45,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 10,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 15,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 5
                    }
                }
            ]
        },
        {
            name: "Шосейний велосипед (розділки, критеріуми, шосейні перегони)",
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 5,
                        interval: 10,
                        superDistance: 45,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 10,
                        interval: 10,
                        superDistance: 45,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 10,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 15,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 5
                    }
                }
            ]
        },
        {
            name: "Біг по шоссе на 5-15 км",
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 5,
                        interval: 10,
                        superDistance: 45,
                        mountainInterval: 5,
                        force: 15
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 5,
                        interval: 10,
                        superDistance: 45,
                        mountainInterval: 5,
                        force: 15
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 10,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 10
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 15,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 5
                    }
                }
            ]
        },
        {
            name: "Марафонський біг",
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 5,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 5,
                        force: 15
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 10,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 5,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 5,
                        force: 15
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 10,
                        interval: 15,
                        superDistance: 55,
                        mountainInterval: 0,
                        force: 5
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 15,
                        interval: 10,
                        superDistance: 55,
                        mountainInterval: 0,
                        force: 5
                    }
                }
            ]
        },
        {
            name: "Лижні перегони на  5-15 км (також ролики та гребля)",
            showPartsFor: {
                speed: true,
                distance: true,
                race: true,
                interval: true,
                superDistance: true,
                mountainInterval: true,
                force: false
            },
            parts: [
                {
                    name: "Класичний хід",
                    componentPercents: {
                        speed: 35,
                        distance: 35,
                        race: 50,
                        interval: 35,
                        superDistance: 35,
                        mountainInterval: 35,
                        force: 0
                    }
                },
                {
                    name: "Коньковий хід",
                    componentPercents: {
                        speed: 35,
                        distance: 35,
                        race: 50,
                        interval: 35,
                        superDistance: 35,
                        mountainInterval: 35,
                        force: 0
                    }
                },
                {
                    name: "Біг та інші види",
                    componentPercents: {
                        speed: 30,
                        distance: 30,
                        race: 0,
                        interval: 30,
                        superDistance: 30,
                        mountainInterval: 30,
                        force: 0
                    }
                }
            ],
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 5,
                        superDistance: 55,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 0,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 15
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 5,
                        interval: 10,
                        superDistance: 45,
                        mountainInterval: 10,
                        force: 15
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 10,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 5,
                        force: 10
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 15,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 10
                    }
                }
            ]
        },
        {
            name: "Лижні перегони на 15-50 км і більше",
            showPartsFor: {
                speed: true,
                distance: true,
                race: true,
                interval: true,
                superDistance: true,
                mountainInterval: true,
                force: false
            },
            parts: [
                {
                    name: "Класичний хід",
                    componentPercents: {
                        speed: 35,
                        distance: 35,
                        race: 50,
                        interval: 35,
                        superDistance: 35,
                        mountainInterval: 35,
                        force: 0
                    }
                },
                {
                    name: "Коньковий хід",
                    componentPercents: {
                        speed: 35,
                        distance: 35,
                        race: 50,
                        interval: 35,
                        superDistance: 35,
                        mountainInterval: 35,
                        force: 0
                    }
                },
                {
                    name: "Біг та інші види",
                    componentPercents: {
                        speed: 30,
                        distance: 30,
                        race: 0,
                        interval: 30,
                        superDistance: 30,
                        mountainInterval: 30,
                        force: 0
                    }
                }
            ],
            stages: [
                {
                    name: "Базовий",
                    percentOfSummary: 7.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 0,
                        superDistance: 60,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Базовий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 0,
                        distance: 15,
                        race: 0,
                        interval: 5,
                        superDistance: 55,
                        mountainInterval: 5,
                        force: 20
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 9.5,
                    weeks: [
                        {
                            periodization: 23
                        },
                        {
                            periodization: 26
                        },
                        {
                            periodization: 29
                        },
                        {
                            periodization: 22
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 0,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 15
                    }
                },
                {
                    name: "Інтенсивний",
                    percentOfSummary: 10,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 5,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 10,
                        force: 10
                    }
                },
                {
                    name: "Піковий",
                    percentOfSummary: 8.5,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 15,
                        race: 10,
                        interval: 5,
                        superDistance: 50,
                        mountainInterval: 5,
                        force: 10
                    }
                },
                {
                    name: "Змагання",
                    percentOfSummary: 8,
                    weeks: [
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        },
                        {
                            periodization: 20
                        },
                        {
                            periodization: 30
                        }
                    ],
                    componentPercents: {
                        speed: 5,
                        distance: 10,
                        race: 15,
                        interval: 10,
                        superDistance: 50,
                        mountainInterval: 0,
                        force: 10
                    }
                }
            ]
        }
    ];

    $scope.sport = $scope.sports[0];
});
