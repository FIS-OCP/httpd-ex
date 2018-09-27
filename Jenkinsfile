node('') {
          stage 'build'
<<<<<<< HEAD
          openshiftBuild(namespace: 'ocp-http-prod', buildConfig: 'httpd-canary', showBuildLogs: 'true')
          stage 'deploy'
          openshiftDeploy(namespace: 'ocp-http-prod', deploymentConfig: 'httpd-canary')
=======
          openshiftBuild(namespace: 'ocp-http-prod', buildConfig: 'httpd-ex', showBuildLogs: 'true')
          stage 'deploy'
          openshiftDeploy(namespace: 'ocp-http-prod', deploymentConfig: 'httpd-ex')
>>>>>>> 4cbe476dc0bd0847fdf727ee16ad83ee8bc49230
        }
