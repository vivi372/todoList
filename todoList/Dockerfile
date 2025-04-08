# 1단계: 의존성 캐시 레이어 분리
FROM eclipse-temurin:17 AS build

WORKDIR /app

# 종속성 설치를 위한 파일만 먼저 복사 (캐시 최적화 핵심!)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# 종속성 캐시 저장
RUN chmod +x ./mvnw && ./mvnw dependency:go-offline

# 전체 프로젝트 복사 후 빌드
COPY . .
RUN ./mvnw clean package -DskipTests

# 2단계: 실행 이미지
FROM eclipse-temurin:17
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
