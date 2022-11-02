FROM openjdk:8 
VOLUME /tmp 
ADD dbblog.jar /osb.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/osb.jar"]