function MainController($scope) {
  $scope.name = 'ROBERT';
}

angular
  .module('app')
  .controller('MainController', MainController);
