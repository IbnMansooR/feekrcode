import type { LessonContent } from "./types";

export const javascriptLessons: LessonContent[] = [
  {
    "title": {
      "uz": "O'zgaruvchilar va console.log",
      "en": "Variables & console.log",
      "ru": "Переменные и console.log"
    },
    "intro": {
      "uz": "Har bir dastur ma'lumotni saqlashdan boshlanadi — JavaScript'da bu o'zgaruvchilar bilan bo'ladi.",
      "en": "Every program starts by storing data — in JavaScript that means variables.",
      "ru": "Любая программа начинается с хранения данных — в JavaScript это переменные."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "O'zgaruvchi — bu ma'lumotni saqlaydigan nomli quti. Uni `let` yoki `const` bilan yaratamiz, masalan `let ism = \"Ali\"`. `console.log()` esa o'sha qiymatni ekranga chiqaradi.",
          "en": "A variable is a named box that stores data. You create it with `let` or `const`, like `let name = \"Ali\"`. And `console.log()` prints that value to the screen.",
          "ru": "Переменная — это именованная коробка для хранения данных. Её создают через `let` или `const`, например `let name = \"Ali\"`. А `console.log()` выводит это значение на экран."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ma'lumotni saqlamasangiz, dasturingiz hech narsani eslab qola olmaydi. O'zgaruvchilar foydalanuvchi ismi, ball yoki narx kabi qiymatlarni keyin ishlatish uchun ushlab turadi.",
          "en": "Without storing data, your program can't remember anything. Variables hold values like a user's name, a score, or a price so you can use them later.",
          "ru": "Без хранения данных программа ничего не запомнит. Переменные удерживают значения — имя пользователя, счёт или цену — чтобы использовать их позже."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`let` bilan qiymatni keyin o'zgartira olasiz, `const` esa o'zgarmas qiymat uchun. `console.log()` bir nechta narsani vergul bilan birga chop etadi: `console.log(\"Ball:\", ball)`.",
          "en": "With `let` you can change the value later, while `const` is for a value that stays fixed. `console.log()` can print several things separated by commas: `console.log(\"Score:\", score)`.",
          "ru": "С `let` значение можно менять позже, а `const` — для неизменного значения. `console.log()` печатает несколько вещей через запятую: `console.log(\"Счёт:\", score)`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har bir JavaScript dasturda — saytdagi savatcha summasi, o'yindagi ball, formadagi ism. `console.log()` esa dasturchining birinchi va eng muhim xatolarni topish quroli.",
          "en": "In every JavaScript program — a cart total on a site, a score in a game, a name in a form. And `console.log()` is a developer's first and most important debugging tool.",
          "ru": "В каждой программе на JavaScript — сумма корзины на сайте, счёт в игре, имя в форме. А `console.log()` — главный инструмент отладки разработчика."
        }
      }
    ],
    "task": {
      "uz": "`ism` nomli o'zgaruvchi yarating, unga o'z ismingizni bering va uni `console.log` bilan chiqaring.",
      "en": "Create a variable called `ism`, set it to your name, and print it with `console.log`.",
      "ru": "Создайте переменную `ism`, присвойте ей своё имя и выведите её через `console.log`."
    },
    "hint": {
      "uz": "Matn qiymati qo'shtirnoq ichida bo'ladi: `let ism = \"Ali\"`.",
      "en": "A text value goes inside quotes: `let ism = \"Ali\"`.",
      "ru": "Текстовое значение пишется в кавычках: `let ism = \"Ali\"`."
    },
    "starterCode": "// TODO: \"ism\" nomli o'zgaruvchi yarating va unga o'z ismingizni bering\nlet ism = \"\";\n// TODO: ism qiymatini console.log bilan chiqaring\n",
    "solution": "let ism = \"Ali\";\nconsole.log(ism);",
    "check": {
      "sourceContains": ["ism", "console.log"],
      "outputMatches": ".+"
    },
    "xp": 20,
    "monacoLang": "javascript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Ma'lumot turlari",
      "en": "Data Types",
      "ru": "Типы данных"
    },
    "intro": {
      "uz": "Raqam, matn yoki ha/yo'q — JavaScript har xil ma'lumotni turli turlarda saqlaydi.",
      "en": "Numbers, text, or yes/no — JavaScript stores different data in different types.",
      "ru": "Числа, текст или да/нет — JavaScript хранит разные данные в разных типах."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ma'lumot turi — bu qiymatning qanday ekanligi. Asosiylari: `number` (raqam, masalan `25`), `string` (matn, `\"Salom\"`) va `boolean` (`true` yoki `false`).",
          "en": "A data type is what kind of value something is. The main ones are: `number` (like `25`), `string` (text, `\"Hello\"`) and `boolean` (`true` or `false`).",
          "ru": "Тип данных — это какого рода значение. Основные: `number` (число, например `25`), `string` (текст, `\"Привет\"`) и `boolean` (`true` или `false`)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "JavaScript turga qarab boshqacha ish tutadi: raqamlarni qo'shadi, matnlarni esa yelimlaydi. `5 + 5` — bu `10`, ammo `\"5\" + \"5\"` — bu `\"55\"`.",
          "en": "JavaScript acts differently based on type: it adds numbers but glues text together. `5 + 5` is `10`, but `\"5\" + \"5\"` is `\"55\"`.",
          "ru": "JavaScript ведёт себя по-разному в зависимости от типа: числа складывает, а текст склеивает. `5 + 5` это `10`, но `\"5\" + \"5\"` это `\"55\"`."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`typeof` operatori har qanday qiymatning turini aytib beradi: `typeof 25` natijasi `\"number\"`. Bundan tashqari `null` va `undefined` kabi maxsus \"bo'sh\" turlar ham bor.",
          "en": "The `typeof` operator tells you the type of any value: `typeof 25` gives `\"number\"`. There are also special \"empty\" types like `null` and `undefined`.",
          "ru": "Оператор `typeof` сообщает тип любого значения: `typeof 25` даёт `\"number\"`. Есть и особые «пустые» типы — `null` и `undefined`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Narx (`number`), foydalanuvchi izohi (`string`), tugma bosilganmi (`boolean`) — barchasi to'g'ri turda saqlanadi. Tur xatolari boshlovchilarning eng ko'p uchraydigan muammosi.",
          "en": "A price (`number`), a user comment (`string`), whether a button is pressed (`boolean`) — each stored in the right type. Type mistakes are the most common bug for beginners.",
          "ru": "Цена (`number`), комментарий пользователя (`string`), нажата ли кнопка (`boolean`) — каждое в своём типе. Ошибки типов — самая частая проблема новичков."
        }
      }
    ],
    "task": {
      "uz": "Uchta o'zgaruvchi yarating: `yosh` (raqam), `shahar` (matn) va `talaba` (`true` yoki `false`). Har birini `console.log` bilan chiqaring.",
      "en": "Create three variables: `yosh` (a number), `shahar` (text), and `talaba` (`true` or `false`). Print each with `console.log`.",
      "ru": "Создайте три переменные: `yosh` (число), `shahar` (текст) и `talaba` (`true` или `false`). Выведите каждую через `console.log`."
    },
    "hint": {
      "uz": "Raqam qo'shtirnoqsiz: `let yosh = 20`. Matn qo'shtirnoq bilan: `let shahar = \"Toshkent\"`.",
      "en": "A number has no quotes: `let yosh = 20`. Text uses quotes: `let shahar = \"Tashkent\"`.",
      "ru": "Число без кавычек: `let yosh = 20`. Текст в кавычках: `let shahar = \"Ташкент\"`."
    },
    "starterCode": "let yosh = 20;\n// TODO: \"shahar\" (matn) va \"talaba\" (true/false) o'zgaruvchilarini yarating\n\n// TODO: yosh, shahar va talaba ni console.log bilan chiqaring\n",
    "solution": "let yosh = 20;\nlet shahar = \"Toshkent\";\nlet talaba = true;\nconsole.log(yosh, shahar, talaba);",
    "check": {
      "sourceContains": ["yosh", "shahar", "talaba", "console.log"],
      "outputContains": ["20", "Toshkent", "true"]
    },
    "xp": 25,
    "monacoLang": "javascript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Operatorlar",
      "en": "Operators",
      "ru": "Операторы"
    },
    "intro": {
      "uz": "Operatorlar yordamida JavaScript hisoblaydi, taqqoslaydi va qaror chiqaradi.",
      "en": "With operators, JavaScript can calculate, compare, and reach decisions.",
      "ru": "С помощью операторов JavaScript считает, сравнивает и принимает решения."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Operator — bu qiymatlar ustida amal bajaradigan belgi. Arifmetik: `+ - * /`. Taqqoslash: `>`, `<`, `===` (teng). Mantiqiy: `&&` (va), `||` (yoki).",
          "en": "An operator is a symbol that performs an action on values. Arithmetic: `+ - * /`. Comparison: `>`, `<`, `===` (equal). Logical: `&&` (and), `||` (or).",
          "ru": "Оператор — это символ, выполняющий действие над значениями. Арифметические: `+ - * /`. Сравнения: `>`, `<`, `===` (равно). Логические: `&&` (и), `||` (или)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Operatorlar ma'lumotni jonlantiradi: narxlarni qo'shadi, ballni hisoblaydi, ikki qiymatni solishtiradi. Ularsiz dastur faqat statik ma'lumot bo'lib qolardi.",
          "en": "Operators bring data to life: they add prices, compute scores, compare two values. Without them a program would just be static data.",
          "ru": "Операторы оживляют данные: складывают цены, считают счёт, сравнивают два значения. Без них программа была бы лишь статичными данными."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`===` qiymatlar teng-tengmasligini, `!==` esa teng emasligini tekshiradi va `true`/`false` qaytaradi. `%` (qoldiq) operatori sonni juft yoki toq ekanini aniqlashda juda foydali.",
          "en": "`===` checks if two values are equal and `!==` if they are not, returning `true`/`false`. The `%` (remainder) operator is great for checking if a number is even or odd.",
          "ru": "`===` проверяет равенство двух значений, а `!==` — неравенство, возвращая `true`/`false`. Оператор `%` (остаток) удобен, чтобы узнать, чётное число или нечётное."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Savatcha jami summasini hisoblash, parol to'g'riligini tekshirish, chegirma shartini aniqlash. Deyarli har bir if-shart ichida taqqoslash operatori turadi.",
          "en": "Calculating a cart total, checking if a password matches, deciding a discount condition. Almost every if-statement has a comparison operator inside it.",
          "ru": "Подсчёт суммы корзины, проверка пароля, определение условия скидки. Почти в каждом if-условии есть оператор сравнения."
        }
      }
    ],
    "task": {
      "uz": "`a = 8` va `b = 3` o'zgaruvchilarini yarating. Ularning yig'indisini va `a > b` taqqoslash natijasini `console.log` bilan chiqaring.",
      "en": "Create variables `a = 8` and `b = 3`. Print their sum and the result of the comparison `a > b` with `console.log`.",
      "ru": "Создайте переменные `a = 8` и `b = 3`. Выведите их сумму и результат сравнения `a > b` через `console.log`."
    },
    "hint": {
      "uz": "Yig'indi: `a + b`. Taqqoslash `true` yoki `false` qaytaradi: `a > b`.",
      "en": "Sum: `a + b`. A comparison returns `true` or `false`: `a > b`.",
      "ru": "Сумма: `a + b`. Сравнение возвращает `true` или `false`: `a > b`."
    },
    "starterCode": "let a = 8;\nlet b = 3;\n// TODO: a va b yig'indisini console.log bilan chiqaring\n\n// TODO: a > b taqqoslash natijasini console.log bilan chiqaring\n",
    "solution": "let a = 8;\nlet b = 3;\nconsole.log(a + b);\nconsole.log(a > b);",
    "check": {
      "sourceContains": ["a + b", "a > b", "console.log"],
      "outputContains": ["11", "true"]
    },
    "xp": 28,
    "monacoLang": "javascript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "if / else shartlari",
      "en": "if / else Conditions",
      "ru": "Условия if / else"
    },
    "intro": {
      "uz": "Dastur \"agar... bo'lsa...\" deb o'ylay olsa, u qaror qabul qila boshlaydi.",
      "en": "Once a program can think \"if... then...\", it starts making decisions.",
      "ru": "Как только программа умеет думать «если... то...», она начинает принимать решения."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`if` — bu shart: agar qavs ichidagi ifoda `true` bo'lsa, ichidagi kod ishlaydi. `else` esa shart bajarilmaganda nima qilishni aytadi.",
          "en": "`if` is a condition: if the expression in the parentheses is `true`, the code inside runs. `else` says what to do when the condition is not met.",
          "ru": "`if` — это условие: если выражение в скобках `true`, выполняется код внутри. `else` говорит, что делать, когда условие не выполнено."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Haqiqiy dasturlar har doim tanlov qiladi: foydalanuvchi kirgan-kirmaganini, yosh yetarli-yetarli emasligini tekshiradi. Shartsiz dastur har doim bir xil ishni qilardi.",
          "en": "Real programs constantly make choices: whether a user is logged in, whether they are old enough. Without conditions a program would always do the exact same thing.",
          "ru": "Реальные программы постоянно делают выбор: вошёл ли пользователь, достаточно ли ему лет. Без условий программа всегда делала бы одно и то же."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`else if` bilan bir nechta shartni ketma-ket tekshirasiz, masalan baholarni A, B, C ga ajratish. Shartlar ichida `&&` va `||` bilan murakkab qoidalar tuzasiz.",
          "en": "With `else if` you check several conditions in a row, like sorting grades into A, B, C. Inside conditions you build complex rules with `&&` and `||`.",
          "ru": "С `else if` можно проверять несколько условий подряд, например распределять оценки на A, B, C. Внутри условий вы строите сложные правила через `&&` и `||`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Login tekshiruvi, yosh chegarasi, to'lov muvaffaqiyatli yoki yo'qligi, o'yinda g'alaba sharti. `if/else` deyarli har bir ilovaning yuragi.",
          "en": "Login checks, age limits, whether a payment succeeded, a win condition in a game. `if/else` is the heart of almost every app.",
          "ru": "Проверка входа, возрастные ограничения, успешность платежа, условие победы в игре. `if/else` — сердце почти любого приложения."
        }
      }
    ],
    "task": {
      "uz": "`yosh` o'zgaruvchisini yarating. Agar u 18 dan katta yoki teng bo'lsa `\"Kirish mumkin\"`, aks holda `\"Ruxsat yo'q\"` deb chiqaring.",
      "en": "Create a `yosh` variable. If it is greater than or equal to 18, print `\"Access granted\"`, otherwise print `\"Access denied\"`.",
      "ru": "Создайте переменную `yosh`. Если она больше или равна 18, выведите `\"Доступ разрешён\"`, иначе `\"Доступ запрещён\"`."
    },
    "hint": {
      "uz": "Shart qavs ichida: `if (yosh >= 18) { ... } else { ... }`.",
      "en": "The condition goes in parentheses: `if (yosh >= 18) { ... } else { ... }`.",
      "ru": "Условие пишется в скобках: `if (yosh >= 18) { ... } else { ... }`."
    },
    "starterCode": "let yosh = 20;\n// TODO: agar yosh >= 18 bo'lsa \"Kirish mumkin\", aks holda \"Ruxsat yo'q\" chiqaring\nif (/* shartni yozing */ false) {\n\n} else {\n\n}",
    "solution": "let yosh = 20;\nif (yosh >= 18) {\n  console.log(\"Kirish mumkin\");\n} else {\n  console.log(\"Ruxsat yo'q\");\n}",
    "check": {
      "sourceContains": ["if", "yosh", "else"],
      "outputContains": ["Kirish mumkin"]
    },
    "xp": 32,
    "monacoLang": "javascript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Tsikllar (for / while)",
      "en": "Loops (for / while)",
      "ru": "Циклы (for / while)"
    },
    "intro": {
      "uz": "Bir xil ishni 100 marta yozish o'rniga — tsikl yozasiz va kompyuter takrorlaydi.",
      "en": "Instead of writing the same thing 100 times — you write a loop and the computer repeats it.",
      "ru": "Вместо того чтобы писать одно и то же 100 раз — вы пишете цикл, и компьютер повторяет его."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Tsikl — bu kodni qayta-qayta bajaradigan tuzilma. `for` ma'lum sondagi takrorlash uchun, `while` esa shart `true` bo'lguncha ishlaydi.",
          "en": "A loop is a structure that runs code over and over. `for` is for a known number of repetitions, while `while` runs as long as a condition stays `true`.",
          "ru": "Цикл — это конструкция, которая выполняет код снова и снова. `for` — для известного числа повторов, а `while` работает, пока условие остаётся `true`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Qo'lda 1000 ta foydalanuvchini chop etib bo'lmaydi. Tsikl bir marta yozilgan kodni minglab marta, charchamasdan va xatosiz ishlatadi.",
          "en": "You can't print 1000 users by hand. A loop runs code written once thousands of times, tirelessly and without mistakes.",
          "ru": "Вручную вывести 1000 пользователей невозможно. Цикл выполняет код, написанный один раз, тысячи раз — без устали и ошибок."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`for (let i = 0; i < 5; i++)` — boshlanish, shart va qadamni bir qatorda belgilaydi. `break` tsiklni to'xtatadi, `continue` esa bitta qadamni o'tkazib yuboradi.",
          "en": "`for (let i = 0; i < 5; i++)` sets the start, condition and step on one line. `break` stops the loop, while `continue` skips a single step.",
          "ru": "`for (let i = 0; i < 5; i++)` задаёт старт, условие и шаг в одной строке. `break` останавливает цикл, а `continue` пропускает один шаг."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Mahsulotlar ro'yxatini chiqarish, har bir foydalanuvchiga xabar yuborish, jadval qatorlarini yaratish. Tsikl massivlar bilan birga eng ko'p ishlatiladi.",
          "en": "Displaying a product list, sending a message to each user, building table rows. Loops are used most often together with arrays.",
          "ru": "Вывод списка товаров, отправка сообщения каждому пользователю, создание строк таблицы. Циклы чаще всего используются вместе с массивами."
        }
      }
    ],
    "task": {
      "uz": "`for` tsikli yordamida 1 dan 5 gacha bo'lgan sonlarni `console.log` bilan chiqaring.",
      "en": "Use a `for` loop to print the numbers from 1 to 5 with `console.log`.",
      "ru": "С помощью цикла `for` выведите числа от 1 до 5 через `console.log`."
    },
    "hint": {
      "uz": "`i` ni 1 dan boshlang va `i <= 5` shartini qo'ying: `for (let i = 1; i <= 5; i++)`.",
      "en": "Start `i` at 1 and use the condition `i <= 5`: `for (let i = 1; i <= 5; i++)`.",
      "ru": "Начните `i` с 1 и используйте условие `i <= 5`: `for (let i = 1; i <= 5; i++)`."
    },
    "starterCode": "// TODO: for tsikli yozing: i ni 1 dan 5 gacha aylantiring\nfor (/* boshlanish; shart; qadam */) {\n  // TODO: i ni console.log bilan chiqaring\n}",
    "solution": "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
    "check": {
      "sourceContains": ["for", "console.log"],
      "outputContains": ["1", "2", "3", "4", "5"]
    },
    "xp": 35,
    "monacoLang": "javascript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Funksiyalar",
      "en": "Functions",
      "ru": "Функции"
    },
    "intro": {
      "uz": "Funksiya — bir marta yoziladigan va xohlagancha qayta ishlatiladigan kod retsepti.",
      "en": "A function is a recipe of code you write once and reuse as many times as you like.",
      "ru": "Функция — это рецепт кода, который вы пишете один раз и используете сколько угодно раз."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Funksiya — nomlangan kod bloki. Uni `function salom() { ... }` shaklida yaratasiz va `salom()` deb chaqirasiz. `return` esa funksiyadan natija qaytaradi.",
          "en": "A function is a named block of code. You create it as `function salom() { ... }` and call it with `salom()`. `return` sends a result back out of the function.",
          "ru": "Функция — это именованный блок кода. Его создают как `function salom() { ... }` и вызывают через `salom()`. `return` возвращает результат из функции."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni qayta-qayta yozmaslik uchun. Funksiya kodingizni qismlarga bo'lib, tartibli va tushunarli qiladi — DRY (\"Don't Repeat Yourself\") tamoyili.",
          "en": "So you don't write the same code over and over. Functions split your code into pieces, keeping it organized and readable — the DRY (\"Don't Repeat Yourself\") principle.",
          "ru": "Чтобы не писать один и тот же код снова и снова. Функции разбивают код на части, делая его упорядоченным и понятным — принцип DRY («Не повторяйся»)."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Funksiyaga qavs ichida parametr berasiz: `function salomla(ism)`. U kiritilgan ma'lumotni qayta ishlab, `return` orqali yangi qiymat qaytaradi. Zamonaviy `=>` (arrow) shakli ham bor.",
          "en": "You pass a parameter in the parentheses: `function salomla(ism)`. It processes the input and returns a new value via `return`. There's also the modern `=>` (arrow) form.",
          "ru": "В скобки передаётся параметр: `function salomla(ism)`. Функция обрабатывает ввод и возвращает новое значение через `return`. Есть и современная форма `=>` (стрелочная)."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Tugma bosilganda chaqiriladigan kod, summani hisoblash, ma'lumotni tekshirish. Butun zamonaviy JavaScript — bu funksiyalar to'plamidan iborat.",
          "en": "Code that runs when a button is clicked, calculating a total, validating data. All of modern JavaScript is essentially a collection of functions.",
          "ru": "Код, запускаемый при нажатии кнопки, подсчёт суммы, проверка данных. Весь современный JavaScript — по сути набор функций."
        }
      }
    ],
    "task": {
      "uz": "`salomla` funksiyasini yarating, u `ism` parametrini olib `\"Salom, \" + ism` matnini qaytarsin. Uni o'z ismingiz bilan chaqirib, natijani chiqaring.",
      "en": "Create a `salomla` function that takes an `ism` parameter and returns the text `\"Salom, \" + ism`. Call it with your name and print the result.",
      "ru": "Создайте функцию `salomla`, которая принимает параметр `ism` и возвращает текст `\"Salom, \" + ism`. Вызовите её со своим именем и выведите результат."
    },
    "hint": {
      "uz": "Natijani `return` bilan qaytaring: `return \"Salom, \" + ism;`, keyin `console.log(salomla(\"Ali\"))`.",
      "en": "Return the result with `return`: `return \"Salom, \" + ism;`, then `console.log(salomla(\"Ali\"))`.",
      "ru": "Верните результат через `return`: `return \"Salom, \" + ism;`, затем `console.log(salomla(\"Ali\"))`."
    },
    "starterCode": "function salomla(ism) {\n  // TODO: \"Salom, \" + ism matnini return qiling\n  return \"\";\n}\n// TODO: salomla funksiyasini o'z ismingiz bilan chaqirib, natijani console.log qiling\n",
    "solution": "function salomla(ism) {\n  return \"Salom, \" + ism;\n}\nconsole.log(salomla(\"Ali\"));",
    "check": {
      "sourceContains": ["function salomla", "return", "console.log"],
      "outputMatches": "Salom,\\s*.+"
    },
    "xp": 38,
    "monacoLang": "javascript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Massivlar",
      "en": "Arrays",
      "ru": "Массивы"
    },
    "intro": {
      "uz": "Bitta o'zgaruvchida butun bir ro'yxatni saqlamoqchimisiz? Massiv aynan shu uchun.",
      "en": "Want to store a whole list in a single variable? That's exactly what an array is for.",
      "ru": "Хотите хранить целый список в одной переменной? Именно для этого нужен массив."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Massiv — bu tartiblangan qiymatlar ro'yxati, kvadrat qavs ichida yoziladi: `let mevalar = [\"olma\", \"banan\"]`. Har bir element indeks raqamiga ega, sanash 0 dan boshlanadi.",
          "en": "An array is an ordered list of values, written in square brackets: `let mevalar = [\"apple\", \"banana\"]`. Each element has an index number, and counting starts at 0.",
          "ru": "Массив — это упорядоченный список значений в квадратных скобках: `let mevalar = [\"яблоко\", \"банан\"]`. У каждого элемента есть индекс, и отсчёт начинается с 0."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "100 ta talaba uchun 100 ta alohida o'zgaruvchi yaratish noqulay. Massiv ularning hammasini bitta nom ostida saqlaydi va tsikl bilan birga osongina ishlatiladi.",
          "en": "Making 100 separate variables for 100 students is impractical. An array keeps them all under one name and works smoothly together with a loop.",
          "ru": "Создавать 100 отдельных переменных для 100 студентов неудобно. Массив хранит их все под одним именем и легко работает вместе с циклом."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Elementga indeks orqali murojaat qilasiz: `mevalar[0]` — birinchi element. `.push()` oxiriga element qo'shadi, `.length` esa elementlar sonini beradi.",
          "en": "You access an element by its index: `mevalar[0]` is the first element. `.push()` adds an element to the end, and `.length` gives the count of elements.",
          "ru": "К элементу обращаются по индексу: `mevalar[0]` — первый элемент. `.push()` добавляет элемент в конец, а `.length` даёт количество элементов."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Mahsulotlar ro'yxati, chat xabarlari, savatchadagi narsalar, qidiruv natijalari. Saytda nimanidir ro'yxat ko'rinishida ko'rsangiz, ortida massiv turibdi.",
          "en": "A product list, chat messages, items in a cart, search results. Whenever you see something shown as a list on a site, there's an array behind it.",
          "ru": "Список товаров, сообщения в чате, товары в корзине, результаты поиска. Когда вы видите что-то в виде списка на сайте, за этим стоит массив."
        }
      }
    ],
    "task": {
      "uz": "`mevalar` nomli massiv yarating va unga uchta meva nomini qo'shing. Birinchi mevani (`mevalar[0]`) va massiv uzunligini (`mevalar.length`) chiqaring.",
      "en": "Create an array called `mevalar` with three fruit names. Print the first fruit (`mevalar[0]`) and the array length (`mevalar.length`).",
      "ru": "Создайте массив `mevalar` с тремя названиями фруктов. Выведите первый фрукт (`mevalar[0]`) и длину массива (`mevalar.length`)."
    },
    "hint": {
      "uz": "Indeks 0 dan boshlanadi, shuning uchun birinchi element `mevalar[0]`.",
      "en": "Indexes start at 0, so the first element is `mevalar[0]`.",
      "ru": "Индексы начинаются с 0, поэтому первый элемент — `mevalar[0]`."
    },
    "starterCode": "// TODO: \"mevalar\" massivini yarating va unga uchta meva nomini qo'shing\nlet mevalar = [];\n// TODO: birinchi mevani (mevalar[0]) va massiv uzunligini (mevalar.length) chiqaring\n",
    "solution": "let mevalar = [\"olma\", \"banan\", \"uzum\"];\nconsole.log(mevalar[0]);\nconsole.log(mevalar.length);",
    "check": {
      "sourceContains": ["mevalar", "mevalar[0]", "mevalar.length"],
      "outputContains": ["olma", "3"]
    },
    "xp": 40,
    "monacoLang": "javascript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Obyektlar",
      "en": "Objects",
      "ru": "Объекты"
    },
    "intro": {
      "uz": "Bir narsa haqida bog'liq ma'lumotlarni — ism, yosh, shahar — bitta joyda saqlash: obyekt.",
      "en": "Keeping related facts about one thing — name, age, city — together in one place: that's an object.",
      "ru": "Хранить связанные данные об одном объекте — имя, возраст, город — в одном месте: это объект."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Obyekt — bu `kalit: qiymat` juftliklaridan iborat to'plam, jingalak qavs ichida: `let foydalanuvchi = { ism: \"Ali\", yosh: 20 }`. Har bir kalit o'z qiymatiga ishora qiladi.",
          "en": "An object is a collection of `key: value` pairs in curly braces: `let foydalanuvchi = { ism: \"Ali\", yosh: 20 }`. Each key points to its own value.",
          "ru": "Объект — это набор пар `ключ: значение` в фигурных скобках: `let foydalanuvchi = { ism: \"Ali\", yosh: 20 }`. Каждый ключ указывает на своё значение."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Massiv shunchaki ro'yxat, ammo obyekt har bir qiymatga ma'noli nom beradi. `foydalanuvchi.ism` `\"Ali\"` ekanini darhol tushunasiz — bu kodingizni o'qilishli qiladi.",
          "en": "An array is just a list, but an object gives each value a meaningful name. You instantly understand that `foydalanuvchi.ism` is `\"Ali\"` — that makes your code readable.",
          "ru": "Массив — просто список, а объект даёт каждому значению осмысленное имя. Вы сразу понимаете, что `foydalanuvchi.ism` это `\"Ali\"` — это делает код читаемым."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Qiymatga nuqta orqali murojaat qilasiz: `foydalanuvchi.yosh`. Obyekt ichida funksiya (metod), massiv yoki boshqa obyekt ham bo'lishi mumkin — bu kuchli tuzilma.",
          "en": "You access a value with a dot: `foydalanuvchi.yosh`. An object can hold a function (method), an array, or even another object inside — it's a powerful structure.",
          "ru": "К значению обращаются через точку: `foydalanuvchi.yosh`. Объект может содержать функцию (метод), массив или даже другой объект — это мощная структура."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchi profili, mahsulot kartochkasi, server javobi (JSON). Internetdagi deyarli barcha ma'lumot obyektlar va massivlar ko'rinishida uzatiladi.",
          "en": "A user profile, a product card, a server response (JSON). Nearly all data on the internet is sent as objects and arrays.",
          "ru": "Профиль пользователя, карточка товара, ответ сервера (JSON). Почти все данные в интернете передаются в виде объектов и массивов."
        }
      }
    ],
    "task": {
      "uz": "`foydalanuvchi` obyektini yarating: `ism`, `yosh` va `shahar` kalitlari bilan. Foydalanuvchi ismini (`foydalanuvchi.ism`) `console.log` bilan chiqaring.",
      "en": "Create a `foydalanuvchi` object with `ism`, `yosh`, and `shahar` keys. Print the user's name (`foydalanuvchi.ism`) with `console.log`.",
      "ru": "Создайте объект `foydalanuvchi` с ключами `ism`, `yosh` и `shahar`. Выведите имя пользователя (`foydalanuvchi.ism`) через `console.log`."
    },
    "hint": {
      "uz": "Kalitga nuqta orqali murojaat qiling: `foydalanuvchi.ism`.",
      "en": "Access a key with a dot: `foydalanuvchi.ism`.",
      "ru": "Обращайтесь к ключу через точку: `foydalanuvchi.ism`."
    },
    "starterCode": "// TODO: \"foydalanuvchi\" obyektini ism, yosh va shahar kalitlari bilan yarating\nlet foydalanuvchi = {\n\n};\n// TODO: foydalanuvchi.ism qiymatini console.log bilan chiqaring\n",
    "solution": "let foydalanuvchi = {\n  ism: \"Ali\",\n  yosh: 20,\n  shahar: \"Toshkent\"\n};\nconsole.log(foydalanuvchi.ism);",
    "check": {
      "sourceContains": ["foydalanuvchi", "ism", "foydalanuvchi.ism"],
      "outputMatches": ".+"
    },
    "xp": 45,
    "monacoLang": "javascript",
    "preview": "js"
  }
];
