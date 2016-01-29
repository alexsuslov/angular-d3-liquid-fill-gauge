angular.module('app', ['angularD3LiquidFillGauge'])
  .controller('mainController', ["$scope",
    function($scope) {

    }
  ])
  .controller('testCtrl', ["$scope",
    function($scope) {


      //$scope.gauge1 = loadLiquidFillGauge("fillgauge1", 55);
      //$scope.config1 = liquidFillGaugeDefaultSettings();

      $scope.init = function(percentage) {


        $scope.completionPercent = percentage;
        /*$scope.config1.circleColor = "#FF7777";
		$scope.config1.textColor = "#FF4444";
		$scope.config1.waveTextColor = "#FFAAAA";
		$scope.config1.waveColor = "#FFDDDD";
		config1.circleThickness = 0.2;
		config1.textVertPosition = 0.2;
		config1.waveAnimateTime = 1000;*/



      };
      /*$scope.NewValue = function(percentage){
	return percentage;
}*/


    }
  ]);