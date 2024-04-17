pipeline {
    agent any
    stages {
        stage('Build React') {
            steps {
                dir('Front-End') {
                    git url: 'https://github.com/AndykingSkywalker/MonorepoALA'

                    bat "npm install"

                    bat "npm pack"
                }
            }
        }
        stage('Build Maven'){
            steps {
                dir('Back-End') {
                    git url 'https://github.com/AndykingSkywalker/MonorepoALA',
                    branch: 'main'

                    withMaven(maven: 'M3') {
                        bat "mvn clean package"
                    }
                }
            }
        }
        stage('Selenium Test') {
            steps {
                dir('Front-End') {
                    bat 'npm run build'
                    bat 'xcopy /y /i build c:\\Everestbe'
                }
                withMaven(maven: 'M3') {
                    bat 'mvn clean install'
                }
                bat 'java -cp target/Everestbe 0.0.1-SNAPSHOT.jar com.lbg.everestbe.selenium'
            }
        }
    }
}