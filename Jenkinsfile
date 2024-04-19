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

    // Stage 3: Build Maven (Back-End) - No Changes
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

    stage('Build Docker Image (Back-End)') {
      steps {
        bat 'dir'
        bat 'docker build -t back-end-image ./Back-End' // Build image for Front-End
      }
    }


    // Stage 4 (Optional): Run Unit Tests (Front-End)
    // Uncomment and adjust if needed
    /*
    stage('Run Front-End Tests') {
      steps {
        sh 'docker run front-end-image npm test' // Run tests within the container
      }
    }
    */

    // Stage 5 (Optional): Run Selenium Tests (if applicable)
    // Uncomment and adjust if needed
    /*
    stage('Selenium Test') {
      steps {
        // ... (existing steps to copy build artifacts to Everestbe directory)

        bat 'mvn clean install'

        bat 'java -cp target/Everestbe 0.0.1-SNAPSHOT.jar com.lbg.everestbe.selenium'
      }
    }
    */
  }

  post {
    always {
      archiveArtifacts artifacts: 'Front-End/*.tgz, Back-End/*.jar'
    }
  }
}
