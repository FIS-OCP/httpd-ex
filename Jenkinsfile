node('') {
          stage 'build'
          openshiftBuild(namespace: 'ocp-http-prod', buildConfig: 'httpd-ex', showBuildLogs: 'true')
          stage 'deploy'
          openshiftDeploy(namespace: 'ocp-http-prod', deploymentConfig: 'httpd-ex')
        }
