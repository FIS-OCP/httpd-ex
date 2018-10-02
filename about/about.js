angular.module('aboutPageExtension', ['openshiftConsole']).config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'https://github.com/FIS-OCP/httpd-ex/blob/master/about.html',
        controller: 'AboutController'
      });
    }
  );

hawtioPluginLoader.addModule('aboutPageExtension');
