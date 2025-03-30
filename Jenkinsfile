pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "venivivi/todolist_dockerhub"
        DOCKER_TAG = "latest"
        DOCKER_CREDENTIALS_ID = "todoList_dockerHub"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/vivi372/todoList.git/'
            }
        }

        stage('Build React App') {
            steps {
                dir('todolist-react') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Spring Boot App') {
            steps {
                dir('todoList') {
                    sh './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh """
                    docker build -t $DOCKER_IMAGE:$DOCKER_TAG .
                    """
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        sh "docker push $DOCKER_IMAGE:$DOCKER_TAG"
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                sshagent(['Server_SSH_Access']) {
                    sh """
                    ssh ubuntu@3.37.124.207 << EOF
                    cd /home/ubuntu/todoList-project
                    docker-compose pull todoList todolist-react
                    docker-compose down todoList todolist-react
                    docker-compose up -d todoList todolist-react
                    EOF
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
    }
}
