node('') {
          stage 'build'
          openshiftBuild(namespace: 'ocp-http-prod', buildConfig: 'httpd-canary', showBuildLogs: 'true')
          stage 'deploy'
          openshiftDeploy(namespace: 'ocp-http-prod', deploymentConfig: 'httpd-canary')
        }
