### steps to follow when making changes in mysql client

```mysql
<!-- to check is user exist or not -->
SELECT authentication_string, plugin FROM mysql.user WHERE User = 'root';
<!-- to set user and password as we required -->
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
<!-- rename your_password with password you are using in your database -->
FLUSH PRIVILEGES;
<!-- to save changes -->
```


