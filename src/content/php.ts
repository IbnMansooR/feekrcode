import type { LessonContent } from "./types";

export const phpLessons: LessonContent[] = [
  {
    "title": {
      "uz": "echo va o'zgaruvchilar",
      "en": "echo & Variables",
      "ru": "echo и переменные"
    },
    "intro": {
      "uz": "Har bir PHP dasturi ekranga biror narsa chiqarishdan boshlanadi.",
      "en": "Every PHP program starts by putting something on the screen.",
      "ru": "Любая программа на PHP начинается с вывода чего-либо на экран."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`echo` — bu PHP'da matnni ekranga chiqaradigan buyruq. O'zgaruvchi esa qiymatni saqlaydigan *quti* bo'lib, nomi har doim `$` belgisi bilan boshlanadi, masalan `$ism`.",
          "en": "`echo` is the PHP command that prints text to the screen. A variable is a *box* that stores a value, and its name always starts with a `$` sign, for example `$name`.",
          "ru": "`echo` — это команда PHP, которая выводит текст на экран. Переменная — это *коробка* для хранения значения, и её имя всегда начинается со знака `$`, например `$name`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "`echo`siz dastur jim ishlaydi — natijani hech kim ko'rmaydi. O'zgaruvchilar esa ma'lumotni eslab qolib, uni qayta-qayta ishlatish imkonini beradi.",
          "en": "Without `echo` your program runs silently — nobody sees the result. Variables let you remember data and reuse it again and again.",
          "ru": "Без `echo` программа работает молча — никто не увидит результат. Переменные позволяют запоминать данные и использовать их снова и снова."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`echo` matn, son va o'zgaruvchi qiymatlarini chiqara oladi. Qo'shtirnoq ichida o'zgaruvchini to'g'ridan-to'g'ri yozsa bo'ladi: `echo \"Salom, $ism\";`.",
          "en": "`echo` can print text, numbers and variable values. Inside double quotes you can drop a variable straight in: `echo \"Hello, $name\";`.",
          "ru": "`echo` умеет выводить текст, числа и значения переменных. Внутри двойных кавычек переменную можно вставить напрямую: `echo \"Привет, $name\";`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Veb-sahifaga foydalanuvchi ismini chiqarishda, savatchadagi mahsulot sonini ko'rsatishda — qisqasi, har bir dinamik sahifada.",
          "en": "Showing the user's name on a web page, displaying the number of items in a cart — in short, on every dynamic page.",
          "ru": "Чтобы показать имя пользователя на странице, вывести количество товаров в корзине — словом, на каждой динамической странице."
        }
      }
    ],
    "task": {
      "uz": "`$ism` o'zgaruvchisiga o'z ismingizni yozing va `echo` orqali \"Salom, [ism]!\" deb chiqaring.",
      "en": "Store your name in a `$name` variable and use `echo` to print \"Hello, [name]!\".",
      "ru": "Запишите своё имя в переменную `$name` и через `echo` выведите \"Привет, [имя]!\"."
    },
    "hint": {
      "uz": "Har bir satr `;` bilan tugaydi. Qo'shtirnoq ichida `$ism` o'z qiymatiga aylanadi.",
      "en": "Every line ends with `;`. Inside double quotes `$name` turns into its value.",
      "ru": "Каждая строка заканчивается на `;`. В двойных кавычках `$name` превращается в своё значение."
    },
    "starterCode": "<?php\n// TODO: $ism o'zgaruvchisiga o'z ismingizni yozing\n// TODO: echo orqali \"Salom, $ism!\" deb chiqaring\n?>",
    "solution": "<?php\n$ism = \"Ali\";\necho \"Salom, $ism!\";\n?>",
    "check": {
      "mustRun": true,
      "outputContains": ["Salom"],
      "outputMatches": ".+",
      "sourceContains": ["echo", "$ism"]
    },
    "xp": 20,
    "monacoLang": "php",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ma'lumot turlari",
      "en": "Data Types",
      "ru": "Типы данных"
    },
    "intro": {
      "uz": "Son, matn yoki rost/yolg'on — PHP har bir qiymatning turini biladi.",
      "en": "Number, text or true/false — PHP knows the type of every value.",
      "ru": "Число, текст или истина/ложь — PHP знает тип каждого значения."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ma'lumot turi — bu qiymatning qanaqaligi. PHP'da asosiylari: butun son `int`, kasr son `float`, matn `string` va mantiqiy `bool` (`true`/`false`).",
          "en": "A data type describes what kind of value you have. The main ones in PHP are: integer `int`, decimal `float`, text `string`, and boolean `bool` (`true`/`false`).",
          "ru": "Тип данных описывает, какого рода ваше значение. Основные в PHP: целое `int`, дробное `float`, текст `string` и логическое `bool` (`true`/`false`)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Son bilan hisoblaymiz, matn bilan esa yozamiz — bu ikkisi har xil. Turlarni bilmasangiz, `\"5\" + \"3\"` qanday natija berishini taxmin qila olmaysiz.",
          "en": "We do math with numbers and we write with text — they behave differently. Without knowing types you can't predict what `\"5\" + \"3\"` will do.",
          "ru": "С числами мы считаем, с текстом — пишем, и ведут они себя по-разному. Не зная типов, нельзя предсказать, что даст `\"5\" + \"3\"`."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Turlar amallarni belgilaydi: `int` va `float` qo'shiladi va ko'paytiriladi, `string` esa `.` orqali ulanadi. `gettype()` funksiyasi qiymat turini aytib beradi.",
          "en": "Types decide the operations: `int` and `float` can be added and multiplied, while `string` is joined with `.`. The `gettype()` function tells you a value's type.",
          "ru": "Типы определяют операции: `int` и `float` складываются и умножаются, а `string` соединяется через `.`. Функция `gettype()` сообщает тип значения."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Narxni `float` da, foydalanuvchi yoshini `int` da, ismni `string` da, \"tizimga kirganmi?\" savolini esa `bool` da saqlaymiz.",
          "en": "We store a price as `float`, a user's age as `int`, a name as `string`, and \"is logged in?\" as a `bool`.",
          "ru": "Цену храним как `float`, возраст пользователя как `int`, имя как `string`, а \"вошёл ли в систему?\" — как `bool`."
        }
      }
    ],
    "task": {
      "uz": "Uchta o'zgaruvchi yarating: `$yosh` (int), `$narx` (float) va `$faol` (bool). Ularning turlarini `gettype()` orqali chiqaring.",
      "en": "Create three variables: `$age` (int), `$price` (float) and `$active` (bool). Print their types using `gettype()`.",
      "ru": "Создайте три переменные: `$age` (int), `$price` (float) и `$active` (bool). Выведите их типы через `gettype()`."
    },
    "hint": {
      "uz": "`echo gettype($yosh);` — bu \"integer\" so'zini chiqaradi.",
      "en": "`echo gettype($age);` — this prints the word \"integer\".",
      "ru": "`echo gettype($age);` — это выведет слово \"integer\"."
    },
    "starterCode": "<?php\n$yosh = 20;\n$narx = 9.99;\n$faol = true;\n\n// TODO: gettype() orqali $yosh, $narx va $faol turlarini har birini alohida qatorda chiqaring\n?>",
    "solution": "<?php\n$yosh = 20;\n$narx = 9.99;\n$faol = true;\n\necho gettype($yosh) . \"\\n\";\necho gettype($narx) . \"\\n\";\necho gettype($faol) . \"\\n\";\n?>",
    "check": {
      "mustRun": true,
      "outputContains": ["integer", "double", "boolean"],
      "sourceContains": ["gettype"]
    },
    "xp": 24,
    "monacoLang": "php",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Shartlar",
      "en": "Conditions",
      "ru": "Условия"
    },
    "intro": {
      "uz": "Dastur \"agar... bo'lsa\" deb o'ylashni o'rgansa, aqlli bo'ladi.",
      "en": "A program gets smart once it learns to think \"if... then\".",
      "ru": "Программа становится умной, когда учится думать \"если... то\"."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Shart — bu tekshiruv. `if` ichidagi ifoda `true` bo'lsa, kod ishlaydi; aks holda `else` qismi bajariladi. Oraliq holatlar uchun `elseif` bor.",
          "en": "A condition is a check. If the expression inside `if` is `true`, the code runs; otherwise the `else` part runs. For in-between cases there is `elseif`.",
          "ru": "Условие — это проверка. Если выражение в `if` равно `true`, код выполняется; иначе выполняется часть `else`. Для промежуточных случаев есть `elseif`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Hayotda biz doim qaror qabul qilamiz: \"yomg'ir yog'sa, soyabon olaman\". Dastur ham vaziyatga qarab har xil yo'l tutishi kerak.",
          "en": "In life we constantly make decisions: \"if it rains, I take an umbrella\". A program also needs to act differently depending on the situation.",
          "ru": "В жизни мы постоянно принимаем решения: \"если идёт дождь, беру зонт\". Программа тоже должна вести себя по-разному в зависимости от ситуации."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Shartlar qiymatlarni solishtiradi: `==` (teng), `!=` (teng emas), `>` va `<`. Ularni `&&` (va) hamda `||` (yoki) orqali birlashtirsa bo'ladi.",
          "en": "Conditions compare values: `==` (equal), `!=` (not equal), `>` and `<`. You can combine them with `&&` (and) and `||` (or).",
          "ru": "Условия сравнивают значения: `==` (равно), `!=` (не равно), `>` и `<`. Их можно объединять через `&&` (и) и `||` (или)."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Parol to'g'rimi tekshirishda, foydalanuvchi 18 yoshga to'lganini aniqlashda, chegirma berish-bermaslikni hal qilishda.",
          "en": "Checking if a password is correct, deciding whether a user is over 18, choosing whether to give a discount.",
          "ru": "При проверке правильности пароля, определении, есть ли пользователю 18 лет, решении, давать ли скидку."
        }
      }
    ],
    "task": {
      "uz": "`$yosh` o'zgaruvchisini yarating. Agar u 18 dan katta yoki teng bo'lsa \"Kirish mumkin\", aks holda \"Ruxsat yo'q\" deb chiqaring.",
      "en": "Create a `$age` variable. If it is greater than or equal to 18 print \"Access granted\", otherwise print \"Access denied\".",
      "ru": "Создайте переменную `$age`. Если она больше или равна 18, выведите \"Доступ разрешён\", иначе \"Доступ запрещён\"."
    },
    "hint": {
      "uz": "`if ($yosh >= 18) { ... } else { ... }` — qavslar va figurali qavslarga e'tibor bering.",
      "en": "`if ($age >= 18) { ... } else { ... }` — watch the parentheses and curly braces.",
      "ru": "`if ($age >= 18) { ... } else { ... }` — следите за скобками и фигурными скобками."
    },
    "starterCode": "<?php\n$yosh = 20;\n\n// TODO: if/else yordamida $yosh >= 18 bo'lsa \"Kirish mumkin\", aks holda \"Ruxsat yo'q\" chiqaring\n?>",
    "solution": "<?php\n$yosh = 20;\n\nif ($yosh >= 18) {\n  echo \"Kirish mumkin\";\n} else {\n  echo \"Ruxsat yo'q\";\n}\n?>",
    "check": {
      "mustRun": true,
      "outputContains": ["Kirish mumkin"],
      "sourceContains": ["if", ">="]
    },
    "xp": 28,
    "monacoLang": "php",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Sikllar",
      "en": "Loops",
      "ru": "Циклы"
    },
    "intro": {
      "uz": "Bir ishni 100 marta qilish kerakmi? Sikl buni siz uchun bajaradi.",
      "en": "Need to do the same thing 100 times? A loop does it for you.",
      "ru": "Нужно сделать одно и то же 100 раз? Цикл сделает это за вас."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Sikl — bu kodni takror-takror bajaradigan tuzilma. `for` ma'lum son marta aylantiradi, `while` esa shart `true` bo'lguncha davom etadi.",
          "en": "A loop is a structure that runs code over and over. `for` repeats a set number of times, while `while` keeps going as long as a condition is `true`.",
          "ru": "Цикл — это конструкция, которая выполняет код снова и снова. `for` повторяет заданное число раз, а `while` работает, пока условие истинно."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil qatorni 100 marta qo'lda yozish — ahmoqlik. Sikl bilan bir necha qatorda minglab amalni bajarish mumkin.",
          "en": "Writing the same line 100 times by hand is foolish. With a loop you can do thousands of actions in just a few lines.",
          "ru": "Писать одну и ту же строку 100 раз вручную — глупо. С циклом можно выполнить тысячи действий всего в нескольких строках."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Sikl sanab chiqishi, ro'yxatni boshidan oxirigacha aylanib o'tishi va sanoqchi (`$i`) qiymatini har qadamda oshirishi mumkin. `break` siklni to'xtatadi.",
          "en": "A loop can count, walk through a list from start to end, and increase a counter (`$i`) at each step. `break` stops the loop.",
          "ru": "Цикл может считать, проходить список от начала до конца и увеличивать счётчик (`$i`) на каждом шаге. `break` останавливает цикл."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Mahsulotlar ro'yxatini chiqarishda, jadval qatorlarini hosil qilishda, foydalanuvchilar ro'yxatini ekranga bosib chiqarishda.",
          "en": "Printing a list of products, generating table rows, displaying a list of users on the screen.",
          "ru": "При выводе списка товаров, генерации строк таблицы, отображении списка пользователей на экране."
        }
      }
    ],
    "task": {
      "uz": "`for` sikli yordamida 1 dan 5 gacha bo'lgan sonlarni har birini alohida qatorda chiqaring.",
      "en": "Using a `for` loop, print the numbers from 1 to 5, each on its own line.",
      "ru": "С помощью цикла `for` выведите числа от 1 до 5, каждое на отдельной строке."
    },
    "hint": {
      "uz": "`for ($i = 1; $i <= 5; $i++) { echo $i; }` — uchta qism: boshlash, shart, oshirish.",
      "en": "`for ($i = 1; $i <= 5; $i++) { echo $i; }` — three parts: start, condition, increment.",
      "ru": "`for ($i = 1; $i <= 5; $i++) { echo $i; }` — три части: старт, условие, шаг."
    },
    "starterCode": "<?php\n// TODO: for sikli yordamida 1 dan 5 gacha sonlarni har birini alohida qatorda chiqaring\nfor (/* TODO: shartlarni yozing */) {\n\n}\n?>",
    "solution": "<?php\nfor ($i = 1; $i <= 5; $i++) {\n  echo $i . \"\\n\";\n}\n?>",
    "check": {
      "mustRun": true,
      "outputContains": ["1", "2", "3", "4", "5"],
      "sourceContains": ["for", "echo"]
    },
    "xp": 30,
    "monacoLang": "php",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Funksiyalar",
      "en": "Functions",
      "ru": "Функции"
    },
    "intro": {
      "uz": "Bir marta yozing, istalgancha ishlating — funksiya shu uchun bor.",
      "en": "Write it once, use it as often as you like — that's what a function is for.",
      "ru": "Напишите один раз, используйте сколько угодно — для этого и нужна функция."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Funksiya — bu nom berilgan kod bo'lagi. Uni `function` so'zi bilan yaratamiz, nomi bilan chaqiramiz va `return` orqali natija qaytaramiz.",
          "en": "A function is a named block of code. We create it with the `function` keyword, call it by its name, and return a result with `return`.",
          "ru": "Функция — это именованный блок кода. Создаём её словом `function`, вызываем по имени и возвращаем результат через `return`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni qayta-qayta yozmaslik uchun. Funksiya kodni tartibga soladi, o'qishni osonlashtiradi va xatolikni bir joyda tuzatish imkonini beradi.",
          "en": "So you don't write the same code over and over. A function organizes your code, makes it easier to read, and lets you fix a bug in one place.",
          "ru": "Чтобы не писать один и тот же код снова и снова. Функция упорядочивает код, упрощает чтение и позволяет исправить ошибку в одном месте."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Funksiya *parametr* qabul qiladi, ular bilan ishlaydi va qiymat qaytaradi. Masalan `salomla($ism)` har qanday ismga moslashgan salom yasaydi.",
          "en": "A function takes *parameters*, works with them, and returns a value. For example `greet($name)` builds a greeting tailored to any name.",
          "ru": "Функция принимает *параметры*, работает с ними и возвращает значение. Например, `greet($name)` строит приветствие под любое имя."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Narx hisoblashda, soliqni qo'shishda, sanani formatlashda — har qanday qayta ishlatiladigan amalda.",
          "en": "Calculating a price, adding tax, formatting a date — in any reusable operation.",
          "ru": "При расчёте цены, добавлении налога, форматировании даты — в любой повторно используемой операции."
        }
      }
    ],
    "task": {
      "uz": "`qoshish($a, $b)` funksiyasini yarating, u ikki sonni qo'shib qaytarsin. Uni `2` va `3` bilan chaqirib, natijani chiqaring.",
      "en": "Create a `add($a, $b)` function that adds two numbers and returns the result. Call it with `2` and `3` and print the result.",
      "ru": "Создайте функцию `add($a, $b)`, которая складывает два числа и возвращает результат. Вызовите её с `2` и `3` и выведите результат."
    },
    "hint": {
      "uz": "`function qoshish($a, $b) { return $a + $b; }`, so'ng `echo qoshish(2, 3);`.",
      "en": "`function add($a, $b) { return $a + $b; }`, then `echo add(2, 3);`.",
      "ru": "`function add($a, $b) { return $a + $b; }`, затем `echo add(2, 3);`."
    },
    "starterCode": "<?php\nfunction qoshish($a, $b) {\n  // TODO: $a va $b ni qo'shib return qiling\n  return 0;\n}\n\n// TODO: qoshish(2, 3) ni chaqirib echo orqali chiqaring\n?>",
    "solution": "<?php\nfunction qoshish($a, $b) {\n  return $a + $b;\n}\n\necho qoshish(2, 3);\n?>",
    "check": {
      "mustRun": true,
      "outputContains": ["5"],
      "sourceContains": ["function", "return"]
    },
    "xp": 34,
    "monacoLang": "php",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Massivlar",
      "en": "Arrays",
      "ru": "Массивы"
    },
    "intro": {
      "uz": "Bir nechta qiymatni bitta o'zgaruvchida saqlash — massivlarning sehri.",
      "en": "Storing many values in a single variable — that's the magic of arrays.",
      "ru": "Хранить множество значений в одной переменной — вот магия массивов."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Massiv — bu ko'p qiymatni tartib bilan saqlaydigan ro'yxat. Uni `[]` ichida yozamiz va har bir elementga *indeks* (raqam) orqali murojaat qilamiz.",
          "en": "An array is a list that stores many values in order. We write it inside `[]` and reach each element by its *index* (a number).",
          "ru": "Массив — это список, хранящий много значений по порядку. Записываем его в `[]` и обращаемся к каждому элементу по *индексу* (номеру)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "100 ta talaba uchun 100 ta alohida o'zgaruvchi yaratish — dahshat. Massiv barchasini bitta nomda saqlaydi va ular bilan oson ishlash imkonini beradi.",
          "en": "Making 100 separate variables for 100 students is a nightmare. An array keeps them all under one name and makes them easy to work with.",
          "ru": "Создавать 100 отдельных переменных для 100 студентов — кошмар. Массив хранит их все под одним именем и упрощает работу с ними."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Massivga `[]` orqali yangi element qo'shsa, `count()` bilan sonini bilsa, `foreach` orqali har bir elementni aylanib o'tsa bo'ladi.",
          "en": "You can add a new element with `[]`, count items with `count()`, and walk through every element with `foreach`.",
          "ru": "Можно добавить элемент через `[]`, узнать количество через `count()` и пройти по каждому элементу с помощью `foreach`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Savatchadagi mahsulotlar ro'yxatida, menyu bandlarida, qidiruv natijalarini saqlashda.",
          "en": "In a shopping cart's product list, in menu items, in storing search results.",
          "ru": "В списке товаров корзины, в пунктах меню, при хранении результатов поиска."
        }
      }
    ],
    "task": {
      "uz": "`$mevalar` massivini uchta meva bilan yarating va `foreach` orqali har birini alohida qatorda chiqaring.",
      "en": "Create a `$fruits` array with three fruits and print each one on its own line using `foreach`.",
      "ru": "Создайте массив `$fruits` с тремя фруктами и выведите каждый на отдельной строке через `foreach`."
    },
    "hint": {
      "uz": "`$mevalar = [\"olma\", \"banan\", \"uzum\"];` so'ng `foreach ($mevalar as $meva) { echo $meva; }`.",
      "en": "`$fruits = [\"apple\", \"banana\", \"grape\"];` then `foreach ($fruits as $fruit) { echo $fruit; }`.",
      "ru": "`$fruits = [\"яблоко\", \"банан\", \"виноград\"];` затем `foreach ($fruits as $fruit) { echo $fruit; }`."
    },
    "starterCode": "<?php\n$mevalar = [\"olma\", \"banan\", \"uzum\"];\n\n// TODO: foreach yordamida har bir mevani alohida qatorda chiqaring\n?>",
    "solution": "<?php\n$mevalar = [\"olma\", \"banan\", \"uzum\"];\n\nforeach ($mevalar as $meva) {\n  echo $meva . \"\\n\";\n}\n?>",
    "check": {
      "mustRun": true,
      "outputContains": ["olma", "banan", "uzum"],
      "sourceContains": ["foreach"]
    },
    "xp": 36,
    "monacoLang": "php",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Assotsiativ massivlar",
      "en": "Associative Arrays",
      "ru": "Ассоциативные массивы"
    },
    "intro": {
      "uz": "Raqam o'rniga nom bilan murojaat qiling — ma'lumot tushunarli bo'ladi.",
      "en": "Reach values by name instead of number — your data becomes readable.",
      "ru": "Обращайтесь к значениям по имени, а не по номеру — данные станут понятнее."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Assotsiativ massiv — bu *kalit => qiymat* juftliklaridan iborat massiv. Indeks raqam emas, balki matnli kalit bo'ladi, masalan `$user[\"ism\"]`.",
          "en": "An associative array is an array of *key => value* pairs. The index is not a number but a text key, for example `$user[\"name\"]`.",
          "ru": "Ассоциативный массив — это массив из пар *ключ => значение*. Индекс здесь не число, а текстовый ключ, например `$user[\"name\"]`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "`$user[0]` nima ekanini eslab qolish qiyin, lekin `$user[\"email\"]` o'zini o'zi tushuntiradi. Bu kodni ancha o'qishli qiladi.",
          "en": "Remembering what `$user[0]` means is hard, but `$user[\"email\"]` explains itself. This makes your code much more readable.",
          "ru": "Запомнить, что значит `$user[0]`, сложно, а `$user[\"email\"]` говорит сам за себя. Это делает код намного читабельнее."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Bitta obyekt haqida bog'liq ma'lumotlarni saqlaydi. `foreach ($a as $kalit => $qiymat)` orqali kalit va qiymatni birga aylanib chiqsa bo'ladi.",
          "en": "It stores related data about one object. With `foreach ($a as $key => $value)` you can loop through keys and values together.",
          "ru": "Хранит связанные данные об одном объекте. Через `foreach ($a as $key => $value)` можно перебирать ключи и значения вместе."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchi profilini saqlashda, sozlamalar (`config`)ni ko'rsatishda, JSON va bazadan kelgan ma'lumotlarni qayta ishlashda.",
          "en": "Storing a user profile, holding settings (`config`), and processing data that comes from JSON or a database.",
          "ru": "При хранении профиля пользователя, настроек (`config`) и обработке данных из JSON или базы данных."
        }
      }
    ],
    "task": {
      "uz": "`$user` assotsiativ massivini `ism` va `yosh` kalitlari bilan yarating. So'ng \"Ism: ...\" va \"Yosh: ...\" ko'rinishida chiqaring.",
      "en": "Create a `$user` associative array with `name` and `age` keys. Then print it as \"Name: ...\" and \"Age: ...\".",
      "ru": "Создайте ассоциативный массив `$user` с ключами `name` и `age`. Затем выведите его как \"Имя: ...\" и \"Возраст: ...\"."
    },
    "hint": {
      "uz": "`$user = [\"ism\" => \"Ali\", \"yosh\" => 20];` so'ng `echo $user[\"ism\"];`.",
      "en": "`$user = [\"name\" => \"Ali\", \"age\" => 20];` then `echo $user[\"name\"];`.",
      "ru": "`$user = [\"name\" => \"Ali\", \"age\" => 20];` затем `echo $user[\"name\"];`."
    },
    "starterCode": "<?php\n$user = [\n  \"ism\" => \"Ali\",\n  \"yosh\" => 20\n];\n\n// TODO: \"Ism: ...\" va \"Yosh: ...\" ko'rinishida $user[\"ism\"] va $user[\"yosh\"] ni chiqaring\n?>",
    "solution": "<?php\n$user = [\n  \"ism\" => \"Ali\",\n  \"yosh\" => 20\n];\n\necho \"Ism: \" . $user[\"ism\"] . \"\\n\";\necho \"Yosh: \" . $user[\"yosh\"];\n?>",
    "check": {
      "mustRun": true,
      "outputContains": ["Ism: Ali", "Yosh: 20"],
      "sourceContains": ["=>", "$user"]
    },
    "xp": 40,
    "monacoLang": "php",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Forma ma'lumotlari ($_GET / $_POST)",
      "en": "Form Input ($_GET / $_POST)",
      "ru": "Данные формы ($_GET / $_POST)"
    },
    "intro": {
      "uz": "Foydalanuvchi yozgan ma'lumotni qabul qilish — haqiqiy veb dasturchilik shu yerdan boshlanadi.",
      "en": "Receiving what the user typed — this is where real web development begins.",
      "ru": "Приём того, что ввёл пользователь — здесь начинается настоящая веб-разработка."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`$_GET` va `$_POST` — bu PHP'ning maxsus massivlari bo'lib, ular formadan kelgan ma'lumotni saqlaydi. `$_GET` ma'lumotni URL'da, `$_POST` esa yashirin yuboradi.",
          "en": "`$_GET` and `$_POST` are special PHP arrays that hold the data sent from a form. `$_GET` carries data in the URL, while `$_POST` sends it hidden.",
          "ru": "`$_GET` и `$_POST` — это специальные массивы PHP, которые хранят данные, отправленные из формы. `$_GET` несёт данные в URL, а `$_POST` отправляет их скрыто."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Sayt foydalanuvchi bilan \"suhbatlashishi\" kerak: ism so'rashi, parol qabul qilishi, qidiruv so'zini olishi. Bularsiz sayt jonsiz qog'ozdek bo'ladi.",
          "en": "A site must \"talk\" to the user: ask for a name, accept a password, take a search word. Without this a site is as lifeless as paper.",
          "ru": "Сайт должен \"общаться\" с пользователем: спросить имя, принять пароль, получить поисковое слово. Без этого сайт безжизнен, как бумага."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Forma maydonidagi qiymatni `$_POST[\"ism\"]` orqali oladi. `isset()` bilan ma'lumot kelganini tekshiramiz, `htmlspecialchars()` bilan esa xavfsiz qilamiz.",
          "en": "It reads a form field's value via `$_POST[\"name\"]`. We check that data arrived with `isset()`, and make it safe with `htmlspecialchars()`.",
          "ru": "Считывает значение поля формы через `$_POST[\"name\"]`. Через `isset()` проверяем, пришли ли данные, а `htmlspecialchars()` делает их безопасными."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Tizimga kirish (login) formalarida, ro'yxatdan o'tishda, qidiruv qatorida, fikr-mulohaza yuborish formalarida.",
          "en": "In login forms, in sign-up pages, in search bars, in feedback submission forms.",
          "ru": "В формах входа, при регистрации, в строке поиска, в формах отправки отзывов."
        }
      }
    ],
    "task": {
      "uz": "`$_POST[\"ism\"]` mavjudligini `isset()` bilan tekshiring. Agar bo'lsa \"Salom, [ism]!\" deb, bo'lmasa \"Iltimos, ism kiriting\" deb chiqaring.",
      "en": "Check with `isset()` whether `$_POST[\"name\"]` exists. If so print \"Hello, [name]!\", otherwise print \"Please enter a name\".",
      "ru": "Проверьте через `isset()`, существует ли `$_POST[\"name\"]`. Если да — выведите \"Привет, [имя]!\", иначе \"Пожалуйста, введите имя\"."
    },
    "hint": {
      "uz": "`if (isset($_POST[\"ism\"])) { echo \"Salom, \" . $_POST[\"ism\"]; }` — kalit nomi formadagi `name` bilan bir xil bo'lishi kerak.",
      "en": "`if (isset($_POST[\"name\"])) { echo \"Hello, \" . $_POST[\"name\"]; }` — the key must match the form's `name` attribute.",
      "ru": "`if (isset($_POST[\"name\"])) { echo \"Привет, \" . $_POST[\"name\"]; }` — ключ должен совпадать с атрибутом `name` формы."
    },
    "starterCode": "<?php\n// TODO: isset() bilan $_POST[\"ism\"] mavjudligini tekshiring\nif (/* TODO: shartni yozing */) {\n  // TODO: \"Salom, [ism]!\" chiqaring (htmlspecialchars bilan)\n} else {\n  // TODO: \"Iltimos, ism kiriting\" chiqaring\n}\n?>",
    "solution": "<?php\nif (isset($_POST[\"ism\"])) {\n  echo \"Salom, \" . htmlspecialchars($_POST[\"ism\"]) . \"!\";\n} else {\n  echo \"Iltimos, ism kiriting\";\n}\n?>",
    "check": {
      "mustRun": true,
      "outputContains": ["Iltimos, ism kiriting"],
      "sourceContains": ["isset", "$_POST"]
    },
    "xp": 45,
    "monacoLang": "php",
    "preview": "none"
  }
];
