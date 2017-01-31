var app = angular.module("myportfolio", ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')

  $stateProvider
    .state('home', {
        url: '/home',
        controller: 'homeController as home',
        templateUrl: '/partials/home.html'
    })
    .state('about', {
        url: '/about',
        controller: 'aboutController as about',
        templateUrl: '/partials/about.html'
    })
    .state('projects', {
        url: '/projects',
        controller: 'projectsController as projects',
        templateUrl: '/partials/projects.html'
    })
    .state('contact', {
        url: '/contact',
        controller: 'contactController as contact',
        templateUrl: '/partials/contact.html'
    })
  })
