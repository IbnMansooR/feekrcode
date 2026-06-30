import type { LessonContent } from "./types";

export const goLessons: LessonContent[] = [
  {
    "title": {
      "uz": "Birinchi dastur va o'zgaruvchilar",
      "en": "First Program and Variables",
      "ru": "Первая программа и переменные"
    },
    "intro": {
      "uz": "Har bir Go dasturi ekranga matn chiqarishdan boshlanadi.",
      "en": "Every Go program starts by printing text to the screen.",
      "ru": "Каждая программа на Go начинается с вывода текста на экран."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`fmt.Println` — ekranga matn chiqaradigan buyruq. O'zgaruvchi esa ma'lumotni saqlaydigan nomli quti: `var ism string = \"Ali\"` yoki qisqacha `ism := \"Ali\"`.",
          "en": "`fmt.Println` is a command that prints text to the screen. A variable is a named box that stores data: `var name string = \"Ali\"` or shortly `name := \"Ali\"`.",
          "ru": "`fmt.Println` — команда, которая выводит текст на экран. Переменная — это именованная коробка для хранения данных: `var name string = \"Ali\"` или коротко `name := \"Ali\"`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Natijani ko'rsatmasak, dastur nima qilayotganini bilmaymiz. O'zgaruvchilar esa qiymatlarni eslab qolib, ularni keyin qayta ishlatish imkonini beradi.",
          "en": "Without showing output, we can't tell what the program is doing. Variables let us remember values and reuse them later.",
          "ru": "Без вывода мы не узнаем, что делает программа. Переменные позволяют запоминать значения и использовать их потом."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`fmt.Println` bir nechta narsani vergul bilan ajratib chiqaradi: `fmt.Println(\"Yosh:\", yosh)`. Go o'zgaruvchi turini `:=` orqali avtomatik aniqlaydi.",
          "en": "`fmt.Println` can print several things separated by commas: `fmt.Println(\"Age:\", age)`. Go automatically infers the variable's type with `:=`.",
          "ru": "`fmt.Println` может выводить несколько значений через запятую: `fmt.Println(\"Возраст:\", age)`. Go автоматически определяет тип переменной через `:=`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har bir dasturda: foydalanuvchiga xabar ko'rsatish, natijalarni chiqarish va xatolarni tekshirishda. Bu Go'da yozadigan birinchi va eng ko'p ishlatiladigan buyruq.",
          "en": "In every program: showing messages to the user, printing results, and debugging. It's the first and most-used command you write in Go.",
          "ru": "В каждой программе: показ сообщений пользователю, вывод результатов и отладка. Это первая и самая частая команда в Go."
        }
      }
    ],
    "task": {
      "uz": "`ism` nomli o'zgaruvchiga o'z ismingizni bering va uni `fmt.Println` bilan ekranga chiqaring.",
      "en": "Create a variable called `name`, set it to your name, and print it with `fmt.Println`.",
      "ru": "Создайте переменную `name`, присвойте ей ваше имя и выведите её через `fmt.Println`."
    },
    "hint": {
      "uz": "`ism := \"Ali\"` deb yozing, so'ng `fmt.Println(ism)`.",
      "en": "Write `name := \"Ali\"`, then `fmt.Println(name)`.",
      "ru": "Напишите `name := \"Ali\"`, затем `fmt.Println(name)`."
    },
    "starterCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\t// TODO: ism nomli o'zgaruvchi yarating va unga o'z ismingizni bering\n\t// TODO: fmt.Println bilan ismni ekranga chiqaring\n}",
    "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tism := \"Ali\"\n\tfmt.Println(\"Salom,\", ism)\n}",
    "check": {
      "mustRun": true,
      "outputMatches": ".+",
      "sourceContains": ["fmt.Println", ":="]
    },
    "xp": 20,
    "monacoLang": "go",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Ma'lumot turlari",
      "en": "Data Types",
      "ru": "Типы данных"
    },
    "intro": {
      "uz": "Go'da har bir qiymatning o'z turi bor — son, matn yoki rost/yolg'on.",
      "en": "In Go every value has a type — a number, text, or true/false.",
      "ru": "В Go у каждого значения есть тип — число, текст или истина/ложь."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Ma'lumot turi qiymat qanday saqlanishini bildiradi. Asosiylari: butun son `int`, kasr son `float64`, matn `string` va mantiqiy `bool` (`true`/`false`).",
          "en": "A data type tells how a value is stored. The main ones are: whole number `int`, decimal `float64`, text `string`, and logical `bool` (`true`/`false`).",
          "ru": "Тип данных определяет, как хранится значение. Основные: целое `int`, дробное `float64`, текст `string` и логическое `bool` (`true`/`false`)."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Go *qattiq tiplangan* til: sonni songa qo'shasiz, matnni matnga. Bu xatolarni oldindan ushlaydi va dasturni ishonchli qiladi.",
          "en": "Go is a *strongly typed* language: you add numbers to numbers, text to text. This catches mistakes early and makes programs reliable.",
          "ru": "Go — язык со *строгой типизацией*: число складывается с числом, текст с текстом. Это ловит ошибки заранее и делает программы надёжными."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Sonlar bilan matematika qilasiz: `narx * 2`. Matnlarni `+` bilan birlashtirasiz. `bool` esa shartlarni boshqaradi. Turni `strconv.Itoa` bilan o'zgartirish mumkin.",
          "en": "You do math with numbers: `price * 2`. You join strings with `+`. A `bool` drives conditions. You can convert types with `strconv.Itoa`.",
          "ru": "С числами вы делаете математику: `price * 2`. Строки соединяете через `+`. `bool` управляет условиями. Тип меняется через `strconv.Itoa`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Narxlar va miqdorlar `float64` yoki `int`, foydalanuvchi ismi `string`, \"tizimga kirganmi?\" degan holat `bool` bilan saqlanadi. Har bir dasturda turlar uchraydi.",
          "en": "Prices and quantities use `float64` or `int`, a username uses `string`, and \"is logged in?\" uses `bool`. Types appear in every program.",
          "ru": "Цены и количества — `float64` или `int`, имя пользователя — `string`, статус «вошёл?» — `bool`. Типы есть в каждой программе."
        }
      }
    ],
    "task": {
      "uz": "Uchta o'zgaruvchi yarating: `yosh` (`int`), `boyi` (`float64`), `talaba` (`bool`) va uchalasini ekranga chiqaring.",
      "en": "Create three variables: `age` (`int`), `height` (`float64`), `student` (`bool`) and print all three.",
      "ru": "Создайте три переменные: `age` (`int`), `height` (`float64`), `student` (`bool`) и выведите все три."
    },
    "hint": {
      "uz": "`yosh := 20`, `boyi := 1.75`, `talaba := true`.",
      "en": "`age := 20`, `height := 1.75`, `student := true`.",
      "ru": "`age := 20`, `height := 1.75`, `student := true`."
    },
    "starterCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\t// TODO: yosh (int), boyi (float64) va talaba (bool) o'zgaruvchilarini yarating\n\t// TODO: uchalasini bitta fmt.Println bilan chiqaring\n}",
    "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tyosh := 20\n\tboyi := 1.75\n\ttalaba := true\n\tfmt.Println(yosh, boyi, talaba)\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["20", "1.75", "true"],
      "sourceContains": ["fmt.Println", ":="]
    },
    "xp": 24,
    "monacoLang": "go",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Shartlar (if/else)",
      "en": "Conditions (if/else)",
      "ru": "Условия (if/else)"
    },
    "intro": {
      "uz": "Dastur qaror qabul qila olishi kerak — `if` aynan shu uchun.",
      "en": "A program needs to make decisions — that's exactly what `if` is for.",
      "ru": "Программа должна принимать решения — именно для этого нужен `if`."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`if` — shart rost bo'lsa, kodning bir qismini bajaradi. `else` esa shart yolg'on bo'lganda boshqa yo'lni tanlaydi. Shart `>`, `<`, `==` kabi belgilar bilan tuziladi.",
          "en": "`if` runs a block of code when a condition is true. `else` chooses another path when it's false. Conditions use signs like `>`, `<`, `==`.",
          "ru": "`if` выполняет блок кода, если условие истинно. `else` выбирает другой путь, если оно ложно. Условия строятся знаками `>`, `<`, `==`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Hayotdagi har bir qaror shartga bog'liq: \"yosh 18 dan katta bo'lsa — kira oladi\". `if` shu mantiqni dasturga olib kiradi va uni *aqlli* qiladi.",
          "en": "Every real decision depends on a condition: \"if age is over 18 — allow entry\". `if` brings this logic into the program and makes it *smart*.",
          "ru": "Любое решение зависит от условия: «если возраст больше 18 — пропустить». `if` вносит эту логику в программу и делает её *умной*."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`else if` bilan bir nechta holatni ketma-ket tekshirasiz. Shartlarni `&&` (va) hamda `||` (yoki) bilan birlashtirasiz. Go'da shartni qavs ichiga olish shart emas.",
          "en": "With `else if` you check several cases in a row. You combine conditions with `&&` (and) and `||` (or). In Go you don't wrap the condition in parentheses.",
          "ru": "С `else if` вы проверяете несколько случаев подряд. Условия объединяете через `&&` (и) и `||` (или). В Go условие не оборачивают в скобки."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Parolni tekshirish, baho qo'yish (a'lo/yaxshi/qoniqarsiz), chegirma berish, ruxsatni nazorat qilish — barchasi shartlarga asoslanadi. `if`siz dastur faqat to'g'ri yo'ldan yuradi.",
          "en": "Checking a password, grading (excellent/good/fail), applying discounts, controlling access — all rely on conditions. Without `if` a program follows only one path.",
          "ru": "Проверка пароля, выставление оценки (отлично/хорошо/плохо), скидки, контроль доступа — всё на условиях. Без `if` программа идёт лишь одним путём."
        }
      }
    ],
    "task": {
      "uz": "`yosh` o'zgaruvchisini tekshiring: 18 dan katta yoki teng bo'lsa \"Voyaga yetgan\", aks holda \"Yosh\" deb chiqaring.",
      "en": "Check the `age` variable: if it is 18 or more print \"Adult\", otherwise print \"Young\".",
      "ru": "Проверьте переменную `age`: если 18 или больше — выведите «Взрослый», иначе «Молодой»."
    },
    "hint": {
      "uz": "`if yosh >= 18 { ... } else { ... }` — qavslar shart emas, jingalak qavslar shart.",
      "en": "`if age >= 18 { ... } else { ... }` — no parentheses needed, but braces are required.",
      "ru": "`if age >= 18 { ... } else { ... }` — скобки не нужны, но фигурные обязательны."
    },
    "starterCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tyosh := 20\n\t// TODO: if/else bilan yoshni tekshiring:\n\t// 18 dan katta yoki teng bo'lsa \"Voyaga yetgan\", aks holda \"Yosh\" chiqaring\n}",
    "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tyosh := 20\n\tif yosh >= 18 {\n\t\tfmt.Println(\"Voyaga yetgan\")\n\t} else {\n\t\tfmt.Println(\"Yosh\")\n\t}\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["Voyaga yetgan"],
      "sourceContains": ["if", "else", ">="]
    },
    "xp": 28,
    "monacoLang": "go",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Tsikllar (for)",
      "en": "Loops (for)",
      "ru": "Циклы (for)"
    },
    "intro": {
      "uz": "Bir ishni yuz marta qo'l bilan yozish o'rniga — `for` uni o'zi takrorlaydi.",
      "en": "Instead of writing the same thing a hundred times — `for` repeats it for you.",
      "ru": "Вместо того чтобы писать одно и то же сто раз — `for` повторит это за вас."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "`for` — kodni qayta-qayta takrorlaydigan tsikl. Go'da faqat bitta tsikl turi bor: `for i := 0; i < 5; i++`. Bu boshlanish, shart va qadamdan iborat.",
          "en": "`for` is a loop that repeats code again and again. Go has only one loop keyword: `for i := 0; i < 5; i++`. It has a start, a condition, and a step.",
          "ru": "`for` — цикл, повторяющий код снова и снова. В Go только одно ключевое слово цикла: `for i := 0; i < 5; i++`. Это начало, условие и шаг."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Kompyuterning kuchi — bir ishni charchamasdan ming marta bajarishida. Tsikl bo'lmasa, har bir takror uchun alohida qator yozishga to'g'ri kelardi.",
          "en": "A computer's power is in doing a task a thousand times without getting tired. Without a loop, you'd write a separate line for every repetition.",
          "ru": "Сила компьютера — в выполнении задачи тысячу раз без устали. Без цикла пришлось бы писать отдельную строку на каждый повтор."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Sonlarni sanaydi, ro'yxat elementlarini aylanib chiqadi va shart bajarilguncha kutadi. `for shart { ... }` cheksiz takrorni boshqaradi, `break` esa undan chiqadi.",
          "en": "It counts numbers, walks through list items, and waits until a condition holds. `for condition { ... }` controls open-ended repetition, and `break` exits it.",
          "ru": "Он считает числа, проходит по элементам списка и ждёт выполнения условия. `for условие { ... }` управляет бесконечным повтором, а `break` выходит из него."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Ro'yxatdagi har bir mahsulotni ko'rsatish, fayldagi qatorlarni o'qish, jami summani hisoblash — barchasida tsikl ishlatiladi. Bu kundalik dasturlashning yuragi.",
          "en": "Showing every product in a list, reading lines in a file, summing a total — all use a loop. It's the heart of everyday programming.",
          "ru": "Показ каждого товара в списке, чтение строк файла, подсчёт суммы — всюду цикл. Это сердце повседневного программирования."
        }
      }
    ],
    "task": {
      "uz": "`for` tsikli yordamida 1 dan 5 gacha bo'lgan sonlarni ekranga chiqaring.",
      "en": "Use a `for` loop to print the numbers from 1 to 5.",
      "ru": "С помощью цикла `for` выведите числа от 1 до 5."
    },
    "hint": {
      "uz": "`for i := 1; i <= 5; i++ { fmt.Println(i) }` — `i++` har qadamda birga oshiradi.",
      "en": "`for i := 1; i <= 5; i++ { fmt.Println(i) }` — `i++` adds one each step.",
      "ru": "`for i := 1; i <= 5; i++ { fmt.Println(i) }` — `i++` прибавляет один на каждом шаге."
    },
    "starterCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\t// TODO: for tsikli yozing va 1 dan 5 gacha sonlarni chiqaring\n}",
    "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfor i := 1; i <= 5; i++ {\n\t\tfmt.Println(i)\n\t}\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["1", "2", "3", "4", "5"],
      "sourceContains": ["for", "fmt.Println"]
    },
    "xp": 30,
    "monacoLang": "go",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Funksiyalar",
      "en": "Functions",
      "ru": "Функции"
    },
    "intro": {
      "uz": "Bir marta yozib, istalgancha qayta ishlatadigan kod bo'lagi — bu funksiya.",
      "en": "A piece of code you write once and reuse as often as you like — that's a function.",
      "ru": "Кусок кода, который пишешь один раз и используешь сколько угодно — это функция."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Funksiya — nom berilgan kod bloki. `func salom() { ... }` deb e'lon qilinadi va `salom()` deb chaqiriladi. U *parametr* qabul qiladi va natija *qaytaradi*.",
          "en": "A function is a named block of code. You declare it with `func greet() { ... }` and call it with `greet()`. It takes *parameters* and *returns* a result.",
          "ru": "Функция — именованный блок кода. Объявляется через `func greet() { ... }` и вызывается как `greet()`. Она принимает *параметры* и *возвращает* результат."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir xil kodni qayta-qayta yozish o'rniga, uni bir funksiyaga jamlaysiz. Bu kodni qisqa, tushunarli va xatosini topish oson qiladi.",
          "en": "Instead of writing the same code over and over, you gather it into one function. This keeps code short, clear, and easy to debug.",
          "ru": "Вместо повторения одного кода вы собираете его в одну функцию. Это делает код коротким, понятным и удобным для отладки."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Kirish qiymatlarini olib, hisoblab, natija qaytaradi: `func qoshish(a int, b int) int { return a + b }`. Go funksiyalar bir vaqtning o'zida bir nechta qiymat ham qaytara oladi.",
          "en": "It takes inputs, computes, and returns a result: `func add(a int, b int) int { return a + b }`. Go functions can even return several values at once.",
          "ru": "Принимает входные данные, вычисляет и возвращает результат: `func add(a int, b int) int { return a + b }`. Функции в Go могут вернуть даже несколько значений сразу."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Soliqni hisoblash, foydalanuvchini tekshirish, ma'lumotni saqlash — har bir vazifa o'z funksiyasiga ajratiladi. Hatto dastur `main()` funksiyasidan boshlanadi.",
          "en": "Calculating tax, validating a user, saving data — each task gets its own function. Even the program itself starts from the `main()` function.",
          "ru": "Расчёт налога, проверка пользователя, сохранение данных — каждая задача в своей функции. Даже сама программа стартует из функции `main()`."
        }
      }
    ],
    "task": {
      "uz": "Ikkita sonni qo'shib, natijani qaytaradigan `qoshish` funksiyasini yozing va uni `main` ichida chaqiring.",
      "en": "Write a function `add` that adds two numbers and returns the result, then call it inside `main`.",
      "ru": "Напишите функцию `add`, которая складывает два числа и возвращает результат, затем вызовите её в `main`."
    },
    "hint": {
      "uz": "`func qoshish(a int, b int) int { return a + b }`, so'ng `fmt.Println(qoshish(2, 3))`.",
      "en": "`func add(a int, b int) int { return a + b }`, then `fmt.Println(add(2, 3))`.",
      "ru": "`func add(a int, b int) int { return a + b }`, затем `fmt.Println(add(2, 3))`."
    },
    "starterCode": "package main\n\nimport \"fmt\"\n\nfunc qoshish(a int, b int) int {\n\t// TODO: a va b ni qo'shib, natijasini return qiling\n\treturn 0\n}\n\nfunc main() {\n\t// TODO: qoshish(2, 3) ni chaqirib, natijani fmt.Println bilan chiqaring\n}",
    "solution": "package main\n\nimport \"fmt\"\n\nfunc qoshish(a int, b int) int {\n\treturn a + b\n}\n\nfunc main() {\n\tfmt.Println(qoshish(2, 3))\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["5"],
      "sourceContains": ["func", "return"]
    },
    "xp": 33,
    "monacoLang": "go",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Slice'lar (ro'yxatlar)",
      "en": "Slices (lists)",
      "ru": "Слайсы (списки)"
    },
    "intro": {
      "uz": "Bitta o'zgaruvchida ko'plab qiymatlarni saqlash kerakmi? Slice aynan shuni qiladi.",
      "en": "Need to store many values in one variable? A slice does exactly that.",
      "ru": "Нужно хранить много значений в одной переменной? Слайс делает именно это."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Slice — bir turdagi qiymatlar tartibli ro'yxati. `mevalar := []string{\"olma\", \"nok\"}` deb yaratiladi. Har bir element *indeks* (0 dan boshlanadi) orqali olinadi: `mevalar[0]`.",
          "en": "A slice is an ordered list of same-type values. You create it with `fruits := []string{\"apple\", \"pear\"}`. Each element is reached by its *index* (starting at 0): `fruits[0]`.",
          "ru": "Слайс — упорядоченный список значений одного типа. Создаётся через `fruits := []string{\"apple\", \"pear\"}`. К каждому элементу обращаются по *индексу* (с 0): `fruits[0]`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "100 ta ism uchun 100 ta o'zgaruvchi yozib bo'lmaydi. Slice ularni bitta nom ostida jamlaydi va tsikl bilan birga juda kuchli vositaga aylanadi.",
          "en": "You can't write 100 variables for 100 names. A slice gathers them under one name and, paired with a loop, becomes a very powerful tool.",
          "ru": "Нельзя завести 100 переменных под 100 имён. Слайс собирает их под одним именем и вместе с циклом становится мощным инструментом."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "`append` bilan yangi element qo'shadi, `len` bilan uzunligini bildiradi, `for range` bilan har bir elementni aylanib chiqadi. Slice o'lchami o'zgaruvchan — istalgancha o'sadi.",
          "en": "It adds a new element with `append`, reports its length with `len`, and walks every element with `for range`. A slice's size is flexible — it grows as needed.",
          "ru": "Добавляет элемент через `append`, сообщает длину через `len`, проходит по элементам через `for range`. Размер слайса гибкий — он растёт по мере надобности."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Savatdagi mahsulotlar, foydalanuvchilar ro'yxati, izohlar to'plami — barchasi slice'da saqlanadi. Bu Go'da ma'lumotlar to'plamini saqlashning eng asosiy usuli.",
          "en": "Items in a cart, a list of users, a set of comments — all stored in a slice. It's the most fundamental way to hold a collection of data in Go.",
          "ru": "Товары в корзине, список пользователей, набор комментариев — всё хранится в слайсе. Это самый базовый способ держать коллекцию данных в Go."
        }
      }
    ],
    "task": {
      "uz": "Uchta meva nomidan iborat slice yarating va uni `for range` bilan aylanib, har bir mevani chiqaring.",
      "en": "Create a slice of three fruit names and loop over it with `for range`, printing each fruit.",
      "ru": "Создайте слайс из трёх названий фруктов и пройдитесь по нему через `for range`, выводя каждый фрукт."
    },
    "hint": {
      "uz": "`for _, meva := range mevalar { fmt.Println(meva) }` — `_` indeksni e'tiborsiz qoldiradi.",
      "en": "`for _, fruit := range fruits { fmt.Println(fruit) }` — `_` ignores the index.",
      "ru": "`for _, fruit := range fruits { fmt.Println(fruit) }` — `_` игнорирует индекс."
    },
    "starterCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tmevalar := []string{\"olma\", \"nok\", \"uzum\"}\n\t// TODO: for range bilan mevalar slice'ini aylanib, har bir mevani chiqaring\n}",
    "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tmevalar := []string{\"olma\", \"nok\", \"uzum\"}\n\tfor _, meva := range mevalar {\n\t\tfmt.Println(meva)\n\t}\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["olma", "nok", "uzum"],
      "sourceContains": ["range", "[]string"]
    },
    "xp": 36,
    "monacoLang": "go",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Map'lar (kalit-qiymat)",
      "en": "Maps (key-value)",
      "ru": "Карты (ключ-значение)"
    },
    "intro": {
      "uz": "Ma'lumotni nom orqali tez topish kerakmi? Map har bir kalitga qiymat bog'laydi.",
      "en": "Need to find data quickly by name? A map links each key to a value.",
      "ru": "Нужно быстро найти данные по имени? Карта связывает каждый ключ со значением."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Map — kalit va qiymat juftliklari to'plami, xuddi lug'at kabi. `yoshlar := map[string]int{\"Ali\": 20}` — bu yerda ism *kalit*, yosh *qiymat*. Qiymat `yoshlar[\"Ali\"]` orqali olinadi.",
          "en": "A map is a set of key-value pairs, like a dictionary. `ages := map[string]int{\"Ali\": 20}` — here the name is the *key* and age is the *value*. You read it with `ages[\"Ali\"]`.",
          "ru": "Карта — набор пар ключ-значение, как словарь. `ages := map[string]int{\"Ali\": 20}` — здесь имя это *ключ*, возраст это *значение*. Читается через `ages[\"Ali\"]`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Slice'da elementni topish uchun butun ro'yxatni aylanib chiqish kerak. Map esa kalit orqali qiymatni *bir zumda* topadi — bu juda tez va qulay.",
          "en": "In a slice you must scan the whole list to find an item. A map finds a value by its key *instantly* — fast and convenient.",
          "ru": "В слайсе элемент ищется обходом всего списка. Карта находит значение по ключу *мгновенно* — быстро и удобно."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Yangi juftlik qo'shadi `m[\"yangi\"] = 5`, qiymatni o'chiradi `delete(m, \"Ali\")` va kalit borligini tekshiradi: `qiymat, bor := m[\"Ali\"]`. Kalitlar takrorlanmaydi.",
          "en": "It adds a pair `m[\"new\"] = 5`, deletes a value `delete(m, \"Ali\")`, and checks if a key exists: `value, ok := m[\"Ali\"]`. Keys are never duplicated.",
          "ru": "Добавляет пару `m[\"new\"] = 5`, удаляет значение `delete(m, \"Ali\")` и проверяет наличие ключа: `value, ok := m[\"Ali\"]`. Ключи не повторяются."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchi sozlamalari, so'zlar chastotasini sanash, mahsulot narxlari jadvali — kalit orqali izlash kerak bo'lgan har bir joyda map ishlatiladi.",
          "en": "User settings, counting word frequency, a table of product prices — a map is used wherever you need to look things up by a key.",
          "ru": "Настройки пользователя, подсчёт частоты слов, таблица цен товаров — карта применяется везде, где нужен поиск по ключу."
        }
      }
    ],
    "task": {
      "uz": "Ismlarni yoshlarga bog'laydigan map yarating, bitta element qo'shing va Ali'ning yoshini ekranga chiqaring.",
      "en": "Create a map linking names to ages, add one entry, and print Ali's age.",
      "ru": "Создайте карту, связывающую имена с возрастом, добавьте одну запись и выведите возраст Ali."
    },
    "hint": {
      "uz": "`yoshlar := map[string]int{\"Ali\": 20}`, so'ng `fmt.Println(yoshlar[\"Ali\"])`.",
      "en": "`ages := map[string]int{\"Ali\": 20}`, then `fmt.Println(ages[\"Ali\"])`.",
      "ru": "`ages := map[string]int{\"Ali\": 20}`, затем `fmt.Println(ages[\"Ali\"])`."
    },
    "starterCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tyoshlar := map[string]int{\"Ali\": 20}\n\t// TODO: yoshlar map'iga yangi juftlik qo'shing (masalan \"Vali\": 25)\n\t// TODO: fmt.Println bilan Ali'ning yoshini chiqaring\n}",
    "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tyoshlar := map[string]int{\"Ali\": 20}\n\tyoshlar[\"Vali\"] = 25\n\tfmt.Println(yoshlar[\"Ali\"])\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["20"],
      "sourceContains": ["map[string]int", "fmt.Println"]
    },
    "xp": 40,
    "monacoLang": "go",
    "preview": "none"
  },
  {
    "title": {
      "uz": "Struct'lar (tuzilmalar)",
      "en": "Structs",
      "ru": "Структуры"
    },
    "intro": {
      "uz": "Bir narsaga oid ko'p ma'lumotni birgalikda saqlash kerakmi? Struct ularni birlashtiradi.",
      "en": "Need to keep many facts about one thing together? A struct groups them into one.",
      "ru": "Нужно хранить много данных об одном объекте вместе? Структура объединяет их в одно."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Struct — turli turdagi maydonlarni bitta yangi tur ostida birlashtiradi. `type Odam struct { Ism string; Yosh int }` — bu yerda `Ism` va `Yosh` bir butunga aylanadi.",
          "en": "A struct groups fields of different types under one new type. `type Person struct { Name string; Age int }` — here `Name` and `Age` become one whole.",
          "ru": "Структура объединяет поля разных типов под одним новым типом. `type Person struct { Name string; Age int }` — здесь `Name` и `Age` становятся единым целым."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Bir odamning ismi, yoshi va shahrini alohida o'zgaruvchilarda saqlash chalkash. Struct ularni bitta mantiqiy obyektga jamlaydi — kod toza va tartibli bo'ladi.",
          "en": "Storing a person's name, age, and city in separate variables is messy. A struct binds them into one logical object — keeping code clean and organized.",
          "ru": "Хранить имя, возраст и город человека в отдельных переменных запутанно. Структура связывает их в один логический объект — код чище и упорядоченнее."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Yangi obyekt yaratadi `o := Odam{Ism: \"Ali\", Yosh: 20}`, maydoniga `o.Ism` orqali murojaat qiladi. Struct'larga *metod* — ya'ni o'ziga xos funksiyalar ham biriktiriladi.",
          "en": "It creates a new object `p := Person{Name: \"Ali\", Age: 20}` and accesses a field via `p.Name`. Structs can also have *methods* — functions attached to them.",
          "ru": "Создаёт новый объект `p := Person{Name: \"Ali\", Age: 20}` и обращается к полю через `p.Name`. К структурам можно привязать *методы* — их собственные функции."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Foydalanuvchi profili, mahsulot kartochkasi, buyurtma ma'lumotlari — real dunyo obyektlarining barchasi struct bilan modellashtiriladi. Bu Go'da murakkab dasturlar qurishning asosidir.",
          "en": "A user profile, a product card, order details — all real-world objects are modeled with structs. It's the foundation for building complex programs in Go.",
          "ru": "Профиль пользователя, карточка товара, данные заказа — все объекты реального мира моделируются структурами. Это основа сложных программ на Go."
        }
      }
    ],
    "task": {
      "uz": "`Odam` nomli struct yarating (`Ism` va `Yosh` maydonlari bilan), undan bitta obyekt yasang va uning ismini chiqaring.",
      "en": "Create a struct named `Person` (with `Name` and `Age` fields), make one object from it, and print its name.",
      "ru": "Создайте структуру `Person` (с полями `Name` и `Age`), создайте из неё объект и выведите его имя."
    },
    "hint": {
      "uz": "`o := Odam{Ism: \"Ali\", Yosh: 20}`, so'ng `fmt.Println(o.Ism)`.",
      "en": "`p := Person{Name: \"Ali\", Age: 20}`, then `fmt.Println(p.Name)`.",
      "ru": "`p := Person{Name: \"Ali\", Age: 20}`, затем `fmt.Println(p.Name)`."
    },
    "starterCode": "package main\n\nimport \"fmt\"\n\ntype Odam struct {\n\tIsm  string\n\tYosh int\n}\n\nfunc main() {\n\t// TODO: Odam struct'idan obyekt yarating (Ism: \"Ali\", Yosh: 20)\n\t// TODO: fmt.Println bilan obyektning Ism maydonini chiqaring\n}",
    "solution": "package main\n\nimport \"fmt\"\n\ntype Odam struct {\n\tIsm  string\n\tYosh int\n}\n\nfunc main() {\n\to := Odam{Ism: \"Ali\", Yosh: 20}\n\tfmt.Println(o.Ism)\n}",
    "check": {
      "mustRun": true,
      "outputContains": ["Ali"],
      "sourceContains": ["struct", ".Ism"]
    },
    "xp": 45,
    "monacoLang": "go",
    "preview": "none"
  }
];
