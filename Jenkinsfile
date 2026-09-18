pipeline {

    agent any

    environment {
        APP_NAME = "jenkins-devops-project"
        APP_PORT = "3000"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'node --check app.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                sh 'npm test'
            }
        }

        stage('Package') {
            steps {
                echo 'Packaging application...'
                sh 'tar -czf application.tar.gz app.js package.json Dockerfile tests'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'

                sh '''
                    docker build \
                    -t ${APP_NAME}:${BUILD_NUMBER} .
                '''
            }
        }
    }

    post {

        success {
            echo '================================'
            echo 'PIPELINE SUCCESSFUL'
            echo '================================'
        }

        failure {
            echo '================================'
            echo 'PIPELINE FAILED'
            echo '================================'
        }
    }
}
