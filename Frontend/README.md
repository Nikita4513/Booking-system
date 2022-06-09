### На данных версиях клиент точно работает
1. Angular CLI: 13.3.1
2. Node: 14.18.1
3. Package Manager: npm 6.14.15 

### Для локального запуска
```
ng serve --ssl --o
```

### Ошибка ERROR Error: Uncaught (in promise): ChunkLoadError: Loading chunk в Google Chrome
##### 1 вариант решения
- Нужно создать ярлык браузера на рабочем столе
- Открыть свойства
- Перейти в ярлык
- В поле объект в конце через пробел дописать ```--ignore-certificate-errors```
- После открыть браузер по этому ярлыку и перейти в приложение
##### 2 вариант решения
Разрешить в браузере недопустимые сертификаты загруженные с локалхоста:
- В браузере перейти по адресу **chrome://flags/#allow-insecure-localhost**
- В поле **Allow invalid certificates for resources loaded from localhost** установить значение **enable**



