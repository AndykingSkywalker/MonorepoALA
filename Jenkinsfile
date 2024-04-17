pipeline {
    agent any
    stages {
        stage('Build React') {
            steps {
                dir('Front-End') {
                    git credentialsId: 'githubLogin',
                    url: 'https://github.com/AndykingSkywalker/MonorepoALA.git',
                        branch: 'main'

                    sh "npm install"

                    sh "npm pack"
                }
            }
        }
        stage('Build Maven'){
            steps {
                dir('Back-End') {
                    git credentialsId: 'githubLogin',
                    url: 'https://github.com/AndykingSkywalker/MonorepoALA.git',
                        branch: 'main'

                    withMaven(maven: 'M3') {
                        sh "mvn clean package"
                    }
                }
            }
        }
        stage('Selenium Test') {
            steps {
                dir('Front-End') {
                    sh 'npm run build'
                    sh 'xcopy /y /i build c:\\Everestbe'
                }
                withMaven(maven: 'M3') {
                    sh 'mvn clean install'
                }
                sh 'java -cp target/Everestbe 0.0.1-SNAPSHOT.jar com.lbg.everestbe.selenium'
            }
        }
    }
}
