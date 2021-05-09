pipeline {
  agent any

  tools {nodejs "node14"}

  stages {

    stage('Cloning Git') {
      steps {
        git 'https://github.com/keserukristof/js-webinar'
      }
    }

    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
         bat 'npm run test:module-1'
      }
    }
  }
}