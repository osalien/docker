FROM java:8 
VOLUME /tmp 
ADD dbblog.jar /kdblog.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/kdblog.jar"]