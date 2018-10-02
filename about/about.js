angular.module('aboutPageExtension', ['openshiftConsole']).config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'https://ocp-http.paas.xplat.fis.vn/about.html',
        controller: 'AboutController'
      });
    }
  );

hawtioPluginLoader.addModule('aboutPageExtension');
