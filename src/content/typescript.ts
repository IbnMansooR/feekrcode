import type { LessonContent } from "./types";

export const typescriptLessons: LessonContent[] = [
  {
    "title": {
      "uz": "Asosiy tiplar",
      "en": "Basic Types",
      "ru": "Базовые типы"
    },
    "intro": {
      "uz": "TypeScript har bir qiymatga \"tur\" beradi — shu yerdan boshlanadi.",
      "en": "TypeScript gives every value a \"type\" — that's where it all begins.",
      "ru": "TypeScript даёт каждому значению \"тип\" — отсюда всё и начинается."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "TypeScript — JavaScript ustiga tur (type) qo'shadigan til. Har bir o'zgaruvchiga uning qanday ma'lumot saqlashini aytamiz: `string` (matn), `number` (son), `boolean` (rost/yolg'on). Masalan: `let yosh: number = 20;`.",
          "en": "TypeScript is a language that adds types on top of JavaScript. We tell each variable what kind of data it holds: `string` (text), `number` (numbers), `boolean` (true/false). For example: `let age: number = 20;`.",
          "ru": "TypeScript — это язык, который добавляет типы поверх JavaScript. Мы говорим каждой переменной, какие данные она хранит: `string` (текст), `number` (числа), `boolean` (истина/ложь). Например: `let age: number = 20;`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Tur belgilash xatolarni kod ishga tushishidan *oldin* topadi. Agar `number` kerak joyga matn yozsangiz, TypeScript darhol ogohlantiradi. Bu ayniqsa katta loyihalarda vaqt va asabni tejaydi.",
          "en": "Typing catches errors *before* the code even runs. If you put text where a `number` is needed, TypeScript warns you instantly. This saves time and nerves, especially in large projects.",
          "ru": "Типизация ловит ошибки *до* того, как код запустится. Если вы поставите текст там, где нужен `number`, TypeScript сразу предупредит. Это экономит время и нервы, особенно в больших проектах."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Asosiy tiplar bilan sonlar, matnlar va mantiqiy qiymatlarni ishonchli saqlay olasiz. TypeScript ko'pincha turni o'zi *taxmin* qiladi (type inference) — `let ism = \"Ali\"` avtomatik `string` bo'ladi. Maxsus `any` turi esa \"har qanday\" degani, lekin undan ehtiyot bo'lish kerak.",
          "en": "With basic types you can reliably store numbers, text and logical values. TypeScript often *infers* the type itself — `let name = \"Ali\"` automatically becomes `string`. The special `any` type means \"anything\", but use it carefully.",
          "ru": "С базовыми типами вы надёжно храните числа, текст и логические значения. TypeScript часто *выводит* тип сам — `let name = \"Ali\"` автоматически становится `string`. Специальный тип `any` означает \"что угодно\", но используйте его осторожно."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Har bir TypeScript dasturda — foydalanuvchi yoshi, mahsulot narxi, tizimga kirgan-kirmaganligi kabi ma'lumotlarni saqlashda. Veb-saytlar, mobil ilovalar va serverlar shu asosiy tiplar ustiga quriladi.",
          "en": "In every TypeScript program — storing data like a user's age, a product's price, or whether someone is logged in. Websites, mobile apps and servers are all built on these basic types.",
          "ru": "В каждой TypeScript-программе — для хранения данных вроде возраста пользователя, цены товара или того, вошёл ли человек в систему. Сайты, мобильные приложения и серверы строятся на этих базовых типах."
        }
      }
    ],
    "task": {
      "uz": "`ism` nomli `string` va `yosh` nomli `number` o'zgaruvchi e'lon qiling va o'z qiymatlaringizni bering.",
      "en": "Declare a `string` variable called `name` and a `number` variable called `age`, and give them your own values.",
      "ru": "Объявите переменную `name` типа `string` и переменную `age` типа `number`, задав им свои значения."
    },
    "hint": {
      "uz": "Sintaksis: `let nomi: tur = qiymat;` — masalan `let yosh: number = 20;`.",
      "en": "Syntax: `let name: type = value;` — for example `let age: number = 20;`.",
      "ru": "Синтаксис: `let name: тип = значение;` — например `let age: number = 20;`."
    },
    "starterCode": "// TODO: `ism` nomli string o'zgaruvchi e'lon qiling va o'z ismingizni bering\n// TODO: `yosh` nomli number o'zgaruvchi e'lon qiling va o'z yoshingizni bering\n\n// TODO: ism va yoshni console.log bilan chop eting",
    "solution": "let ism: string = \"Ali\";\nlet yosh: number = 20;\nlet talaba: boolean = true;\n\nconsole.log(ism, yosh, talaba);",
    "check": {
      "sourceContains": ["string", "number", "console.log"],
      "outputMatches": ".+"
    },
    "xp": 20,
    "monacoLang": "typescript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Interfeyslar",
      "en": "Interfaces",
      "ru": "Интерфейсы"
    },
    "intro": {
      "uz": "Obyektlaringizga aniq shakl bering — interfeyslar bilan.",
      "en": "Give your objects a clear shape — with interfaces.",
      "ru": "Придайте вашим объектам чёткую форму — с помощью интерфейсов."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Interfeys — obyekt qanday ko'rinishda bo'lishini tasvirlovchi \"chizma\". `interface` kalit so'zi bilan obyektda qaysi maydonlar (property) borligini va ularning turini aytamiz. Masalan, `User` interfeysida `name: string` va `age: number` bo'lishi mumkin.",
          "en": "An interface is a \"blueprint\" describing what an object should look like. With the `interface` keyword we list which fields (properties) an object has and their types. For example, a `User` interface might have `name: string` and `age: number`.",
          "ru": "Интерфейс — это \"чертёж\", описывающий, как должен выглядеть объект. С помощью ключевого слова `interface` мы перечисляем, какие поля (свойства) есть у объекта и их типы. Например, интерфейс `User` может иметь `name: string` и `age: number`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Interfeyslar barcha obyektlar bir xil tuzilishga ega bo'lishini kafolatlaydi. Agar majburiy maydonni unutsangiz yoki noto'g'ri tur bersangiz, TypeScript xato ko'rsatadi. Bu ma'lumot tartibsizligining oldini oladi.",
          "en": "Interfaces guarantee that all objects share the same structure. If you forget a required field or give the wrong type, TypeScript shows an error. This prevents messy, inconsistent data.",
          "ru": "Интерфейсы гарантируют, что все объекты имеют одинаковую структуру. Если вы забудете обязательное поле или укажете неверный тип, TypeScript покажет ошибку. Это предотвращает беспорядок в данных."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Interfeysda maydonni ixtiyoriy qilish uchun `?` qo'yish mumkin: `phone?: string`. Maydonni o'zgarmas qilish uchun `readonly` ishlatiladi. Bitta interfeys boshqasini `extends` orqali kengaytirib, undagi maydonlarni meros qilib olishi ham mumkin.",
          "en": "In an interface you can make a field optional with `?`: `phone?: string`. Use `readonly` to make a field unchangeable. One interface can also `extends` another, inheriting its fields.",
          "ru": "В интерфейсе можно сделать поле необязательным с помощью `?`: `phone?: string`. Используйте `readonly`, чтобы сделать поле неизменяемым. Один интерфейс может также `extends` другой, наследуя его поля."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Interfeyslar API'dan kelgan ma'lumotlar, foydalanuvchi profillari va forma qiymatlarini tasvirlashda juda ko'p ishlatiladi. Masalan, serverdan kelgan har bir foydalanuvchi `User` interfeysiga mos kelishi shart.",
          "en": "Interfaces are heavily used to describe API responses, user profiles and form values. For example, every user coming from the server must match the `User` interface.",
          "ru": "Интерфейсы широко используются для описания ответов API, профилей пользователей и значений форм. Например, каждый пользователь с сервера должен соответствовать интерфейсу `User`."
        }
      }
    ],
    "task": {
      "uz": "`Mashina` interfeysini yarating: `brend` (`string`), `yil` (`number`) va ixtiyoriy `rang` (`string`). So'ng shunday obyekt yarating.",
      "en": "Create a `Car` interface with `brand` (`string`), `year` (`number`) and an optional `color` (`string`). Then create one such object.",
      "ru": "Создайте интерфейс `Car` с полями `brand` (`string`), `year` (`number`) и необязательным `color` (`string`). Затем создайте такой объект."
    },
    "hint": {
      "uz": "Ixtiyoriy maydon uchun nomdan keyin `?` qo'ying: `rang?: string`.",
      "en": "For an optional field, put `?` after the name: `color?: string`.",
      "ru": "Для необязательного поля поставьте `?` после имени: `color?: string`."
    },
    "starterCode": "interface Mashina {\n  brend: string;\n  // TODO: `yil` (number) maydonini qo'shing\n  // TODO: ixtiyoriy `rang` (string) maydonini qo'shing (? bilan)\n}\n\n// TODO: Mashina tipidagi myCar obyektini yarating va console.log qiling\nconst myCar: Mashina = {\n  brend: \"Chevrolet\",\n};",
    "solution": "interface Mashina {\n  brend: string;\n  yil: number;\n  rang?: string;\n}\n\nconst myCar: Mashina = {\n  brend: \"Chevrolet\",\n  yil: 2021,\n};\n\nconsole.log(myCar);",
    "check": {
      "sourceContains": ["interface", "?"],
      "outputContains": ["Chevrolet", "2021"]
    },
    "xp": 25,
    "monacoLang": "typescript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Funksiyalarni tiplash",
      "en": "Typing Functions",
      "ru": "Типизация функций"
    },
    "intro": {
      "uz": "Funksiyaga nima kiradi va nima chiqadi — buni aniq belgilang.",
      "en": "Define exactly what goes into a function and what comes out.",
      "ru": "Чётко определите, что входит в функцию и что выходит."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Funksiyani tiplash — uning *parametrlari* va *qaytaradigan qiymati* turini belgilash demakdir. Masalan: `function qosh(a: number, b: number): number`. Bu yerda ikkala kirish ham `number`, natija ham `number`.",
          "en": "Typing a function means specifying the types of its *parameters* and its *return value*. For example: `function add(a: number, b: number): number`. Here both inputs are `number` and the result is `number`.",
          "ru": "Типизация функции означает указание типов её *параметров* и *возвращаемого значения*. Например: `function add(a: number, b: number): number`. Здесь оба входа — `number`, и результат — `number`."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Tiplangan funksiyaga noto'g'ri turdagi argument bera olmaysiz — TypeScript darhol to'xtatadi. Bu funksiyani chaqirayotganda xatolarni oldini oladi va kodni qanday ishlatishni hujjatsiz ham tushuntiradi.",
          "en": "You can't pass a wrong-type argument to a typed function — TypeScript stops you immediately. This prevents errors when calling the function and documents how to use it without extra notes.",
          "ru": "Вы не сможете передать аргумент неверного типа в типизированную функцию — TypeScript сразу остановит вас. Это предотвращает ошибки при вызове и объясняет, как использовать функцию, без дополнительной документации."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Hech narsa qaytarmaydigan funksiya uchun `void` ishlatiladi. Parametrni ixtiyoriy qilish uchun `?` yoki standart qiymat (`b: number = 0`) berish mumkin. Arrow funksiyalarni ham tiplash mumkin: `const kvadrat = (n: number): number => n * n;`.",
          "en": "For a function that returns nothing, use `void`. You can make a parameter optional with `?` or give a default value (`b: number = 0`). Arrow functions can be typed too: `const square = (n: number): number => n * n;`.",
          "ru": "Для функции, которая ничего не возвращает, используется `void`. Параметр можно сделать необязательным через `?` или задать значение по умолчанию (`b: number = 0`). Стрелочные функции тоже можно типизировать: `const square = (n: number): number => n * n;`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Deyarli har bir funksiyada — narxni hisoblash, foydalanuvchi nomini formatlash, ma'lumotni tekshirish. Tugma bosilganda ishlaydigan handler funksiyalari ham aniq tiplar bilan yoziladi.",
          "en": "In nearly every function — calculating a price, formatting a username, validating data. Handler functions that run when a button is clicked are also written with precise types.",
          "ru": "Почти в каждой функции — расчёт цены, форматирование имени пользователя, проверка данных. Функции-обработчики, срабатывающие при нажатии кнопки, тоже пишутся с точными типами."
        }
      }
    ],
    "task": {
      "uz": "Ikki `number` qabul qilib, ularning yig'indisini `number` sifatida qaytaradigan `qoshish` funksiyasini yozing.",
      "en": "Write an `add` function that takes two `number` parameters and returns their sum as a `number`.",
      "ru": "Напишите функцию `add`, которая принимает два параметра `number` и возвращает их сумму как `number`."
    },
    "hint": {
      "uz": "Qaytadigan turni qavslardan keyin yozing: `function qoshish(a: number, b: number): number`.",
      "en": "Write the return type after the parentheses: `function add(a: number, b: number): number`.",
      "ru": "Тип возврата пишется после скобок: `function add(a: number, b: number): number`."
    },
    "starterCode": "function qoshish(a: number, b: number): number {\n  // TODO: a va b ning yig'indisini qaytaring\n  return 0;\n}\n\nconsole.log(qoshish(5, 3));",
    "solution": "function qoshish(a: number, b: number): number {\n  return a + b;\n}\n\nconsole.log(qoshish(5, 3));",
    "check": {
      "sourceContains": ["function", "number", "return"],
      "outputContains": ["8"]
    },
    "xp": 28,
    "monacoLang": "typescript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Union va literal tiplar",
      "en": "Union & Literal Types",
      "ru": "Объединения и литеральные типы"
    },
    "intro": {
      "uz": "Bitta o'zgaruvchi bir nechta turdan biri bo'lishi mumkin — buni union hal qiladi.",
      "en": "One variable can be one of several types — that's what unions solve.",
      "ru": "Одна переменная может быть одного из нескольких типов — это решают объединения."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Union tip — `|` belgisi orqali bir nechta turdan birini ruxsat berish. Masalan, `string | number` qiymat yo matn, yo son bo'lishi mumkin. Literal tip esa aniq qiymatlarni belgilaydi: `\"oz\" | \"ko'p\"` faqat shu ikki so'zga ruxsat beradi.",
          "en": "A union type allows one of several types using the `|` symbol. For example, `string | number` means the value can be either text or a number. A literal type pins exact values: `\"small\" | \"large\"` allows only those two words.",
          "ru": "Объединение (union) разрешает один из нескольких типов через символ `|`. Например, `string | number` означает, что значение может быть либо текстом, либо числом. Литеральный тип фиксирует точные значения: `\"small\" | \"large\"` разрешает только эти два слова."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Ko'pincha qiymat bir necha shaklda bo'ladi — masalan, ID raqam yoki matn ko'rinishida kelishi mumkin. Literal tiplar esa faqat ruxsat etilgan variantlarni qabul qiladi, shu sababli xato qiymat yozib qo'yish imkonsiz bo'ladi.",
          "en": "Often a value comes in more than one shape — for example, an ID might arrive as a number or as text. Literal types accept only allowed options, making it impossible to type a wrong value.",
          "ru": "Часто значение приходит в нескольких формах — например, ID может прийти как число или как текст. Литеральные типы принимают только разрешённые варианты, поэтому ввести неверное значение невозможно."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Union bilan ishlaganda *narrowing* — `typeof` orqali turini tekshirib, har bir holatni alohida boshqarish mumkin. Literal tiplar ko'pincha holatlarni ifodalaydi: `status: \"loading\" | \"success\" | \"error\"`. Bu kod muharririda avtomatik takliflar ham beradi.",
          "en": "When working with unions you can do *narrowing* — check the type with `typeof` and handle each case separately. Literal types often represent states: `status: \"loading\" | \"success\" | \"error\"`. This also gives autocomplete suggestions in the editor.",
          "ru": "При работе с объединениями можно делать *сужение* (narrowing) — проверять тип через `typeof` и обрабатывать каждый случай отдельно. Литеральные типы часто представляют состояния: `status: \"loading\" | \"success\" | \"error\"`. Это также даёт автоподсказки в редакторе."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Ilova holatlari (`\"loading\" | \"done\"`), tugma o'lchamlari (`\"small\" | \"medium\" | \"large\"`) va turli formatdagi kiruvchi ma'lumotlarda. React komponentlarining propslarida literal tiplar juda keng tarqalgan.",
          "en": "In app states (`\"loading\" | \"done\"`), button sizes (`\"small\" | \"medium\" | \"large\"`) and inputs that arrive in different formats. Literal types are very common in React component props.",
          "ru": "В состояниях приложения (`\"loading\" | \"done\"`), размерах кнопок (`\"small\" | \"medium\" | \"large\"`) и данных, приходящих в разных форматах. Литеральные типы очень распространены в пропсах React-компонентов."
        }
      }
    ],
    "task": {
      "uz": "`holat` o'zgaruvchisiga `\"faol\" | \"nofaol\"` literal tipini bering va unga `\"faol\"` qiymatini yozing.",
      "en": "Give a `status` variable the literal type `\"active\" | \"inactive\"` and assign it the value `\"active\"`.",
      "ru": "Задайте переменной `status` литеральный тип `\"active\" | \"inactive\"` и присвойте ей значение `\"active\"`."
    },
    "hint": {
      "uz": "Variantlarni `|` bilan ajrating: `let holat: \"faol\" | \"nofaol\";`.",
      "en": "Separate options with `|`: `let status: \"active\" | \"inactive\";`.",
      "ru": "Разделяйте варианты через `|`: `let status: \"active\" | \"inactive\";`."
    },
    "starterCode": "// TODO: `holat` o'zgaruvchisiga \"faol\" | \"nofaol\" literal tipini bering va \"faol\" qiymatini bering\nlet holat;\n\nfunction chop(id: string | number) {\n  console.log(\"ID:\", id);\n}\n\nchop(101);\nchop(\"A-22\");\nconsole.log(holat);",
    "solution": "let holat: \"faol\" | \"nofaol\" = \"faol\";\n\nfunction chop(id: string | number) {\n  console.log(\"ID:\", id);\n}\n\nchop(101);\nchop(\"A-22\");\nconsole.log(holat);",
    "check": {
      "sourceContains": ["|", "faol"],
      "outputContains": ["faol"]
    },
    "xp": 32,
    "monacoLang": "typescript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Massivlar va tuple'lar",
      "en": "Arrays & Tuples",
      "ru": "Массивы и кортежи"
    },
    "intro": {
      "uz": "Ko'plab qiymatlarni bir joyda saqlang — ham tartibli, ham xavfsiz.",
      "en": "Store many values in one place — both ordered and type-safe.",
      "ru": "Храните множество значений в одном месте — упорядоченно и безопасно."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Massiv — bir turdagi qiymatlar ro'yxati: `number[]` faqat sonlar, `string[]` faqat matnlar saqlaydi. Tuple — uzunligi va har bir element turi *aniq belgilangan* maxsus massiv, masalan `[string, number]` — birinchisi matn, ikkinchisi son.",
          "en": "An array is a list of same-type values: `number[]` holds only numbers, `string[]` only text. A tuple is a special array with a *fixed* length and a known type for each position, e.g. `[string, number]` — first is text, second is a number.",
          "ru": "Массив — это список значений одного типа: `number[]` хранит только числа, `string[]` только текст. Кортеж (tuple) — это особый массив с *фиксированной* длиной и известным типом для каждой позиции, например `[string, number]` — первый текст, второй число."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Massivda turni belgilash xato element qo'shilishining oldini oladi — `number[]` ichiga matn qo'sha olmaysiz. Tuple esa pozitsiya muhim bo'lganda (masalan, koordinatalar) tartibni va turlarni kafolatlaydi.",
          "en": "Typing an array prevents adding a wrong element — you can't push text into a `number[]`. A tuple guarantees order and types when position matters, like coordinates.",
          "ru": "Типизация массива не даёт добавить неверный элемент — вы не сможете вставить текст в `number[]`. Кортеж гарантирует порядок и типы, когда важна позиция, например координаты."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Massivlarni `.push()`, `.map()`, `.filter()` kabi metodlar bilan boshqarish mumkin va TypeScript element turini biladi. Tuple'larni esa bir qiymat to'plamini ajratib olishda ishlatamiz: `const [x, y] = nuqta;`. Aralash massivlar uchun `(string | number)[]` ham mumkin.",
          "en": "Arrays can be managed with methods like `.push()`, `.map()`, `.filter()`, and TypeScript knows the element type. Tuples are used to destructure a set of values: `const [x, y] = point;`. For mixed arrays you can use `(string | number)[]`.",
          "ru": "Массивами можно управлять методами `.push()`, `.map()`, `.filter()`, и TypeScript знает тип элементов. Кортежи используются для деструктуризации набора значений: `const [x, y] = point;`. Для смешанных массивов можно использовать `(string | number)[]`."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Massivlar — mahsulotlar ro'yxati, xabarlar tarixi, foydalanuvchilar to'plami uchun. Tuple'lar esa koordinatalar `[lat, lng]`, RGB ranglar `[255, 0, 0]` yoki React'dagi `useState` qaytaradigan juftlikda ishlatiladi.",
          "en": "Arrays are for product lists, message history, sets of users. Tuples are used for coordinates `[lat, lng]`, RGB colors `[255, 0, 0]`, or the pair returned by `useState` in React.",
          "ru": "Массивы — для списков товаров, истории сообщений, наборов пользователей. Кортежи используются для координат `[lat, lng]`, RGB-цветов `[255, 0, 0]` или пары, возвращаемой `useState` в React."
        }
      }
    ],
    "task": {
      "uz": "`number[]` tipidagi `ballar` massivini 3 ta son bilan yarating, so'ng `[string, number]` tipidagi `talaba` tuple'ini yarating.",
      "en": "Create a `scores` array of type `number[]` with 3 numbers, then create a `student` tuple of type `[string, number]`.",
      "ru": "Создайте массив `scores` типа `number[]` с 3 числами, затем создайте кортеж `student` типа `[string, number]`."
    },
    "hint": {
      "uz": "Massiv: `let ballar: number[] = [5, 4, 3];`. Tuple: `let talaba: [string, number] = [\"Ali\", 20];`.",
      "en": "Array: `let scores: number[] = [5, 4, 3];`. Tuple: `let student: [string, number] = [\"Ali\", 20];`.",
      "ru": "Массив: `let scores: number[] = [5, 4, 3];`. Кортеж: `let student: [string, number] = [\"Ali\", 20];`."
    },
    "starterCode": "// TODO: number[] tipidagi `ballar` massivini 3 ta son bilan yarating\nlet ballar: number[] = [];\n\n// TODO: [string, number] tipidagi `talaba` tuple'ini yarating\nlet talaba: [string, number] = [\"\", 0];\n\nballar.push(5);\nconsole.log(ballar);\nconsole.log(talaba);",
    "solution": "let ballar: number[] = [5, 4, 3];\nlet talaba: [string, number] = [\"Ali\", 20];\n\nballar.push(5);\nconsole.log(ballar);\nconsole.log(talaba);",
    "check": {
      "sourceContains": ["number[]", "[string, number]"],
      "outputContains": ["Ali"]
    },
    "xp": 34,
    "monacoLang": "typescript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Enum'lar",
      "en": "Enums",
      "ru": "Перечисления (Enums)"
    },
    "intro": {
      "uz": "Bog'liq nomlangan qiymatlar to'plamiga chiroyli ism bering — enum bilan.",
      "en": "Give a set of related named values a clean name — with enums.",
      "ru": "Дайте набору связанных именованных значений красивое имя — с помощью enum."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Enum — bir-biriga bog'liq nomlangan o'zgarmaslar to'plami. `enum` kalit so'zi bilan yaratiladi, masalan `enum Yonalish { Yuqori, Past, Chap, Ong }`. Har bir nom orqasida son turadi yoki o'zingiz matn qiymat berishingiz mumkin.",
          "en": "An enum is a set of related named constants. It's created with the `enum` keyword, e.g. `enum Direction { Up, Down, Left, Right }`. Each name has a number behind it, or you can assign string values yourself.",
          "ru": "Enum — это набор связанных именованных констант. Создаётся ключевым словом `enum`, например `enum Direction { Up, Down, Left, Right }`. За каждым именем стоит число, или вы можете задать строковые значения сами."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Kodda `0`, `1`, `2` kabi \"sehrli sonlar\"ni ishlatish chalkash. Enum ularga ma'noli nom beradi: `Yonalish.Yuqori` `0` dan ancha tushunarli. Bu kodni o'qishni osonlashtiradi va xatolarni kamaytiradi.",
          "en": "Using \"magic numbers\" like `0`, `1`, `2` in code is confusing. An enum gives them meaningful names: `Direction.Up` is far clearer than `0`. This makes code easier to read and reduces mistakes.",
          "ru": "Использование \"магических чисел\" вроде `0`, `1`, `2` в коде запутывает. Enum даёт им осмысленные имена: `Direction.Up` намного понятнее, чем `0`. Это упрощает чтение кода и уменьшает ошибки."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Enum'lar son (`numeric`) yoki matn (`string`) qiymatli bo'lishi mumkin: `enum Rang { Qizil = \"RED\" }`. Ularni `if` va `switch` ichida solishtirib ishlatasiz. Qiymatga `Yonalish.Yuqori` orqali, nomga esa teskari yo'l bilan murojaat qilish mumkin.",
          "en": "Enums can have numeric or `string` values: `enum Color { Red = \"RED\" }`. You compare them inside `if` and `switch`. You access a value via `Direction.Up`, and with numeric enums you can even map back from value to name.",
          "ru": "Enum могут иметь числовые или строковые (`string`) значения: `enum Color { Red = \"RED\" }`. Вы сравниваете их внутри `if` и `switch`. К значению обращаются через `Direction.Up`, а у числовых enum можно даже получить имя обратно по значению."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Buyurtma holatlari (`Yangi`, `Yetkazilmoqda`, `Bajarilgan`), foydalanuvchi rollari (`Admin`, `User`, `Guest`) va o'yindagi yo'nalishlar uchun. Enum'lar ma'lum bir cheklangan variantlar to'plami bo'lganda eng foydali.",
          "en": "For order statuses (`New`, `Shipping`, `Done`), user roles (`Admin`, `User`, `Guest`) and game directions. Enums are most useful when there's a fixed, limited set of options.",
          "ru": "Для статусов заказа (`New`, `Shipping`, `Done`), ролей пользователей (`Admin`, `User`, `Guest`) и направлений в игре. Enum наиболее полезны, когда есть фиксированный ограниченный набор вариантов."
        }
      }
    ],
    "task": {
      "uz": "`Holat` nomli enum yarating: `Yangi`, `Jarayonda`, `Tugatilgan`. So'ng o'zgaruvchiga `Holat.Jarayonda` qiymatini bering.",
      "en": "Create an enum named `Status` with `New`, `InProgress`, `Done`. Then assign `Status.InProgress` to a variable.",
      "ru": "Создайте enum с именем `Status`: `New`, `InProgress`, `Done`. Затем присвойте переменной значение `Status.InProgress`."
    },
    "hint": {
      "uz": "Sintaksis: `enum Holat { Yangi, Jarayonda, Tugatilgan }` — qiymatga `Holat.Yangi` orqali murojaat qiling.",
      "en": "Syntax: `enum Status { New, InProgress, Done }` — access a value via `Status.New`.",
      "ru": "Синтаксис: `enum Status { New, InProgress, Done }` — обращайтесь к значению через `Status.New`."
    },
    "starterCode": "// TODO: `Holat` nomli enum yarating: Yangi, Jarayonda, Tugatilgan\nenum Holat {\n  Yangi,\n}\n\n// TODO: buyurtma o'zgaruvchisiga Holat.Jarayonda qiymatini bering\nlet buyurtma: Holat = Holat.Yangi;\nconsole.log(buyurtma);\nconsole.log(Holat[buyurtma]);",
    "solution": "enum Holat {\n  Yangi,\n  Jarayonda,\n  Tugatilgan,\n}\n\nlet buyurtma: Holat = Holat.Jarayonda;\nconsole.log(buyurtma);\nconsole.log(Holat[buyurtma]);",
    "check": {
      "sourceContains": ["enum", "Holat.Jarayonda"],
      "outputContains": ["Jarayonda", "1"]
    },
    "xp": 36,
    "monacoLang": "typescript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Generiklar bilan tanishuv",
      "en": "Generics Intro",
      "ru": "Знакомство с дженериками"
    },
    "intro": {
      "uz": "Bitta kod — ko'plab turlar uchun. Generiklar shu sehrni beradi.",
      "en": "One piece of code — for many types. Generics give you that magic.",
      "ru": "Один код — для множества типов. Дженерики дают эту магию."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Generik — turni *parametr* sifatida qabul qiladigan kod. Burchakli qavslar `<T>` ichida \"tur o'rni\" beriladi: `function birinchi<T>(arr: T[]): T`. Bu yerda `T` chaqirilganda haqiqiy turga (`number`, `string`...) aylanadi.",
          "en": "A generic is code that takes a type as a *parameter*. Angle brackets `<T>` provide a \"type slot\": `function first<T>(arr: T[]): T`. Here `T` becomes a real type (`number`, `string`...) when called.",
          "ru": "Дженерик — это код, принимающий тип как *параметр*. Угловые скобки `<T>` задают \"слот для типа\": `function first<T>(arr: T[]): T`. Здесь `T` становится реальным типом (`number`, `string`...) при вызове."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Generiklarsiz har bir tur uchun alohida funksiya yozishga to'g'ri kelardi yoki `any` ishlatib tur xavfsizligini yo'qotardik. Generiklar bitta funksiya bilan barcha turlarni qo'llab, ayni paytda turlar to'g'riligini saqlaydi.",
          "en": "Without generics you'd write a separate function for each type, or use `any` and lose type safety. Generics let one function support all types while keeping the types correct.",
          "ru": "Без дженериков пришлось бы писать отдельную функцию для каждого типа или использовать `any`, теряя безопасность типов. Дженерики позволяют одной функции поддерживать все типы, сохраняя их корректность."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Generiklar funksiya, interfeys va klasslarda ishlaydi. Turni `<T>` orqali avtomatik aniqlash mumkin yoki o'zingiz `birinchi<string>(...)` deb berasiz. `extends` bilan turni cheklash ham mumkin: `<T extends number>` faqat sonlarga ruxsat beradi.",
          "en": "Generics work in functions, interfaces and classes. The type can be inferred automatically via `<T>` or you can specify it yourself like `first<string>(...)`. You can also constrain it with `extends`: `<T extends number>` allows only numbers.",
          "ru": "Дженерики работают в функциях, интерфейсах и классах. Тип может выводиться автоматически через `<T>` или вы указываете его сами: `first<string>(...)`. Можно также ограничить его через `extends`: `<T extends number>` разрешает только числа."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Massiv metodlari (`Array<T>`), va'dalar (`Promise<T>`) hamda qayta ishlatiladigan yordamchi funksiyalarda generiklar hamma joyda. React'da `useState<User>()` yoki API javoblari uchun `ApiResponse<T>` kabi shakllarda doimo uchraydi.",
          "en": "Array methods (`Array<T>`), promises (`Promise<T>`) and reusable helper functions use generics everywhere. In React you constantly see `useState<User>()` or shapes like `ApiResponse<T>` for API responses.",
          "ru": "Методы массивов (`Array<T>`), промисы (`Promise<T>`) и переиспользуемые вспомогательные функции используют дженерики повсюду. В React постоянно встречаются `useState<User>()` или формы вроде `ApiResponse<T>` для ответов API."
        }
      }
    ],
    "task": {
      "uz": "Generik `birinchi<T>` funksiyasini yozing: `T[]` massiv qabul qilib, uning birinchi elementini (`T`) qaytarsin.",
      "en": "Write a generic `first<T>` function that takes a `T[]` array and returns its first element (`T`).",
      "ru": "Напишите дженерик-функцию `first<T>`, которая принимает массив `T[]` и возвращает его первый элемент (`T`)."
    },
    "hint": {
      "uz": "Tur parametrini nomdan keyin qo'ying: `function birinchi<T>(arr: T[]): T { return arr[0]; }`.",
      "en": "Put the type parameter after the name: `function first<T>(arr: T[]): T { return arr[0]; }`.",
      "ru": "Поставьте параметр типа после имени: `function first<T>(arr: T[]): T { return arr[0]; }`."
    },
    "starterCode": "function birinchi<T>(arr: T[]): T {\n  // TODO: massivning birinchi elementini qaytaring (arr[0])\n  return arr[0];\n}\n\n// TODO: birinchi funksiyasini son va matn massivlari bilan chaqiring\nconsole.log(birinchi<number>([10, 20, 30]));",
    "solution": "function birinchi<T>(arr: T[]): T {\n  return arr[0];\n}\n\nconsole.log(birinchi<number>([10, 20, 30]));\nconsole.log(birinchi([\"a\", \"b\", \"c\"]));",
    "check": {
      "sourceContains": ["<T>", "T[]"],
      "outputContains": ["10", "a"]
    },
    "xp": 40,
    "monacoLang": "typescript",
    "preview": "js"
  },
  {
    "title": {
      "uz": "Tiplangan klasslar",
      "en": "Classes with Types",
      "ru": "Классы с типами"
    },
    "intro": {
      "uz": "Ma'lumot va xatti-harakatni bir joyga jamlang — to'liq tip xavfsizligi bilan.",
      "en": "Bundle data and behavior together — with full type safety.",
      "ru": "Объедините данные и поведение вместе — с полной безопасностью типов."
    },
    "sections": [
      {
        "heading": {
          "uz": "Bu nima o'zi?",
          "en": "What is it?",
          "ru": "Что это?"
        },
        "body": {
          "uz": "Klass — obyektlar yaratish uchun \"qolip\". `class` kalit so'zi bilan maydonlar (xususiyatlar) va metodlarni birlashtiramiz, har biriga tur beriladi. `constructor` yangi obyekt yaratilganda boshlang'ich qiymatlarni o'rnatadi.",
          "en": "A class is a \"template\" for creating objects. With the `class` keyword we combine fields (properties) and methods, each with a type. The `constructor` sets initial values when a new object is created.",
          "ru": "Класс — это \"шаблон\" для создания объектов. С помощью ключевого слова `class` мы объединяем поля (свойства) и методы, каждому из которых задан тип. `constructor` устанавливает начальные значения при создании нового объекта."
        }
      },
      {
        "heading": {
          "uz": "Nega kerak?",
          "en": "Why do you need it?",
          "ru": "Зачем это нужно?"
        },
        "body": {
          "uz": "Klasslar bir-biriga bog'liq ma'lumot va funksiyalarni tartibli saqlaydi. TypeScript har bir maydon turini tekshiradi, shuning uchun noto'g'ri qiymat berib bo'lmaydi. Bu murakkab dasturlarni boshqarishni ancha osonlashtiradi.",
          "en": "Classes keep related data and functions neatly together. TypeScript checks each field's type, so you can't assign a wrong value. This makes complex programs much easier to manage.",
          "ru": "Классы аккуратно держат связанные данные и функции вместе. TypeScript проверяет тип каждого поля, поэтому нельзя присвоить неверное значение. Это значительно упрощает управление сложными программами."
        }
      },
      {
        "heading": {
          "uz": "Nimalar qila oladi?",
          "en": "What can it do?",
          "ru": "Что он умеет?"
        },
        "body": {
          "uz": "Maydonlarni `public`, `private` yoki `readonly` deb belgilash mumkin — `private` faqat klass ichida ko'rinadi. Klass `implements` orqali interfeysga amal qilishi yoki `extends` orqali boshqa klassdan meros olishi mumkin. Metodlar ham parametr va qaytish turiga ega bo'ladi.",
          "en": "Fields can be marked `public`, `private` or `readonly` — `private` is visible only inside the class. A class can follow an interface with `implements`, or inherit from another class with `extends`. Methods also have parameter and return types.",
          "ru": "Поля можно пометить как `public`, `private` или `readonly` — `private` видно только внутри класса. Класс может следовать интерфейсу через `implements` или наследоваться от другого класса через `extends`. Методы тоже имеют типы параметров и возврата."
        }
      },
      {
        "heading": {
          "uz": "Qayerda ishlatamiz?",
          "en": "Where do we use it?",
          "ru": "Где мы это используем?"
        },
        "body": {
          "uz": "Klasslar foydalanuvchi, mahsulot yoki hisob (`BankAccount`) kabi obyektlarni modellashtirishda ishlatiladi. Server tarafida (NestJS), o'yinlar va katta ilovalarning mantiqiy qismida klasslar keng qo'llaniladi.",
          "en": "Classes are used to model objects like a user, a product or an account (`BankAccount`). They're widely used on the server side (NestJS), in games and in the logic layer of large applications.",
          "ru": "Классы используются для моделирования объектов вроде пользователя, товара или счёта (`BankAccount`). Они широко применяются на стороне сервера (NestJS), в играх и в слое логики крупных приложений."
        }
      }
    ],
    "task": {
      "uz": "`Talaba` klassini yarating: `private ism: string` va `ball: number` maydonlari, `constructor` va `ballniKorsat()` metodi bilan. So'ng undan obyekt yarating.",
      "en": "Create a `Student` class with `private name: string` and `score: number` fields, a `constructor` and a `showScore()` method. Then create an object from it.",
      "ru": "Создайте класс `Student` с полями `private name: string` и `score: number`, `constructor` и методом `showScore()`. Затем создайте объект из него."
    },
    "hint": {
      "uz": "`new Talaba(\"Ali\", 90)` orqali obyekt yarating; maydonga klass ichida `this.ism` deb murojaat qiling.",
      "en": "Create an object with `new Student(\"Ali\", 90)`; access a field inside the class via `this.name`.",
      "ru": "Создайте объект через `new Student(\"Ali\", 90)`; к полю внутри класса обращайтесь через `this.name`."
    },
    "starterCode": "class Talaba {\n  constructor(\n    private ism: string,\n    public ball: number,\n  ) {}\n\n  ballniKorsat(): string {\n    // TODO: `${this.ism}: ${this.ball} ball` ko'rinishidagi matnni qaytaring\n    return \"\";\n  }\n}\n\n// TODO: new Talaba(...) bilan obyekt yarating va ballniKorsat() ni chop eting\nconst t = new Talaba(\"Ali\", 90);",
    "solution": "class Talaba {\n  constructor(\n    private ism: string,\n    public ball: number,\n  ) {}\n\n  ballniKorsat(): string {\n    return `${this.ism}: ${this.ball} ball`;\n  }\n}\n\nconst t = new Talaba(\"Ali\", 90);\nconsole.log(t.ballniKorsat());",
    "check": {
      "sourceContains": ["class", "constructor", "private"],
      "outputContains": ["Ali", "90", "ball"]
    },
    "xp": 45,
    "monacoLang": "typescript",
    "preview": "js"
  }
];
