pipeline {
  agent any
  environment {
    MAVEN_HOME = '/path/to/maven'  // Assuming Maven is installed outside Jenkins
    EVERESTBE_DIR = 'c:\\Everestbe' // Example environment variable
  }
  stages {
    stage('Build React') {
      steps {
        dir('Front-End') {
          git credentialsId: 'githubLogin',
          url: 'https://github.com/AndykingSkywalker/MonorepoALA.git',
          branch: 'main'

          sh 'npm install'  // Use 'sh' for better compatibility on different OSes
          sh 'npm pack'
        }
      }
    }
    stage('Build Maven'){
      steps {
        dir('Back-End') {
          git credentialsId: 'githubLogin',
          url: 'https://github.com/AndykingSkywalker/MonorepoALA.git',
          branch: 'main'

          // Assuming using Maven plugin (adjust syntax if needed)
          sh 'mvn clean package'
        }
      }
    }
    stage('Selenium Test') {
      steps {
        dir('Front-End') {
          sh 'npm run build'
          sh "xcopy /y /i build ${env.EVERESTBE_DIR}" // Use environment variable
        }
        sh "mvn clean install"  // Assuming Maven plugin
        sh "java -cp target/Everestbe:target/dependencies/* (if using external dependencies) 0.0.1-SNAPSHOT.jar com.lbg.everestbe.selenium"  // Specify classpath explicitly
      }
    }
  }
}
