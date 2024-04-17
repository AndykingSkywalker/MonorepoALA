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

                    bat "npm install"

                    bat "npm pack"
                }
            }
        }
        stage('Build Maven'){
            steps {
                dir('Back-End') {
                    git credentialsId: 'githubLogin',
                    url: 'https://github.com/AndykingSkywalker/MonorepoALA.git',
                        branch: 'main'

            
                        bat "mvn package -Dmaven.test.skip"
                    
                }
            }
        }
        // stage('Selenium Test') {
        //     steps {
        //         dir('Front-End') {
        //             bat 'npm run build'
        //             bat 'xcopy /y /i build c:\\Everestbe'
        //         }
               
        //             bat 'mvn clean install'
                
        //         bat 'java -cp target/Everestbe 0.0.1-SNAPSHOT.jar com.lbg.everestbe.selenium'
        //     }
        // }
    }
}

