angular.module('aboutPageExtension', ['openshiftConsole']).config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'https://raw.githubusercontent.com/FIS-OCP/httpd-ex/master/about.html',
        controller: 'AboutController'
      });
    }
  );

hawtioPluginLoader.addModule('aboutPageExtension');
