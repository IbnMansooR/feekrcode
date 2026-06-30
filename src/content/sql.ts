import type { LessonContent } from "./types";

export const sqlLessons: LessonContent[] = [
  {
    "title": {
      "uz": "SELECT asoslari",
      "en": "SELECT basics",
      "ru": "Основы SELECT"
    },
    "intro": {
      "uz": "Ma'lumotlar bazasidan ma'lumot olishning eng asosiy yo'li — `SELECT`.",
      "en": "The most fundamental way to get data out of a database is `SELECT`.",
      "ru": "Самый базовый способ получить данные из базы — это `SELECT`."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`SELECT` — bu jadvaldan ma'lumot *o'qib oladigan* buyruq. `SELECT ustun FROM jadval` shaklida yoziladi, `*` esa barcha ustunlarni bildiradi.",
          "en": "`SELECT` is the command that *reads* data from a table. It is written as `SELECT column FROM table`, where `*` means every column.",
          "ru": "`SELECT` — команда, которая *читает* данные из таблицы. Пишется как `SELECT column FROM table`, а `*` означает все столбцы."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ma'lumotni ko'rmasdan turib u bilan hech narsa qila olmaysiz. `SELECT` — bazadagi ma'lumotni ekranga chiqaradigan birinchi va eng muhim qadam.",
          "en": "You can't do anything with data you can't see. `SELECT` is the first and most important step to bring the data in your database onto the screen.",
          "ru": "Нельзя работать с данными, которых не видишь. `SELECT` — первый и важнейший шаг, чтобы вывести данные базы на экран."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Bitta ustunni, bir nechta ustunni yoki `*` orqali hammasini chiqaradi. `AS` yordamida ustunga vaqtinchalik nom (taxallus) ham bera oladi.",
          "en": "It can return one column, several columns, or all of them with `*`. With `AS` it can even give a column a temporary name (an alias).",
          "ru": "Может вернуть один столбец, несколько столбцов или все через `*`. С помощью `AS` можно дать столбцу временное имя (псевдоним)."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchilar ro'yxati, mahsulotlar katalogi, buyurtmalar tarixi — har qanday ilovada ma'lumot ko'rsatilganda. Deyarli har bir so'rov `SELECT` bilan boshlanadi.",
          "en": "User lists, product catalogs, order history — anywhere an app displays data. Almost every query starts with `SELECT`.",
          "ru": "Списки пользователей, каталоги товаров, история заказов — везде, где приложение показывает данные. Почти любой запрос начинается с `SELECT`."
        }
      }
    ],
    "task": {
      "uz": "`users` jadvalidan `name` va `email` ustunlarini tanlang.",
      "en": "Select the `name` and `email` columns from the `users` table.",
      "ru": "Выберите столбцы `name` и `email` из таблицы `users`."
    },
    "hint": {
      "uz": "Ustunlarni vergul bilan ajrating: `SELECT a, b FROM ...`",
      "en": "Separate columns with a comma: `SELECT a, b FROM ...`",
      "ru": "Разделяйте столбцы запятой: `SELECT a, b FROM ...`"
    },
    "starterCode": "-- TODO: users jadvalidan name va email ustunlarini tanlang\nSELECT  FROM users;",
    "solution": "SELECT name, email FROM users;",
    "check": {
      "outputContains": ["Ali"],
      "sourceContains": ["select", "name", "email", "users"]
    },
    "xp": 20,
    "monacoLang": "sql",
    "preview": "none"
  },
  {
    "title": {
      "uz": "WHERE bilan filtrlash",
      "en": "Filtering with WHERE",
      "ru": "Фильтрация с WHERE"
    },
    "intro": {
      "uz": "Ko'pincha sizga butun jadval emas, faqat *kerakli* qatorlar lozim bo'ladi.",
      "en": "Often you don't want the whole table — only the *rows you need*.",
      "ru": "Часто вам нужна не вся таблица, а только *нужные* строки."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`WHERE` — bu shart qo'yib, qatorlarni *filtrlaydigan* qism. Faqat shartga mos keladigan qatorlar qaytariladi, masalan `WHERE age > 18`.",
          "en": "`WHERE` is the part that *filters* rows by a condition. Only rows that match the condition are returned, for example `WHERE age > 18`.",
          "ru": "`WHERE` — часть, которая *фильтрует* строки по условию. Возвращаются только строки, подходящие под условие, например `WHERE age > 18`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Jadvalda millionlab qator bo'lishi mumkin — hammasini olib o'tirish ma'nosiz va sekin. `WHERE` aynan kerakli ma'lumotni ajratib beradi.",
          "en": "A table may hold millions of rows — pulling them all is pointless and slow. `WHERE` isolates exactly the data you need.",
          "ru": "В таблице могут быть миллионы строк — тянуть все бессмысленно и медленно. `WHERE` выделяет именно нужные данные."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`=`, `>`, `<`, `!=` taqqoslashlarini, `AND`/`OR` mantiqiy bog'lovchilarini va `LIKE` orqali matn qidiruvini qo'llab-quvvatlaydi. `IN` bilan ro'yxatdan tekshiradi.",
          "en": "It supports comparisons like `=`, `>`, `<`, `!=`, logical `AND`/`OR`, and text search with `LIKE`. With `IN` it checks against a list.",
          "ru": "Поддерживает сравнения `=`, `>`, `<`, `!=`, логические `AND`/`OR` и поиск по тексту через `LIKE`. С `IN` проверяет по списку."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Faol foydalanuvchilarni topish, ma'lum shahardagi mijozlarni ajratish, narxi 100 dan past mahsulotlarni ko'rsatish. Qidiruv va filtr tugmalari ortida ko'pincha `WHERE` turadi.",
          "en": "Finding active users, isolating customers in a city, showing products under 100. Behind most search and filter buttons sits a `WHERE`.",
          "ru": "Поиск активных пользователей, выбор клиентов из города, показ товаров дешевле 100. За большинством кнопок поиска и фильтра стоит `WHERE`."
        }
      }
    ],
    "task": {
      "uz": "`users` jadvalidan yoshi 18 dan katta foydalanuvchilarni tanlang.",
      "en": "Select users from the `users` table whose age is greater than 18.",
      "ru": "Выберите из таблицы `users` пользователей старше 18 лет."
    },
    "hint": {
      "uz": "`WHERE` ustun va qiymat o'rtasiga shart belgisini qo'ying: `WHERE age > 18`",
      "en": "Put a comparison between the column and the value: `WHERE age > 18`",
      "ru": "Поставьте знак сравнения между столбцом и значением: `WHERE age > 18`"
    },
    "starterCode": "SELECT name, age FROM users\n-- TODO: yoshi 18 dan katta bo'lganlarni filtrlash uchun WHERE shartini qo'shing\n;",
    "solution": "SELECT name, age FROM users\nWHERE age > 18;",
    "check": {
      "outputContains": ["Ali", "Dilnoza"],
      "sourceContains": ["select", "where", "age", "users"]
    },
    "xp": 25,
    "monacoLang": "sql",
    "preview": "none"
  },
  {
    "title": {
      "uz": "ORDER BY va LIMIT",
      "en": "ORDER BY & LIMIT",
      "ru": "ORDER BY и LIMIT"
    },
    "intro": {
      "uz": "Ma'lumotni tartiblang va kerakli miqdordagina ko'rsating.",
      "en": "Sort your data and show only as much as you need.",
      "ru": "Сортируйте данные и показывайте ровно столько, сколько нужно."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`ORDER BY` natijani biror ustun bo'yicha *tartiblaydi*: `ASC` — o'sish, `DESC` — kamayish tartibida. `LIMIT` esa qaytariladigan qatorlar *sonini* cheklaydi.",
          "en": "`ORDER BY` *sorts* the result by a column: `ASC` ascending, `DESC` descending. `LIMIT` then caps the *number* of rows returned.",
          "ru": "`ORDER BY` *сортирует* результат по столбцу: `ASC` по возрастанию, `DESC` по убыванию. `LIMIT` ограничивает *количество* возвращаемых строк."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Tartiblanmagan ma'lumot tartibsiz ko'rinadi va undan xulosa chiqarish qiyin. `LIMIT` esa sahifaga sig'masaydigan minglab qatorni ko'rsatib yubormaslikka yordam beradi.",
          "en": "Unsorted data looks chaotic and is hard to read. `LIMIT` keeps you from dumping thousands of rows that won't fit on a page.",
          "ru": "Неотсортированные данные выглядят хаотично и плохо читаются. `LIMIT` не даёт вывалить тысячи строк, не помещающихся на страницу."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Bir nechta ustun bo'yicha ketma-ket tartiblay oladi (`ORDER BY a, b`). `LIMIT` bilan `OFFSET` birgalikda sahifalashni (pagination) yaratadi, masalan `LIMIT 10 OFFSET 20`.",
          "en": "It can sort by several columns in turn (`ORDER BY a, b`). Combined with `OFFSET`, `LIMIT` builds pagination, e.g. `LIMIT 10 OFFSET 20`.",
          "ru": "Может сортировать по нескольким столбцам подряд (`ORDER BY a, b`). Вместе с `OFFSET` `LIMIT` создаёт постраничный вывод, напр. `LIMIT 10 OFFSET 20`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Eng yangi 10 ta yangilik, eng qimmat mahsulotlar, reyting jadvalining birinchi 3 o'rni. Deyarli har bir ro'yxat va \"top\" sahifa shu ikkisidan foydalanadi.",
          "en": "The latest 10 news items, the most expensive products, the top 3 of a leaderboard. Almost every list and \"top\" page uses these two.",
          "ru": "Последние 10 новостей, самые дорогие товары, топ-3 рейтинга. Почти каждый список и страница «топ» используют эти два."
        }
      }
    ],
    "task": {
      "uz": "`products` jadvalidan mahsulotlarni narxi bo'yicha kamayish tartibida tartiblang va faqat dastlabki 5 tasini ko'rsating.",
      "en": "From the `products` table, sort products by price in descending order and show only the first 5.",
      "ru": "Из таблицы `products` отсортируйте товары по цене по убыванию и покажите только первые 5."
    },
    "hint": {
      "uz": "Avval `ORDER BY price DESC`, keyin `LIMIT 5` yozing.",
      "en": "Write `ORDER BY price DESC` first, then `LIMIT 5`.",
      "ru": "Сначала `ORDER BY price DESC`, затем `LIMIT 5`."
    },
    "starterCode": "SELECT name, price FROM products\n-- TODO: narxi bo'yicha kamayish tartibida tartiblang (ORDER BY ... DESC) va LIMIT 5 qo'shing\n;",
    "solution": "SELECT name, price FROM products\nORDER BY price DESC\nLIMIT 5;",
    "check": {
      "outputContains": ["Guruch", "Non"],
      "sourceContains": ["order by", "price", "desc", "limit"]
    },
    "xp": 28,
    "monacoLang": "sql",
    "preview": "none"
  },
  {
    "title": {
      "uz": "INSERT — yangi qator qo'shish",
      "en": "INSERT — adding new rows",
      "ru": "INSERT — добавление строк"
    },
    "intro": {
      "uz": "Bazaga yangi ma'lumot kiritishning yo'li — `INSERT`.",
      "en": "The way to put new data into the database is `INSERT`.",
      "ru": "Способ добавить новые данные в базу — это `INSERT`."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`INSERT INTO` — jadvalga *yangi qator qo'shadigan* buyruq. Qaysi ustunlarga qaysi qiymatlar yozilishini `INSERT INTO jadval (ustunlar) VALUES (qiymatlar)` shaklida ko'rsatasiz.",
          "en": "`INSERT INTO` is the command that *adds a new row* to a table. You state which columns get which values as `INSERT INTO table (columns) VALUES (values)`.",
          "ru": "`INSERT INTO` — команда, которая *добавляет новую строку* в таблицу. Вы указываете, в какие столбцы какие значения, как `INSERT INTO table (columns) VALUES (values)`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ma'lumot bazasi bo'sh tug'iladi — kimdir unga ma'lumot qo'shishi kerak. Ro'yxatdan o'tish, mahsulot qo'shish, izoh qoldirish — barchasi `INSERT` orqali amalga oshadi.",
          "en": "A database is born empty — someone must add data to it. Signing up, adding a product, posting a comment — all happen through `INSERT`.",
          "ru": "База рождается пустой — кто-то должен внести в неё данные. Регистрация, добавление товара, комментарий — всё это через `INSERT`."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Bitta qator yoki bir nechta qatorni bir vaqtning o'zida qo'sha oladi (`VALUES (...), (...)`). Ko'rsatilmagan ustunlar ko'pincha standart qiymat yoki `NULL` oladi.",
          "en": "It can add a single row or several rows at once (`VALUES (...), (...)`). Columns you leave out usually take a default value or `NULL`.",
          "ru": "Может добавить одну строку или сразу несколько (`VALUES (...), (...)`). Пропущенные столбцы обычно получают значение по умолчанию или `NULL`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Yangi foydalanuvchi ro'yxatdan o'tganda, savatga mahsulot qo'shilganda, forma yuborilganda. Har bir \"Saqlash\" yoki \"Qo'shish\" tugmasi ortida ko'pincha `INSERT` bor.",
          "en": "When a new user signs up, an item is added to a cart, a form is submitted. Behind most \"Save\" or \"Add\" buttons there is an `INSERT`.",
          "ru": "Когда регистрируется пользователь, товар кладётся в корзину, отправляется форма. За большинством кнопок «Сохранить» или «Добавить» стоит `INSERT`."
        }
      }
    ],
    "task": {
      "uz": "`users` jadvaliga `name` 'Ali' va `age` 25 bo'lgan yangi foydalanuvchi qo'shing, so'ng natijani ko'rish uchun jadvalni tanlang.",
      "en": "Insert a new user into the `users` table with `name` 'Ali' and `age` 25, then select the table to see the result.",
      "ru": "Добавьте в таблицу `users` нового пользователя с `name` 'Ali' и `age` 25, затем выберите таблицу, чтобы увидеть результат."
    },
    "hint": {
      "uz": "Matnni bitta tirnoq ichida yozing: `VALUES ('Ali', 25)`",
      "en": "Wrap text in single quotes: `VALUES ('Ali', 25)`",
      "ru": "Текст пишите в одинарных кавычках: `VALUES ('Ali', 25)`"
    },
    "starterCode": "-- TODO: name 'Ali' va age 25 bo'lgan qatorni qo'shing\nINSERT INTO users (name, age)\nVALUES (/* ... */);\nSELECT name, age FROM users;",
    "solution": "INSERT INTO users (name, age)\nVALUES ('Ali', 25);\nSELECT name, age FROM users;",
    "check": {
      "outputContains": ["Ali", "25"],
      "sourceContains": ["insert into", "users", "values", "ali"]
    },
    "xp": 30,
    "monacoLang": "sql",
    "preview": "none"
  },
  {
    "title": {
      "uz": "UPDATE va DELETE",
      "en": "UPDATE & DELETE",
      "ru": "UPDATE и DELETE"
    },
    "intro": {
      "uz": "Mavjud ma'lumotni o'zgartirish va keraksizini o'chirishni o'rganamiz.",
      "en": "Let's learn to change existing data and remove what you no longer need.",
      "ru": "Научимся менять существующие данные и удалять ненужное."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`UPDATE` mavjud qatorlardagi qiymatlarni *o'zgartiradi* (`SET` orqali), `DELETE` esa qatorlarni *o'chiradi*. Ikkalasi ham odatda `WHERE` bilan qaysi qatorlarga ta'sir qilishini aniqlaydi.",
          "en": "`UPDATE` *changes* values in existing rows (via `SET`), while `DELETE` *removes* rows. Both usually use a `WHERE` to pick which rows they affect.",
          "ru": "`UPDATE` *меняет* значения в строках (через `SET`), а `DELETE` *удаляет* строки. Оба обычно используют `WHERE`, чтобы выбрать, какие строки затронуть."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ma'lumot vaqt o'tishi bilan o'zgaradi: foydalanuvchi parolini yangilaydi, buyurtma bekor qilinadi. `UPDATE` va `DELETE'siz baza muzlab qolgan rasmga aylanardi.",
          "en": "Data changes over time: a user updates a password, an order is cancelled. Without `UPDATE` and `DELETE` the database would be a frozen snapshot.",
          "ru": "Данные меняются со временем: пользователь обновляет пароль, заказ отменяют. Без `UPDATE` и `DELETE` база была бы застывшим снимком."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`UPDATE` bir vaqtda bir nechta ustunni o'zgartira oladi (`SET a = 1, b = 2`). `DELETE` shartga mos barcha qatorlarni o'chiradi. *Diqqat:* `WHERE'siz` ular butun jadvalga ta'sir qiladi!",
          "en": "`UPDATE` can change several columns at once (`SET a = 1, b = 2`). `DELETE` removes all rows matching a condition. *Careful:* without `WHERE` they affect the whole table!",
          "ru": "`UPDATE` может менять несколько столбцов сразу (`SET a = 1, b = 2`). `DELETE` удаляет все строки по условию. *Осторожно:* без `WHERE` они затрагивают всю таблицу!"
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Profilni tahrirlash, buyurtma holatini \"yetkazildi\"ga o'zgartirish, hisobni o'chirish. Har bir \"Tahrirlash\" va \"O'chirish\" tugmasi shularga tayanadi.",
          "en": "Editing a profile, changing an order status to \"delivered\", deleting an account. Every \"Edit\" and \"Delete\" button relies on these.",
          "ru": "Редактирование профиля, смена статуса заказа на «доставлен», удаление аккаунта. Каждая кнопка «Изменить» и «Удалить» опирается на них."
        }
      }
    ],
    "task": {
      "uz": "`users` jadvalida `id` 1 bo'lgan foydalanuvchining `age` qiymatini 30 ga o'zgartiring, so'ng natijani ko'rish uchun shu qatorni tanlang.",
      "en": "In the `users` table, update the `age` of the user whose `id` is 1 to 30, then select that row to see the result.",
      "ru": "В таблице `users` измените `age` пользователя с `id` 1 на 30, затем выберите эту строку, чтобы увидеть результат."
    },
    "hint": {
      "uz": "`UPDATE ... SET age = 30 WHERE id = 1;` — `WHERE'ni` unutmang!",
      "en": "`UPDATE ... SET age = 30 WHERE id = 1;` — don't forget the `WHERE`!",
      "ru": "`UPDATE ... SET age = 30 WHERE id = 1;` — не забудьте `WHERE`!"
    },
    "starterCode": "-- TODO: id = 1 bo'lgan foydalanuvchining age qiymatini 30 ga o'zgartiring\nUPDATE users\nSET age = /* ... */\nWHERE id = 1;\nSELECT name, age FROM users WHERE id = 1;",
    "solution": "UPDATE users\nSET age = 30\nWHERE id = 1;\nSELECT name, age FROM users WHERE id = 1;",
    "check": {
      "outputContains": ["Ali", "30"],
      "sourceContains": ["update", "set", "age", "where"]
    },
    "xp": 33,
    "monacoLang": "sql",
    "preview": "none"
  },
  {
    "title": {
      "uz": "JOIN — jadvallarni bog'lash",
      "en": "JOIN — connecting tables",
      "ru": "JOIN — связывание таблиц"
    },
    "intro": {
      "uz": "Haqiqiy ma'lumot bir nechta jadvalga bo'lingan — `JOIN` ularni birlashtiradi.",
      "en": "Real data is split across several tables — `JOIN` brings them together.",
      "ru": "Реальные данные разбиты по нескольким таблицам — `JOIN` их объединяет."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`JOIN` — ikki jadvalni umumiy ustun (kalit) bo'yicha *birlashtiradigan* amal. `ON` orqali qaysi ustunlar mos kelishini aytasiz, masalan `ON orders.user_id = users.id`.",
          "en": "`JOIN` is the operation that *combines* two tables on a shared column (a key). With `ON` you say which columns must match, e.g. `ON orders.user_id = users.id`.",
          "ru": "`JOIN` — операция, которая *объединяет* две таблицы по общему столбцу (ключу). Через `ON` вы указываете, какие столбцы совпадают, напр. `ON orders.user_id = users.id`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Yaxshi baza ma'lumotni takrorlamaslik uchun alohida jadvallarga bo'linadi. Foydalanuvchi nomini va uning buyurtmasini birga ko'rsatish uchun jadvallarni `JOIN` orqali ulashimiz kerak.",
          "en": "A good database splits data into separate tables to avoid repetition. To show a user's name alongside their order, we must connect the tables with a `JOIN`.",
          "ru": "Хорошая база разбивает данные на отдельные таблицы, чтобы не повторять их. Чтобы показать имя пользователя вместе с заказом, таблицы нужно связать через `JOIN`."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`INNER JOIN` faqat ikkala jadvalda ham mos keladigan qatorlarni qaytaradi, `LEFT JOIN` esa chap jadvaldagi hamma qatorni saqlaydi. Bir nechta jadvalni ketma-ket ulash ham mumkin.",
          "en": "`INNER JOIN` returns only rows that match in both tables, while `LEFT JOIN` keeps every row from the left table. You can chain several tables together.",
          "ru": "`INNER JOIN` возвращает только совпадающие в обеих таблицах строки, а `LEFT JOIN` сохраняет все строки левой таблицы. Можно соединять несколько таблиц подряд."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Buyurtma va uning egasini ko'rsatish, mahsulot va uning kategoriyasini birlashtirish, izohlar yonida muallif ismini chiqarish. Murakkab ilovalarda `JOIN'siz` deyarli hech narsa ishlamaydi.",
          "en": "Showing an order with its owner, joining a product with its category, putting an author's name next to comments. In complex apps almost nothing works without `JOIN`.",
          "ru": "Показ заказа с его владельцем, связка товара с категорией, имя автора рядом с комментарием. В сложных приложениях почти ничего не работает без `JOIN`."
        }
      }
    ],
    "task": {
      "uz": "`orders` va `users` jadvallarini `user_id` bo'yicha birlashtirib, har bir buyurtma yonida foydalanuvchi `name`ini va buyurtma `quantity`sini chiqaring.",
      "en": "Join the `orders` and `users` tables on `user_id` and show each order's `quantity` next to the user's `name`.",
      "ru": "Объедините таблицы `orders` и `users` по `user_id` и покажите рядом с каждым заказом `name` пользователя и `quantity`."
    },
    "hint": {
      "uz": "`FROM orders JOIN users ON orders.user_id = users.id` va `orders.quantity`ni tanlang.",
      "en": "`FROM orders JOIN users ON orders.user_id = users.id` and select `orders.quantity`.",
      "ru": "`FROM orders JOIN users ON orders.user_id = users.id` и выберите `orders.quantity`."
    },
    "starterCode": "SELECT users.name, orders.quantity\nFROM orders\n-- TODO: users jadvalini user_id bo'yicha JOIN qiling (ON orders.user_id = users.id)\n;",
    "solution": "SELECT users.name, orders.quantity\nFROM orders\nJOIN users ON orders.user_id = users.id;",
    "check": {
      "outputContains": ["Ali", "Vali"],
      "sourceContains": ["join", "on", "orders.user_id", "users.id", "quantity"]
    },
    "xp": 38,
    "monacoLang": "sql",
    "preview": "none"
  },
  {
    "title": {
      "uz": "GROUP BY — guruhlash",
      "en": "GROUP BY — grouping",
      "ru": "GROUP BY — группировка"
    },
    "intro": {
      "uz": "Ma'lumotni guruhlarga ajratib, har bir guruh bo'yicha hisob-kitob qiling.",
      "en": "Split data into groups and compute a result for each group.",
      "ru": "Разбейте данные на группы и посчитайте результат по каждой."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`GROUP BY` bir xil qiymatga ega qatorlarni *bitta guruhga* yig'adi. So'ng har bir guruh uchun `COUNT`, `SUM` kabi funksiyalar bilan yagona natija hisoblanadi.",
          "en": "`GROUP BY` collects rows that share a value into *one group*. Then a function like `COUNT` or `SUM` produces a single result per group.",
          "ru": "`GROUP BY` собирает строки с одинаковым значением в *одну группу*. Затем функция вроде `COUNT` или `SUM` даёт один результат на группу."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ko'pincha bizga alohida qatorlar emas, *umumlashtirilgan* manzara kerak: har bir shaharda nechta mijoz bor? `GROUP BY` aynan shunday savollarga javob beradi.",
          "en": "Often we need a *summarized* picture rather than individual rows: how many customers in each city? `GROUP BY` answers exactly these questions.",
          "ru": "Часто нужна *сводная* картина, а не отдельные строки: сколько клиентов в каждом городе? `GROUP BY` отвечает именно на такие вопросы."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Bir nechta ustun bo'yicha guruhlay oladi (`GROUP BY city, year`). `HAVING` yordamida guruhlarning o'zini filtrlaydi, masalan `HAVING COUNT(*) > 10`.",
          "en": "It can group by several columns (`GROUP BY city, year`). With `HAVING` it filters the groups themselves, e.g. `HAVING COUNT(*) > 10`.",
          "ru": "Может группировать по нескольким столбцам (`GROUP BY city, year`). С `HAVING` фильтрует сами группы, напр. `HAVING COUNT(*) > 10`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har bir kategoriyadagi mahsulotlar soni, har oydagi savdo, har bir foydalanuvchining buyurtmalari. Hisobotlar va dashboard'lar deyarli har doim `GROUP BY'ga` tayanadi.",
          "en": "Number of products per category, sales per month, orders per user. Reports and dashboards almost always rely on `GROUP BY`.",
          "ru": "Количество товаров в категории, продажи по месяцам, заказы по пользователям. Отчёты и дашборды почти всегда опираются на `GROUP BY`."
        }
      }
    ],
    "task": {
      "uz": "`orders` jadvalini `user_id` bo'yicha guruhlab, har bir foydalanuvchining buyurtmalari sonini sanang.",
      "en": "Group the `orders` table by `user_id` and count how many orders each user has.",
      "ru": "Сгруппируйте таблицу `orders` по `user_id` и посчитайте число заказов у каждого пользователя."
    },
    "hint": {
      "uz": "`SELECT user_id, COUNT(*) FROM orders GROUP BY user_id;`",
      "en": "`SELECT user_id, COUNT(*) FROM orders GROUP BY user_id;`",
      "ru": "`SELECT user_id, COUNT(*) FROM orders GROUP BY user_id;`"
    },
    "starterCode": "SELECT user_id, COUNT(*)\nFROM orders\n-- TODO: natijani user_id bo'yicha guruhlang (GROUP BY ...)\n;",
    "solution": "SELECT user_id, COUNT(*)\nFROM orders\nGROUP BY user_id;",
    "check": {
      "outputContains": ["2"],
      "sourceContains": ["group by", "count", "user_id", "orders"]
    },
    "xp": 42,
    "monacoLang": "sql",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Agregat funksiyalar",
      "en": "Aggregate functions",
      "ru": "Агрегатные функции"
    },
    "intro": {
      "uz": "Ko'plab qatorni bitta sonli javobga aylantiring: jami, o'rtacha, son.",
      "en": "Turn many rows into a single numeric answer: total, average, count.",
      "ru": "Превратите множество строк в одно число: сумму, среднее, количество."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Agregat funksiyalar — ko'plab qiymatlardan *bitta natija* chiqaradi. `COUNT` qatorlarni sanaydi, `SUM` ularni qo'shadi, `AVG` o'rtachasini topadi (`MIN`/`MAX` ham bor).",
          "en": "Aggregate functions produce *one result* from many values. `COUNT` counts rows, `SUM` adds them, `AVG` finds the average (there's also `MIN`/`MAX`).",
          "ru": "Агрегатные функции дают *один результат* из множества значений. `COUNT` считает строки, `SUM` складывает, `AVG` находит среднее (есть также `MIN`/`MAX`)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ming qatorli jadvaldan \"jami daromad qancha?\" yoki \"o'rtacha yosh nechchi?\" degan savolga qo'lda javob berib bo'lmaydi. Agregat funksiyalar buni bir soatda emas, bir lahzada hisoblaydi.",
          "en": "From a thousand-row table you can't answer \"what's the total revenue?\" or \"what's the average age?\" by hand. Aggregate functions compute it in an instant, not an hour.",
          "ru": "По таблице в тысячу строк нельзя вручную ответить «какова общая выручка?» или «средний возраст?». Агрегатные функции считают это мгновенно."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Butun jadval bo'yicha yagona son beradi yoki `GROUP BY` bilan birga har bir guruh uchun alohida hisoblaydi. `COUNT(DISTINCT ustun)` esa takrorlanmagan qiymatlarni sanaydi.",
          "en": "It returns a single number over the whole table, or, paired with `GROUP BY`, computes one per group. `COUNT(DISTINCT column)` counts unique values.",
          "ru": "Возвращает одно число по всей таблице или, вместе с `GROUP BY`, считает по каждой группе. `COUNT(DISTINCT column)` считает уникальные значения."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Umumiy savdo summasi, o'rtacha reyting, foydalanuvchilar soni, eng yuqori narx. Statistika, hisobot va analitika sahifalarining yuragi — aynan shu funksiyalar.",
          "en": "Total sales, average rating, number of users, highest price. These functions are the heart of statistics, reports and analytics pages.",
          "ru": "Общая сумма продаж, средний рейтинг, число пользователей, максимальная цена. Эти функции — сердце статистики, отчётов и аналитики."
        }
      }
    ],
    "task": {
      "uz": "`orders` jadvalidagi barcha buyurtmalarning `quantity` ustuni bo'yicha jami summasi va o'rtacha qiymatini hisoblang.",
      "en": "Compute the total and the average of the `quantity` column across all rows in the `orders` table.",
      "ru": "Посчитайте сумму и среднее значение столбца `quantity` по всем строкам таблицы `orders`."
    },
    "hint": {
      "uz": "Bitta so'rovda ikkita funksiya: `SELECT SUM(quantity), AVG(quantity) FROM ...`",
      "en": "Two functions in one query: `SELECT SUM(quantity), AVG(quantity) FROM ...`",
      "ru": "Две функции в одном запросе: `SELECT SUM(quantity), AVG(quantity) FROM ...`"
    },
    "starterCode": "-- TODO: quantity ustuni bo'yicha SUM va AVG ni hisoblang\nSELECT /* ... */\nFROM orders;",
    "solution": "SELECT SUM(quantity), AVG(quantity)\nFROM orders;",
    "check": {
      "outputContains": ["14"],
      "sourceContains": ["sum", "avg", "quantity", "orders"]
    },
    "xp": 45,
    "monacoLang": "sql",
    "preview": "none"
  }
];
