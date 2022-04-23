# Отчет по проекту "Система бронирования"
Проверяющий: Никита Боярский

## Сделано:
Верстка:
- форма входа
- основная страница
- список устройств
- описание устройства
- форма бронирования устройства
- форма добавления своего устройства
- страница с профилем пользователя

Код:
- начал писать некоторые сервисы
- начал реализовывать гвард
- роутинг
- разделение на модули
- разделение на компоненты

# 1. Цель проекта

Цель проекта - разработать систему бронирования устройств для разработчиков. Разработчик может бронировать какие-либо устройства на определенный промежуток времени, отменять бронь. Также предусматривается возможность выставлять свои устройства.

# 2. Описание системы

Функциональность определена следующая:

1. Вход
2. Страница со списком устройств
3. Страница с описанием устройства
4. Форма бронирования
5. Формы выставления своих устройств
6. Страница забронированных пользователем устройств

# 3. Функциональность
## 3.1. Вход

  Вход будет воспроизводиться через корпоративные учетки - простая форма с логином и паролем.

## 3.2. Список устройств

  Основная страница системы, имеющая список всех доступных и недоступных устройств. С нее можно перейти в нужное устройство и посмотреть описание.

## 3.3. Описание устройств

  В странице с описанием устройств будет отображаться название, год выпуска, краткое описание. Также будут указаны дни и время в которое устройство занято

## 3.4. Бронирование

  Из описания устройства можно перейти в бронирование устройства. На этой странице можно оставить комментарий(например, время пользования).

## 3.5. Выставление устройства

  Выставлять устройства смогут только определенные люди со специальными аккаунтами.

## 3.6. Забронированные устройства

  На странице с забронированными устройствами будет показан календарь, который показывает какое устройство когда занято, есть возможность преждевременно снять бронь.

# 4. Предполагаемый стек технологий

## Фронтенд: 
  - Angular
  - Typescript
## Бэкенд:
  - ASP.NET C#

