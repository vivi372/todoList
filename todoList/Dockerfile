# 빌드 환경
FROM eclipse-temurin:17 AS build
WORKDIR /app

# 먼저 mvnw와 .mvn 복사하고 실행 권한 부여
COPY mvnw .
COPY .mvn .mvn
RUN chmod +x mvnw

# 이후 나머지 전체 복사
COPY . .

# 패키지 빌드
RUN ./mvnw clean package -DskipTests

# 실행 환경
FROM eclipse-temurin:17
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
