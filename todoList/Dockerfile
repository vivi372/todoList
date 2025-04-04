# JDK 환경에서 빌드
FROM eclipse-temurin:17 AS build
WORKDIR /app
COPY . .
# 실행 권한 부여
RUN chmod +x mvn
RUN mvn clean package -DskipTests

# 실행 환경 설정
FROM eclipse-temurin:17
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
