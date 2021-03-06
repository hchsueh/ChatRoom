app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to landing
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('rooms', {
      url: "/",
      templateUrl: "/javascripts/angular/views/rooms.html"
    })
    .state('draw', {
      url: "/:roomName",
      templateUrl: "/javascripts/angular/views/draw.html"
    })
});

// app.run(function ($rootScope, $state, $stateParams) {
//   $rootScope.$state = $state;
//   $rootScope.$stateParams = $stateParams;
// });
