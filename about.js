angular.module('aboutPageExtension', ['openshiftConsole']).config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'https://10.14.171.2/about.html',
        controller: 'AboutController'
      });
    }
  );

hawtioPluginLoader.addModule('aboutPageExtension');
