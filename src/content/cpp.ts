import type { LessonContent } from "./types";

export const cppLessons: LessonContent[] = [
  {
    "title": {
      "uz": "cout va o'zgaruvchilar",
      "en": "cout & Variables",
      "ru": "cout и переменные"
    },
    "intro": {
      "uz": "Har bir C++ dasturchining birinchi qadami — ekranga matn chiqarish va ma'lumotni saqlash.",
      "en": "Every C++ programmer's first step is printing text and storing data.",
      "ru": "Первый шаг каждого C++ программиста — вывести текст и сохранить данные."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`cout` — ekranga matn va sonlarni chiqaradigan oqim (`<iostream>` ichida). O'zgaruvchi esa qiymatni saqlaydigan nomli quti, masalan `int yosh = 20;`.",
          "en": "`cout` is the output stream that prints text and numbers to the screen (from `<iostream>`). A variable is a named box that stores a value, like `int age = 20;`.",
          "ru": "`cout` — это поток вывода, печатающий текст и числа на экран (из `<iostream>`). Переменная — это именованная ячейка для значения, например `int age = 20;`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Natijani ko'rmasdan dasturning ishlayotganini bilolmaysiz — `cout` aynan shu oynani ochadi. O'zgaruvchilar esa ma'lumotni eslab qoladi, shunda uni qayta-qayta ishlatasiz.",
          "en": "Without seeing output you can't tell if your program works — `cout` opens that window. Variables remember data so you can reuse it again and again.",
          "ru": "Без вывода вы не узнаете, работает ли программа — `cout` открывает это окно. Переменные запоминают данные, чтобы использовать их снова."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`cout << \"Salom\" << yosh;` kabi `<<` operatori bilan matn va o'zgaruvchilarni zanjir qilib chiqaradi. `<< endl` yoki `<< \"\\n\"` yangi qatorga o'tkazadi.",
          "en": "With the `<<` operator it chains text and variables, like `cout << \"Hi\" << age;`. Use `<< endl` or `<< \"\\n\"` to move to a new line.",
          "ru": "Оператором `<<` он соединяет текст и переменные, например `cout << \"Привет\" << age;`. `<< endl` или `<< \"\\n\"` переводит на новую строку."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Natijalarni ko'rsatishda, xatolarni tekshirishda (debug) va foydalanuvchiga xabar berishda. Deyarli har bir C++ dasturda `cout` uchraydi.",
          "en": "For showing results, debugging, and giving messages to the user. Almost every C++ program uses `cout` somewhere.",
          "ru": "Для показа результатов, отладки и сообщений пользователю. `cout` встречается почти в каждой C++ программе."
        }
      }
    ],
    "task": {
      "uz": "Bir `int` o'zgaruvchiga yoshingizni saqlang va `cout` bilan \"Mening yoshim: 20\" ko'rinishida chiqaring.",
      "en": "Store your age in an `int` variable and print \"My age: 20\" using `cout`.",
      "ru": "Сохраните свой возраст в переменной `int` и выведите \"Мой возраст: 20\" через `cout`."
    },
    "hint": {
      "uz": "`cout << \"Mening yoshim: \" << yosh;` — matn qo'shtirnoq ichida, o'zgaruvchi tashqarida.",
      "en": "`cout << \"My age: \" << age;` — text goes in quotes, the variable stays outside.",
      "ru": "`cout << \"Мой возраст: \" << age;` — текст в кавычках, переменная снаружи."
    },
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int yosh = 20;\n    // TODO: cout bilan \"Mening yoshim: \" va yosh ni chiqaring\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int yosh = 20;\n    cout << \"Mening yoshim: \" << yosh << endl;\n    return 0;\n}",
    "check": {
      "outputContains": ["Mening yoshim:", "20"],
      "sourceContains": ["cout"]
    },
    "xp": 20,
    "monacoLang": "cpp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ma'lumot turlari",
      "en": "Data Types",
      "ru": "Типы данных"
    },
    "intro": {
      "uz": "C++ har bir o'zgaruvchidan uning turini oldindan bilishni talab qiladi — bu uni tez va aniq qiladi.",
      "en": "C++ asks you to declare each variable's type up front — that's what makes it fast and precise.",
      "ru": "C++ требует заранее указать тип каждой переменной — именно это делает его быстрым и точным."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ma'lumot turi — o'zgaruvchi qanday qiymat saqlashini bildiradi: `int` butun son, `double` kasr son, `char` bitta belgi, `bool` rost/yolg'on, `string` matn.",
          "en": "A data type tells what kind of value a variable holds: `int` whole numbers, `double` decimals, `char` a single letter, `bool` true/false, `string` text.",
          "ru": "Тип данных говорит, какое значение хранит переменная: `int` целые, `double` дробные, `char` один символ, `bool` истина/ложь, `string` текст."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "To'g'ri tur tanlash xotirani tejaydi va xatolarning oldini oladi — pulni `double`, yoshni `int` da saqlash mantiqan to'g'ri. Noto'g'ri tur natijani buzadi, masalan `int` da `7/2` natijasi `3` chiqadi.",
          "en": "Choosing the right type saves memory and prevents bugs — money fits `double`, age fits `int`. A wrong type breaks results, e.g. `7/2` gives `3` with `int`.",
          "ru": "Правильный тип экономит память и предотвращает ошибки — деньги в `double`, возраст в `int`. Неверный тип ломает результат: `7/2` даёт `3` при `int`."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Turlar bilan arifmetika (`+ - * /`), taqqoslash va matnni birlashtirish mumkin. `auto` kalit so'zi turni qiymatdan o'zi aniqlaydi, masalan `auto x = 3.14;`.",
          "en": "Types let you do arithmetic (`+ - * /`), comparisons, and joining text. The `auto` keyword deduces the type from the value, like `auto x = 3.14;`.",
          "ru": "С типами доступны арифметика (`+ - * /`), сравнения и склейка текста. Ключевое слово `auto` выводит тип из значения: `auto x = 3.14;`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Hisob-kitoblarda (`double` narx), foydalanuvchi ismlarida (`string`), holatlarni belgilashda (`bool` faolmi). Har qanday ma'lumotni saqlashda tur tanlanadi.",
          "en": "In calculations (`double` price), user names (`string`), flags (`bool` is-active). Any data you store needs a chosen type.",
          "ru": "В расчётах (`double` цена), именах (`string`), флагах (`bool` активен). Любые данные требуют выбора типа."
        }
      }
    ],
    "task": {
      "uz": "Bitta `string` ism, bitta `double` bo'y va bitta `bool` o'quvchimi degan o'zgaruvchilar yarating va ularni `cout` bilan chiqaring.",
      "en": "Create a `string` name, a `double` height, and a `bool` is-student variable, then print all three with `cout`.",
      "ru": "Создайте переменные `string` имя, `double` рост и `bool` студент, затем выведите все три через `cout`."
    },
    "hint": {
      "uz": "`string` uchun `#include <string>` kerak bo'lishi mumkin. `bool` qiymati `true` yoki `false`.",
      "en": "You may need `#include <string>` for `string`. A `bool` is `true` or `false`.",
      "ru": "Для `string` может понадобиться `#include <string>`. Значение `bool` — `true` или `false`."
    },
    "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // TODO: string ism, double boy va bool oquvchi o'zgaruvchilarini yarating\n    // TODO: cout bilan uchalasini chiqaring\n    return 0;\n}",
    "solution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string ism = \"Ali\";\n    double boy = 1.75;\n    bool oquvchi = true;\n    cout << ism << \" \" << boy << \" \" << oquvchi << endl;\n    return 0;\n}",
    "check": {
      "outputContains": ["Ali", "1.75", "1"],
      "sourceContains": ["string", "double", "bool"]
    },
    "xp": 24,
    "monacoLang": "cpp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Shartlar",
      "en": "Conditions",
      "ru": "Условия"
    },
    "intro": {
      "uz": "Dastur \"agar... bo'lsa\" deb qaror qabul qila olganda haqiqiy aqlli bo'la boshlaydi.",
      "en": "A program gets truly smart once it can decide \"if... then\".",
      "ru": "Программа становится по-настоящему умной, когда умеет решать «если... то»."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Shart — `if (shart) { ... }` ko'rinishidagi tekshiruv: agar shart rost bo'lsa, ichidagi kod ishlaydi. `else` esa shart yolg'on bo'lganda boshqa yo'lni tanlaydi.",
          "en": "A condition is a check like `if (test) { ... }`: if the test is true, the code inside runs. `else` chooses another path when the test is false.",
          "ru": "Условие — это проверка `if (тест) { ... }`: если тест истинен, код внутри выполняется. `else` выбирает другой путь, когда тест ложен."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Shartlarsiz dastur har doim bir xil ishlaydi — u vaziyatga moslasha olmaydi. `if` foydalanuvchi kiritgan ma'lumotga qarab turlicha javob berishga imkon beradi.",
          "en": "Without conditions a program always does the same thing — it can't adapt. `if` lets it respond differently depending on the input.",
          "ru": "Без условий программа всегда делает одно и то же — не адаптируется. `if` позволяет реагировать по-разному в зависимости от ввода."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Taqqoslash operatorlari (`==`, `!=`, `<`, `>`, `<=`, `>=`) va mantiqiy operatorlar (`&&`, `||`, `!`) bilan murakkab qarorlar tuzadi. `else if` bir nechta variantni ketma-ket tekshiradi.",
          "en": "With comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) and logic (`&&`, `||`, `!`) it builds complex decisions. `else if` checks several options in a row.",
          "ru": "С операторами сравнения (`==`, `!=`, `<`, `>`, `<=`, `>=`) и логики (`&&`, `||`, `!`) строит сложные решения. `else if` проверяет несколько вариантов подряд."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Login tekshiruvida (parol to'g'rimi), o'yinlarda (g'alabani aniqlash), baholashda (o'tdi/yiqildi). Har qanday tarmoqlanish shu yerda.",
          "en": "In login checks (is the password right), games (detect a win), grading (pass/fail). Any branching logic lives here.",
          "ru": "В проверке логина (верен ли пароль), играх (победа), оценках (сдал/нет). Любое ветвление здесь."
        }
      }
    ],
    "task": {
      "uz": "Bir `int` ball o'zgaruvchisini yarating: agar 60 dan katta yoki teng bo'lsa \"O'tdingiz\", aks holda \"Yiqildingiz\" deb chiqaring.",
      "en": "Make an `int` score variable: if it's 60 or more print \"Passed\", otherwise print \"Failed\".",
      "ru": "Создайте переменную `int` балл: если 60 или больше — выведите \"Сдал\", иначе \"Не сдал\"."
    },
    "hint": {
      "uz": "`if (ball >= 60) { ... } else { ... }` — taqqoslash uchun `>=` ishlatiladi.",
      "en": "`if (score >= 60) { ... } else { ... }` — use `>=` for the comparison.",
      "ru": "`if (ball >= 60) { ... } else { ... }` — для сравнения используйте `>=`."
    },
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int ball = 75;\n    // TODO: if/else bilan ball >= 60 bo'lsa \"O'tdingiz\", aks holda \"Yiqildingiz\" chiqaring\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int ball = 75;\n    if (ball >= 60) {\n        cout << \"O'tdingiz\" << endl;\n    } else {\n        cout << \"Yiqildingiz\" << endl;\n    }\n    return 0;\n}",
    "check": {
      "outputContains": ["O'tdingiz"],
      "sourceContains": ["if", ">="]
    },
    "xp": 28,
    "monacoLang": "cpp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Sikllar",
      "en": "Loops",
      "ru": "Циклы"
    },
    "intro": {
      "uz": "Bir ishni 1000 marta qo'lda yozmang — siklga aytsangiz, u o'zi takrorlaydi.",
      "en": "Don't write the same thing 1000 times — tell a loop and it repeats for you.",
      "ru": "Не пишите одно и то же 1000 раз — скажите циклу, и он повторит сам."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Sikl — kodni shart bajarilguncha takrorlaydigan tuzilma. `for` ma'lum marta, `while` shart rost ekan, `do...while` esa kamida bir marta ishlaydi.",
          "en": "A loop is a structure that repeats code while a condition holds. `for` runs a set number of times, `while` runs while a test is true, `do...while` runs at least once.",
          "ru": "Цикл — конструкция, повторяющая код, пока условие верно. `for` — заданное число раз, `while` — пока тест истинен, `do...while` — хотя бы один раз."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Takrorlanuvchi ishlarni qo'lda yozish mumkin emas — 1 dan 100 gacha sanashni tasavvur qiling. Sikl bitta blok bilan minglab amalni bajaradi.",
          "en": "Repetitive work can't be hand-written — imagine counting 1 to 100. A loop does thousands of steps with a single block.",
          "ru": "Повторяющуюся работу не напишешь вручную — представьте счёт от 1 до 100. Цикл делает тысячи шагов одним блоком."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Ro'yxatlarni aylanib chiqadi, yig'indi hisoblaydi, foydalanuvchidan to'g'ri javob kelguncha so'raydi. `break` siklni to'xtatadi, `continue` keyingi qadamga o'tadi.",
          "en": "It iterates lists, sums numbers, keeps asking until valid input arrives. `break` stops the loop, `continue` jumps to the next step.",
          "ru": "Он обходит списки, считает суммы, спрашивает до верного ввода. `break` останавливает цикл, `continue` переходит к следующему шагу."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Massivlarni qayta ishlashda, jadval chiqarishda, animatsiya kadrlarida va o'yin asosiy siklida. Ko'p ma'lumot bo'lgan joyda sikl bor.",
          "en": "In processing arrays, printing tables, animation frames, and the main game loop. Wherever there's a lot of data, there's a loop.",
          "ru": "В обработке массивов, выводе таблиц, кадрах анимации и главном цикле игры. Где много данных — там цикл."
        }
      }
    ],
    "task": {
      "uz": "`for` sikl yordamida 1 dan 5 gacha bo'lgan sonlarni har birini alohida qatorda chiqaring.",
      "en": "Use a `for` loop to print the numbers 1 through 5, each on its own line.",
      "ru": "С помощью цикла `for` выведите числа от 1 до 5, каждое на своей строке."
    },
    "hint": {
      "uz": "`for (int i = 1; i <= 5; i++) { cout << i << endl; }` — `i++` har qadamda bittaga oshiradi.",
      "en": "`for (int i = 1; i <= 5; i++) { cout << i << endl; }` — `i++` adds one each step.",
      "ru": "`for (int i = 1; i <= 5; i++) { cout << i << endl; }` — `i++` увеличивает на единицу каждый шаг."
    },
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: for sikl bilan 1 dan 5 gacha sonlarni har birini alohida qatorda chiqaring\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << i << endl;\n    }\n    return 0;\n}",
    "check": {
      "outputContains": ["1", "2", "3", "4", "5"],
      "sourceContains": ["for"]
    },
    "xp": 30,
    "monacoLang": "cpp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Funksiyalar",
      "en": "Functions",
      "ru": "Функции"
    },
    "intro": {
      "uz": "Bir marta yozing, ko'p marta chaqiring — funksiya kodingizni toza va qayta ishlatiladigan qiladi.",
      "en": "Write once, call many times — functions keep your code clean and reusable.",
      "ru": "Напишите один раз, вызывайте много — функции делают код чистым и переиспользуемым."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Funksiya — nom berilgan kod bloki, masalan `int qosh(int a, int b)`. U *parametr* qabul qiladi va `return` orqali natija qaytaradi.",
          "en": "A function is a named block of code, like `int add(int a, int b)`. It takes *parameters* and gives back a result with `return`.",
          "ru": "Функция — это именованный блок кода, например `int add(int a, int b)`. Она принимает *параметры* и возвращает результат через `return`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni qayta-qayta yozish xato va vaqt yo'qotishga olib keladi. Funksiya logikani bitta joyga jamlaydi — uni o'zgartirsangiz, hamma joyda o'zgaradi.",
          "en": "Repeating the same code wastes time and invites bugs. A function gathers logic in one place — change it once and it changes everywhere.",
          "ru": "Повтор одного кода тратит время и плодит ошибки. Функция собирает логику в одном месте — измените раз, и поменяется везде."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Qiymat qaytaradi yoki shunchaki ish bajaradi (`void`). Bir nechta parametr oladi, hatto o'zini o'zi chaqirishi (rekursiya) ham mumkin.",
          "en": "It returns a value or just does work (`void`). It takes several parameters and can even call itself (recursion).",
          "ru": "Возвращает значение или просто делает работу (`void`). Принимает несколько параметров и может даже вызвать себя (рекурсия)."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Hisoblashlarni ajratishda, kodni qismlarga bo'lishda va kutubxonalar yaratishda. `main()` ning o'zi ham funksiya — har bir C++ dastur undan boshlanadi.",
          "en": "To split calculations, organize code into pieces, and build libraries. Even `main()` is a function — every C++ program starts from it.",
          "ru": "Чтобы разбить вычисления, организовать код и создавать библиотеки. Даже `main()` — функция, с неё начинается каждая C++ программа."
        }
      }
    ],
    "task": {
      "uz": "`int kvadrat(int n)` funksiyasini yozing — u sonni o'ziga ko'paytirib qaytarsin. `main()` da uni 5 bilan chaqirib natijani chiqaring.",
      "en": "Write a function `int square(int n)` that returns n times itself. Call it with 5 in `main()` and print the result.",
      "ru": "Напишите функцию `int square(int n)`, возвращающую n, умноженное на себя. Вызовите её с 5 в `main()` и выведите результат."
    },
    "hint": {
      "uz": "Funksiya ichida `return n * n;` yozing, keyin `cout << kvadrat(5);` bilan chaqiring.",
      "en": "Inside the function write `return n * n;`, then call it with `cout << square(5);`.",
      "ru": "Внутри функции напишите `return n * n;`, затем вызовите `cout << square(5);`."
    },
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint kvadrat(int n) {\n    // TODO: n ni o'ziga ko'paytirib qaytaring\n    return 0;\n}\n\nint main() {\n    // TODO: kvadrat(5) ni cout bilan chiqaring\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\n\nint kvadrat(int n) {\n    return n * n;\n}\n\nint main() {\n    cout << kvadrat(5) << endl;\n    return 0;\n}",
    "check": {
      "outputContains": ["25"],
      "sourceContains": ["kvadrat", "return"]
    },
    "xp": 34,
    "monacoLang": "cpp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Massivlar va vektorlar",
      "en": "Arrays & Vectors",
      "ru": "Массивы и векторы"
    },
    "intro": {
      "uz": "100 ta o'zgaruvchi o'rniga bitta ro'yxat — massiv va vektor ma'lumotni tartibli saqlaydi.",
      "en": "One list instead of 100 variables — arrays and vectors store data in order.",
      "ru": "Один список вместо 100 переменных — массивы и векторы хранят данные по порядку."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Massiv — bir turdagi qiymatlar to'plami: `int sonlar[3] = {1, 2, 3};`. `vector` esa o'lchamini o'zgartira oladigan moslashuvchan massiv: `vector<int> v;`.",
          "en": "An array is a fixed group of same-type values: `int nums[3] = {1, 2, 3};`. A `vector` is a flexible array that can grow: `vector<int> v;`.",
          "ru": "Массив — фиксированный набор однотипных значений: `int nums[3] = {1, 2, 3};`. `vector` — гибкий массив, способный расти: `vector<int> v;`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ko'p ma'lumotga alohida nom berib bo'lmaydi — 30 o'quvchi bahosini bitta ro'yxatda saqlash qulay. `vector` esa nechta element bo'lishini oldindan bilmaganda zarur.",
          "en": "You can't name lots of data separately — storing 30 students' grades in one list is convenient. A `vector` is essential when you don't know the count ahead of time.",
          "ru": "Множество данных нельзя именовать по отдельности — 30 оценок удобно держать в одном списке. `vector` нужен, когда число элементов заранее неизвестно."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Indeks orqali elementga kirish (`v[0]`), `push_back()` bilan yangi qo'shish, `.size()` bilan uzunligini bilish. Sikl bilan birga juda kuchli bo'ladi.",
          "en": "Access elements by index (`v[0]`), add with `push_back()`, get the length with `.size()`. Combined with loops it's very powerful.",
          "ru": "Доступ по индексу (`v[0]`), добавление через `push_back()`, длина через `.size()`. В связке с циклами это очень мощно."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Ro'yxatlar, ballar jadvali, savatdagi mahsulotlar va o'yin xaritalarida. Bir nechta bir xil narsani saqlash kerak bo'lganda doim shu ishlatiladi.",
          "en": "In lists, score tables, shopping carts, and game maps. Whenever you store several of the same thing, you reach for these.",
          "ru": "В списках, таблицах очков, корзинах и игровых картах. Когда хранят несколько однотипных вещей — берут именно их."
        }
      }
    ],
    "task": {
      "uz": "3 ta sonli `vector<int>` yarating, `for` sikl bilan barcha elementlarni chiqaring va ularning yig'indisini hisoblang.",
      "en": "Create a `vector<int>` with 3 numbers, print every element with a `for` loop, and compute their sum.",
      "ru": "Создайте `vector<int>` из 3 чисел, выведите все элементы циклом `for` и посчитайте их сумму."
    },
    "hint": {
      "uz": "`for (int i = 0; i < v.size(); i++)` — indeks `0` dan boshlanadi, `v[i]` element beradi.",
      "en": "`for (int i = 0; i < v.size(); i++)` — index starts at `0`, `v[i]` gives an element.",
      "ru": "`for (int i = 0; i < v.size(); i++)` — индекс с `0`, `v[i]` даёт элемент."
    },
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v = {10, 20, 30};\n    int yigindi = 0;\n    // TODO: for sikl bilan har bir elementni chiqaring va yigindi ga qo'shing\n    // TODO: oxirida \"Yig'indi: \" va yigindi ni chiqaring\n    return 0;\n}",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v = {10, 20, 30};\n    int yigindi = 0;\n    for (int i = 0; i < v.size(); i++) {\n        cout << v[i] << endl;\n        yigindi += v[i];\n    }\n    cout << \"Yig'indi: \" << yigindi << endl;\n    return 0;\n}",
    "check": {
      "outputContains": ["10", "20", "30", "Yig'indi:", "60"],
      "sourceContains": ["vector", "for"]
    },
    "xp": 38,
    "monacoLang": "cpp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ko'rsatkichlar bilan tanishuv",
      "en": "Pointers Intro",
      "ru": "Знакомство с указателями"
    },
    "intro": {
      "uz": "Ko'rsatkichlar C++ ning eng kuchli qismi — ular qiymat emas, balki uning xotiradagi manzilini saqlaydi.",
      "en": "Pointers are C++'s most powerful feature — they store not a value but its address in memory.",
      "ru": "Указатели — самая мощная часть C++: они хранят не значение, а его адрес в памяти."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ko'rsatkich — boshqa o'zgaruvchining xotiradagi *manzilini* saqlaydigan o'zgaruvchi: `int* p = &x;`. `&` manzilni oladi, `*` esa manzildagi qiymatga kiradi.",
          "en": "A pointer is a variable that stores another variable's *address* in memory: `int* p = &x;`. `&` takes an address, `*` reaches the value at that address.",
          "ru": "Указатель — переменная, хранящая *адрес* другой переменной в памяти: `int* p = &x;`. `&` берёт адрес, `*` обращается к значению по адресу."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Katta ma'lumotni nusxalamasdan, faqat manzilini uzatish tezroq va xotirani tejaydi. Ko'rsatkichlar funksiyaga asl o'zgaruvchini o'zgartirish imkonini ham beradi.",
          "en": "Passing just an address instead of copying big data is faster and saves memory. Pointers also let a function change the original variable.",
          "ru": "Передать адрес вместо копии больших данных быстрее и экономит память. Указатели также позволяют функции менять исходную переменную."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Manzil orqali qiymatni o'qish va o'zgartirish (`*p = 10;`), dinamik xotira ajratish (`new`/`delete`) va murakkab ma'lumot tuzilmalarini bog'lash. `nullptr` esa hech narsaga ishora qilmaydi.",
          "en": "Read and change a value through its address (`*p = 10;`), allocate dynamic memory (`new`/`delete`), and link complex data structures. `nullptr` points to nothing.",
          "ru": "Читать и менять значение по адресу (`*p = 10;`), выделять динамическую память (`new`/`delete`) и связывать сложные структуры. `nullptr` не указывает ни на что."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Bog'langan ro'yxatlar, daraxtlar va dinamik massivlarda. Operatsion tizimlar, o'yin dvigatellari va past darajali kodda ko'rsatkichlarsiz ish bitmaydi.",
          "en": "In linked lists, trees, and dynamic arrays. Operating systems, game engines, and low-level code can't work without pointers.",
          "ru": "В связных списках, деревьях и динамических массивах. ОС, игровые движки и низкоуровневый код не обходятся без указателей."
        }
      }
    ],
    "task": {
      "uz": "Bir `int x` o'zgaruvchi yarating, unga ko'rsatkich `int* p = &x;` qiling. `p` orqali `x` ning qiymatini 99 ga o'zgartirib, `x` ni chiqaring.",
      "en": "Make an `int x`, point to it with `int* p = &x;`. Use `p` to change `x`'s value to 99, then print `x`.",
      "ru": "Создайте `int x`, укажите на него `int* p = &x;`. Через `p` измените значение `x` на 99 и выведите `x`."
    },
    "hint": {
      "uz": "`*p = 99;` — yulduzcha `*` ko'rsatkich ko'rsatayotgan qiymatga kiradi.",
      "en": "`*p = 99;` — the star `*` reaches the value the pointer points to.",
      "ru": "`*p = 99;` — звёздочка `*` обращается к значению, на которое указывает указатель."
    },
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int* p = &x;\n    // TODO: p orqali x ning qiymatini 99 ga o'zgartiring\n    cout << \"x = \" << x << endl;\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int* p = &x;\n    *p = 99;\n    cout << \"x = \" << x << endl;\n    return 0;\n}",
    "check": {
      "outputContains": ["x =", "99"],
      "sourceContains": ["*p", "&x"]
    },
    "xp": 42,
    "monacoLang": "cpp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Strukturalar va sinflar",
      "en": "Structs & Classes",
      "ru": "Структуры и классы"
    },
    "intro": {
      "uz": "O'z ma'lumot turingizni yarating — sinflar real dunyo narsalarini kodda modellashtiradi.",
      "en": "Create your own data type — classes model real-world things in code.",
      "ru": "Создайте свой тип данных — классы моделируют реальные вещи в коде."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`struct` va `class` — bir nechta o'zgaruvchini (*maydonlar*) va funksiyalarni (*metodlar*) bitta turga birlashtiradi. Masalan `class Mashina { string rang; int tezlik; };`.",
          "en": "`struct` and `class` bundle several variables (*fields*) and functions (*methods*) into one type. For example `class Car { string color; int speed; };`.",
          "ru": "`struct` и `class` объединяют несколько переменных (*поля*) и функций (*методы*) в один тип. Например `class Car { string color; int speed; };`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bog'liq ma'lumotni alohida o'zgaruvchilarda saqlash tartibsizlik tug'diradi. Sinf ularni mantiqiy yaxlitlikka jamlaydi — har bir mashina o'z rangi va tezligini o'zida olib yuradi.",
          "en": "Keeping related data in separate variables gets messy. A class groups them into a logical whole — each car carries its own color and speed.",
          "ru": "Хранить связанные данные в разных переменных — беспорядок. Класс собирает их в единое целое — каждая машина несёт свой цвет и скорость."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Obyektlar yaratadi (`Mashina m;`), `public`/`private` bilan kirishni boshqaradi, *konstruktor* bilan boshlang'ich qiymat beradi. Bu obyektga yo'naltirilgan dasturlashning asosidir.",
          "en": "It creates objects (`Car c;`), controls access with `public`/`private`, and sets initial values via a *constructor*. This is the heart of object-oriented programming.",
          "ru": "Создаёт объекты (`Car c;`), управляет доступом через `public`/`private`, задаёт начальные значения *конструктором*. Это основа объектно-ориентированного программирования."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchi profillari, o'yin personajlari, bank hisoblari va deyarli har bir katta dasturda. Murakkab tizimlar ko'plab o'zaro bog'liq sinflardan quriladi.",
          "en": "In user profiles, game characters, bank accounts, and nearly every large program. Complex systems are built from many interacting classes.",
          "ru": "В профилях, игровых персонажах, банковских счетах и почти любой большой программе. Сложные системы строятся из множества взаимодействующих классов."
        }
      }
    ],
    "task": {
      "uz": "`struct Talaba` yarating: `string ism` va `int yosh` maydonlari bilan. Bitta talaba obyekti yarating va uning ism va yoshini chiqaring.",
      "en": "Create a `struct Student` with fields `string name` and `int age`. Make one student object and print its name and age.",
      "ru": "Создайте `struct Student` с полями `string name` и `int age`. Создайте один объект студента и выведите его имя и возраст."
    },
    "hint": {
      "uz": "Maydonga `t.ism = \"Ali\";` kabi nuqta `.` orqali murojaat qilinadi.",
      "en": "Access a field with a dot `.`, like `s.name = \"Ali\";`.",
      "ru": "Обращайтесь к полю через точку `.`, например `s.name = \"Ali\";`."
    },
    "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Talaba {\n    // TODO: string ism va int yosh maydonlarini qo'shing\n};\n\nint main() {\n    Talaba t;\n    // TODO: t.ism va t.yosh ga qiymat bering va ularni chiqaring\n    return 0;\n}",
    "solution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Talaba {\n    string ism;\n    int yosh;\n};\n\nint main() {\n    Talaba t;\n    t.ism = \"Ali\";\n    t.yosh = 20;\n    cout << t.ism << \", \" << t.yosh << endl;\n    return 0;\n}",
    "check": {
      "outputContains": ["Ali", "20"],
      "sourceContains": ["struct", "Talaba"]
    },
    "xp": 45,
    "monacoLang": "cpp",
    "preview": "none"
  }
];
