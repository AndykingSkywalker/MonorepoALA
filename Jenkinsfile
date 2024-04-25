pipeline {
 agent any

  environment {
    MAVEN_HOME = '/path/to/maven'  // Assuming Maven is installed outside Jenkins
    EVERESTBE_DIR = 'c:\\Everestbe' // Example environment variable
  }

  stages {
    // Stage 1: Checkout Code
    stage('Checkout Code') {
      steps {
        git credentialsId: 'githubLogin',
          url: 'https://github.com/AndykingSkywalker/MonorepoALA.git',
          branch: 'main'
      }
    }
    
    // Stage 2: Build Docker Image (Front-End)
    stage('Build Docker Image (Front-End)') {
      steps {
        bat 'docker build -t front-end-image ./Front-End' // Build image for Front-End
      }
    }

    // stage 3: run selenium tests
       stage('Run Selenium Tests'){
      steps {
        dir('Back-End') {
          git credentialsId: 'githubLogin',
            url: 'https://github.com/AndykingSkywalker/MonorepoALA.git',
            branch: 'main'

          bat 'mvn test'
        }
      }
    }

    // Stage 4: Build Maven (Back-End) - No Changes
    stage('Build Maven'){
      steps {
        dir('Back-End') {
          git credentialsId: 'githubLogin',
            url: 'https://github.com/AndykingSkywalker/MonorepoALA.git',
            branch: 'main'

          bat 'mvn package -Dmaven.test.skip'
        }
      }
    }
  // stage 5: build docker image for back-end
    stage('Build Docker Image (Back-End)') {
      steps {
        bat 'dir'
        bat 'docker build -t back-end-image ./Back-End' // Build image for Front-End
      }
    }
  }
// stage 6: archive artifacts
  post {
    always {
      archiveArtifacts artifacts: 'Front-End/*.tgz, Back-End/*.jar'
    }
  }
}
