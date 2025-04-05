pipeline {
    agent any

    environment {
        CI = 'false'
        DOCKER_IMAGE_REACT = "venivivi/todolist-react"
        DOCKER_IMAGE_BACKEND = "venivivi/todolist"
        DOCKER_TAG = "latest"
        DOCKER_CREDENTIALS_ID = "docker-hub-credentials"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/vivi372/todoList.git'
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
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build React Docker Image') {
            steps {
                script {
                    sh """
                    docker build -t $DOCKER_IMAGE_REACT:$DOCKER_TAG -f todolist-react/Dockerfile todolist-react
                    """
                }
            }
        }

        stage('Build Spring Boot Docker Image') {
            steps {
                script {
                    sh """
                    docker build -t $DOCKER_IMAGE_BACKEND:$DOCKER_TAG -f todoList/Dockerfile todoList
                    """
                }
            }
        }

        stage('Push React to Docker Hub') {
            steps {
                 script {
                    echo '🏗️ 시작: React 이미지 Docker Hub에 푸시 준비 중...'
        
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        echo '🔐 Docker Hub 로그인 성공'
                        docker.image('venivivi/todolist:latest').push()
                        echo '✅ React 이미지 푸시 성공'
                    }
                }
            }
        }

        stage('Push Spring Boot to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        sh "docker push $DOCKER_IMAGE_BACKEND:$DOCKER_TAG"
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                sshagent(['Server_SSH_Access']) {
                    sh """
                    ssh ubuntu@13.125.225.120 << EOF
                    cd /home/todolist/todolist-project
                    docker-compose pull todolist todolist-react
                    docker-compose down todolist todolist-react
                    docker-compose up -d todolist todolist-react
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
