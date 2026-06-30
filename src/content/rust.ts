import type { LessonContent } from "./types";

export const rustLessons: LessonContent[] = [
  {
    "title": {
      "uz": "println! va o'zgaruvchilar",
      "en": "println! and Variables",
      "ru": "println! и переменные"
    },
    "intro": {
      "uz": "Har bir Rust dasturi ekranga biror narsa chiqarishdan boshlanadi — keling, birinchi so'zimizni aytamiz!",
      "en": "Every Rust program starts by printing something — let's say our first words!",
      "ru": "Каждая программа на Rust начинается с вывода на экран — скажем наши первые слова!"
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`println!` — ekranga matn chiqaradigan *makros* (shuning uchun oxirida `!` turadi). O'zgaruvchi esa `let` orqali yaratiladi va biror qiymatni nom bilan saqlaydi, masalan `let ism = \"Ali\";`.",
          "en": "`println!` is a *macro* that prints text to the screen (that's why it ends with `!`). A variable is created with `let` and stores a value under a name, like `let name = \"Ali\";`.",
          "ru": "`println!` — это *макрос*, который выводит текст на экран (поэтому в конце стоит `!`). Переменная создаётся через `let` и хранит значение под именем, например `let name = \"Ali\";`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Natijani ko'rsatmasa, dastur nima qilganini bilmaymiz — `println!` bizning ko'zimiz. O'zgaruvchilar esa ma'lumotni eslab qolish va keyin qayta ishlatish imkonini beradi.",
          "en": "Without showing output we can't tell what the program did — `println!` is our eyes. Variables let us remember data and reuse it later.",
          "ru": "Без вывода мы не узнаем, что сделала программа — `println!` это наши глаза. А переменные позволяют запоминать данные и использовать их потом."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`println!(\"Salom, {}\", ism)` ichida `{}` o'rniga o'zgaruvchi qiymatini qo'yadi. Rust'da o'zgaruvchilar odatda *o'zgarmas*, lekin `let mut` desangiz qiymatni keyinchalik o'zgartirsa bo'ladi.",
          "en": "`println!(\"Hello, {}\", name)` puts the variable value where `{}` is. In Rust variables are *immutable* by default, but `let mut` lets you change the value later.",
          "ru": "`println!(\"Привет, {}\", name)` подставляет значение переменной на место `{}`. В Rust переменные по умолчанию *неизменяемы*, но `let mut` позволяет менять значение позже."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchiga xabar berish, hisob-kitob natijasini ko'rsatish va dasturni *debug* qilishda. Deyarli har bir dasturda ekranga chiqarish bor.",
          "en": "Showing messages to the user, displaying calculation results, and *debugging* a program. Almost every program prints something.",
          "ru": "Показ сообщений пользователю, вывод результатов вычислений и *отладка* программы. Почти каждая программа что-то выводит."
        }
      }
    ],
    "task": {
      "uz": "`let` bilan `ism` o'zgaruvchisini yarating va `println!` orqali \"Salom, <ism>!\" deb ekranga chiqaring.",
      "en": "Create a `name` variable with `let` and print \"Hello, <name>!\" using `println!`.",
      "ru": "Создайте переменную `name` через `let` и выведите \"Привет, <name>!\" с помощью `println!`."
    },
    "hint": {
      "uz": "Qiymatni qo'yish uchun `{}` ishlatiladi: `println!(\"Salom, {}!\", ism);`",
      "en": "Use `{}` to insert the value: `println!(\"Hello, {}!\", name);`",
      "ru": "Используйте `{}` для вставки значения: `println!(\"Привет, {}!\", name);`"
    },
    "starterCode": "fn main() {\n    // TODO: `ism` nomli o'zgaruvchini `let` bilan yarating (masalan \"Ali\")\n    // TODO: `println!` orqali \"Salom, <ism>!\" deb chiqaring ({} dan foydalaning)\n}",
    "solution": "fn main() {\n    let ism = \"Ali\";\n    println!(\"Salom, {}!\", ism);\n}",
    "check": {
      "mustRun": true,
      "sourceContains": ["let", "println!"],
      "outputMatches": "Salom,\\s*.+"
    },
    "xp": 20,
    "monacoLang": "rust",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ma'lumot turlari",
      "en": "Data Types",
      "ru": "Типы данных"
    },
    "intro": {
      "uz": "Sonlar, matnlar va rost/yolg'on qiymatlar — Rust har bir ma'lumotning turini aniq biladi.",
      "en": "Numbers, text and true/false values — Rust knows the exact type of every piece of data.",
      "ru": "Числа, текст и истина/ложь — Rust точно знает тип каждого значения."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Tur — bu ma'lumot qanday ko'rinishda ekanini bildiradi: butun son `i32`, kasr son `f64`, mantiqiy `bool` (`true`/`false`) va matn `&str`. Rust ko'pincha turni o'zi *anglaydi*, lekin `let yosh: i32 = 25;` deb aniq ham yozsa bo'ladi.",
          "en": "A type tells what kind of data you have: integer `i32`, decimal `f64`, boolean `bool` (`true`/`false`), and text `&str`. Rust usually *infers* the type, but you can also write it explicitly: `let age: i32 = 25;`.",
          "ru": "Тип сообщает, какой у вас вид данных: целое `i32`, дробное `f64`, логическое `bool` (`true`/`false`) и текст `&str`. Rust обычно *выводит* тип сам, но можно указать явно: `let age: i32 = 25;`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Turlar sababli Rust hali dastur ishlamasdan oldin xatolarni topadi — masalan, songa matn qo'shishga urinishni. Bu kodingizni xavfsiz va tez qiladi.",
          "en": "Thanks to types, Rust catches mistakes before the program even runs — like trying to add text to a number. This makes your code safe and fast.",
          "ru": "Благодаря типам Rust находит ошибки ещё до запуска программы — например, попытку прибавить текст к числу. Это делает код безопасным и быстрым."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Sonlar bilan amallar bajaradi (`+`, `-`, `*`, `/`), `bool` orqali shartlarni saqlaydi va turlarni `as` bilan o'zgartiradi, masalan `son as f64`. Har bir tur o'ziga xos chegaraga ega — `i32` taxminan 2 milliardgacha.",
          "en": "It does arithmetic on numbers (`+`, `-`, `*`, `/`), stores conditions with `bool`, and converts types with `as`, like `n as f64`. Each type has limits — `i32` goes up to about 2 billion.",
          "ru": "Выполняет арифметику с числами (`+`, `-`, `*`, `/`), хранит условия через `bool` и преобразует типы через `as`, например `n as f64`. У каждого типа есть пределы — `i32` примерно до 2 миллиардов."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Narxlarni hisoblash (`f64`), foydalanuvchi yoshini saqlash (`i32`), tizimga kirgan-kirmaganini bildirish (`bool`) va ismlarni saqlash (`&str`). Har bir ilovada turli ma'lumot turlari aralashadi.",
          "en": "Calculating prices (`f64`), storing a user's age (`i32`), tracking whether someone is logged in (`bool`), and holding names (`&str`). Every app mixes different data types.",
          "ru": "Расчёт цен (`f64`), хранение возраста (`i32`), отслеживание входа в систему (`bool`) и хранение имён (`&str`). В каждом приложении смешиваются разные типы."
        }
      }
    ],
    "task": {
      "uz": "Uchta o'zgaruvchi yarating: `i32` turidagi yosh, `f64` turidagi bo'y va `bool` turidagi talaba. Ularning hammasini `println!` bilan chiqaring.",
      "en": "Create three variables: an `i32` age, an `f64` height, and a `bool` is_student. Print all of them with `println!`.",
      "ru": "Создайте три переменные: `i32` age, `f64` height и `bool` is_student. Выведите их все через `println!`."
    },
    "hint": {
      "uz": "Bir nechta qiymatni chiqarish uchun ko'p `{}` ishlating: `println!(\"{} {} {}\", yosh, boy, talaba);`",
      "en": "Use multiple `{}` to print several values: `println!(\"{} {} {}\", age, height, is_student);`",
      "ru": "Используйте несколько `{}` для вывода значений: `println!(\"{} {} {}\", age, height, is_student);`"
    },
    "starterCode": "fn main() {\n    let yosh: i32 = 20;\n    // TODO: `f64` turidagi `boy` o'zgaruvchisini yarating (masalan 1.75)\n    // TODO: `bool` turidagi `talaba` o'zgaruvchisini yarating (true yoki false)\n    // TODO: uchchala qiymatni bitta `println!` bilan chiqaring\n}",
    "solution": "fn main() {\n    let yosh: i32 = 20;\n    let boy: f64 = 1.75;\n    let talaba: bool = true;\n    println!(\"Yosh: {}, Bo'y: {}, Talaba: {}\", yosh, boy, talaba);\n}",
    "check": {
      "mustRun": true,
      "sourceContains": ["i32", "f64", "bool", "println!"],
      "outputContains": ["20", "1.75", "true"]
    },
    "xp": 25,
    "monacoLang": "rust",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Shartlar (if/else)",
      "en": "Conditions (if/else)",
      "ru": "Условия (if/else)"
    },
    "intro": {
      "uz": "Dastur qaror qabul qila olishi kerak — agar shunday bo'lsa, mana buni qil!",
      "en": "A program needs to make decisions — if this is true, then do that!",
      "ru": "Программа должна принимать решения — если это так, то сделай вот это!"
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`if` — shart tekshiruvi: agar shart `true` bo'lsa, ichidagi kod ishlaydi. Aks holda `else` bloki ishga tushadi, masalan `if yosh >= 18 { ... } else { ... }`.",
          "en": "`if` is a condition check: if the condition is `true`, its code runs. Otherwise the `else` block runs, like `if age >= 18 { ... } else { ... }`.",
          "ru": "`if` — это проверка условия: если оно `true`, выполняется код внутри. Иначе работает блок `else`, например `if age >= 18 { ... } else { ... }`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Hayotdagi har bir tanlov shartga bog'liq — kira oladimi yoki yo'qmi, chegirma boradimi yoki yo'q. Shartlarsiz dastur faqat bir xil ishni qiladi.",
          "en": "Every real-life choice depends on a condition — can they enter or not, is there a discount or not. Without conditions a program only ever does one thing.",
          "ru": "Любой жизненный выбор зависит от условия — пустить или нет, есть скидка или нет. Без условий программа делает только одно и то же."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Taqqoslash operatorlari ishlatadi: `==`, `!=`, `<`, `>`, `<=`, `>=`. Ko'p shartlarni `&&` (va) hamda `||` (yoki) bilan birlashtiradi, hamda `else if` bilan ketma-ket tekshiradi.",
          "en": "It uses comparison operators: `==`, `!=`, `<`, `>`, `<=`, `>=`. It combines conditions with `&&` (and) and `||` (or), and checks several in a row with `else if`.",
          "ru": "Использует операторы сравнения: `==`, `!=`, `<`, `>`, `<=`, `>=`. Объединяет условия через `&&` (и) и `||` (или), а несколько проверяет подряд через `else if`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Parolni tekshirish, yoshga qarab ruxsat berish, o'yinda g'olibni aniqlash va baholarni hisoblash. Mantiqiy qarorlar har qanday ilovaning yuragi.",
          "en": "Checking a password, granting access by age, deciding a game winner, and computing grades. Logical decisions are the heart of any app.",
          "ru": "Проверка пароля, доступ по возрасту, определение победителя в игре и подсчёт оценок. Логические решения — сердце любого приложения."
        }
      }
    ],
    "task": {
      "uz": "`yosh` o'zgaruvchisini yarating. Agar u 18 dan katta yoki teng bo'lsa \"Voyaga yetgan\", aks holda \"Yosh\" deb chiqaring.",
      "en": "Create an `age` variable. If it is 18 or greater print \"Adult\", otherwise print \"Minor\".",
      "ru": "Создайте переменную `age`. Если она 18 или больше — выведите \"Взрослый\", иначе \"Несовершеннолетний\"."
    },
    "hint": {
      "uz": "Shartdan keyin qavs shart emas, lekin `{ }` bloklari kerak: `if yosh >= 18 { ... } else { ... }`",
      "en": "No parentheses needed around the condition, but `{ }` blocks are required: `if age >= 18 { ... } else { ... }`",
      "ru": "Скобки вокруг условия не нужны, но блоки `{ }` обязательны: `if age >= 18 { ... } else { ... }`"
    },
    "starterCode": "fn main() {\n    let yosh = 20;\n    // TODO: `if yosh >= 18` shartini yozing\n    //   - shart bajarilsa \"Voyaga yetgan\" deb chiqaring\n    //   - aks holda (`else`) \"Yosh\" deb chiqaring\n}",
    "solution": "fn main() {\n    let yosh = 20;\n    if yosh >= 18 {\n        println!(\"Voyaga yetgan\");\n    } else {\n        println!(\"Yosh\");\n    }\n}",
    "check": {
      "mustRun": true,
      "sourceContains": ["if", "else", ">="],
      "outputContains": ["Voyaga yetgan"]
    },
    "xp": 28,
    "monacoLang": "rust",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Tsikllar (loop/while/for)",
      "en": "Loops (loop/while/for)",
      "ru": "Циклы (loop/while/for)"
    },
    "intro": {
      "uz": "Bir ishni qayta-qayta qilish kerakmi? Tsikllar buni siz uchun toza va tez bajaradi.",
      "en": "Need to do something over and over? Loops do it for you cleanly and quickly.",
      "ru": "Нужно повторять одно и то же? Циклы делают это за вас чисто и быстро."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Tsikl — kodni takrorlovchi tuzilma. Rust'da uchta turi bor: `loop` (cheksiz, `break` bilan to'xtaydi), `while` (shart `true` bo'lguncha) va `for` (ketma-ketlik bo'ylab yuradi).",
          "en": "A loop is a structure that repeats code. Rust has three kinds: `loop` (infinite, stopped with `break`), `while` (runs while a condition is `true`), and `for` (walks over a sequence).",
          "ru": "Цикл — это конструкция, повторяющая код. В Rust три вида: `loop` (бесконечный, останавливается через `break`), `while` (пока условие `true`) и `for` (проходит по последовательности)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "1 dan 100 gacha sonlarni qo'lda yozish charchatadi — tsikl bir necha qatorda bajaradi. Takrorlanuvchi vazifalarni avtomatlashtirish dasturlashning asosiy kuchi.",
          "en": "Writing numbers 1 to 100 by hand is exhausting — a loop does it in a few lines. Automating repetitive work is a core power of programming.",
          "ru": "Писать числа от 1 до 100 вручную утомительно — цикл сделает это в пару строк. Автоматизация повторов — главная сила программирования."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`for i in 1..=5` diapazon bo'ylab yuradi, `break` tsiklni to'xtatadi, `continue` esa joriy qadamni o'tkazib yuboradi. `while` har safar shartni qayta tekshiradi.",
          "en": "`for i in 1..=5` walks over a range, `break` stops the loop, and `continue` skips the current step. `while` rechecks its condition each time.",
          "ru": "`for i in 1..=5` проходит по диапазону, `break` останавливает цикл, а `continue` пропускает текущий шаг. `while` каждый раз заново проверяет условие."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Ro'yxatdagi har bir elementni qayta ishlash, o'yin sikli, foydalanuvchidan to'g'ri javob kelguncha so'rash va sonlarni yig'ish. Tsikllar deyarli barcha ma'lumotni qayta ishlashda bor.",
          "en": "Processing each item in a list, a game loop, asking the user until they answer correctly, and summing numbers. Loops appear in almost all data processing.",
          "ru": "Обработка каждого элемента списка, игровой цикл, запрос у пользователя до верного ответа и суммирование чисел. Циклы есть почти во всякой обработке данных."
        }
      }
    ],
    "task": {
      "uz": "`for` tsikli yordamida 1 dan 5 gacha bo'lgan sonlarni har birini alohida qatorda chiqaring.",
      "en": "Using a `for` loop, print the numbers from 1 to 5, each on its own line.",
      "ru": "С помощью цикла `for` выведите числа от 1 до 5, каждое на своей строке."
    },
    "hint": {
      "uz": "`1..=5` 5 ni ham qamrab oladi: `for i in 1..=5 { println!(\"{}\", i); }`",
      "en": "`1..=5` includes 5 too: `for i in 1..=5 { println!(\"{}\", i); }`",
      "ru": "`1..=5` включает и 5: `for i in 1..=5 { println!(\"{}\", i); }`"
    },
    "starterCode": "fn main() {\n    // TODO: `for i in 1..=5` tsikli yozing\n    //   va har bir `i` ni `println!` bilan alohida qatorda chiqaring\n}",
    "solution": "fn main() {\n    for i in 1..=5 {\n        println!(\"{}\", i);\n    }\n}",
    "check": {
      "mustRun": true,
      "sourceContains": ["for", "in", "println!"],
      "outputContains": ["1", "2", "3", "4", "5"]
    },
    "xp": 30,
    "monacoLang": "rust",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Funksiyalar",
      "en": "Functions",
      "ru": "Функции"
    },
    "intro": {
      "uz": "Kodni qayta ishlatiladigan bo'laklarga bo'ling — bir marta yozing, ko'p marta chaqiring!",
      "en": "Break your code into reusable blocks — write once, call many times!",
      "ru": "Разбейте код на переиспользуемые блоки — напишите раз, вызывайте много раз!"
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Funksiya — nom berilgan kod bo'lagi. Rust'da `fn` kalit so'zi bilan e'lon qilinadi, masalan `fn salomlash() { ... }`. Har bir Rust dasturi `fn main()` dan boshlanadi.",
          "en": "A function is a named block of code. In Rust it is declared with the `fn` keyword, like `fn greet() { ... }`. Every Rust program starts from `fn main()`.",
          "ru": "Функция — это именованный блок кода. В Rust объявляется ключевым словом `fn`, например `fn greet() { ... }`. Каждая программа на Rust начинается с `fn main()`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni qayta-qayta yozish o'rniga funksiyani bir marta yozib, kerakli joyda chaqirasiz. Bu kodni qisqa, tushunarli va xatosiz qiladi.",
          "en": "Instead of writing the same code again and again, you write a function once and call it where needed. This keeps code short, readable, and less error-prone.",
          "ru": "Вместо повторного написания одного и того же кода вы пишете функцию раз и вызываете её где нужно. Это делает код коротким, понятным и без ошибок."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Funksiya *parametr* qabul qiladi: `fn qoshish(a: i32, b: i32) -> i32`. `->` belgisi qaytariladigan turni ko'rsatadi, va oxirgi ifoda nuqta-vergulsiz qiymat sifatida qaytariladi.",
          "en": "A function takes *parameters*: `fn add(a: i32, b: i32) -> i32`. The `->` arrow shows the return type, and the last expression without a semicolon is returned as the value.",
          "ru": "Функция принимает *параметры*: `fn add(a: i32, b: i32) -> i32`. Стрелка `->` показывает возвращаемый тип, а последнее выражение без точки с запятой возвращается как значение."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Hisob-kitoblar (soliqni hisoblash), tekshiruvlar (parol to'g'rimi), va katta dasturni kichik mantiqiy qismlarga bo'lishda. Yaxshi dastur ko'plab kichik funksiyalardan iborat.",
          "en": "Calculations (computing tax), checks (is the password valid), and splitting a big program into small logical parts. Good programs are made of many small functions.",
          "ru": "Вычисления (расчёт налога), проверки (верен ли пароль) и разбиение большой программы на маленькие логические части. Хорошие программы состоят из множества маленьких функций."
        }
      }
    ],
    "task": {
      "uz": "`qoshish` nomli funksiya yozing: ikkita `i32` qabul qilsin va ularning yig'indisini qaytarsin. Uni `main` ichida chaqirib, natijani chiqaring.",
      "en": "Write a function named `add` that takes two `i32` values and returns their sum. Call it inside `main` and print the result.",
      "ru": "Напишите функцию `add`, которая принимает два `i32` и возвращает их сумму. Вызовите её в `main` и выведите результат."
    },
    "hint": {
      "uz": "Oxirgi qatorda `a + b` yozing — *nuqta-vergulsiz*, shunda u qaytariladi.",
      "en": "Write `a + b` on the last line — *without a semicolon*, so it gets returned.",
      "ru": "Напишите `a + b` на последней строке — *без точки с запятой*, тогда оно вернётся."
    },
    "starterCode": "fn qoshish(a: i32, b: i32) -> i32 {\n    // TODO: a va b ning yig'indisini qaytaring (nuqta-vergulsiz: `a + b`)\n    0\n}\n\nfn main() {\n    // TODO: `qoshish(3, 4)` ni chaqirib natijani `println!` bilan chiqaring\n}",
    "solution": "fn qoshish(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    let natija = qoshish(3, 4);\n    println!(\"Yig'indi: {}\", natija);\n}",
    "check": {
      "mustRun": true,
      "sourceContains": ["fn qoshish", "-> i32", "println!"],
      "outputContains": ["7"]
    },
    "xp": 33,
    "monacoLang": "rust",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Egalik (Ownership)",
      "en": "Ownership Intro",
      "ru": "Владение (Ownership)"
    },
    "intro": {
      "uz": "Rust'ni boshqa tillardan ajratib turadigan eng muhim g'oya — egalik tizimi.",
      "en": "The big idea that sets Rust apart from other languages — its ownership system.",
      "ru": "Главная идея, отличающая Rust от других языков, — система владения."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Egalik — Rust'ning xotirani boshqarish qoidasi: har bir qiymatning bitta *egasi* (owner) bo'ladi. Ega o'z amal doirasidan chiqsa, qiymat avtomatik tozalanadi.",
          "en": "Ownership is Rust's rule for managing memory: every value has exactly one *owner*. When the owner goes out of scope, the value is cleaned up automatically.",
          "ru": "Владение — это правило управления памятью в Rust: у каждого значения ровно один *владелец*. Когда владелец выходит из области видимости, значение очищается автоматически."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Boshqa tillarda xotira xatolari (masalan, ikki marta o'chirish) dasturni buzadi. Rust egalik orqali bu xatolarni *kompilyatsiya paytida* topadi — ya'ni dastur ishlamasdan oldin.",
          "en": "In other languages memory bugs (like freeing twice) crash programs. Through ownership, Rust catches these *at compile time* — before the program even runs.",
          "ru": "В других языках ошибки памяти (например, двойное освобождение) роняют программу. Благодаря владению Rust ловит их *на этапе компиляции* — до запуска программы."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Qiymatni boshqa o'zgaruvchiga berganda u *ko'chiriladi* (move) va eski o'zgaruvchi ishlamaydi. Qiymatni *qarzga* olish uchun `&` (reference) ishlatamiz, masalan `&matn`, shunda egalik o'tmaydi.",
          "en": "When you assign a value to another variable it *moves*, and the old variable stops working. To *borrow* a value we use `&` (a reference), like `&text`, so ownership doesn't transfer.",
          "ru": "При присваивании значения другой переменной оно *перемещается* (move), и старая переменная перестаёт работать. Чтобы *одолжить* значение, используем `&` (ссылку), например `&text`, тогда владение не передаётся."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Funksiyalarga ma'lumot uzatishda, katta ma'lumotlarni nusxalamasdan ulashishda va xavfsiz, tez dasturlar yozishda. Egalik Rust'ning *garbage collector*siz tez ishlashining siri.",
          "en": "Passing data to functions, sharing large data without copying it, and writing safe, fast programs. Ownership is the secret to Rust being fast without a *garbage collector*.",
          "ru": "Передача данных в функции, совместное использование больших данных без копирования и написание безопасных, быстрых программ. Владение — секрет скорости Rust без *сборщика мусора*."
        }
      }
    ],
    "task": {
      "uz": "`String` yarating, uni funksiyaga `&` (reference) orqali uzating va funksiya ichida uning uzunligini chiqaring — egalik o'tmasligiga e'tibor bering.",
      "en": "Create a `String`, pass it to a function by `&` (reference), and print its length inside the function — notice ownership is not transferred.",
      "ru": "Создайте `String`, передайте её в функцию через `&` (ссылку) и выведите её длину внутри функции — обратите внимание, что владение не передаётся."
    },
    "hint": {
      "uz": "Funksiya parametri `s: &String` bo'lsin va chaqirishda `uzunlik(&matn)` deb yozing.",
      "en": "Make the parameter `s: &String` and call it as `length(&text)`.",
      "ru": "Сделайте параметр `s: &String` и вызовите как `length(&text)`."
    },
    "starterCode": "fn uzunlik(s: &String) {\n    // TODO: `s.len()` orqali uzunligini `println!` bilan chiqaring\n}\n\nfn main() {\n    let matn = String::from(\"Salom\");\n    // TODO: `uzunlik` funksiyasini `&matn` (reference) bilan chaqiring\n    // TODO: egalik o'tmaganini ko'rsatish uchun `matn` ni yana chiqaring\n}",
    "solution": "fn uzunlik(s: &String) {\n    println!(\"Uzunligi: {}\", s.len());\n}\n\nfn main() {\n    let matn = String::from(\"Salom\");\n    uzunlik(&matn);\n    println!(\"Asl matn hali bor: {}\", matn);\n}",
    "check": {
      "mustRun": true,
      "sourceContains": ["&String", "String::from", ".len()"],
      "outputContains": ["Uzunligi: 5", "Salom"]
    },
    "xp": 38,
    "monacoLang": "rust",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Strukturalar (struct)",
      "en": "Structs",
      "ru": "Структуры (struct)"
    },
    "intro": {
      "uz": "Bog'liq ma'lumotlarni bitta tartibli qutiga jamlash — strukturalar bilan tanishing!",
      "en": "Group related data into one tidy box — meet structs!",
      "ru": "Объедините связанные данные в одну аккуратную коробку — знакомьтесь, структуры!"
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`struct` — bir nechta bog'liq qiymatni bitta nom ostida birlashtiruvchi maxsus tur. Masalan, `struct Inson { ism: String, yosh: i32 }` — bu ism va yoshni birga saqlaydi.",
          "en": "A `struct` is a custom type that groups several related values under one name. For example, `struct Person { name: String, age: i32 }` keeps a name and age together.",
          "ru": "`struct` — это пользовательский тип, объединяющий несколько связанных значений под одним именем. Например, `struct Person { name: String, age: i32 }` хранит имя и возраст вместе."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir insonning ismi, yoshi va shahrini alohida o'zgaruvchilarda saqlash chalkash bo'ladi. Struktura ularni mantiqan bir butun qilib, kodni tartibli va o'qishli qiladi.",
          "en": "Storing a person's name, age, and city in separate variables gets messy. A struct ties them into one logical unit, keeping code organized and readable.",
          "ru": "Хранить имя, возраст и город человека в отдельных переменных запутанно. Структура связывает их в одно логическое целое, делая код упорядоченным и читаемым."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Maydonlarga `nuqta` orqali murojaat qiladi: `inson.ism`. `impl` bloki ichida struktura uchun *metodlar* yozish mumkin, masalan `inson.salomlash()` kabi xatti-harakatlar qo'shadi.",
          "en": "You access fields with a `dot`: `person.name`. Inside an `impl` block you can write *methods* for a struct, adding behavior like `person.greet()`.",
          "ru": "К полям обращаются через `точку`: `person.name`. Внутри блока `impl` можно писать *методы* для структуры, добавляя поведение вроде `person.greet()`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchi profilini, mahsulot ma'lumotlarini, o'yin qahramonini yoki bank hisobini modellashtirar ekanmiz. Strukturalar real dunyo narsalarini kodda ifodalashning asosiy usuli.",
          "en": "Modeling a user profile, product details, a game character, or a bank account. Structs are the main way to represent real-world things in code.",
          "ru": "Моделирование профиля пользователя, данных товара, игрового персонажа или банковского счёта. Структуры — основной способ представить реальные вещи в коде."
        }
      }
    ],
    "task": {
      "uz": "`Inson` nomli struktura yarating (`ism: String`, `yosh: i32`). `main` ichida bitta nusxa yarating va uning ism hamda yoshini `println!` bilan chiqaring.",
      "en": "Create a struct named `Person` (`name: String`, `age: i32`). In `main`, make one instance and print its name and age with `println!`.",
      "ru": "Создайте структуру `Person` (`name: String`, `age: i32`). В `main` создайте один экземпляр и выведите его имя и возраст через `println!`."
    },
    "hint": {
      "uz": "Maydonlarga nuqta orqali murojaat qiling: `inson.ism` va `inson.yosh`.",
      "en": "Access fields with a dot: `person.name` and `person.age`.",
      "ru": "Обращайтесь к полям через точку: `person.name` и `person.age`."
    },
    "starterCode": "struct Inson {\n    ism: String,\n    yosh: i32,\n}\n\nfn main() {\n    // TODO: `Inson` strukturasidan bitta nusxa yarating (ism va yosh bering)\n    // TODO: `inson.ism` va `inson.yosh` ni `println!` bilan chiqaring\n}",
    "solution": "struct Inson {\n    ism: String,\n    yosh: i32,\n}\n\nfn main() {\n    let inson = Inson {\n        ism: String::from(\"Ali\"),\n        yosh: 25,\n    };\n    println!(\"{} — {} yosh\", inson.ism, inson.yosh);\n}",
    "check": {
      "mustRun": true,
      "sourceContains": ["struct Inson", "inson.ism", "inson.yosh"],
      "outputContains": ["Ali", "25"]
    },
    "xp": 40,
    "monacoLang": "rust",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Enum va match",
      "en": "Enums & match",
      "ru": "Enum и match"
    },
    "intro": {
      "uz": "Cheklangan variantlardan birini tanlash va har biriga aniq javob berish — Rust'ning eng nafis qismi.",
      "en": "Choosing one of a fixed set of options and answering each precisely — Rust's most elegant feature.",
      "ru": "Выбор одного из фиксированного набора вариантов и точный ответ на каждый — самая изящная часть Rust."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`enum` — bir qiymatning mumkin bo'lgan variantlari ro'yxati, masalan `enum Yonalish { Shimol, Janub, Sharq, Garb }`. `match` esa har bir variantni tekshirib, mos kodni ishga tushiradi.",
          "en": "An `enum` is a list of possible variants a value can be, like `enum Direction { North, South, East, West }`. A `match` checks each variant and runs the matching code.",
          "ru": "`enum` — это список возможных вариантов значения, например `enum Direction { North, South, East, West }`. `match` проверяет каждый вариант и запускает подходящий код."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ba'zi narsalarning faqat aniq holatlari bo'ladi — svetofor faqat qizil, sariq yoki yashil. `enum` noto'g'ri qiymatni butunlay imkonsiz qiladi, `match` esa hech bir holatni unutmaslikni majbur qiladi.",
          "en": "Some things have only specific states — a traffic light is only red, yellow, or green. `enum` makes invalid values impossible, and `match` forces you to handle every case.",
          "ru": "У некоторых вещей лишь определённые состояния — светофор бывает только красным, жёлтым или зелёным. `enum` делает неверные значения невозможными, а `match` заставляет обработать каждый случай."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`match` har bir variant uchun alohida tarmoq beradi va `_` orqali qolgan barcha holatlarni qamrab oladi. Enum variantlari ichida ma'lumot ham saqlay oladi, masalan `Some(5)` yoki `None` (mashhur `Option` turi).",
          "en": "`match` gives a separate branch for each variant and covers the rest with `_`. Enum variants can even hold data inside, like `Some(5)` or `None` (the famous `Option` type).",
          "ru": "`match` даёт отдельную ветку для каждого варианта и покрывает остальные через `_`. Варианты enum могут хранить данные внутри, например `Some(5)` или `None` (знаменитый тип `Option`)."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Buyurtma holatini (kutilmoqda, yetkazilmoqda, yakunlandi), menyu tanlovini, xatolarni boshqarishni va `Option`/`Result` orqali \"qiymat bormi yo'qmi\"ni ifodalashda. Enum va match Rust kodida hamma joyda uchraydi.",
          "en": "Representing order status (pending, shipping, done), menu choices, error handling, and \"is there a value or not\" via `Option`/`Result`. Enums and match appear everywhere in Rust code.",
          "ru": "Представление статуса заказа (ожидание, доставка, готово), выбор меню, обработка ошибок и \"есть значение или нет\" через `Option`/`Result`. Enum и match встречаются в коде Rust повсюду."
        }
      }
    ],
    "task": {
      "uz": "`Yonalish` enumini yarating (`Shimol`, `Janub`, `Sharq`, `Garb`). Bitta qiymat tanlang va `match` orqali har bir yo'nalish uchun mos matn chiqaring.",
      "en": "Create a `Direction` enum (`North`, `South`, `East`, `West`). Pick one value and use `match` to print a fitting message for each direction.",
      "ru": "Создайте enum `Direction` (`North`, `South`, `East`, `West`). Выберите одно значение и через `match` выведите подходящее сообщение для каждого направления."
    },
    "hint": {
      "uz": "Har bir tarmoq `=>` bilan yoziladi: `Yonalish::Shimol => println!(\"Shimol\"),`",
      "en": "Each branch uses `=>`: `Direction::North => println!(\"North\"),`",
      "ru": "Каждая ветка с `=>`: `Direction::North => println!(\"Север\"),`"
    },
    "starterCode": "enum Yonalish {\n    Shimol,\n    Janub,\n    Sharq,\n    Garb,\n}\n\nfn main() {\n    let yonalish = Yonalish::Shimol;\n    // TODO: `match yonalish { ... }` yozing\n    //   har bir variant uchun `=>` bilan mos matn chiqaring\n}",
    "solution": "enum Yonalish {\n    Shimol,\n    Janub,\n    Sharq,\n    Garb,\n}\n\nfn main() {\n    let yonalish = Yonalish::Shimol;\n    match yonalish {\n        Yonalish::Shimol => println!(\"Shimolga yur\"),\n        Yonalish::Janub => println!(\"Janubga yur\"),\n        Yonalish::Sharq => println!(\"Sharqqa yur\"),\n        Yonalish::Garb => println!(\"G'arbga yur\"),\n    }\n}",
    "check": {
      "mustRun": true,
      "sourceContains": ["enum Yonalish", "match", "=>"],
      "outputContains": ["Shimolga yur"]
    },
    "xp": 45,
    "monacoLang": "rust",
    "preview": "none"
  }
];
