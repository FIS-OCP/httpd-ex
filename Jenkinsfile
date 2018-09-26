node('') {
          stage 'build'
          openshiftBuild(namespace: 'ocp-http-canary', buildConfig: 'httpd-ex', showBuildLogs: 'true')
          stage 'deploy'
          openshiftDeploy(namespace: 'ocp-http-canary', deploymentConfig: 'httpd-ex')
        }
