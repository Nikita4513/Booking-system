# Что требуется для локального запуска
### 1. .NET 5.0
Для корректного подключения API к базе данных MS SQL нужно изменить строку подключения в *appsettings.json*
```
"ConnectionStrings": {
    "DefaultConnection": ВашаСтрокаПодключения"
  },
```
### 2. MS SQL Server
Пример строки подключения: 
``` 
Server=localhost;Database=master;Trusted_Connection=True; 
```
