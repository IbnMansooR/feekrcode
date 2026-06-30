import type { LessonContent } from "./types";

export const javaLessons: LessonContent[] = [
  {
    "title": {
      "uz": "main metodi va println",
      "en": "main method & println",
      "ru": "Метод main и println"
    },
    "intro": {
      "uz": "Har bir Java dasturi `main` metodidan boshlanadi — bu sening birinchi qadaming.",
      "en": "Every Java program starts at the `main` method — this is your first step.",
      "ru": "Каждая программа на Java начинается с метода `main` — это твой первый шаг."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`main` — Java dasturning *kirish nuqtasi*: kompyuter kodni aynan shu yerdan ishga tushiradi. `System.out.println(...)` esa qavs ichidagi matnni ekranga chiqaradi va yangi qatorga o'tadi.",
          "en": "`main` is the program's *entry point*: the computer starts running your code right here. `System.out.println(...)` prints the text inside the parentheses to the screen and moves to a new line.",
          "ru": "`main` — это *точка входа* программы: компьютер начинает выполнение кода именно отсюда. А `System.out.println(...)` выводит текст из скобок на экран и переходит на новую строку."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "`main` bo'lmasa, Java dasturni qayerdan boshlashni bilmaydi va umuman ishga tushmaydi. `println` esa dasturing nima qilayotganini ko'rishning eng oddiy yo'li.",
          "en": "Without `main`, Java doesn't know where to begin and the program won't run at all. And `println` is the simplest way to see what your program is doing.",
          "ru": "Без `main` Java не знает, откуда начать, и программа вообще не запустится. А `println` — самый простой способ увидеть, что делает твоя программа."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Ekranga matn, son va hisob-kitob natijalarini chiqaradi. `print` yangi qatorga o'tmaydi, `println` esa o'tadi — shu bilan chiroyli chiqishni boshqarasan.",
          "en": "It prints text, numbers and calculation results to the screen. `print` stays on the same line while `println` moves down — so you control how the output looks.",
          "ru": "Выводит на экран текст, числа и результаты вычислений. `print` остаётся на той же строке, а `println` переходит вниз — так ты управляешь видом вывода."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har bir Java ilovasi — Android telefon ilovalari, server dasturlari va o'yinlar — shu `main` metodidan boshlanadi. `println` esa loglar va xatolarni tekshirishda doim ishlatiladi.",
          "en": "Every Java application — Android apps, server programs and games — starts from this `main` method. And `println` is used constantly for logs and debugging.",
          "ru": "Каждое Java-приложение — Android-приложения, серверные программы и игры — начинается с метода `main`. А `println` постоянно используется для логов и отладки."
        }
      }
    ],
    "task": {
      "uz": "`main` ichida `System.out.println` yordamida \"Salom, dunyo!\" ni ekranga chiqar.",
      "en": "Inside `main`, use `System.out.println` to print \"Hello, world!\" to the screen.",
      "ru": "Внутри `main` с помощью `System.out.println` выведи на экран \"Привет, мир!\"."
    },
    "hint": {
      "uz": "Matnni qo'shtirnoq ichida yoz: `System.out.println(\"...\");` — oxirida `;` esdan chiqmasin.",
      "en": "Put the text in double quotes: `System.out.println(\"...\");` — don't forget the `;` at the end.",
      "ru": "Текст в двойных кавычках: `System.out.println(\"...\");` — не забудь `;` в конце."
    },
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: \"Salom, dunyo!\" ni System.out.println bilan ekranga chiqar\n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Salom, dunyo!\");\n    }\n}",
    "check": {
      "outputContains": ["Salom, dunyo!"],
      "sourceContains": ["system.out.println"]
    },
    "xp": 20,
    "monacoLang": "java",
    "preview": "none"
  },
  {
    "title": {
      "uz": "O'zgaruvchilar va tiplar",
      "en": "Variables & types",
      "ru": "Переменные и типы"
    },
    "intro": {
      "uz": "O'zgaruvchilar — ma'lumotni saqlaydigan nomli qutilar. Ularsiz bironta dastur ishlamaydi.",
      "en": "Variables are named boxes that store data. No program works without them.",
      "ru": "Переменные — это именованные коробки для хранения данных. Без них не работает ни одна программа."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "O'zgaruvchi — bu xotiradagi qiymatga nom beradigan idish. Java *tipli* til: har bir o'zgaruvchining tipi e'lon qilinadi, masalan butun son uchun `int`, kasr son uchun `double`, matn uchun `String`.",
          "en": "A variable is a container that gives a name to a value in memory. Java is *typed*: every variable declares its type, like `int` for whole numbers, `double` for decimals, and `String` for text.",
          "ru": "Переменная — это контейнер, который даёт имя значению в памяти. Java — *типизированный* язык: у каждой переменной указывается тип, например `int` для целых чисел, `double` для дробных и `String` для текста."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "O'zgaruvchilar ma'lumotni eslab qoladi: foydalanuvchi ismi, balli yoki narxi. Tip esa Java'ga qiymat bilan nima qilish mumkinligini aytadi va xatolarni oldindan ushlaydi.",
          "en": "Variables let you remember data: a user's name, score or price. The type tells Java what you can do with a value and catches mistakes early.",
          "ru": "Переменные позволяют запоминать данные: имя пользователя, счёт или цену. А тип сообщает Java, что можно делать со значением, и заранее ловит ошибки."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Qiymatlarni saqlaydi, ularni o'zgartiradi va ustida amallar bajaradi: `int yosh = 18;` keyin `yosh = yosh + 1;`. Sonlarni qo'shish, matnlarni `+` bilan birlashtirish ham mumkin.",
          "en": "It stores values, changes them and runs operations on them: `int age = 18;` then `age = age + 1;`. You can add numbers and join text with `+` too.",
          "ru": "Хранит значения, изменяет их и выполняет над ними операции: `int age = 18;` затем `age = age + 1;`. Можно складывать числа и соединять текст через `+`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Hamma joyda: savatdagi mahsulot narxi, o'yindagi ochko, foydalanuvchining yoshi. Har qanday dastur ma'lumotni o'zgaruvchilarda saqlab, ular bilan ishlaydi.",
          "en": "Everywhere: a cart's total price, a game score, a user's age. Every program stores data in variables and works with them.",
          "ru": "Везде: сумма в корзине, очки в игре, возраст пользователя. Любая программа хранит данные в переменных и работает с ними."
        }
      }
    ],
    "task": {
      "uz": "`String` tipida `ism` va `int` tipida `yosh` o'zgaruvchilarni yarat, so'ng ularni bitta qatorda ekranga chiqar.",
      "en": "Create a `String` variable `name` and an `int` variable `age`, then print them on one line.",
      "ru": "Создай переменную `name` типа `String` и `age` типа `int`, затем выведи их в одной строке."
    },
    "hint": {
      "uz": "Matn va sonni `+` bilan birlashtir: `System.out.println(ism + \" - \" + yosh);`",
      "en": "Join text and number with `+`: `System.out.println(name + \" - \" + age);`",
      "ru": "Соедини текст и число через `+`: `System.out.println(name + \" - \" + age);`"
    },
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: String tipida ism, int tipida yosh o'zgaruvchilarini e'lon qil\n        // TODO: ularni bitta qatorda System.out.println bilan chiqar\n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        String ism = \"Ali\";\n        int yosh = 18;\n        System.out.println(ism + \" - \" + yosh);\n    }\n}",
    "check": {
      "sourceContains": ["string", "int", "system.out.println"],
      "outputMatches": ".+"
    },
    "xp": 24,
    "monacoLang": "java",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Shartlar (if / else)",
      "en": "Conditions (if / else)",
      "ru": "Условия (if / else)"
    },
    "intro": {
      "uz": "Dasturlar qaror qabul qila oladi: agar shart bajarilsa — bir ish, aks holda — boshqasi.",
      "en": "Programs can make decisions: if a condition is true do one thing, otherwise do another.",
      "ru": "Программы умеют принимать решения: если условие верно — одно действие, иначе — другое."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Shart — bu rost (`true`) yoki yolg'on (`false`) bo'ladigan tekshiruv. `if` qavs ichidagi shart rost bo'lsa, blokdagi kod ishlaydi; `else` esa shart yolg'on bo'lgandagi muqobil yo'l.",
          "en": "A condition is a check that is either true (`true`) or false (`false`). If the condition inside `if` is true, the block runs; `else` is the alternative path when it's false.",
          "ru": "Условие — это проверка, которая бывает истинной (`true`) или ложной (`false`). Если условие в `if` истинно, выполняется блок; `else` — это запасной путь, когда оно ложно."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ularsiz dastur har doim bir xil ishlaydi. Shartlar yordamida dastur vaziyatga qarab harakat qiladi — masalan, parol to'g'ri bo'lsa kirishga ruxsat beradi, aks holda yo'q.",
          "en": "Without them a program always does the same thing. Conditions let it react to the situation — for example, allow login if the password is correct, otherwise refuse.",
          "ru": "Без них программа всегда делает одно и то же. Условия позволяют ей реагировать на ситуацию — например, пускать при верном пароле и отказывать иначе."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Qiymatlarni `>`, `<`, `==` kabi operatorlar bilan solishtiradi va `&&`, `||` orqali shartlarni birlashtiradi. Ko'p variant uchun `else if` zanjirini qurish mumkin.",
          "en": "It compares values with operators like `>`, `<`, `==` and combines conditions with `&&`, `||`. For many cases you can build an `else if` chain.",
          "ru": "Сравнивает значения операторами `>`, `<`, `==` и объединяет условия через `&&`, `||`. Для многих вариантов можно построить цепочку `else if`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Login tekshiruvi, to'lov muvaffaqiyatli bo'ldimi, foydalanuvchi voyaga yetganmi — bularning hammasi shartlar bilan hal qilinadi. Har bir jiddiy dasturda yuzlab `if` bor.",
          "en": "Login checks, whether a payment succeeded, whether a user is an adult — all decided by conditions. Every serious program has hundreds of `if`s.",
          "ru": "Проверка входа, прошёл ли платёж, совершеннолетний ли пользователь — всё решается условиями. В каждой серьёзной программе сотни `if`."
        }
      }
    ],
    "task": {
      "uz": "`int yosh` o'zgaruvchisini yarat va `if/else` bilan tekshir: 18 dan katta yoki teng bo'lsa \"Voyaga yetgan\", aks holda \"Voyaga yetmagan\" deb chiqar.",
      "en": "Create an `int age` variable and use `if/else` to check: if it's 18 or more print \"Adult\", otherwise print \"Minor\".",
      "ru": "Создай переменную `int age` и через `if/else` проверь: если 18 или больше — выведи \"Взрослый\", иначе — \"Несовершеннолетний\"."
    },
    "hint": {
      "uz": "Solishtirish uchun `>=` ishlat: `if (yosh >= 18) { ... } else { ... }`",
      "en": "Use `>=` to compare: `if (age >= 18) { ... } else { ... }`",
      "ru": "Для сравнения используй `>=`: `if (age >= 18) { ... } else { ... }`"
    },
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        int yosh = 20;\n        // TODO: if/else bilan tekshir: yosh >= 18 bo'lsa \"Voyaga yetgan\",\n        // aks holda \"Voyaga yetmagan\" deb chiqar\n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        int yosh = 20;\n        if (yosh >= 18) {\n            System.out.println(\"Voyaga yetgan\");\n        } else {\n            System.out.println(\"Voyaga yetmagan\");\n        }\n    }\n}",
    "check": {
      "outputContains": ["Voyaga yetgan"],
      "sourceContains": ["if", "else"]
    },
    "xp": 28,
    "monacoLang": "java",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Sikllar (for / while)",
      "en": "Loops (for / while)",
      "ru": "Циклы (for / while)"
    },
    "intro": {
      "uz": "Bir xil ishni 100 marta qo'lda yozmaysan — sikl uni sen uchun takrorlaydi.",
      "en": "You won't write the same thing 100 times by hand — a loop repeats it for you.",
      "ru": "Ты не будешь писать одно и то же 100 раз вручную — цикл повторит это за тебя."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Sikl — kodni shart bajarilguncha qayta-qayta ishlatadigan tuzilma. `for` odatda aniq necha marta takrorlash kerakligi ma'lum bo'lganda, `while` esa shart rost bo'lib turguncha ishlaganda qulay.",
          "en": "A loop is a structure that runs code over and over while a condition holds. `for` is handy when you know how many times to repeat, and `while` runs as long as a condition stays true.",
          "ru": "Цикл — это конструкция, которая выполняет код снова и снова, пока выполняется условие. `for` удобен, когда известно число повторений, а `while` работает, пока условие остаётся истинным."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Takrorlanuvchi vazifalarni qo'lda yozish vaqt va kuch talab qiladi hamda xatoga olib keladi. Sikl bitta blok yozib, uni minglab marta ishlatish imkonini beradi.",
          "en": "Writing repetitive tasks by hand wastes time and causes errors. A loop lets you write one block and run it thousands of times.",
          "ru": "Писать повторяющиеся задачи вручную долго и чревато ошибками. Цикл позволяет написать один блок и выполнить его тысячи раз."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Sonlarni sanaydi, ro'yxat elementlarini birma-bir aylanib chiqadi va yig'indi hisoblaydi. `break` siklni to'xtatadi, `continue` esa joriy aylanani o'tkazib yuboradi.",
          "en": "It counts numbers, walks through list items one by one and computes sums. `break` stops the loop while `continue` skips the current round.",
          "ru": "Считает числа, перебирает элементы списка по одному и вычисляет суммы. `break` останавливает цикл, а `continue` пропускает текущий проход."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Ekranga mahsulotlar ro'yxatini chiqarish, fayldagi har bir qatorni o'qish, o'yin kadrlarini yangilash — bularning barchasi sikllar bilan bajariladi.",
          "en": "Printing a product list, reading every line of a file, updating game frames — all done with loops.",
          "ru": "Вывод списка товаров, чтение каждой строки файла, обновление кадров игры — всё это делается циклами."
        }
      }
    ],
    "task": {
      "uz": "`for` sikli yordamida 1 dan 5 gacha bo'lgan sonlarni ekranga chiqar.",
      "en": "Use a `for` loop to print the numbers from 1 to 5.",
      "ru": "С помощью цикла `for` выведи числа от 1 до 5."
    },
    "hint": {
      "uz": "`for (int i = 1; i <= 5; i++) { System.out.println(i); }` — `i++` har aylanada bittaga oshiradi.",
      "en": "`for (int i = 1; i <= 5; i++) { System.out.println(i); }` — `i++` adds one each round.",
      "ru": "`for (int i = 1; i <= 5; i++) { System.out.println(i); }` — `i++` прибавляет единицу каждый проход."
    },
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: for sikli bilan 1 dan 5 gacha sonlarni System.out.println bilan chiqar\n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(i);\n        }\n    }\n}",
    "check": {
      "outputContains": ["1", "2", "3", "4", "5"],
      "sourceContains": ["for", "system.out.println"]
    },
    "xp": 30,
    "monacoLang": "java",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Metodlar",
      "en": "Methods",
      "ru": "Методы"
    },
    "intro": {
      "uz": "Metod — bir marta yozib, istalgancha qayta chaqiriladigan kod bo'lagi.",
      "en": "A method is a piece of code you write once and call as many times as you like.",
      "ru": "Метод — это кусок кода, который пишут один раз и вызывают сколько угодно раз."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Metod — nomi bor, kerak bo'lganda chaqiriladigan ko'rsatmalar to'plami. U *parametr* orqali kirish ma'lumotini oladi va `return` orqali natija qaytarishi mumkin; natija qaytarmasa, tipi `void` bo'ladi.",
          "en": "A method is a named set of instructions you call when needed. It can take input through *parameters* and give a result back with `return`; if it returns nothing, its type is `void`.",
          "ru": "Метод — это именованный набор инструкций, который вызывают при необходимости. Он принимает входные данные через *параметры* и может вернуть результат через `return`; если он ничего не возвращает, его тип — `void`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni qayta-qayta yozish o'rniga uni metodga joylab, nomi bilan chaqirasan. Bu kodni qisqartiradi, o'qishni osonlashtiradi va xatoni bir joyda tuzatish imkonini beradi.",
          "en": "Instead of repeating the same code, you put it in a method and call it by name. This shortens code, makes it readable and lets you fix a bug in one place.",
          "ru": "Вместо повторения одного и того же кода ты помещаешь его в метод и вызываешь по имени. Это сокращает код, упрощает чтение и позволяет исправлять ошибку в одном месте."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Hisob-kitob qiladi, qiymat qaytaradi va ish bajaradi. Bir nechta parametr qabul qilishi mumkin, masalan `int qoshish(int a, int b)` ikkita sonni qo'shib natijani qaytaradi.",
          "en": "It computes, returns values and performs actions. It can take several parameters, for example `int add(int a, int b)` adds two numbers and returns the result.",
          "ru": "Вычисляет, возвращает значения и выполняет действия. Может принимать несколько параметров, например `int add(int a, int b)` складывает два числа и возвращает результат."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har bir dastur o'nlab metodlardan tashkil topadi: narxni hisoblash, ma'lumotni saqlash, foydalanuvchini tekshirish. Hatto `main` ham — bu metod.",
          "en": "Every program is made of dozens of methods: calculating a price, saving data, checking a user. Even `main` is a method.",
          "ru": "Каждая программа состоит из десятков методов: расчёт цены, сохранение данных, проверка пользователя. Даже `main` — это метод."
        }
      }
    ],
    "task": {
      "uz": "Ikkita `int` qabul qilib, ularning yig'indisini qaytaradigan `qoshish` metodini yoz va uni `main` ichida chaqirib natijani chiqar.",
      "en": "Write an `add` method that takes two `int`s and returns their sum, then call it inside `main` and print the result.",
      "ru": "Напиши метод `add`, который принимает два `int` и возвращает их сумму, затем вызови его в `main` и выведи результат."
    },
    "hint": {
      "uz": "`static int qoshish(int a, int b) { return a + b; }` — keyin `qoshish(2, 3)` deb chaqir.",
      "en": "`static int add(int a, int b) { return a + b; }` — then call `add(2, 3)`.",
      "ru": "`static int add(int a, int b) { return a + b; }` — затем вызови `add(2, 3)`."
    },
    "starterCode": "public class Main {\n    static int qoshish(int a, int b) {\n        // TODO: a va b ning yig'indisini return qil\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        // TODO: qoshish(2, 3) ni chaqir va natijani System.out.println bilan chiqar\n    }\n}",
    "solution": "public class Main {\n    static int qoshish(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        int natija = qoshish(2, 3);\n        System.out.println(natija);\n    }\n}",
    "check": {
      "outputContains": ["5"],
      "sourceContains": ["return", "qoshish"]
    },
    "xp": 34,
    "monacoLang": "java",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Massivlar",
      "en": "Arrays",
      "ru": "Массивы"
    },
    "intro": {
      "uz": "Bitta o'zgaruvchida yuzlab qiymatni saqlash kerak bo'lsa — massiv yordamga keladi.",
      "en": "When you need to store hundreds of values in one variable — an array helps.",
      "ru": "Когда нужно хранить сотни значений в одной переменной — на помощь приходит массив."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Massiv — bir xil tipdagi qiymatlarni ketma-ket saqlaydigan idish. Har bir element *indeks* orqali olinadi va indeks 0 dan boshlanadi: `sonlar[0]` — birinchi element.",
          "en": "An array is a container that holds values of the same type in sequence. Each element is accessed by an *index*, and indexes start at 0: `numbers[0]` is the first element.",
          "ru": "Массив — это контейнер, который хранит значения одного типа подряд. Доступ к каждому элементу — по *индексу*, а индексы начинаются с 0: `numbers[0]` — первый элемент."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "100 ta talaba balini saqlash uchun 100 ta alohida o'zgaruvchi yozish mantiqsiz. Massiv barchasini bitta nom ostida saqlaydi va sikl bilan qulay ishlash imkonini beradi.",
          "en": "Writing 100 separate variables to store 100 student scores makes no sense. An array keeps them all under one name and lets you work through them with a loop.",
          "ru": "Писать 100 отдельных переменных для 100 оценок студентов бессмысленно. Массив хранит их все под одним именем и позволяет удобно обходить их циклом."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Qiymatlarni indeks bo'yicha saqlaydi va o'qiydi, `.length` orqali uzunligini beradi. Sikl bilan har bir elementni aylanib chiqib, yig'indi yoki eng kattasini topish mumkin.",
          "en": "It stores and reads values by index and gives its length via `.length`. With a loop you can walk every element to find a sum or the maximum.",
          "ru": "Хранит и читает значения по индексу, а через `.length` даёт свою длину. С помощью цикла можно обойти каждый элемент, чтобы найти сумму или максимум."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Talabalar ro'yxati, oydagi haroratlar, o'yindagi ochkolar tarixi — bularning hammasi massivlarda saqlanadi. Massivlar deyarli har bir algoritmning asosi.",
          "en": "A list of students, monthly temperatures, a game's score history — all stored in arrays. Arrays are the basis of almost every algorithm.",
          "ru": "Список студентов, температуры за месяц, история очков в игре — всё хранится в массивах. Массивы лежат в основе почти каждого алгоритма."
        }
      }
    ],
    "task": {
      "uz": "5 ta sondan iborat `int` massivini yarat va `for` sikli bilan ularning yig'indisini hisoblab ekranga chiqar.",
      "en": "Create an `int` array of 5 numbers and use a `for` loop to compute and print their sum.",
      "ru": "Создай массив `int` из 5 чисел и с помощью цикла `for` вычисли и выведи их сумму."
    },
    "hint": {
      "uz": "`sonlar.length` uzunlikni beradi: `for (int i = 0; i < sonlar.length; i++) { yigindi += sonlar[i]; }`",
      "en": "`numbers.length` gives the length: `for (int i = 0; i < numbers.length; i++) { sum += numbers[i]; }`",
      "ru": "`numbers.length` даёт длину: `for (int i = 0; i < numbers.length; i++) { sum += numbers[i]; }`"
    },
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        int[] sonlar = {10, 20, 30, 40, 50};\n        int yigindi = 0;\n        // TODO: for sikli bilan har bir sonni yigindi ga qo'sh\n        // TODO: yigindini System.out.println bilan chiqar\n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        int[] sonlar = {10, 20, 30, 40, 50};\n        int yigindi = 0;\n        for (int i = 0; i < sonlar.length; i++) {\n            yigindi += sonlar[i];\n        }\n        System.out.println(yigindi);\n    }\n}",
    "check": {
      "outputContains": ["150"],
      "sourceContains": ["int[]", "for"]
    },
    "xp": 36,
    "monacoLang": "java",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Klasslar va obyektlar (OOP)",
      "en": "Classes & objects (OOP)",
      "ru": "Классы и объекты (ООП)"
    },
    "intro": {
      "uz": "Klass — bu chizma, obyekt — shu chizma asosida yasalgan haqiqiy narsa.",
      "en": "A class is a blueprint, an object is a real thing built from that blueprint.",
      "ru": "Класс — это чертёж, а объект — реальная вещь, созданная по этому чертежу."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Klass — ma'lumot (*maydonlar*) va xatti-harakatni (*metodlar*) bitta tushuncha ostida birlashtiradigan andoza. `new` kalit so'zi bilan klassdan obyekt yaratasan, masalan `Mashina m = new Mashina();`.",
          "en": "A class is a template that bundles data (*fields*) and behaviour (*methods*) under one concept. With the `new` keyword you create an object from a class, like `Car c = new Car();`.",
          "ru": "Класс — это шаблон, объединяющий данные (*поля*) и поведение (*методы*) под одним понятием. Ключевым словом `new` ты создаёшь объект из класса, например `Car c = new Car();`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Real dunyo narsalardan iborat: foydalanuvchi, mahsulot, mashina. Klasslar shu narsalarni kodda modellashtirib, katta dasturni tartibli va tushunarli bo'laklarga ajratadi.",
          "en": "The real world is made of things: a user, a product, a car. Classes model these in code and split a big program into tidy, understandable pieces.",
          "ru": "Реальный мир состоит из вещей: пользователь, товар, машина. Классы моделируют их в коде и разбивают большую программу на аккуратные, понятные части."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Har bir obyekt o'z ma'lumotini saqlaydi va o'z metodlarini chaqiradi. *Konstruktor* obyektni yaratishda boshlang'ich qiymat beradi, metodlar esa obyekt ustida amal bajaradi.",
          "en": "Each object keeps its own data and calls its own methods. A *constructor* sets initial values when the object is created, and methods act on the object.",
          "ru": "Каждый объект хранит свои данные и вызывает свои методы. *Конструктор* задаёт начальные значения при создании объекта, а методы выполняют действия над объектом."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Deyarli barcha jiddiy Java dasturlari OOP asosida quriladi: Android ilovalar, bank tizimlari, o'yinlar. Klasslar katta jamoalarga birga ishlash imkonini beradi.",
          "en": "Almost all serious Java programs are built on OOP: Android apps, banking systems, games. Classes let large teams work together.",
          "ru": "Почти все серьёзные Java-программы строятся на ООП: Android-приложения, банковские системы, игры. Классы позволяют большим командам работать вместе."
        }
      }
    ],
    "task": {
      "uz": "`Mashina` klassini yarat: `String rang` maydoni va `start()` metodi bo'lsin. `main` ichida obyekt yaratib `start()` ni chaqir.",
      "en": "Create a `Car` class with a `String color` field and a `start()` method. In `main` create an object and call `start()`.",
      "ru": "Создай класс `Car` с полем `String color` и методом `start()`. В `main` создай объект и вызови `start()`."
    },
    "hint": {
      "uz": "Obyekt yaratish: `Mashina m = new Mashina();` so'ng `m.start();` deb chaqir.",
      "en": "Create an object: `Car c = new Car();` then call `c.start();`.",
      "ru": "Создай объект: `Car c = new Car();` затем вызови `c.start();`."
    },
    "starterCode": "class Mashina {\n    String rang = \"qizil\";\n\n    void start() {\n        // TODO: \"Mashina ishga tushdi: \" + rang ni ekranga chiqar\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: new Mashina() bilan obyekt yarat va start() ni chaqir\n    }\n}",
    "solution": "class Mashina {\n    String rang = \"qizil\";\n\n    void start() {\n        System.out.println(\"Mashina ishga tushdi: \" + rang);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Mashina m = new Mashina();\n        m.start();\n    }\n}",
    "check": {
      "outputContains": ["Mashina ishga tushdi", "qizil"],
      "sourceContains": ["class", "new"]
    },
    "xp": 40,
    "monacoLang": "java",
    "preview": "none"
  },
  {
    "title": {
      "uz": "ArrayList kolleksiyalari",
      "en": "ArrayList collections",
      "ru": "Коллекции ArrayList"
    },
    "intro": {
      "uz": "Massiv o'lchami qat'iy, `ArrayList` esa o'sib-qisqaradigan moslashuvchan ro'yxat.",
      "en": "An array has a fixed size, while an `ArrayList` is a flexible list that grows and shrinks.",
      "ru": "У массива фиксированный размер, а `ArrayList` — гибкий список, который растёт и сокращается."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`ArrayList` — Java kutubxonasidagi dinamik ro'yxat: elementlarni xohlagancha qo'shasan yoki o'chirasan. U `java.util` paketidan import qilinadi va `<String>` kabi tip belgilanadi: `ArrayList<String> ismlar = new ArrayList<>();`.",
          "en": "`ArrayList` is a dynamic list from Java's library: you add or remove elements freely. It's imported from `java.util` and you set a type like `<String>`: `ArrayList<String> names = new ArrayList<>();`.",
          "ru": "`ArrayList` — это динамический список из библиотеки Java: ты свободно добавляешь и удаляешь элементы. Он импортируется из `java.util`, и задаётся тип, например `<String>`: `ArrayList<String> names = new ArrayList<>();`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ko'pincha qancha element bo'lishini oldindan bilmaysan — masalan, savatga necha mahsulot qo'shilishini. `ArrayList` o'lchamini avtomatik moslaydi, massivda esa buni qo'lda qilish kerak.",
          "en": "Often you don't know in advance how many elements there'll be — like how many items go into a cart. `ArrayList` resizes automatically, while with an array you'd do it by hand.",
          "ru": "Часто заранее неизвестно, сколько будет элементов — например, сколько товаров добавят в корзину. `ArrayList` меняет размер автоматически, а с массивом это пришлось бы делать вручную."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`add()` bilan element qo'shadi, `get(i)` bilan oladi, `remove()` bilan o'chiradi, `size()` esa miqdorini beradi. `for-each` sikli bilan butun ro'yxatni qulay aylanib chiqasan.",
          "en": "It adds with `add()`, reads with `get(i)`, removes with `remove()`, and `size()` gives the count. A `for-each` loop walks the whole list neatly.",
          "ru": "Добавляет через `add()`, читает через `get(i)`, удаляет через `remove()`, а `size()` даёт количество. Цикл `for-each` удобно обходит весь список."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Xarid savati, chat xabarlari, foydalanuvchilar ro'yxati — o'lchami o'zgaruvchi har qanday ma'lumot uchun. `ArrayList` Java'da eng ko'p ishlatiladigan kolleksiyalardan biri.",
          "en": "A shopping cart, chat messages, a user list — for any data whose size changes. `ArrayList` is one of the most used collections in Java.",
          "ru": "Корзина покупок, сообщения чата, список пользователей — для любых данных, размер которых меняется. `ArrayList` — одна из самых используемых коллекций в Java."
        }
      }
    ],
    "task": {
      "uz": "`ArrayList<String>` yarat, unga `add()` bilan 3 ta ism qo'sh va `for-each` sikli bilan barchasini ekranga chiqar.",
      "en": "Create an `ArrayList<String>`, add 3 names with `add()`, and print them all with a `for-each` loop.",
      "ru": "Создай `ArrayList<String>`, добавь 3 имени через `add()` и выведи их все циклом `for-each`."
    },
    "hint": {
      "uz": "Yuqorida `import java.util.ArrayList;` yoz. `for (String ism : ismlar) { System.out.println(ism); }`",
      "en": "Add `import java.util.ArrayList;` at the top. `for (String name : names) { System.out.println(name); }`",
      "ru": "Сверху добавь `import java.util.ArrayList;`. `for (String name : names) { System.out.println(name); }`"
    },
    "starterCode": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> ismlar = new ArrayList<>();\n        // TODO: add() bilan 3 ta ism qo'sh\n        // TODO: for-each sikli bilan har bir ismni System.out.println bilan chiqar\n    }\n}",
    "solution": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> ismlar = new ArrayList<>();\n        ismlar.add(\"Ali\");\n        ismlar.add(\"Vali\");\n        ismlar.add(\"Hasan\");\n        for (String ism : ismlar) {\n            System.out.println(ism);\n        }\n    }\n}",
    "check": {
      "outputContains": ["Ali", "Vali", "Hasan"],
      "sourceContains": ["arraylist", ".add", "for"]
    },
    "xp": 45,
    "monacoLang": "java",
    "preview": "none"
  }
];
