import type { LessonContent } from "./types";

export const cLessons: LessonContent[] = [
  {
    "title": {
      "uz": "printf va o'zgaruvchilar",
      "en": "printf and Variables",
      "ru": "printf и переменные"
    },
    "intro": {
      "uz": "Har bir C dasturi ekranga biror narsa chiqarishdan boshlanadi.",
      "en": "Every C program starts by putting something on the screen.",
      "ru": "Каждая программа на C начинается с вывода чего-то на экран."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`printf` — ekranga matn yoki sonlarni chiqaradigan funksiya. *O'zgaruvchi* esa qiymatni saqlaydigan nomli quti, masalan `int yosh = 20;`. Qiymatni chiqarish uchun `%d` (son) yoki `%s` (matn) kabi *format belgilari* ishlatiladi.",
          "en": "`printf` is a function that prints text or numbers to the screen. A *variable* is a named box that stores a value, e.g. `int age = 20;`. To print a value you use *format specifiers* like `%d` (number) or `%s` (text).",
          "ru": "`printf` — функция, которая выводит текст или числа на экран. *Переменная* — это именованная коробка для значения, например `int age = 20;`. Чтобы вывести значение, используют *спецификаторы* вроде `%d` (число) или `%s` (текст)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Natijani ko'rmasangiz, dasturingiz nima qilayotganini bilolmaysiz — `printf` sizning ko'zingiz. O'zgaruvchilar esa ma'lumotni eslab qolish va keyin qayta ishlatish imkonini beradi.",
          "en": "If you can't see the result, you can't tell what your program is doing — `printf` is your eyes. Variables let you remember data and reuse it later.",
          "ru": "Если не видеть результат, нельзя понять, что делает программа — `printf` это ваши глаза. Переменные позволяют запоминать данные и использовать их снова."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`printf` matn, sonlar va o'zgaruvchilar qiymatini bir vaqtda chiqaradi, `\\n` bilan yangi qatorga o'tadi. O'zgaruvchilarni hisob-kitobda ishlatib, natijani saqlash mumkin.",
          "en": "`printf` can print text, numbers and variable values together, and `\\n` moves to a new line. Variables can be used in calculations and store the result.",
          "ru": "`printf` выводит текст, числа и значения переменных вместе, а `\\n` переходит на новую строку. Переменные можно использовать в вычислениях и хранить результат."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har qanday dasturda: foydalanuvchiga xabar chiqarish, hisob natijasini ko'rsatish va xatolarni tekshirishda. Bu C'dagi eng birinchi va eng ko'p ishlatiladigan vosita.",
          "en": "In every program: showing a message to the user, displaying a calculation result, and debugging. It's the very first and most-used tool in C.",
          "ru": "В любой программе: показать сообщение пользователю, вывести результат вычисления и отладка. Это первый и самый используемый инструмент в C."
        }
      }
    ],
    "task": {
      "uz": "Bir `int` o'zgaruvchiga yoshingizni saqlang va `printf` bilan \"Mening yoshim: 20\" ko'rinishida chiqaring.",
      "en": "Store your age in an `int` variable and print it with `printf` as \"My age: 20\".",
      "ru": "Сохраните возраст в переменной `int` и выведите через `printf` как \"My age: 20\"."
    },
    "hint": {
      "uz": "Sonni chiqarish uchun `%d` ishlating: `printf(\"Mening yoshim: %d\\n\", yosh);`",
      "en": "Use `%d` to print a number: `printf(\"My age: %d\\n\", age);`",
      "ru": "Используйте `%d` для числа: `printf(\"My age: %d\\n\", age);`"
    },
    "starterCode": "#include <stdio.h>\n\nint main() {\n    int yosh = 20;\n    // TODO: yosh o'zgaruvchisini %d bilan \"Mening yoshim: 20\" ko'rinishida chiqaring\n    return 0;\n}",
    "solution": "#include <stdio.h>\n\nint main() {\n    int yosh = 20;\n    printf(\"Mening yoshim: %d\\n\", yosh);\n    return 0;\n}",
    "check": {
      "outputContains": ["Mening yoshim: 20"],
      "sourceContains": ["printf", "%d"]
    },
    "xp": 20,
    "monacoLang": "c",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ma'lumot turlari",
      "en": "Data Types",
      "ru": "Типы данных"
    },
    "intro": {
      "uz": "C'da har bir o'zgaruvchi qanday turdagi ma'lumot ekanini oldindan aytishingiz kerak.",
      "en": "In C, you must tell in advance what kind of data each variable holds.",
      "ru": "В C нужно заранее указать, какой тип данных хранит переменная."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ma'lumot turi — o'zgaruvchi qanday qiymat saqlashini bildiradi. `int` butun son, `float` va `double` kasrli son, `char` bitta belgi uchun ishlatiladi. Tur xotirada qancha joy egallashini ham belgilaydi.",
          "en": "A data type tells what kind of value a variable holds. `int` is for whole numbers, `float` and `double` for decimals, and `char` for a single character. The type also decides how much memory it uses.",
          "ru": "Тип данных определяет, какое значение хранит переменная. `int` — целые числа, `float` и `double` — дробные, `char` — один символ. Тип также задаёт объём памяти."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "C kompilyatorga aniq turni aytmasangiz, dastur ishlamaydi. To'g'ri tur tanlash xotirani tejaydi va xatolarning oldini oladi — masalan, butun sonni `int`, narxni `double` qilib saqlash.",
          "en": "C won't run if you don't give the compiler an exact type. Choosing the right type saves memory and prevents bugs — e.g. store a count as `int` and a price as `double`.",
          "ru": "C не запустится без точного типа для компилятора. Правильный тип экономит память и предотвращает ошибки — например, счётчик как `int`, цену как `double`."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Turlar sonlar ustida arifmetika, belgilar bilan ishlash va kasrli aniqlikni ta'minlaydi. `sizeof` operatori har bir tur necha bayt joy egallashini ko'rsatadi.",
          "en": "Types enable arithmetic on numbers, working with characters, and decimal precision. The `sizeof` operator shows how many bytes each type takes.",
          "ru": "Типы позволяют делать арифметику, работать с символами и хранить дробную точность. Оператор `sizeof` показывает, сколько байт занимает тип."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Hamma joyda: bank hisobida pulni `double`, foydalanuvchi yoshini `int`, ismning birinchi harfini `char` bilan saqlaymiz. To'g'ri tur — ishonchli dasturning asosi.",
          "en": "Everywhere: store money as `double`, a user's age as `int`, and a name's first letter as `char`. The right type is the basis of a reliable program.",
          "ru": "Везде: деньги как `double`, возраст как `int`, первую букву имени как `char`. Правильный тип — основа надёжной программы."
        }
      }
    ],
    "task": {
      "uz": "`int`, `double` va `char` turidagi uchta o'zgaruvchi e'lon qiling va har birini mos format belgisi bilan `printf` orqali chiqaring.",
      "en": "Declare three variables of type `int`, `double` and `char`, and print each one with its matching format specifier.",
      "ru": "Объявите три переменные типов `int`, `double` и `char` и выведите каждую с подходящим спецификатором."
    },
    "hint": {
      "uz": "`double` uchun `%f`, `char` uchun `%c` ishlating: `printf(\"%c\\n\", harf);`",
      "en": "Use `%f` for `double` and `%c` for `char`: `printf(\"%c\\n\", letter);`",
      "ru": "Используйте `%f` для `double` и `%c` для `char`: `printf(\"%c\\n\", letter);`"
    },
    "starterCode": "#include <stdio.h>\n\nint main() {\n    int son = 7;\n    double narx = 19.99;\n    char harf = 'A';\n    // TODO: har uchala o'zgaruvchini mos format belgisi (%d, %f, %c) bilan chiqaring\n    return 0;\n}",
    "solution": "#include <stdio.h>\n\nint main() {\n    int son = 7;\n    double narx = 19.99;\n    char harf = 'A';\n    printf(\"%d\\n\", son);\n    printf(\"%f\\n\", narx);\n    printf(\"%c\\n\", harf);\n    return 0;\n}",
    "check": {
      "outputContains": ["7", "19.99", "A"],
      "sourceContains": ["%d", "%f", "%c"]
    },
    "xp": 24,
    "monacoLang": "c",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Shartlar",
      "en": "Conditions",
      "ru": "Условия"
    },
    "intro": {
      "uz": "Dastur qaror qabul qila olsa, u haqiqatan ham aqlli bo'ladi.",
      "en": "A program becomes truly smart when it can make decisions.",
      "ru": "Программа становится по-настоящему умной, когда умеет принимать решения."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Shart — bu \"agar ... bo'lsa\" mantig'i. `if` blokidagi kod faqat shart *rost* bo'lganda bajariladi, aks holda `else` ishlaydi. Solishtirish uchun `==`, `>`, `<`, `!=` operatorlari ishlatiladi.",
          "en": "A condition is \"if ... then\" logic. Code inside an `if` runs only when the condition is *true*; otherwise `else` runs. Comparisons use operators like `==`, `>`, `<`, `!=`.",
          "ru": "Условие — это логика «если ... то». Код в `if` выполняется, только когда условие *истинно*, иначе работает `else`. Для сравнения используют `==`, `>`, `<`, `!=`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Hayotdagi har bir tanlov shartga asoslanadi: parol to'g'rimi, yosh 18 dan kattami. Shartlarsiz dastur faqat bitta yo'ldan boradi va vaziyatga moslasha olmaydi.",
          "en": "Every real choice depends on a condition: is the password correct, is the age over 18. Without conditions a program follows only one path and can't adapt.",
          "ru": "Любой реальный выбор зависит от условия: верен ли пароль, больше ли возраст 18. Без условий программа идёт лишь одним путём и не адаптируется."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`if`, `else if` va `else` bilan bir nechta holatni tekshirib, har biriga boshqa javob berish mumkin. `&&` (va) hamda `||` (yoki) bilan shartlarni birlashtirib, murakkab qarorlar tuziladi.",
          "en": "With `if`, `else if` and `else` you can check several cases and react differently to each. Using `&&` (and) and `||` (or) you combine conditions to build complex decisions.",
          "ru": "С `if`, `else if` и `else` можно проверить несколько случаев и реагировать по-разному. С `&&` (и) и `||` (или) условия объединяются в сложные решения."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Tizimga kirish tekshiruvi, o'yin qoidalari, baholash tizimlari va xatoliklarni ushlashda. Deyarli har bir foydali dastur shartsiz ishlay olmaydi.",
          "en": "In login checks, game rules, grading systems and catching errors. Almost no useful program works without conditions.",
          "ru": "В проверке входа, правилах игр, системах оценок и обработке ошибок. Почти ни одна полезная программа не обходится без условий."
        }
      }
    ],
    "task": {
      "uz": "Bir `int` o'zgaruvchiga ball saqlang. Agar u 60 dan katta yoki teng bo'lsa \"O'tdingiz\", aks holda \"Yiqildingiz\" chiqaring.",
      "en": "Store a score in an `int`. If it is 60 or more print \"Passed\", otherwise print \"Failed\".",
      "ru": "Сохраните балл в `int`. Если он 60 или больше — выведите \"Passed\", иначе \"Failed\"."
    },
    "hint": {
      "uz": "`if (ball >= 60) { ... } else { ... }` — qavslarni unutmang.",
      "en": "`if (score >= 60) { ... } else { ... }` — don't forget the braces.",
      "ru": "`if (score >= 60) { ... } else { ... }` — не забудьте фигурные скобки."
    },
    "starterCode": "#include <stdio.h>\n\nint main() {\n    int ball = 75;\n    // TODO: agar ball >= 60 bo'lsa \"O'tdingiz\", aks holda \"Yiqildingiz\" chiqaring (if/else)\n    return 0;\n}",
    "solution": "#include <stdio.h>\n\nint main() {\n    int ball = 75;\n    if (ball >= 60) {\n        printf(\"O'tdingiz\\n\");\n    } else {\n        printf(\"Yiqildingiz\\n\");\n    }\n    return 0;\n}",
    "check": {
      "outputContains": ["O'tdingiz"],
      "sourceContains": ["printf", "else"]
    },
    "xp": 28,
    "monacoLang": "c",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Sikllar",
      "en": "Loops",
      "ru": "Циклы"
    },
    "intro": {
      "uz": "Bir ishni 100 marta qilish kerakmi? Siklni bir marta yozasiz.",
      "en": "Need to do something 100 times? You write the loop once.",
      "ru": "Нужно сделать что-то 100 раз? Цикл пишется один раз."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Sikl — bir blok kodni shart bajarilgani sari takrorlaydi. `for` siklida boshlang'ich qiymat, shart va qadam bir qatorda yoziladi, `while` esa faqat shart rost ekan ishlaydi.",
          "en": "A loop repeats a block of code while a condition holds. A `for` loop puts the start, the condition and the step on one line, while `while` runs as long as its condition is true.",
          "ru": "Цикл повторяет блок кода, пока выполняется условие. В `for` начало, условие и шаг пишутся в одной строке, а `while` работает, пока условие истинно."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni qo'lda yuz marta yozish mumkin emas va xatoga to'la bo'ladi. Sikl bu takrorni avtomatlashtiradi va kodni qisqa, ishonchli qiladi.",
          "en": "Writing the same code a hundred times by hand is impossible and error-prone. A loop automates the repetition and keeps the code short and reliable.",
          "ru": "Писать один и тот же код сто раз вручную невозможно и чревато ошибками. Цикл автоматизирует повтор и делает код коротким и надёжным."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Sonlarni sanash, ro'yxat elementlarini birma-bir ko'rib chiqish va yig'indi hisoblash mumkin. `break` siklni to'xtatadi, `continue` esa joriy qadamni o'tkazib yuboradi.",
          "en": "It can count numbers, go through list items one by one, and compute sums. `break` stops the loop, while `continue` skips the current step.",
          "ru": "Можно считать числа, перебирать элементы списка и вычислять суммы. `break` останавливает цикл, а `continue` пропускает текущий шаг."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Fayldagi har bir qatorni o'qish, jadval chiqarish, o'yin sikli va katta ma'lumotlarni qayta ishlashda. Sikllar deyarli har bir jiddiy dasturning yuragi.",
          "en": "In reading every line of a file, printing tables, game loops and processing large data. Loops are the heart of nearly every serious program.",
          "ru": "В чтении каждой строки файла, выводе таблиц, игровом цикле и обработке больших данных. Циклы — сердце почти любой серьёзной программы."
        }
      }
    ],
    "task": {
      "uz": "`for` sikli yordamida 1 dan 5 gacha bo'lgan sonlarni har birini alohida qatorda chiqaring.",
      "en": "Use a `for` loop to print the numbers from 1 to 5, each on its own line.",
      "ru": "С помощью цикла `for` выведите числа от 1 до 5, каждое на своей строке."
    },
    "hint": {
      "uz": "`for (int i = 1; i <= 5; i++) { printf(\"%d\\n\", i); }`",
      "en": "`for (int i = 1; i <= 5; i++) { printf(\"%d\\n\", i); }`",
      "ru": "`for (int i = 1; i <= 5; i++) { printf(\"%d\\n\", i); }`"
    },
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // TODO: 1 dan 5 gacha sonlarni for sikli bilan har birini alohida qatorda chiqaring\n    return 0;\n}",
    "solution": "#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}",
    "check": {
      "outputContains": ["1", "2", "3", "4", "5"],
      "sourceContains": ["for", "printf"]
    },
    "xp": 30,
    "monacoLang": "c",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Funksiyalar",
      "en": "Functions",
      "ru": "Функции"
    },
    "intro": {
      "uz": "Kodingizni bir marta yozing, istalgancha chaqiring.",
      "en": "Write your code once, call it as many times as you like.",
      "ru": "Напишите код один раз и вызывайте сколько угодно."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Funksiya — nomi bor, alohida vazifa bajaradigan kod bo'lagi. U *parametr* orqali ma'lumot qabul qiladi va `return` orqali natija qaytaradi. Hatto `main` ham bir funksiya.",
          "en": "A function is a named block of code that does one job. It takes input through *parameters* and gives back a result with `return`. Even `main` is a function.",
          "ru": "Функция — это именованный блок кода, выполняющий одну задачу. Она принимает данные через *параметры* и возвращает результат через `return`. Даже `main` — функция."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni qayta-qayta yozish o'rniga, uni bir funksiyaga solib, nomi bilan chaqirasiz. Bu kodni qisqartiradi, o'qishni osonlashtiradi va xatoni bir joyda tuzatish imkonini beradi.",
          "en": "Instead of repeating the same code, you put it in one function and call it by name. This shortens code, makes it readable, and lets you fix a bug in one place.",
          "ru": "Вместо повторения кода вы кладёте его в функцию и вызываете по имени. Это сокращает код, упрощает чтение и позволяет исправить ошибку в одном месте."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Funksiya bir nechta parametr qabul qilib, hisob-kitob bajarib, qiymat qaytarishi mumkin. Qaytariladigan turni boshida belgilaysiz, masalan `int qosh(int a, int b)`.",
          "en": "A function can take several parameters, do a calculation, and return a value. You declare the return type up front, e.g. `int add(int a, int b)`.",
          "ru": "Функция может принимать несколько параметров, делать вычисление и возвращать значение. Тип возврата указывается в начале, например `int add(int a, int b)`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har qanday katta dasturni kichik funksiyalarga bo'lamiz: hisoblash, tekshirish, chiqarish. `printf` ham aslida tayyor funksiya — kutubxonalar minglab funksiyalardan iborat.",
          "en": "We split every large program into small functions: calculating, validating, printing. `printf` itself is a ready-made function — libraries are made of thousands of them.",
          "ru": "Любую большую программу делят на маленькие функции: расчёт, проверка, вывод. `printf` — тоже готовая функция, а библиотеки состоят из тысяч таких."
        }
      }
    ],
    "task": {
      "uz": "Ikki `int` qabul qilib, ularning yig'indisini qaytaradigan `qosh` funksiyasini yozing va uni `main` ichida chaqirib, natijani chiqaring.",
      "en": "Write an `add` function that takes two `int` values and returns their sum, then call it inside `main` and print the result.",
      "ru": "Напишите функцию `add`, которая принимает два `int` и возвращает их сумму, вызовите её в `main` и выведите результат."
    },
    "hint": {
      "uz": "`int qosh(int a, int b) { return a + b; }` — keyin `qosh(2, 3)` deb chaqiring.",
      "en": "`int add(int a, int b) { return a + b; }` — then call `add(2, 3)`.",
      "ru": "`int add(int a, int b) { return a + b; }` — затем вызовите `add(2, 3)`."
    },
    "starterCode": "#include <stdio.h>\n\nint qosh(int a, int b) {\n    // TODO: a va b ning yig'indisini qaytaring\n    return 0;\n}\n\nint main() {\n    int natija = qosh(2, 3);\n    printf(\"%d\\n\", natija);\n    return 0;\n}",
    "solution": "#include <stdio.h>\n\nint qosh(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int natija = qosh(2, 3);\n    printf(\"%d\\n\", natija);\n    return 0;\n}",
    "check": {
      "outputContains": ["5"],
      "sourceContains": ["qosh", "return"]
    },
    "xp": 34,
    "monacoLang": "c",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Massivlar",
      "en": "Arrays",
      "ru": "Массивы"
    },
    "intro": {
      "uz": "Bitta nom ostida o'nlab qiymatni saqlang.",
      "en": "Store dozens of values under a single name.",
      "ru": "Храните десятки значений под одним именем."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Massiv — bir xil turdagi qiymatlarning tartiblangan to'plami. Har bir element *indeks* orqali olinadi va indeks *noldan* boshlanadi: `sonlar[0]` birinchi element. E'lon: `int sonlar[5];`.",
          "en": "An array is an ordered collection of values of the same type. Each element is reached by an *index*, and indexing starts at *zero*: `nums[0]` is the first. Declared as `int nums[5];`.",
          "ru": "Массив — упорядоченный набор значений одного типа. К элементу обращаются по *индексу*, нумерация начинается с *нуля*: `nums[0]` — первый. Объявление: `int nums[5];`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "100 ta ballni saqlash uchun 100 ta alohida o'zgaruvchi yozish mumkin emas. Massiv ularni bitta nom bilan birlashtiradi va sikl bilan birgalikda osongina ko'rib chiqiladi.",
          "en": "You can't write 100 separate variables to store 100 scores. An array groups them under one name and, together with a loop, is easy to go through.",
          "ru": "Нельзя завести 100 отдельных переменных для 100 баллов. Массив объединяет их под одним именем и вместе с циклом легко перебирается."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Massiv ko'plab qiymatni saqlaydi, ularni sikl bilan o'qish, o'zgartirish, yig'indi yoki o'rtachasini hisoblash imkonini beradi. Matnlar ham aslida `char` massivlari.",
          "en": "An array stores many values and lets you read, change, sum or average them with a loop. Even text strings are really `char` arrays.",
          "ru": "Массив хранит много значений и позволяет читать, менять, суммировать или усреднять их циклом. Строки текста — это тоже массивы `char`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "O'quvchilar ro'yxati, o'yin maydoni, sensor o'lchovlari va matn satrlarida. Deyarli barcha ma'lumotlar to'plamlar ko'rinishida saqlangani uchun massivlar hamma joyda uchraydi.",
          "en": "In lists of students, game boards, sensor readings and text strings. Since almost all data comes in collections, arrays appear everywhere.",
          "ru": "В списках учеников, игровых полях, показаниях датчиков и строках текста. Поскольку почти все данные — это наборы, массивы встречаются везде."
        }
      }
    ],
    "task": {
      "uz": "5 ta sondan iborat `int` massiv yarating va `for` sikli bilan ularning yig'indisini hisoblab chiqaring.",
      "en": "Create an `int` array of 5 numbers and compute their sum using a `for` loop.",
      "ru": "Создайте массив `int` из 5 чисел и вычислите их сумму с помощью цикла `for`."
    },
    "hint": {
      "uz": "Indeks 0 dan boshlanadi: `for (int i = 0; i < 5; i++) yigindi += sonlar[i];`",
      "en": "Index starts at 0: `for (int i = 0; i < 5; i++) sum += nums[i];`",
      "ru": "Индекс с 0: `for (int i = 0; i < 5; i++) sum += nums[i];`"
    },
    "starterCode": "#include <stdio.h>\n\nint main() {\n    int sonlar[5] = {10, 20, 30, 40, 50};\n    int yigindi = 0;\n    // TODO: for sikli bilan massiv elementlarini yigindi ga qo'shing, so'ng chiqaring\n    return 0;\n}",
    "solution": "#include <stdio.h>\n\nint main() {\n    int sonlar[5] = {10, 20, 30, 40, 50};\n    int yigindi = 0;\n    for (int i = 0; i < 5; i++) {\n        yigindi += sonlar[i];\n    }\n    printf(\"Yig'indi: %d\\n\", yigindi);\n    return 0;\n}",
    "check": {
      "outputContains": ["Yig'indi: 150"],
      "sourceContains": ["for", "sonlar["]
    },
    "xp": 38,
    "monacoLang": "c",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ko'rsatkichlar",
      "en": "Pointers",
      "ru": "Указатели"
    },
    "intro": {
      "uz": "Ko'rsatkichlar — C'ning eng kuchli va eng mashhur tushunchasi.",
      "en": "Pointers are C's most powerful and most famous concept.",
      "ru": "Указатели — самая мощная и знаменитая концепция C."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ko'rsatkich — boshqa o'zgaruvchining xotiradagi *manzilini* saqlaydigan o'zgaruvchi. `&` operatori manzilni oladi, `*` esa o'sha manzildagi qiymatga kirishni beradi. E'lon: `int *p = &son;`.",
          "en": "A pointer is a variable that stores the *address* of another variable in memory. The `&` operator takes the address, and `*` accesses the value at that address. Declared as `int *p = #`.",
          "ru": "Указатель — переменная, хранящая *адрес* другой переменной в памяти. Оператор `&` берёт адрес, а `*` даёт доступ к значению по этому адресу. Объявление: `int *p = #`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ko'rsatkichsiz funksiya tashqaridagi o'zgaruvchini o'zgartira olmaydi va katta ma'lumotni nusxalamasdan uzata olmaydi. Ular xotira bilan to'g'ridan-to'g'ri ishlash kalitidir.",
          "en": "Without pointers a function can't change an outside variable or pass large data without copying it. They are the key to working with memory directly.",
          "ru": "Без указателей функция не может менять внешнюю переменную или передавать большие данные без копирования. Это ключ к прямой работе с памятью."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Ko'rsatkich orqali o'zgaruvchini funksiya ichida o'zgartirish, massiv bo'ylab harakatlanish va dinamik xotira (`malloc`) bilan ishlash mumkin. `*p = 10;` to'g'ridan-to'g'ri qiymatni yangilaydi.",
          "en": "Through a pointer you can change a variable inside a function, move along an array, and work with dynamic memory (`malloc`). `*p = 10;` updates the value directly.",
          "ru": "Через указатель можно менять переменную внутри функции, двигаться по массиву и работать с динамической памятью (`malloc`). `*p = 10;` обновляет значение напрямую."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Operatsion tizimlar, drayverlar, ma'lumot tuzilmalari (ro'yxat, daraxt) va tezkor dasturlarda. C'ning kuchi aynan ko'rsatkichlar tufayli — ular tilning yuragi.",
          "en": "In operating systems, drivers, data structures (lists, trees) and high-performance programs. C's power comes from pointers — they are the heart of the language.",
          "ru": "В операционных системах, драйверах, структурах данных (списки, деревья) и быстрых программах. Сила C — именно в указателях, это сердце языка."
        }
      }
    ],
    "task": {
      "uz": "Bir `int` o'zgaruvchi yarating, unga ko'rsatkich e'lon qiling va ko'rsatkich orqali (`*p`) qiymatni 99 ga o'zgartirib, natijani chiqaring.",
      "en": "Create an `int` variable, declare a pointer to it, change the value to 99 through the pointer (`*p`), and print the result.",
      "ru": "Создайте переменную `int`, объявите указатель на неё, измените значение на 99 через указатель (`*p`) и выведите результат."
    },
    "hint": {
      "uz": "`int *p = &son;` keyin `*p = 99;` — endi `son` ham 99 bo'ladi.",
      "en": "`int *p = #` then `*p = 99;` — now `num` is 99 too.",
      "ru": "`int *p = #` затем `*p = 99;` — теперь `num` тоже 99."
    },
    "starterCode": "#include <stdio.h>\n\nint main() {\n    int son = 5;\n    // TODO: son ga ko'rsatkich e'lon qiling va *p orqali qiymatni 99 ga o'zgartiring, so'ng son ni chiqaring\n    return 0;\n}",
    "solution": "#include <stdio.h>\n\nint main() {\n    int son = 5;\n    int *p = &son;\n    *p = 99;\n    printf(\"%d\\n\", son);\n    return 0;\n}",
    "check": {
      "outputContains": ["99"],
      "sourceContains": ["*p", "&son"]
    },
    "xp": 42,
    "monacoLang": "c",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Strukturalar",
      "en": "Structs",
      "ru": "Структуры"
    },
    "intro": {
      "uz": "Bir-biriga bog'liq ma'lumotlarni bitta tushunchaga birlashtiring.",
      "en": "Group related data into a single concept.",
      "ru": "Объедините связанные данные в одно понятие."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Struktura (`struct`) — turli turdagi bir nechta o'zgaruvchini bitta nom ostida birlashtiradi. Masalan, talaba uchun ism, yosh va ball bir `struct` ichida saqlanadi. Maydonlarga `.` orqali murojaat qilinadi.",
          "en": "A struct (`struct`) groups several variables of different types under one name. For a student, the name, age and score can live in one `struct`. Fields are accessed with `.`.",
          "ru": "Структура (`struct`) объединяет несколько переменных разных типов под одним именем. Для студента имя, возраст и балл хранятся в одном `struct`. К полям обращаются через `.`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir talabaning ismi, yoshi va balli alohida o'zgaruvchilarda tarqab ketsa, ularni boshqarish qiyin. `struct` ularni bir butun qilib, kodni tartibli va mantiqli qiladi.",
          "en": "If a student's name, age and score are scattered in separate variables, they're hard to manage. A `struct` ties them into one unit, keeping the code tidy and logical.",
          "ru": "Если имя, возраст и балл студента разбросаны по отдельным переменным, ими трудно управлять. `struct` связывает их в одно целое, делая код аккуратным и логичным."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Struktura yangi maxsus tur yaratadi, uni funksiyaga uzatish, massiv qilish va ko'rsatkich bilan ishlatish mumkin. `typedef` bilan unga qisqa nom berib, qulayroq foydalaniladi.",
          "en": "A struct creates a new custom type that you can pass to functions, make arrays of, and use with pointers. With `typedef` you give it a short name for convenience.",
          "ru": "Структура создаёт новый пользовательский тип, который можно передавать в функции, делать массивами и использовать с указателями. С `typedef` ей дают короткое имя для удобства."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "O'quvchilar bazasi, o'yin personajlari, koordinatalar (`x`, `y`) va har qanday real obyektni modellashda. Strukturalar murakkab dasturlarda ma'lumotni tartibga solishning asosiy usuli.",
          "en": "In student databases, game characters, coordinates (`x`, `y`) and modeling any real-world object. Structs are the main way to organize data in complex programs.",
          "ru": "В базах студентов, игровых персонажах, координатах (`x`, `y`) и моделировании любых реальных объектов. Структуры — главный способ организации данных в сложных программах."
        }
      }
    ],
    "task": {
      "uz": "`Talaba` nomli `struct` yarating: `ism` (char massiv), `yosh` (int) va `ball` (double). Bitta talaba e'lon qilib, maydonlarini to'ldiring va `printf` bilan chiqaring.",
      "en": "Create a `struct` named `Student` with `name` (char array), `age` (int) and `score` (double). Declare one student, fill its fields, and print them with `printf`.",
      "ru": "Создайте `struct` с именем `Student`: `name` (массив char), `age` (int) и `score` (double). Объявите одного студента, заполните поля и выведите через `printf`."
    },
    "hint": {
      "uz": "Maydonga `.` orqali murojaat qiling: `t.yosh = 20;` va `printf(\"%d\\n\", t.yosh);`",
      "en": "Access fields with `.`: `s.age = 20;` and `printf(\"%d\\n\", s.age);`",
      "ru": "Обращайтесь к полям через `.`: `s.age = 20;` и `printf(\"%d\\n\", s.age);`"
    },
    "starterCode": "#include <stdio.h>\n\nstruct Talaba {\n    char ism[20];\n    int yosh;\n    double ball;\n};\n\nint main() {\n    struct Talaba t;\n    // TODO: t maydonlarini to'ldiring (masalan t.yosh = 20;) va printf bilan chiqaring\n    return 0;\n}",
    "solution": "#include <stdio.h>\n\nstruct Talaba {\n    char ism[20];\n    int yosh;\n    double ball;\n};\n\nint main() {\n    struct Talaba t;\n    t.yosh = 20;\n    t.ball = 95.5;\n    printf(\"Yosh: %d\\n\", t.yosh);\n    return 0;\n}",
    "check": {
      "outputContains": ["Yosh: 20"],
      "sourceContains": ["struct", "t.yosh"]
    },
    "xp": 45,
    "monacoLang": "c",
    "preview": "none"
  }
];
