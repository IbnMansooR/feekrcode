import type { LessonContent } from "./types";

export const csharpLessons: LessonContent[] = [
  {
    "title": {
      "uz": "Console.WriteLine va o'zgaruvchilar",
      "en": "Console.WriteLine and variables",
      "ru": "Console.WriteLine и переменные"
    },
    "intro": {
      "uz": "Har bir C# dasturchining birinchi qadami — ekranga matn chiqarish va ma'lumotni saqlash.",
      "en": "Every C# developer's first step is printing text to the screen and storing data.",
      "ru": "Первый шаг каждого C#-разработчика — вывести текст на экран и сохранить данные."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`Console.WriteLine()` — ekranga (konsolga) matn yoki son chiqaradigan buyruq. O'zgaruvchi esa qiymatni saqlovchi *quti*: masalan `string ism = \"Ali\";` matnni saqlaydi.",
          "en": "`Console.WriteLine()` is a command that prints text or numbers to the screen (console). A variable is a *box* that stores a value: for example `string name = \"Ali\";` stores text.",
          "ru": "`Console.WriteLine()` — команда, которая выводит текст или число на экран (консоль). Переменная — это *коробка* для значения: например `string name = \"Ali\";` хранит текст."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Chiqarish bo'lmasa, dastur natijasini ko'ra olmaysiz — `Console.WriteLine` sizning *ko'zingiz*. O'zgaruvchilar esa dasturga ma'lumotni eslab qolish imkonini beradi.",
          "en": "Without output you can't see the program's result — `Console.WriteLine` is your *eyes*. Variables let the program remember information.",
          "ru": "Без вывода вы не увидите результат программы — `Console.WriteLine` это ваши *глаза*. А переменные позволяют программе запоминать данные."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Matn, sonlar va o'zgaruvchilarni birlashtirib chiqaradi. `$\"Salom, {ism}!\"` ko'rinishidagi *interpolatsiya* yordamida qiymatlarni matn ichiga qulay joylashtirasiz.",
          "en": "It prints text, numbers, and variables together. With *interpolation* like `$\"Hello, {name}!\"` you can neatly insert values into text.",
          "ru": "Выводит текст, числа и переменные вместе. С помощью *интерполяции* вида `$\"Привет, {name}!\"` удобно вставлять значения в текст."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Dasturni tekshirishda (debug), foydalanuvchiga xabar berishda va konsol ilovalarida. Deyarli har bir C# dastur birinchi qatorida `Console.WriteLine`'dan foydalanadi.",
          "en": "In debugging, showing messages to users, and console apps. Almost every C# program uses `Console.WriteLine` in its first lines.",
          "ru": "При отладке, для сообщений пользователю и в консольных приложениях. Почти каждая C#-программа использует `Console.WriteLine` в первых строках."
        }
      }
    ],
    "task": {
      "uz": "`ism` nomli `string` o'zgaruvchi yarating va `Console.WriteLine` bilan \"Salom, <ismingiz>!\" deb chiqaring.",
      "en": "Create a `string` variable named `ism` and use `Console.WriteLine` to print \"Salom, <your name>!\".",
      "ru": "Создайте переменную `ism` типа `string` и выведите \"Salom, <ваше имя>!\" с помощью `Console.WriteLine`."
    },
    "hint": {
      "uz": "Interpolatsiya uchun matn oldiga `$` qo'ying: `$\"Salom, {ism}!\"`.",
      "en": "For interpolation, put `$` before the string: `$\"Salom, {ism}!\"`.",
      "ru": "Для интерполяции поставьте `$` перед строкой: `$\"Salom, {ism}!\"`."
    },
    "starterCode": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // TODO: 'ism' nomli string o'zgaruvchi yarating va $\"Salom, {ism}!\" ni chiqaring\n    }\n}",
    "solution": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        string ism = \"Ali\";\n        Console.WriteLine($\"Salom, {ism}!\");\n    }\n}",
    "check": {
      "mustRun": true,
      "outputMatches": "Salom,.+",
      "sourceContains": ["string ism", "console.writeline"]
    },
    "xp": 20,
    "monacoLang": "csharp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ma'lumot turlari",
      "en": "Data types",
      "ru": "Типы данных"
    },
    "intro": {
      "uz": "C#'da har bir qiymatning o'z turi bor — son, matn yoki ha/yo'q.",
      "en": "In C#, every value has its own type — a number, text, or yes/no.",
      "ru": "В C# у каждого значения есть свой тип — число, текст или да/нет."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Tur (type) — o'zgaruvchi qanday ma'lumot saqlashini bildiradi. Asosiylari: butun son `int`, kasrli son `double`, matn `string`, mantiqiy `bool` (`true`/`false`).",
          "en": "A type tells what kind of data a variable holds. The main ones are: integer `int`, decimal `double`, text `string`, and boolean `bool` (`true`/`false`).",
          "ru": "Тип определяет, какие данные хранит переменная. Основные: целое `int`, дробное `double`, текст `string` и логическое `bool` (`true`/`false`)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "C# — *qat'iy turlangan* til: noto'g'ri tur ishlatsangiz, dastur xato beradi va sizni xatolardan himoya qiladi. Masalan, matnni songa qo'shib bo'lmaydi.",
          "en": "C# is *strongly typed*: if you use the wrong type, the program errors and protects you from mistakes. For example, you can't add text to a number.",
          "ru": "C# — *строго типизированный* язык: при неверном типе программа выдаёт ошибку и защищает вас от багов. Например, нельзя сложить текст с числом."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Turlar orasida o'tkazish (konvertatsiya) mumkin: `int.Parse(\"5\")` matnni songa aylantiradi. `var` kalit so'zi esa turni avtomatik aniqlaydi.",
          "en": "You can convert between types: `int.Parse(\"5\")` turns text into a number. The `var` keyword lets the type be inferred automatically.",
          "ru": "Можно преобразовывать типы: `int.Parse(\"5\")` превращает текст в число. Ключевое слово `var` определяет тип автоматически."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Hisob-kitoblarda (`double` narx), yoshda (`int`), ism va manzilda (`string`), holatni tekshirishda (`bool`). Har bir o'zgaruvchida turni to'g'ri tanlash muhim.",
          "en": "In calculations (`double` price), age (`int`), names and addresses (`string`), and checking state (`bool`). Choosing the right type for each variable matters.",
          "ru": "В вычислениях (`double` цена), возраст (`int`), имя и адрес (`string`), проверка состояния (`bool`). Важно выбирать правильный тип для каждой переменной."
        }
      }
    ],
    "task": {
      "uz": "`int yosh`, `double bo'y` va `bool talabaMi` o'zgaruvchilarini yarating va uchalasini `Console.WriteLine` bilan chiqaring.",
      "en": "Create `int yosh`, `double boy`, and `bool talabaMi` variables and print all three with `Console.WriteLine`.",
      "ru": "Создайте переменные `int yosh`, `double boy` и `bool talabaMi` и выведите все три через `Console.WriteLine`."
    },
    "hint": {
      "uz": "Kasrli songa nuqta qo'ying: `double boy = 1.75;`. `bool` faqat `true` yoki `false` bo'ladi.",
      "en": "Use a dot for decimals: `double boy = 1.75;`. A `bool` is only `true` or `false`.",
      "ru": "Для дробных чисел используйте точку: `double boy = 1.75;`. `bool` бывает только `true` или `false`."
    },
    "starterCode": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int yosh = 20;\n        // TODO: double boy va bool talabaMi o'zgaruvchilarini yarating\n        // TODO: uchala o'zgaruvchini Console.WriteLine bilan chiqaring\n    }\n}",
    "solution": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int yosh = 20;\n        double boy = 1.75;\n        bool talabaMi = true;\n        Console.WriteLine(yosh);\n        Console.WriteLine(boy);\n        Console.WriteLine(talabaMi);\n    }\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["20", "1.75", "True"],
      "sourceContains": ["int yosh", "double boy", "bool talabami"]
    },
    "xp": 24,
    "monacoLang": "csharp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Shartlar (if / else)",
      "en": "Conditions (if / else)",
      "ru": "Условия (if / else)"
    },
    "intro": {
      "uz": "Dastur qaror qabul qila olsa, u haqiqatan ham *aqlli* bo'ladi.",
      "en": "When a program can make decisions, it becomes truly *smart*.",
      "ru": "Когда программа умеет принимать решения, она становится по-настоящему *умной*."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Shart — bu \"agar ... bo'lsa, ... qil\" mantiqi. `if` rost (`true`) bo'lganda kodni bajaradi, `else` esa aks holatda ishlaydi.",
          "en": "A condition is the \"if ... then do ...\" logic. `if` runs code when something is `true`, and `else` runs otherwise.",
          "ru": "Условие — это логика \"если ... то ...\". `if` выполняет код, когда что-то `true`, а `else` — в противном случае."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Hayotdagi har bir tanlov shartga asoslanadi: yomg'ir yog'sa, soyabon olamiz. Shartlarsiz dastur har doim bir xil ishlaydi va o'zgaruvchan vaziyatga moslasha olmaydi.",
          "en": "Every real-life choice is based on a condition: if it rains, we take an umbrella. Without conditions a program always does the same thing and can't adapt.",
          "ru": "Любой выбор в жизни основан на условии: если идёт дождь — берём зонт. Без условий программа делает одно и то же и не может адаптироваться."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Solishtirish operatorlari (`>`, `<`, `==`, `!=`) va `&&` (va), `||` (yoki) bilan murakkab shartlar tuzasiz. Ko'p variant uchun `else if` zanjiri ishlatiladi.",
          "en": "With comparison operators (`>`, `<`, `==`, `!=`) and `&&` (and), `||` (or) you build complex conditions. For many options you chain `else if`.",
          "ru": "С операторами сравнения (`>`, `<`, `==`, `!=`) и `&&` (и), `||` (или) строятся сложные условия. Для множества вариантов используется цепочка `else if`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Parolni tekshirishda, yoshga qarab ruxsat berishda, o'yin qoidalarida, baho qo'yishda. Har bir ilovada minglab `if` shartlari ishlaydi.",
          "en": "In checking passwords, granting access by age, game rules, and grading. Every app runs thousands of `if` conditions.",
          "ru": "При проверке пароля, доступе по возрасту, правилах игры, выставлении оценок. В каждом приложении работают тысячи условий `if`."
        }
      }
    ],
    "task": {
      "uz": "`int yosh` o'zgaruvchisini yarating. Agar yosh 18 dan katta yoki teng bo'lsa \"Voyaga yetgan\", aks holda \"Voyaga yetmagan\" deb chiqaring.",
      "en": "Create an `int yosh` variable. If yosh is 18 or more, print \"Voyaga yetgan\", otherwise print \"Voyaga yetmagan\".",
      "ru": "Создайте переменную `int yosh`. Если yosh 18 или больше — выведите \"Voyaga yetgan\", иначе \"Voyaga yetmagan\"."
    },
    "hint": {
      "uz": "\"katta yoki teng\" uchun `>=` operatoridan foydalaning: `if (yosh >= 18)`.",
      "en": "Use `>=` for \"greater than or equal\": `if (yosh >= 18)`.",
      "ru": "Для \"больше или равно\" используйте `>=`: `if (yosh >= 18)`."
    },
    "starterCode": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int yosh = 20;\n        // TODO: agar yosh >= 18 bo'lsa \"Voyaga yetgan\", aks holda \"Voyaga yetmagan\" chiqaring\n    }\n}",
    "solution": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int yosh = 20;\n        if (yosh >= 18)\n        {\n            Console.WriteLine(\"Voyaga yetgan\");\n        }\n        else\n        {\n            Console.WriteLine(\"Voyaga yetmagan\");\n        }\n    }\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["Voyaga yetgan"],
      "sourceContains": ["if", "yosh", "else"]
    },
    "xp": 28,
    "monacoLang": "csharp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Sikllar (for / while)",
      "en": "Loops (for / while)",
      "ru": "Циклы (for / while)"
    },
    "intro": {
      "uz": "Bir ishni 100 marta qilish kerakmi? Siklni bir marta yozasiz — qolganini kompyuter bajaradi.",
      "en": "Need to do something 100 times? Write a loop once — the computer handles the rest.",
      "ru": "Нужно сделать что-то 100 раз? Напишите цикл один раз — остальное сделает компьютер."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Sikl — kodni qayta-qayta takrorlovchi konstruksiya. `for` ma'lum sondagi takrorlash uchun, `while` esa shart rost bo'lguncha takrorlash uchun ishlatiladi.",
          "en": "A loop is a construct that repeats code over and over. `for` is for a known number of repetitions, while `while` repeats as long as a condition is `true`.",
          "ru": "Цикл — конструкция, которая повторяет код снова и снова. `for` для известного числа повторов, а `while` — пока условие истинно."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni yuz marta yozish — vaqt isrofi va xatolar manbai. Sikl bilan *kam kod* yozib, *ko'p ish* bajarasiz. Bu dasturlashning eng kuchli vositalaridan biri.",
          "en": "Writing the same code a hundred times wastes time and breeds bugs. With a loop you write *less code* and do *more work*. It's one of programming's most powerful tools.",
          "ru": "Писать одинаковый код сто раз — трата времени и источник ошибок. С циклом вы пишете *меньше кода* и делаете *больше работы*. Это один из мощнейших инструментов программирования."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Sanoq olib boradi (`i++`), ro'yxat elementlarini ketma-ket o'qiydi, yig'indi hisoblaydi. `break` siklni to'xtatadi, `continue` esa joriy qadamni o'tkazib yuboradi.",
          "en": "It counts (`i++`), reads list items one by one, and computes sums. `break` stops the loop, while `continue` skips the current step.",
          "ru": "Ведёт счёт (`i++`), последовательно читает элементы списка, считает сумму. `break` останавливает цикл, а `continue` пропускает текущий шаг."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Ro'yxatdagi barcha mahsulotlarni ko'rsatishda, ballarni qo'shishda, animatsiyalarda, ma'lumotlarni qayta ishlashda. Har bir jiddiy dasturda sikllar bor.",
          "en": "In showing every product in a list, summing scores, animations, and processing data. Every serious program has loops.",
          "ru": "При показе всех товаров в списке, суммировании очков, анимациях, обработке данных. В каждой серьёзной программе есть циклы."
        }
      }
    ],
    "task": {
      "uz": "`for` sikli yordamida 1 dan 5 gacha bo'lgan sonlarni har birini alohida qatorda chiqaring.",
      "en": "Using a `for` loop, print the numbers from 1 to 5, each on its own line.",
      "ru": "С помощью цикла `for` выведите числа от 1 до 5, каждое на отдельной строке."
    },
    "hint": {
      "uz": "Sikl `i = 1` dan boshlanadi va `i <= 5` bo'lguncha davom etadi: `for (int i = 1; i <= 5; i++)`.",
      "en": "Start at `i = 1` and continue while `i <= 5`: `for (int i = 1; i <= 5; i++)`.",
      "ru": "Начните с `i = 1` и продолжайте, пока `i <= 5`: `for (int i = 1; i <= 5; i++)`."
    },
    "starterCode": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // TODO: for sikli bilan 1 dan 5 gacha sonlarni chiqaring (for (int i = 1; i <= 5; i++))\n    }\n}",
    "solution": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        for (int i = 1; i <= 5; i++)\n        {\n            Console.WriteLine(i);\n        }\n    }\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["1", "2", "3", "4", "5"],
      "sourceContains": ["for", "console.writeline"]
    },
    "xp": 30,
    "monacoLang": "csharp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Metodlar (funksiyalar)",
      "en": "Methods (functions)",
      "ru": "Методы (функции)"
    },
    "intro": {
      "uz": "Bir marta yozib, istalgancha qayta ishlatadigan kod bo'lagi — bu metod.",
      "en": "A piece of code you write once and reuse anytime — that's a method.",
      "ru": "Кусок кода, который пишешь один раз и используешь сколько угодно — это метод."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Metod — nom berilgan kod bloki, ya'ni alohida *vazifa*. U *parametr* qabul qiladi va `return` orqali natija qaytarishi mumkin. Hech narsa qaytarmasa, turi `void` bo'ladi.",
          "en": "A method is a named block of code — a separate *task*. It takes *parameters* and can return a result via `return`. If it returns nothing, its type is `void`.",
          "ru": "Метод — именованный блок кода, то есть отдельная *задача*. Он принимает *параметры* и может вернуть результат через `return`. Если ничего не возвращает, его тип `void`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Metodlar kodni *takrorlanmas* va tartibli qiladi (DRY — \"o'zingni takrorlama\" tamoyili). Bir joyda tuzatsangiz, hamma joyda tuzaladi.",
          "en": "Methods make code *non-repetitive* and organized (the DRY — \"Don't Repeat Yourself\" — principle). Fix it in one place and it's fixed everywhere.",
          "ru": "Методы делают код *неповторяющимся* и упорядоченным (принцип DRY — \"не повторяйся\"). Исправите в одном месте — исправится везде."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Kirish ma'lumotini (parametr) qabul qilib, hisoblab, natija qaytaradi. Masalan `int Qosh(int a, int b)` ikki sonni qo'shib yig'indini qaytaradi.",
          "en": "It accepts input (parameters), computes, and returns a result. For example `int Qosh(int a, int b)` adds two numbers and returns the sum.",
          "ru": "Принимает входные данные (параметры), вычисляет и возвращает результат. Например `int Qosh(int a, int b)` складывает два числа и возвращает сумму."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Hisob-kitoblarda, ma'lumotni tekshirishda, takrorlanuvchi har qanday amalda. Katta dasturlar yuzlab kichik metodlardan tashkil topadi.",
          "en": "In calculations, validating data, and any repeated operation. Large programs are built from hundreds of small methods.",
          "ru": "В вычислениях, проверке данных и любой повторяющейся операции. Большие программы состоят из сотен маленьких методов."
        }
      }
    ],
    "task": {
      "uz": "Ikki `int` sonni qo'shib yig'indini qaytaruvchi `Qosh` metodini yozing va uni `Console.WriteLine` ichida chaqiring.",
      "en": "Write a `Qosh` method that adds two `int` numbers and returns the sum, then call it inside `Console.WriteLine`.",
      "ru": "Напишите метод `Qosh`, который складывает два числа `int` и возвращает сумму, затем вызовите его внутри `Console.WriteLine`."
    },
    "hint": {
      "uz": "Metod sonni qaytargani uchun turi `int` bo'ladi: `int Qosh(int a, int b) { return a + b; }`.",
      "en": "Since the method returns a number, its type is `int`: `int Qosh(int a, int b) { return a + b; }`.",
      "ru": "Так как метод возвращает число, его тип `int`: `int Qosh(int a, int b) { return a + b; }`."
    },
    "starterCode": "using System;\n\nclass Program\n{\n    // TODO: ikki int sonni qo'shib yig'indini qaytaruvchi Qosh metodini yozing\n\n    static void Main()\n    {\n        // TODO: Qosh(3, 4) ni Console.WriteLine bilan chiqaring\n    }\n}",
    "solution": "using System;\n\nclass Program\n{\n    static int Qosh(int a, int b)\n    {\n        return a + b;\n    }\n\n    static void Main()\n    {\n        Console.WriteLine(Qosh(3, 4));\n    }\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["7"],
      "sourceContains": ["qosh", "return", "console.writeline"]
    },
    "xp": 34,
    "monacoLang": "csharp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Massivlar va List",
      "en": "Arrays and List",
      "ru": "Массивы и List"
    },
    "intro": {
      "uz": "Bitta o'zgaruvchida o'nlab, hatto minglab qiymatni saqlash kerak bo'lsa-chi?",
      "en": "What if you need to store dozens or even thousands of values in one variable?",
      "ru": "А если нужно хранить десятки или даже тысячи значений в одной переменной?"
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Massiv (`int[]`) — bir xil turdagi qiymatlarning *ketma-ketligi*, o'lchami o'zgarmas. `List<int>` esa moslashuvchan ro'yxat: unga element qo'shish va olib tashlash mumkin.",
          "en": "An array (`int[]`) is a *sequence* of same-type values with a fixed size. A `List<int>` is a flexible list: you can add and remove elements.",
          "ru": "Массив (`int[]`) — это *последовательность* значений одного типа фиксированного размера. А `List<int>` — гибкий список: в него можно добавлять и удалять элементы."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "100 ta o'quvchi uchun 100 ta alohida o'zgaruvchi yozish mumkin emas. Bitta to'plamda saqlasangiz, ularni sikl bilan birato'la qayta ishlay olasiz.",
          "en": "Writing 100 separate variables for 100 students is impossible. Stored in one collection, you can process them all at once with a loop.",
          "ru": "Написать 100 отдельных переменных для 100 учеников нереально. Храня их в одной коллекции, вы обрабатываете их разом с помощью цикла."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Indeks orqali elementga murojaat qiladi (`son[0]` — birinchi element). `List`'da `Add()` qo'shadi, `Remove()` o'chiradi, `Count` esa elementlar sonini beradi.",
          "en": "It accesses elements by index (`son[0]` is the first element). On a `List`, `Add()` adds, `Remove()` deletes, and `Count` gives the number of items.",
          "ru": "Обращается к элементу по индексу (`son[0]` — первый элемент). У `List` метод `Add()` добавляет, `Remove()` удаляет, а `Count` даёт количество элементов."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Savatdagi mahsulotlar, foydalanuvchilar ro'yxati, o'yindagi ballar, chat xabarlari — barchasi to'plamlarda saqlanadi. Bu kundalik ehtiyoj.",
          "en": "Items in a cart, lists of users, scores in a game, chat messages — all stored in collections. It's an everyday need.",
          "ru": "Товары в корзине, список пользователей, очки в игре, сообщения чата — всё хранится в коллекциях. Это повседневная необходимость."
        }
      }
    ],
    "task": {
      "uz": "`List<string>` yarating, unga `Add()` bilan uchta meva qo'shing va `foreach` sikli orqali har birini chiqaring.",
      "en": "Create a `List<string>`, add three fruits with `Add()`, and print each one using a `foreach` loop.",
      "ru": "Создайте `List<string>`, добавьте три фрукта через `Add()` и выведите каждый с помощью цикла `foreach`."
    },
    "hint": {
      "uz": "`foreach` har bir elementni navbatma-navbat oladi: `foreach (string meva in mevalar)`.",
      "en": "`foreach` takes each element in turn: `foreach (string meva in mevalar)`.",
      "ru": "`foreach` берёт каждый элемент по очереди: `foreach (string meva in mevalar)`."
    },
    "starterCode": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        List<string> mevalar = new List<string>();\n        // TODO: Add() bilan uchta meva qo'shing (masalan: olma, banan, uzum)\n        // TODO: foreach sikli bilan har bir mevani chiqaring\n    }\n}",
    "solution": "using System;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        List<string> mevalar = new List<string>();\n        mevalar.Add(\"olma\");\n        mevalar.Add(\"banan\");\n        mevalar.Add(\"uzum\");\n\n        foreach (string meva in mevalar)\n        {\n            Console.WriteLine(meva);\n        }\n    }\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["olma", "banan", "uzum"],
      "sourceContains": ["list<string>", ".add(", "foreach"]
    },
    "xp": 36,
    "monacoLang": "csharp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Klasslar va OOP",
      "en": "Classes and OOP",
      "ru": "Классы и ООП"
    },
    "intro": {
      "uz": "Haqiqiy dunyodagi narsalarni — odam, mashina, kitobni — kodga aylantirishni o'rganamiz.",
      "en": "We'll learn to turn real-world things — a person, a car, a book — into code.",
      "ru": "Научимся превращать вещи из реального мира — человека, машину, книгу — в код."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Klass (`class`) — obyekt uchun *chizma* (qolip). U ma'lumot (maydonlar) va xatti-harakat (metodlar)ni birlashtiradi. `new` kalit so'zi bilan klassdan haqiqiy obyekt yaratiladi.",
          "en": "A class (`class`) is a *blueprint* for an object. It combines data (fields) and behavior (methods). With the `new` keyword you create a real object from the class.",
          "ru": "Класс (`class`) — это *чертёж* для объекта. Он объединяет данные (поля) и поведение (методы). С ключевым словом `new` из класса создаётся реальный объект."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "OOP (Obyektga Yo'naltirilgan Dasturlash) katta dasturlarni *tartibli* va tushunarli qiladi. Bog'liq ma'lumot va amallarni bir joyga to'plab, kodni boshqarish osonlashadi.",
          "en": "OOP (Object-Oriented Programming) makes large programs *organized* and understandable. Grouping related data and actions together makes the code easier to manage.",
          "ru": "ООП (объектно-ориентированное программирование) делает большие программы *упорядоченными* и понятными. Группировка связанных данных и действий упрощает управление кодом."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Bitta klassdan ko'plab obyekt yaratish mumkin (har bir mashina alohida). *Konstruktor* obyekt yaratilganda boshlang'ich qiymatlarni o'rnatadi. Metodlar obyekt ustida amal bajaradi.",
          "en": "You can create many objects from one class (each car is separate). A *constructor* sets initial values when an object is created. Methods act on the object.",
          "ru": "Из одного класса можно создать множество объектов (каждая машина отдельная). *Конструктор* задаёт начальные значения при создании объекта. Методы действуют над объектом."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Deyarli barcha jiddiy C# dasturlarida: foydalanuvchi (`User`), buyurtma (`Order`), mahsulot (`Product`) klasslari. OOP — zamonaviy dasturlashning asosi.",
          "en": "In nearly every serious C# program: `User`, `Order`, `Product` classes. OOP is the foundation of modern programming.",
          "ru": "Почти в каждой серьёзной C#-программе: классы `User`, `Order`, `Product`. ООП — основа современного программирования."
        }
      }
    ],
    "task": {
      "uz": "`Ism` maydoni va `Salomlash()` metodiga ega `Odam` klassini yarating. So'ng `new` bilan obyekt yaratib, metodni chaqiring.",
      "en": "Create an `Odam` class with an `Ism` field and a `Salomlash()` method. Then create an object with `new` and call the method.",
      "ru": "Создайте класс `Odam` с полем `Ism` и методом `Salomlash()`. Затем создайте объект через `new` и вызовите метод."
    },
    "hint": {
      "uz": "Obyekt yaratish: `Odam a = new Odam();` so'ng `a.Ism = \"Ali\";` va `a.Salomlash();`.",
      "en": "Create an object: `Odam a = new Odam();` then `a.Ism = \"Ali\";` and `a.Salomlash();`.",
      "ru": "Создание объекта: `Odam a = new Odam();` затем `a.Ism = \"Ali\";` и `a.Salomlash();`."
    },
    "starterCode": "using System;\n\nclass Odam\n{\n    public string Ism;\n\n    public void Salomlash()\n    {\n        // TODO: $\"Salom, men {Ism}\" ni Console.WriteLine bilan chiqaring\n    }\n}\n\nclass Program\n{\n    static void Main()\n    {\n        // TODO: new bilan Odam obyekti yarating, Ism bering va Salomlash() ni chaqiring\n    }\n}",
    "solution": "using System;\n\nclass Odam\n{\n    public string Ism;\n\n    public void Salomlash()\n    {\n        Console.WriteLine($\"Salom, men {Ism}\");\n    }\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Odam a = new Odam();\n        a.Ism = \"Ali\";\n        a.Salomlash();\n    }\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["Salom, men Ali"],
      "sourceContains": ["class odam", "new odam", "salomlash"]
    },
    "xp": 42,
    "monacoLang": "csharp",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Xususiyatlar (properties)",
      "en": "Properties",
      "ru": "Свойства (properties)"
    },
    "intro": {
      "uz": "Obyekt ma'lumotini *xavfsiz* va nazorat ostida boshqarishni o'rganamiz.",
      "en": "We'll learn to manage an object's data *safely* and under control.",
      "ru": "Научимся управлять данными объекта *безопасно* и под контролем."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Xususiyat (property) — maydon ustidagi *aqlli qobiq*. U `get` (o'qish) va `set` (yozish) qismlaridan iborat. Eng oddiy ko'rinishi: `public string Ism { get; set; }`.",
          "en": "A property is a *smart wrapper* around a field. It has `get` (read) and `set` (write) parts. The simplest form is: `public string Ism { get; set; }`.",
          "ru": "Свойство (property) — это *умная обёртка* над полем. Оно состоит из `get` (чтение) и `set` (запись). Простейший вид: `public string Ism { get; set; }`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ochiq maydonlar (`public` field) har qanday qiymatni — hatto noto'g'risini — qabul qiladi. Xususiyatlar esa qiymatni *tekshirib* qabul qiladi va ma'lumotlarni himoya qiladi (inkapsulatsiya).",
          "en": "Public fields accept any value — even an invalid one. Properties accept a value *after checking* it and protect the data (encapsulation).",
          "ru": "Открытые поля принимают любое значение — даже неверное. Свойства принимают значение *после проверки* и защищают данные (инкапсуляция)."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`set` ichida shart qo'yib, noto'g'ri qiymatni rad etish mumkin (masalan, manfiy yosh). `get; private set;` bilan tashqaridan faqat o'qishga ruxsat berasiz.",
          "en": "Inside `set` you can add a check and reject invalid values (like a negative age). With `get; private set;` you allow read-only access from outside.",
          "ru": "Внутри `set` можно добавить проверку и отклонить неверное значение (например, отрицательный возраст). С `get; private set;` вы даёте доступ только на чтение извне."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har bir klassda obyekt ma'lumotini ifodalashda: `BalansI`, `Yosh`, `Email`. Zamonaviy C# kodida maydonlar deyarli har doim xususiyatlar orqali ochiladi.",
          "en": "In every class to expose object data: `Balans`, `Yosh`, `Email`. In modern C# code, fields are almost always exposed through properties.",
          "ru": "В каждом классе для представления данных объекта: `Balans`, `Yosh`, `Email`. В современном C#-коде поля почти всегда открываются через свойства."
        }
      }
    ],
    "task": {
      "uz": "`Mahsulot` klassida `Nomi` (string) va `Narxi` (double) xususiyatlarini `{ get; set; }` bilan yarating, obyekt to'ldirib qiymatlarni chiqaring.",
      "en": "In a `Mahsulot` class, create `Nomi` (string) and `Narxi` (double) properties with `{ get; set; }`, fill an object and print the values.",
      "ru": "В классе `Mahsulot` создайте свойства `Nomi` (string) и `Narxi` (double) через `{ get; set; }`, заполните объект и выведите значения."
    },
    "hint": {
      "uz": "Avtomatik xususiyat: `public double Narxi { get; set; }`. Qiymat berish: `m.Narxi = 9.99;`.",
      "en": "Auto-property: `public double Narxi { get; set; }`. Assigning: `m.Narxi = 9.99;`.",
      "ru": "Автосвойство: `public double Narxi { get; set; }`. Присваивание: `m.Narxi = 9.99;`."
    },
    "starterCode": "using System;\n\nclass Mahsulot\n{\n    // TODO: Nomi (string) va Narxi (double) xususiyatlarini { get; set; } bilan e'lon qiling\n}\n\nclass Program\n{\n    static void Main()\n    {\n        // TODO: Mahsulot obyektini yarating, Nomi va Narxi bering, $\"{m.Nomi}: {m.Narxi}\" ni chiqaring\n    }\n}",
    "solution": "using System;\n\nclass Mahsulot\n{\n    public string Nomi { get; set; }\n    public double Narxi { get; set; }\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Mahsulot m = new Mahsulot();\n        m.Nomi = \"Daftar\";\n        m.Narxi = 9.99;\n        Console.WriteLine($\"{m.Nomi}: {m.Narxi}\");\n    }\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["Daftar", "9.99"],
      "sourceContains": ["get; set;", "class mahsulot", "new mahsulot"]
    },
    "xp": 45,
    "monacoLang": "csharp",
    "preview": "none"
  }
];
