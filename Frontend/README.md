### На данных версиях клиент точно работает
1. Angular CLI: 13.3.1
2. Node: 14.18.1
3. Package Manager: npm 6.14.15 

### Для локального запуска
```
ng serve --ssl --o
```

### Ошибка ERROR Error: Uncaught (in promise): ChunkLoadError: Loading chunk в Google Chrome
- Нужно создать ярлык браузера на рабочем столе
- Открыть свойства
- Перейти в ярлык
- В поле объект в конце через пробел дописать ```--ignore-certificate-errors```
- После открыть браузер по этому ярлыку и перейти в приложение
