import type { LessonContent } from "./types";

export const pythonLessons: LessonContent[] = [
  {
    "title": {
      "uz": "print va o'zgaruvchilar",
      "en": "print & variables",
      "ru": "print и переменные"
    },
    "intro": {
      "uz": "Har bir Python sayohati ekranga so'z chiqarish va ma'lumotni saqlashdan boshlanadi.",
      "en": "Every Python journey starts with putting words on the screen and storing data.",
      "ru": "Каждое путешествие в Python начинается с вывода слов на экран и хранения данных."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`print()` — ekranga matn yoki natija chiqaradigan buyruq. *O'zgaruvchi* esa ma'lumotni nom ostida saqlovchi quti: `ism = \"Ali\"` deganda `ism` ichida `Ali` yotadi.",
          "en": "`print()` is the command that shows text or a result on the screen. A *variable* is a labeled box that stores data: in `name = \"Ali\"`, the box `name` holds `Ali`.",
          "ru": "`print()` — команда, выводящая текст или результат на экран. *Переменная* — это коробка с именем для данных: в `name = \"Ali\"` коробка `name` хранит `Ali`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "`print()` orqali dasturingiz siz bilan \"gaplashadi\" — natijani ko'rsatadi va xatolarni topishga yordam beradi. O'zgaruvchisiz har bir qiymatni qayta-qayta yozishingizga to'g'ri kelardi.",
          "en": "With `print()` your program \"talks\" to you — it shows results and helps you spot mistakes. Without variables you'd have to retype every value over and over.",
          "ru": "Через `print()` программа «разговаривает» с вами — показывает результат и помогает находить ошибки. Без переменных пришлось бы вписывать каждое значение заново."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`print()` bir vaqtda bir nechta narsani vergul bilan chiqara oladi: `print(\"Yosh:\", 25)`. O'zgaruvchini istalgan vaqtda yangilash mumkin — `son = 5`, keyin `son = 10`.",
          "en": "`print()` can show several things at once with commas: `print(\"Age:\", 25)`. A variable can be updated anytime — `n = 5`, then `n = 10`.",
          "ru": "`print()` может выводить несколько значений через запятую: `print(\"Возраст:\", 25)`. Переменную можно обновлять в любой момент — `n = 5`, затем `n = 10`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har qanday dasturda: foydalanuvchiga xabar berishda, hisob natijasini ko'rsatishda va kodni tekshirib (*debug*) chiqishda. Bu eng ko'p ishlatiladigan ikki vositadan biridir.",
          "en": "In any program: to message the user, to show a calculation result, and to debug your code. These are among the two most-used tools in all of Python.",
          "ru": "В любой программе: чтобы сообщить пользователю, показать результат вычисления и отладить код. Это одни из самых используемых инструментов в Python."
        }
      }
    ],
    "task": {
      "uz": "`ism` o'zgaruvchisiga ismingizni bering va uni `print()` bilan ekranga chiqaring.",
      "en": "Store your name in a variable `name` and print it to the screen with `print()`.",
      "ru": "Сохраните своё имя в переменной `name` и выведите её на экран через `print()`."
    },
    "hint": {
      "uz": "Avval `ism = \"Sizning ismingiz\"`, keyin `print(ism)` yozing.",
      "en": "First write `name = \"Your name\"`, then `print(name)`.",
      "ru": "Сначала `name = \"Ваше имя\"`, затем `print(name)`."
    },
    "starterCode": "# TODO: ismingizni `ism` o'zgaruvchisiga saqlang\nism = \"\"\n# TODO: `ism` ni print() bilan ekranga chiqaring\n",
    "solution": "ism = \"Ali\"\nprint(ism)",
    "check": {
      "mustRun": true,
      "sourceContains": ["print"],
      "outputMatches": ".+"
    },
    "xp": 20,
    "monacoLang": "python",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ma'lumot turlari",
      "en": "Data types",
      "ru": "Типы данных"
    },
    "intro": {
      "uz": "Python ma'lumotni turlarga ajratadi — son, matn, mantiq — va har biri o'zicha ishlaydi.",
      "en": "Python sorts data into types — numbers, text, truth values — and each behaves differently.",
      "ru": "Python делит данные на типы — числа, текст, логика — и каждый ведёт себя по-своему."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ma'lumot turi — qiymatning *xili*. Asosiylari: `int` (butun son, `7`), `float` (kasr son, `3.14`), `str` (matn, `\"salom\"`) va `bool` (`True`/`False`).",
          "en": "A data type is the *kind* of a value. The main ones are: `int` (whole number, `7`), `float` (decimal, `3.14`), `str` (text, `\"hello\"`) and `bool` (`True`/`False`).",
          "ru": "Тип данных — это *вид* значения. Основные: `int` (целое число, `7`), `float` (дробное, `3.14`), `str` (текст, `\"привет\"`) и `bool` (`True`/`False`)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Tur Python'ga qiymat bilan nima qilish mumkinligini aytadi: sonlarni qo'shish, matnlarni ulash mumkin. `\"5\" + 5` xato beradi, chunki matn va son aralashmaydi.",
          "en": "The type tells Python what you can do with a value: add numbers, join text. `\"5\" + 5` raises an error because text and a number don't mix.",
          "ru": "Тип говорит Python, что можно делать со значением: складывать числа, соединять текст. `\"5\" + 5` вызовет ошибку — текст и число не смешиваются."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Turni `type()` bilan tekshirasiz va `int()`, `str()`, `float()` orqali biridan ikkinchisiga o'tkazasiz. Masalan, `int(\"10\")` matnni `10` soniga aylantiradi.",
          "en": "You can check a type with `type()` and convert between them using `int()`, `str()`, `float()`. For example, `int(\"10\")` turns the text into the number `10`.",
          "ru": "Тип проверяют через `type()` и преобразуют с помощью `int()`, `str()`, `float()`. Например, `int(\"10\")` превращает текст в число `10`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchidan kelgan ma'lumot doim `str` bo'ladi — uni `int()` bilan songa aylantiramiz. Narx hisoblash, ism saqlash, shartlarni tekshirishda turlar har qadamda kerak.",
          "en": "Input from a user always arrives as `str` — we convert it with `int()`. Calculating prices, storing names, checking conditions — types are needed at every step.",
          "ru": "Ввод от пользователя всегда приходит как `str` — преобразуем его через `int()`. Расчёт цен, хранение имён, проверка условий — типы нужны на каждом шагу."
        }
      }
    ],
    "task": {
      "uz": "Bitta `int`, bitta `str` va bitta `bool` o'zgaruvchi yarating, keyin har birining turini `type()` bilan chiqaring.",
      "en": "Create one `int`, one `str` and one `bool` variable, then print each one's type with `type()`.",
      "ru": "Создайте по одной переменной `int`, `str` и `bool`, затем выведите тип каждой через `type()`."
    },
    "hint": {
      "uz": "`print(type(yosh))` o'zgaruvchining turini ko'rsatadi.",
      "en": "`print(type(age))` shows a variable's type.",
      "ru": "`print(type(age))` покажет тип переменной."
    },
    "starterCode": "yosh = 25\nism = \"Ali\"\ntalaba = True\n# TODO: har bir o'zgaruvchining turini type() bilan chiqaring (uchtasini)\nprint(type(yosh))\n",
    "solution": "yosh = 25\nism = \"Ali\"\ntalaba = True\nprint(type(yosh))\nprint(type(ism))\nprint(type(talaba))",
    "check": {
      "mustRun": true,
      "sourceContains": ["type"],
      "outputContains": ["int", "str", "bool"]
    },
    "xp": 25,
    "monacoLang": "python",
    "preview": "none"
  },
  {
    "title": {
      "uz": "if / elif / else",
      "en": "if / elif / else",
      "ru": "if / elif / else"
    },
    "intro": {
      "uz": "Dasturlar qaror qabul qila olishi kerak — shart bo'yicha turli yo'llardan yurish ana shu yerda boshlanadi.",
      "en": "Programs need to make decisions — choosing different paths based on a condition starts right here.",
      "ru": "Программы должны принимать решения — выбор разных путей по условию начинается именно здесь."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`if` — shart rost (`True`) bo'lsa, kodni ishga tushiradi. `elif` qo'shimcha shartlarni, `else` esa \"hech biri bo'lmasa\" holatini ushlaydi. Bloklar *bo'sh joy* (otstup) bilan ajratiladi.",
          "en": "`if` runs code when a condition is true (`True`). `elif` checks extra conditions, and `else` catches the \"none of the above\" case. Blocks are set off by *indentation*.",
          "ru": "`if` запускает код, когда условие истинно (`True`). `elif` проверяет дополнительные условия, а `else` ловит случай «ни одно из них». Блоки выделяются *отступом*."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Hayotdagi har bir tanlov shartga bog'liq: \"Agar yomg'ir yog'sa, soyabon ol\". Shartlarsiz dastur faqat to'g'ri chiziq bo'ylab yurardi va o'ylab harakat qila olmasdi.",
          "en": "Every real choice depends on a condition: \"If it rains, take an umbrella.\" Without conditions a program could only run in a straight line and never react.",
          "ru": "Любой реальный выбор зависит от условия: «Если идёт дождь — возьми зонт». Без условий программа шла бы только по прямой и не могла бы реагировать."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Taqqoslash operatorlari bilan ishlaydi: `==`, `!=`, `>`, `<`, `>=`, `<=`. Shartlarni `and`, `or`, `not` bilan birlashtirib murakkab qarorlar tuzasiz.",
          "en": "It works with comparison operators: `==`, `!=`, `>`, `<`, `>=`, `<=`. You combine conditions with `and`, `or`, `not` to build complex decisions.",
          "ru": "Работает с операторами сравнения: `==`, `!=`, `>`, `<`, `>=`, `<=`. Условия объединяют через `and`, `or`, `not` для сложных решений."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Parolni tekshirish, baholarni belgilash (`>= 90` bo'lsa \"a'lo\"), o'yinda g'olibni aniqlash — barchasi shartlarga tayanadi. Bu mantiqning yuragi.",
          "en": "Checking a password, assigning grades (\"A\" if `>= 90`), deciding a game's winner — all rely on conditions. This is the heart of logic.",
          "ru": "Проверка пароля, выставление оценок («отлично» если `>= 90`), определение победителя в игре — всё держится на условиях. Это сердце логики."
        }
      }
    ],
    "task": {
      "uz": "`yosh` o'zgaruvchisini tekshiring: 18 dan katta yoki teng bo'lsa \"Voyaga yetgan\", aks holda \"Voyaga yetmagan\" deb chiqaring.",
      "en": "Check the `age` variable: print \"Adult\" if it's 18 or more, otherwise print \"Minor\".",
      "ru": "Проверьте переменную `age`: выведите «Совершеннолетний», если 18 или больше, иначе «Несовершеннолетний»."
    },
    "hint": {
      "uz": "`if yosh >= 18:` dan keyingi qator bo'sh joy bilan boshlanadi.",
      "en": "The line after `if age >= 18:` must start with indentation.",
      "ru": "Строка после `if age >= 18:` должна начинаться с отступа."
    },
    "starterCode": "yosh = 20\nif yosh >= 18:\n    # TODO: \"Voyaga yetgan\" deb chiqaring\n    pass\nelse:\n    # TODO: \"Voyaga yetmagan\" deb chiqaring\n    pass\n",
    "solution": "yosh = 20\nif yosh >= 18:\n    print(\"Voyaga yetgan\")\nelse:\n    print(\"Voyaga yetmagan\")",
    "check": {
      "mustRun": true,
      "sourceContains": ["if", "else"],
      "outputContains": ["Voyaga yetgan"]
    },
    "xp": 28,
    "monacoLang": "python",
    "preview": "none"
  },
  {
    "title": {
      "uz": "for / while sikllari",
      "en": "for / while loops",
      "ru": "Циклы for / while"
    },
    "intro": {
      "uz": "Bir xil ishni qo'lda yuz marta yozmang — sikllar buni siz uchun takrorlaydi.",
      "en": "Don't write the same task a hundred times by hand — loops repeat it for you.",
      "ru": "Не пишите одно и то же сто раз вручную — циклы повторят это за вас."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Sikl — kodni takrorlaydigan tuzilma. `for` ma'lum bir to'plam bo'ylab yuradi (`for i in range(5):`), `while` esa shart rost bo'lguncha aylanaveradi.",
          "en": "A loop is a structure that repeats code. `for` walks over a known collection (`for i in range(5):`), while `while` keeps going as long as a condition stays true.",
          "ru": "Цикл — конструкция, повторяющая код. `for` проходит по заданному набору (`for i in range(5):`), а `while` крутится, пока условие истинно."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ming foydalanuvchiga xabar yuborish yoki ro'yxatdagi har bir narsani ko'rib chiqishni qo'lda yozish mumkin emas. Sikl bir martalik kodni minglab marta ishlatadi.",
          "en": "Sending a message to a thousand users or going through every item in a list can't be written by hand. A loop runs code once but applies it thousands of times.",
          "ru": "Отправить сообщение тысяче пользователей или пройти по каждому элементу списка вручную невозможно. Цикл пишется один раз, а выполняется тысячи раз."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`range(1, 6)` 1 dan 5 gacha sanaydi. `break` siklni to'xtatadi, `continue` esa bitta aylanishni o'tkazib yuboradi. Siklni o'zgaruvchi yig'ish uchun ham ishlatasiz.",
          "en": "`range(1, 6)` counts 1 to 5. `break` stops the loop and `continue` skips one round. You also use loops to accumulate a running total in a variable.",
          "ru": "`range(1, 6)` считает от 1 до 5. `break` останавливает цикл, `continue` пропускает один проход. Цикл также копит итог в переменной."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Ro'yxatlarni ko'rib chiqish, jami summani hisoblash, o'yin sikli (har kadrda qayta chizish) va foydalanuvchidan to'g'ri javob kelguncha so'rashda. Sikllar hamma joyda.",
          "en": "Iterating over lists, summing totals, the game loop (redrawing each frame), and asking the user until a valid answer comes. Loops are everywhere.",
          "ru": "Перебор списков, подсчёт суммы, игровой цикл (перерисовка каждого кадра) и запрос у пользователя до верного ответа. Циклы повсюду."
        }
      }
    ],
    "task": {
      "uz": "`for` sikli yordamida 1 dan 5 gacha bo'lgan sonlarni ekranga chiqaring.",
      "en": "Use a `for` loop to print the numbers from 1 to 5 on the screen.",
      "ru": "С помощью цикла `for` выведите числа от 1 до 5 на экран."
    },
    "hint": {
      "uz": "`range(1, 6)` 1, 2, 3, 4, 5 ni beradi — oxirgi son kirmaydi.",
      "en": "`range(1, 6)` gives 1, 2, 3, 4, 5 — the last number is excluded.",
      "ru": "`range(1, 6)` даёт 1, 2, 3, 4, 5 — последнее число не входит."
    },
    "starterCode": "# TODO: for sikli bilan 1 dan 5 gacha sonlarni chiqaring\nfor son in range(1, 6):\n    pass\n",
    "solution": "for son in range(1, 6):\n    print(son)",
    "check": {
      "mustRun": true,
      "sourceContains": ["for", "range"],
      "outputContains": ["1", "2", "3", "4", "5"]
    },
    "xp": 30,
    "monacoLang": "python",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Funksiyalar",
      "en": "Functions",
      "ru": "Функции"
    },
    "intro": {
      "uz": "Kodingizni qayta ishlatiladigan \"buyruqlar\"ga bo'lib, har safar qaytadan yozmaslikni o'rganing.",
      "en": "Break your code into reusable \"commands\" so you never have to rewrite it again.",
      "ru": "Разбейте код на повторно используемые «команды», чтобы не писать его заново."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Funksiya — nom berilgan kod bo'lagi. Uni `def salom():` bilan e'lon qilasiz, keyin `salom()` deb *chaqirasiz*. Ichidagi kod faqat chaqirilganda ishlaydi.",
          "en": "A function is a named block of code. You declare it with `def greet():`, then *call* it with `greet()`. The code inside runs only when it's called.",
          "ru": "Функция — это именованный блок кода. Объявляется через `def greet():`, затем *вызывается* как `greet()`. Код внутри работает только при вызове."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir ishni ko'p joyda takrorlaganingizda kodni nusxalash o'rniga bitta funksiyaga jamlaysiz. Tuzatish kerak bo'lsa, faqat bir joyni o'zgartirasiz — vaqt va xatolar tejaladi.",
          "en": "When you repeat a task in many places, you gather it into one function instead of copying code. To fix something, you change just one spot — saving time and errors.",
          "ru": "Когда задача повторяется во многих местах, вы собираете её в одну функцию вместо копирования. Исправить нужно лишь в одном месте — меньше ошибок и времени."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Funksiya *parametr* qabul qiladi (`def salom(ism):`) va `return` bilan natija qaytaradi. Qaytgan qiymatni o'zgaruvchiga saqlab, keyin ishlatish mumkin.",
          "en": "A function takes *parameters* (`def greet(name):`) and gives back a result with `return`. You can store the returned value in a variable and use it later.",
          "ru": "Функция принимает *параметры* (`def greet(name):`) и возвращает результат через `return`. Возвращённое значение можно сохранить в переменную и использовать позже."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har bir jiddiy dastur funksiyalardan tuzilgan: hisob-kitob, ma'lumotni tekshirish, tugma bosilganda ishlovchi kod. `print()` va `len()` ham — tayyor funksiyalar.",
          "en": "Every serious program is built from functions: calculations, validating data, code that runs when a button is clicked. Even `print()` and `len()` are functions.",
          "ru": "Любая серьёзная программа состоит из функций: вычисления, проверка данных, код по нажатию кнопки. Даже `print()` и `len()` — это функции."
        }
      }
    ],
    "task": {
      "uz": "`salomlash(ism)` funksiyasini yozing: u \"Salom, \" va ismni qaytarsin. Keyin uni o'z ismingiz bilan chaqirib, natijani chiqaring.",
      "en": "Write a function `greet(name)` that returns \"Hello, \" plus the name. Then call it with your own name and print the result.",
      "ru": "Напишите функцию `greet(name)`, возвращающую «Привет, » плюс имя. Затем вызовите её со своим именем и выведите результат."
    },
    "hint": {
      "uz": "`return \"Salom, \" + ism` qiymatni qaytaradi, `print(salomlash(\"Ali\"))` esa chiqaradi.",
      "en": "`return \"Hello, \" + name` gives the value back, and `print(greet(\"Ali\"))` shows it.",
      "ru": "`return \"Привет, \" + name` возвращает значение, а `print(greet(\"Ali\"))` выводит его."
    },
    "starterCode": "def salomlash(ism):\n    # TODO: \"Salom, \" va ismni birlashtirib return qiling\n    return \"\"\n\n# TODO: funksiyani chaqirib, natijani print() bilan chiqaring\n",
    "solution": "def salomlash(ism):\n    return \"Salom, \" + ism\n\nprint(salomlash(\"Ali\"))",
    "check": {
      "mustRun": true,
      "sourceContains": ["def", "return"],
      "outputContains": ["Salom,"]
    },
    "xp": 33,
    "monacoLang": "python",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ro'yxatlar (list)",
      "en": "Lists",
      "ru": "Списки"
    },
    "intro": {
      "uz": "Bitta o'zgaruvchida ko'p qiymatni — butun bir ro'yxatni — saqlashni o'rganing.",
      "en": "Learn to store many values in a single variable — a whole list at once.",
      "ru": "Научитесь хранить много значений в одной переменной — целый список сразу."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ro'yxat — tartiblangan qiymatlar to'plami, kvadrat qavs ichida: `mevalar = [\"olma\", \"banan\"]`. Har bir element *indeks* (raqam) bilan ataladi, sanash `0` dan boshlanadi.",
          "en": "A list is an ordered collection of values in square brackets: `fruits = [\"apple\", \"banana\"]`. Each element is reached by an *index* (a number), and counting starts at `0`.",
          "ru": "Список — упорядоченный набор значений в квадратных скобках: `fruits = [\"яблоко\", \"банан\"]`. К каждому элементу обращаются по *индексу* (числу), отсчёт идёт с `0`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "100 ta talaba ismini 100 ta alohida o'zgaruvchiga saqlash aqlga sig'maydi. Ro'yxat ularni bitta nom ostida jamlaydi va sikl bilan birgalikda osongina boshqaradi.",
          "en": "Storing 100 student names in 100 separate variables is unthinkable. A list gathers them under one name and, together with a loop, manages them with ease.",
          "ru": "Хранить 100 имён студентов в 100 отдельных переменных немыслимо. Список собирает их под одним именем и вместе с циклом легко ими управляет."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`append()` element qo'shadi, `remove()` o'chiradi, `len()` sonini beradi. `mevalar[0]` birinchi elementni oladi, `for meva in mevalar:` esa hammasini aylanib chiqadi.",
          "en": "`append()` adds an item, `remove()` deletes one, `len()` gives the count. `fruits[0]` gets the first element, and `for fruit in fruits:` walks through them all.",
          "ru": "`append()` добавляет элемент, `remove()` удаляет, `len()` даёт количество. `fruits[0]` берёт первый элемент, а `for fruit in fruits:` проходит по всем."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Savatdagi mahsulotlar, do'stlar ro'yxati, o'yindagi ballar tarixi — barchasi ro'yxat. Deyarli har bir dastur ma'lumotlar to'plamini ro'yxatda saqlaydi.",
          "en": "Items in a cart, a friends list, a game's score history — all are lists. Almost every program keeps a collection of data in a list.",
          "ru": "Товары в корзине, список друзей, история очков в игре — всё это списки. Почти каждая программа хранит набор данных в списке."
        }
      }
    ],
    "task": {
      "uz": "Uchta sevimli mevangizdan ro'yxat tuzing, unga `append()` bilan to'rtinchisini qo'shing va butun ro'yxatni chiqaring.",
      "en": "Make a list of your three favorite fruits, add a fourth with `append()`, and print the whole list.",
      "ru": "Составьте список из трёх любимых фруктов, добавьте четвёртый через `append()` и выведите весь список."
    },
    "hint": {
      "uz": "`mevalar.append(\"uzum\")` ro'yxat oxiriga yangi element qo'shadi.",
      "en": "`fruits.append(\"grape\")` adds a new item to the end of the list.",
      "ru": "`fruits.append(\"виноград\")` добавляет новый элемент в конец списка."
    },
    "starterCode": "mevalar = [\"olma\", \"banan\", \"uzum\"]\n# TODO: append() bilan to'rtinchi mevani qo'shing\n# TODO: butun ro'yxatni print() bilan chiqaring\n",
    "solution": "mevalar = [\"olma\", \"banan\", \"uzum\"]\nmevalar.append(\"shaftoli\")\nprint(mevalar)",
    "check": {
      "mustRun": true,
      "sourceContains": ["append", "print"],
      "outputContains": ["olma", "banan", "uzum"]
    },
    "xp": 35,
    "monacoLang": "python",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Lug'atlar (dict)",
      "en": "Dictionaries",
      "ru": "Словари"
    },
    "intro": {
      "uz": "Ma'lumotni \"kalit–qiymat\" juftliklari sifatida saqlab, har birini nomi bo'yicha toping.",
      "en": "Store data as \"key–value\" pairs and look each one up by its name.",
      "ru": "Храните данные парами «ключ–значение» и находите каждое по имени."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Lug'at — *kalit* va *qiymat* juftliklarini saqlaydigan to'plam, jingalak qavs ichida: `odam = {\"ism\": \"Ali\", \"yosh\": 25}`. Qiymatni indeks emas, kalit orqali olasiz.",
          "en": "A dictionary stores *key*–*value* pairs in curly braces: `person = {\"name\": \"Ali\", \"age\": 25}`. You get a value by its key, not by an index.",
          "ru": "Словарь хранит пары *ключ*–*значение* в фигурных скобках: `person = {\"name\": \"Ali\", \"age\": 25}`. Значение берут по ключу, а не по индексу."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ro'yxatda `odam[0]` nimani anglatishini eslab qolish qiyin, ammo `odam[\"ism\"]` o'z-o'zidan tushunarli. Lug'at ma'lumotni mazmunli nomlar bilan bog'laydi.",
          "en": "In a list it's hard to remember what `person[0]` means, but `person[\"name\"]` is self-explanatory. A dictionary ties data to meaningful names.",
          "ru": "В списке трудно помнить, что значит `person[0]`, а `person[\"name\"]` понятно само по себе. Словарь связывает данные с осмысленными именами."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Yangi juftlik qo'shasiz: `odam[\"shahar\"] = \"Toshkent\"`. `keys()` kalitlarni, `values()` qiymatlarni beradi. `for kalit in odam:` bilan hammasini aylanib chiqasiz.",
          "en": "You add a pair: `person[\"city\"] = \"Tashkent\"`. `keys()` gives the keys, `values()` the values. `for key in person:` lets you loop through them all.",
          "ru": "Вы добавляете пару: `person[\"city\"] = \"Ташкент\"`. `keys()` даёт ключи, `values()` — значения. `for key in person:` проходит по всем."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchi profili, sozlamalar, mahsulot ma'lumotlari va internetdan keladigan JSON ma'lumotlari — deyarli barchasi lug'at ko'rinishida. Bu real dunyo ma'lumotining asosiy shakli.",
          "en": "User profiles, settings, product data, and JSON from the internet — nearly all of it comes as dictionaries. It's the main shape of real-world data.",
          "ru": "Профили пользователей, настройки, данные о товарах и JSON из интернета — почти всё это словари. Это основная форма реальных данных."
        }
      }
    ],
    "task": {
      "uz": "O'zingiz haqingizda `ism`, `yosh` va `shahar` kalitlari bo'lgan lug'at tuzing va `ism` qiymatini chiqaring.",
      "en": "Make a dictionary about yourself with keys `name`, `age` and `city`, then print the `name` value.",
      "ru": "Составьте словарь о себе с ключами `name`, `age` и `city`, затем выведите значение `name`."
    },
    "hint": {
      "uz": "`odam[\"ism\"]` kalit orqali qiymatga murojaat qiladi.",
      "en": "`person[\"name\"]` accesses the value by its key.",
      "ru": "`person[\"name\"]` обращается к значению по ключу."
    },
    "starterCode": "# TODO: ism, yosh va shahar kalitlari bo'lgan lug'at tuzing\nodam = {}\n# TODO: \"ism\" qiymatini print() bilan chiqaring\n",
    "solution": "odam = {\"ism\": \"Ali\", \"yosh\": 25, \"shahar\": \"Toshkent\"}\nprint(odam[\"ism\"])",
    "check": {
      "mustRun": true,
      "sourceContains": ["ism", "print"],
      "outputMatches": ".+"
    },
    "xp": 38,
    "monacoLang": "python",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Modullar va import",
      "en": "Modules & imports",
      "ru": "Модули и импорт"
    },
    "intro": {
      "uz": "Hammasini noldan yozmang — Python'ning tayyor kutubxonalarini import qilib, kuchingizni oshiring.",
      "en": "Don't build everything from scratch — import Python's ready-made libraries to power up.",
      "ru": "Не пишите всё с нуля — импортируйте готовые библиотеки Python и усильте свои возможности."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Modul — boshqa birov yozgan funksiyalar to'plami solingan fayl. Uni `import math` deb chaqirasiz va ichidagilardan foydalanasiz: `math.sqrt(16)` ildiz oladi.",
          "en": "A module is a file full of functions someone else wrote. You bring it in with `import math` and use what's inside: `math.sqrt(16)` takes a square root.",
          "ru": "Модуль — это файл с функциями, написанными кем-то другим. Подключаете его через `import math` и пользуетесь содержимым: `math.sqrt(16)` берёт корень."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Tasodifiy son, sana, matematik formulalarni o'zingiz yozish ko'p vaqt oladi va xatolarga to'la bo'ladi. Modullar bu ishlarni sinovdan o'tgan, tayyor kod bilan hal qiladi.",
          "en": "Writing random numbers, dates, or math formulas yourself takes time and is full of bugs. Modules solve these with tested, ready-made code.",
          "ru": "Писать самому генерацию случайных чисел, даты или формулы долго и чревато ошибками. Модули решают это проверенным готовым кодом."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`import` butun modulni, `from random import randint` esa faqat kerakli qismini oladi. `random` tasodifiy son, `datetime` sana, `math` matematika beradi.",
          "en": "`import` brings the whole module, while `from random import randint` takes just the part you need. `random` gives random numbers, `datetime` dates, `math` math.",
          "ru": "`import` подключает весь модуль, а `from random import randint` берёт только нужную часть. `random` даёт случайные числа, `datetime` — даты, `math` — математику."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Veb-saytlar (`flask`), ma'lumot tahlili (`pandas`), o'yinlar (`pygame`) — barchasi modullarga tayanadi. Python kuchining sirri uning ulkan kutubxonalar olamida.",
          "en": "Websites (`flask`), data analysis (`pandas`), games (`pygame`) — all rely on modules. Python's real power lies in its vast world of libraries.",
          "ru": "Веб-сайты (`flask`), анализ данных (`pandas`), игры (`pygame`) — всё опирается на модули. Настоящая сила Python — в её огромном мире библиотек."
        }
      }
    ],
    "task": {
      "uz": "`random` modulini import qiling va `randint(1, 6)` yordamida zarrning tasodifiy natijasini (1 dan 6 gacha) chiqaring.",
      "en": "Import the `random` module and use `randint(1, 6)` to print a random dice roll (from 1 to 6).",
      "ru": "Импортируйте модуль `random` и через `randint(1, 6)` выведите случайный бросок кубика (от 1 до 6)."
    },
    "hint": {
      "uz": "`import random` dan keyin `random.randint(1, 6)` ni ishlating.",
      "en": "After `import random`, use `random.randint(1, 6)`.",
      "ru": "После `import random` используйте `random.randint(1, 6)`."
    },
    "starterCode": "# TODO: random modulini import qiling\n\n# TODO: randint(1, 6) bilan tasodifiy son hosil qilib, print() bilan chiqaring\nzarr = 0\n",
    "solution": "import random\n\nzarr = random.randint(1, 6)\nprint(zarr)",
    "check": {
      "mustRun": true,
      "sourceContains": ["import random", "randint"],
      "outputMatches": "[1-6]"
    },
    "xp": 40,
    "monacoLang": "python",
    "preview": "none"
  }
];
