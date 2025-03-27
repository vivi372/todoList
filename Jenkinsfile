pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'TODOLIST' // Docker Hub 사용자 이름으로 변경
        SPRING_BOOT_APP_NAME = 'TODOLIST_BACK' // Spring Boot 앱 이름
        REACT_APP_NAME = 'TODOLIST_FRONT' // React 앱 이름
        IMAGE_TAG = "${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                git scm: gitSCM(branches: [[name: env.BRANCH_NAME]], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[credentialsId: 'your-git-credentials-id', url: 'your-git-repository-url']]), poll: false
            }
        }
        stage('Build Backend (Spring Boot)') {
            steps {
                script {
                    // Spring Boot 프로젝트 디렉토리로 이동 (필요한 경우)
                    sh 'cd backend-directory'
                    sh './mvnw clean package -DskipTests' // Maven 사용 시
                    // sh './gradlew clean build -x test'  // Gradle 사용 시
                }
            }
        }
        stage('Build Frontend (React)') {
            agent { node { label 'docker' } } // NodeJS 환경을 위한 에이전트 (필요한 경우)
            steps {
                script {
                    // React 프로젝트 디렉토리로 이동 (필요한 경우)
                    sh 'cd frontend-directory'
                    sh 'npm install'
                    sh 'npm run build' // 또는 yarn build
                }
            }
        }
        stage('Docker Build and Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    // Spring Boot 백엔드 Docker 이미지 빌드 및 푸시
                    sh "docker build -f backend-directory/Dockerfile -t ${DOCKER_REGISTRY}/${SPRING_BOOT_APP_NAME}:${IMAGE_TAG}-backend backend-directory"
                    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} docker.io"
                    sh "docker push ${DOCKER_REGISTRY}/${SPRING_BOOT_APP_NAME}:${IMAGE_TAG}-backend"

                    // React 프론트엔드 Docker 이미지 빌드 및 푸시 (별도 이미지인 경우)
                    sh "docker build -f frontend-directory/Dockerfile -t ${DOCKER_REGISTRY}/${REACT_APP_NAME}:${IMAGE_TAG}-frontend frontend-directory"
                    sh "docker push ${DOCKER_REGISTRY}/${REACT_APP_NAME}:${IMAGE_TAG}-frontend"

                    // 또는 Docker Compose 파일 빌드 및 푸시 (하나의 이미지에 둘 다 포함하거나 여러 서비스 정의)
                    sh "docker build -f docker-compose.yml -t ${DOCKER_REGISTRY}/${SPRING_BOOT_APP_NAME}-${REACT_APP_NAME}:${IMAGE_TAG}-combined ."
                    sh "docker push ${DOCKER_REGISTRY}/${SPRING_BOOT_APP_NAME}-${REACT_APP_NAME}:${IMAGE_TAG}-combined"
                }
            }
        }
        stage('Deploy') {
            steps {
                // 배포 스크립트 (예: SSH를 통해 서버에 접속하여 docker-compose pull 및 up)
                echo "Deploying application..."
                // 실제 배포 로직은 환경에 따라 다릅니다.
                // 예시:
                // ssh -o StrictHostKeyChecking=no -i 'your-private-key' user@your-server '
                //   docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} docker.io &&
                //   docker pull ${DOCKER_REGISTRY}/${SPRING_BOOT_APP_NAME}-${REACT_APP_NAME}:${IMAGE_TAG}-combined &&
                //   docker-compose -f /path/to/your/docker-compose.yml up -d --force-recreate
                // '
            }
        }
    }
}
