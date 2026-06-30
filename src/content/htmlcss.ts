import type { LessonContent } from "./types";

/** HTML + CSS — chuqur, 3 tilli darslar (flagman track). */
export const htmlcssLessons: LessonContent[] = [
  // 1 ─────────────────────────────────────────────
  {
    title: { uz: "HTML nima?", en: "What is HTML?", ru: "Что такое HTML?" },
    intro: {
      uz: "Har bir veb-sayt HTML'dan boshlanadi. Keling, birinchi sahifangizni yarataylik.",
      en: "Every website begins with HTML. Let's build your first page.",
      ru: "Каждый сайт начинается с HTML. Давайте создадим вашу первую страницу.",
    },
    sections: [
      {
        icon: "ti-help-circle",
        heading: { uz: "Bu nima o'zi?", en: "What is it?", ru: "Что это?" },
        body: {
          uz: "HTML — HyperText Markup Language. Bu dasturlash tili emas, balki *belgilash* tili: u brauzerga sahifada nima borligini — sarlavha, paragraf, rasm — aytadi. Kontent `<teg>` ichiga o'raladi.",
          en: "HTML stands for HyperText Markup Language. It's not a programming language but a *markup* language: it tells the browser what's on the page — a heading, a paragraph, an image. Content is wrapped in `<tags>`.",
          ru: "HTML — это HyperText Markup Language. Это не язык программирования, а язык *разметки*: он сообщает браузеру, что на странице — заголовок, абзац, изображение. Контент оборачивается в `<теги>`.",
        },
      },
      {
        icon: "ti-bulb",
        heading: { uz: "Nega kerak?", en: "Why do you need it?", ru: "Зачем это нужно?" },
        body: {
          uz: "Brauzer faqat HTML'ni tushunadi. Sahifa strukturasini aniqlamasangiz, brauzer nimani qayerga qo'yishni bilmaydi. HTML — butun veb-dunyoning poydevori.",
          en: "The browser only understands HTML. Without structure, it wouldn't know what goes where. HTML is the foundation of the entire web.",
          ru: "Браузер понимает только HTML. Без структуры он не знал бы, что куда поместить. HTML — фундамент всего веба.",
        },
      },
      {
        icon: "ti-tool",
        heading: { uz: "Nimalar qila oladi?", en: "What can it do?", ru: "Что он умеет?" },
        body: {
          uz: "HTML bilan matn, sarlavha, rasm, havola, ro'yxat, tugma, jadval va forma joylashtirasiz. Teglar bir-birining ichiga joylashishi mumkin — shunday qilib murakkab sahifalar quriladi.",
          en: "With HTML you place text, headings, images, links, lists, buttons, tables and forms. Tags can nest inside each other — that's how complex pages are built.",
          ru: "С HTML вы размещаете текст, заголовки, изображения, ссылки, списки, кнопки, таблицы и формы. Теги могут вкладываться друг в друга — так строятся сложные страницы.",
        },
      },
      {
        icon: "ti-world",
        heading: { uz: "Qayerda ishlatamiz?", en: "Where do we use it?", ru: "Где мы это используем?" },
        body: {
          uz: "Har bir veb-sayt, email shablonlari, mobil va desktop ilovalar interfeysi (masalan, bu o'yin ham!) HTML'ga asoslanadi.",
          en: "Every website, email templates, and the interfaces of mobile and desktop apps (including this game!) are based on HTML.",
          ru: "Каждый сайт, шаблоны писем и интерфейсы мобильных и настольных приложений (включая эту игру!) основаны на HTML.",
        },
      },
    ],
    task: {
      uz: "O'ngdagi muharrirda `<h1>` teg ichida o'z ismingizni yozing va `<p>` teg ichiga o'zingiz haqingizda bir jumla qo'shing. Natija o'ng pastda jonli ko'rinadi.",
      en: "In the editor, write your name inside an `<h1>` tag and add a sentence about yourself inside a `<p>` tag. The result appears live at the bottom right.",
      ru: "В редакторе напишите своё имя внутри тега `<h1>` и добавьте предложение о себе в теге `<p>`. Результат появится вживую справа внизу.",
    },
    hint: {
      uz: "`<h1>Matn</h1>` — har teg ochiladi va `</h1>` bilan yopiladi.",
      en: "`<h1>Text</h1>` — every tag opens and closes with `</h1>`.",
      ru: "`<h1>Текст</h1>` — каждый тег открывается и закрывается через `</h1>`.",
    },
    starterCode:
      "<!-- TODO: <h1> ichiga o'z ismingizni yozing -->\n\n<!-- TODO: <p> ichiga o'zingiz haqingizda bir jumla qo'shing -->",
    solution: "<h1>Salom, men Aziz</h1>\n<p>Men dasturlashni o'rganyapman.</p>",
    check: {
      dom: [
        { selector: "h1", min: 1 },
        { selector: "p", min: 1 },
      ],
    },
    monacoLang: "html",
    preview: "html",
    xp: 25,
  },

  // 2 ─────────────────────────────────────────────
  {
    title: { uz: "Matn teglari", en: "Text tags", ru: "Текстовые теги" },
    intro: {
      uz: "Sarlavhalar va paragraflar — har qanday sahifaning asosiy matni.",
      en: "Headings and paragraphs are the core text of any page.",
      ru: "Заголовки и абзацы — основной текст любой страницы.",
    },
    sections: [
      {
        icon: "ti-help-circle",
        heading: { uz: "Bu nima?", en: "What is it?", ru: "Что это?" },
        body: {
          uz: "`<h1>`dan `<h6>`gacha — sarlavhalar (h1 eng katta, h6 eng kichik). `<p>` — paragraf. `<strong>` matnni qalin, `<em>` esa qiya qiladi.",
          en: "`<h1>` to `<h6>` are headings (h1 largest, h6 smallest). `<p>` is a paragraph. `<strong>` makes text bold, `<em>` makes it italic.",
          ru: "`<h1>`–`<h6>` — заголовки (h1 самый большой, h6 самый маленький). `<p>` — абзац. `<strong>` делает текст жирным, `<em>` — курсивом.",
        },
      },
      {
        icon: "ti-bulb",
        heading: { uz: "Nega kerak?", en: "Why do you need it?", ru: "Зачем это нужно?" },
        body: {
          uz: "To'g'ri sarlavhalar matnni tartibga soladi va Google qidiruvi sahifangizni yaxshiroq tushunadi (SEO). Bu — o'qish qulayligi va topilish kaliti.",
          en: "Proper headings organise your text and help Google understand your page (SEO). It's the key to readability and discoverability.",
          ru: "Правильные заголовки упорядочивают текст и помогают Google понять страницу (SEO). Это ключ к читаемости и находимости.",
        },
      },
      {
        icon: "ti-tool",
        heading: { uz: "Nimalar qila oladi?", en: "What can it do?", ru: "Что он умеет?" },
        body: {
          uz: "Matnni darajalarga ajratadi (bo'lim, kichik bo'lim), muhim so'zlarni ajratib ko'rsatadi va abzaslarni mantiqiy bloklarga bo'ladi.",
          en: "It splits text into levels (section, subsection), highlights important words, and breaks content into logical blocks.",
          ru: "Разбивает текст на уровни (раздел, подраздел), выделяет важные слова и делит контент на логические блоки.",
        },
      },
      {
        icon: "ti-world",
        heading: { uz: "Qayerda ishlatamiz?", en: "Where do we use it?", ru: "Где мы это используем?" },
        body: {
          uz: "Blog maqolalari, yangiliklar saytlari, mahsulot tavsiflari — matnli har qanday joyda.",
          en: "Blog articles, news sites, product descriptions — anywhere there's text.",
          ru: "Статьи блогов, новостные сайты, описания товаров — везде, где есть текст.",
        },
      },
    ],
    task: {
      uz: "Bitta `<h1>` sarlavha, bitta `<h2>` kichik sarlavha va ichida `<strong>` qalin so'z bo'lgan `<p>` paragraf yozing.",
      en: "Write one `<h1>` heading, one `<h2>` subheading, and a `<p>` paragraph containing a `<strong>` bold word.",
      ru: "Напишите один заголовок `<h1>`, один подзаголовок `<h2>` и абзац `<p>` с жирным словом `<strong>`.",
    },
    starterCode:
      "<h1>Mening blogim</h1>\n<!-- TODO: <h2> kichik sarlavha qo'shing -->\n<!-- TODO: ichida <strong> qalin so'z bo'lgan <p> paragraf yozing -->",
    solution: "<h1>Mening blogim</h1>\n<h2>Birinchi post</h2>\n<p>Bugun men <strong>HTML</strong> o'rgandim.</p>",
    check: {
      dom: [
        { selector: "h1", min: 1 },
        { selector: "h2", min: 1 },
        { selector: "p", min: 1 },
        { selector: "strong", min: 1 },
      ],
    },
    monacoLang: "html",
    preview: "html",
    xp: 25,
  },

  // 3 ─────────────────────────────────────────────
  {
    title: { uz: "Havolalar va ro'yxatlar", en: "Links and lists", ru: "Ссылки и списки" },
    intro: {
      uz: "Havolalar internetni \"to'r\"ga aylantiradi, ro'yxatlar esa ma'lumotni tartibga soladi.",
      en: "Links turn the internet into a \"web\", and lists organise information.",
      ru: "Ссылки превращают интернет в «паутину», а списки упорядочивают информацию.",
    },
    sections: [
      {
        icon: "ti-help-circle",
        heading: { uz: "Bu nima?", en: "What is it?", ru: "Что это?" },
        body: {
          uz: "`<a href=\"...\">` — havola (link), boshqa sahifaga olib boradi. `<ul>` — tartibsiz ro'yxat (nuqtalar), `<ol>` — tartibli (raqamlar), `<li>` — ro'yxat elementi.",
          en: "`<a href=\"...\">` is a link to another page. `<ul>` is an unordered list (bullets), `<ol>` is ordered (numbers), and `<li>` is a list item.",
          ru: "`<a href=\"...\">` — ссылка на другую страницу. `<ul>` — маркированный список, `<ol>` — нумерованный, `<li>` — элемент списка.",
        },
      },
      {
        icon: "ti-bulb",
        heading: { uz: "Nega kerak?", en: "Why do you need it?", ru: "Зачем это нужно?" },
        body: {
          uz: "Havolasiz internet bo'lmaydi — aynan ular sahifalarni bog'laydi. Ro'yxatlar esa menyu, qadamlar va xususiyatlarni aniq ko'rsatadi.",
          en: "Without links there's no internet — they connect pages together. Lists clearly present menus, steps and features.",
          ru: "Без ссылок нет интернета — именно они связывают страницы. Списки наглядно показывают меню, шаги и характеристики.",
        },
      },
      {
        icon: "ti-tool",
        heading: { uz: "Nimalar qila oladi?", en: "What can it do?", ru: "Что он умеет?" },
        body: {
          uz: "`href` ichidagi manzilga o'tkazadi (boshqa sayt, sahifa yoki fayl). Ro'yxatlar bir-birining ichiga joylashib, ko'p darajali menyu yarata oladi.",
          en: "It navigates to the address in `href` (another site, page or file). Lists can nest to create multi-level menus.",
          ru: "Переходит по адресу в `href` (другой сайт, страница или файл). Списки могут вкладываться, создавая многоуровневое меню.",
        },
      },
      {
        icon: "ti-world",
        heading: { uz: "Qayerda ishlatamiz?", en: "Where do we use it?", ru: "Где мы это используем?" },
        body: {
          uz: "Navigatsiya menyulari, \"o'qishni davom ettirish\" havolalari, mahsulot xususiyatlari ro'yxati, retsept qadamlari.",
          en: "Navigation menus, \"read more\" links, product feature lists, recipe steps.",
          ru: "Меню навигации, ссылки «читать далее», списки характеристик товара, шаги рецепта.",
        },
      },
    ],
    task: {
      uz: "Uchta elementli `<ul>` ro'yxat yarating va elementlardan birini `<a href=\"https://example.com\">` havolaga aylantiring.",
      en: "Create a `<ul>` list with three items and turn one of them into an `<a href=\"https://example.com\">` link.",
      ru: "Создайте список `<ul>` из трёх пунктов и сделайте один из них ссылкой `<a href=\"https://example.com\">`.",
    },
    starterCode:
      '<h2>Sevimli tillarim</h2>\n<ul>\n  <li>HTML</li>\n  <!-- TODO: yana ikkita <li> qo\'shing, ulardan birini <a href="..."> havolaga aylantiring -->\n</ul>',
    solution:
      '<h2>Sevimli tillarim</h2>\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li><a href="https://example.com">JavaScript</a></li>\n</ul>',
    check: {
      dom: [
        { selector: "ul li", min: 3 },
        { selector: "a", min: 1 },
      ],
    },
    monacoLang: "html",
    preview: "html",
    xp: 30,
  },

  // 4 ─────────────────────────────────────────────
  {
    title: { uz: "Rasmlar", en: "Images", ru: "Изображения" },
    intro: {
      uz: "Bir rasm ming so'zga teng — sahifaga rasm qo'shamiz.",
      en: "A picture is worth a thousand words — let's add an image.",
      ru: "Картинка стоит тысячи слов — добавим изображение.",
    },
    sections: [
      {
        icon: "ti-help-circle",
        heading: { uz: "Bu nima?", en: "What is it?", ru: "Что это?" },
        body: {
          uz: "`<img>` — rasm tegi. U yopilmaydi (yakka teg). `src` — rasm manzili, `alt` — rasm ko'rinmasa chiqadigan matn.",
          en: "`<img>` is the image tag. It doesn't close (self-closing). `src` is the image address, `alt` is the text shown if the image fails.",
          ru: "`<img>` — тег изображения. Он не закрывается (самозакрывающийся). `src` — адрес картинки, `alt` — текст, если она не загрузилась.",
        },
      },
      {
        icon: "ti-bulb",
        heading: { uz: "Nega kerak?", en: "Why do you need it?", ru: "Зачем это нужно?" },
        body: {
          uz: "Vizual kontent diqqatni tortadi va tushunishni osonlashtiradi. `alt` esa ko'rish imkoniyati cheklangan foydalanuvchilar uchun (accessibility) va SEO uchun muhim.",
          en: "Visual content grabs attention and aids understanding. `alt` matters for accessibility (screen readers) and SEO.",
          ru: "Визуальный контент привлекает внимание и облегчает понимание. `alt` важен для доступности (скринридеры) и SEO.",
        },
      },
      {
        icon: "ti-tool",
        heading: { uz: "Nimalar qila oladi?", en: "What can it do?", ru: "Что он умеет?" },
        body: {
          uz: "Internetdagi yoki loyihadagi rasmni ko'rsatadi. `width` va `height` bilan o'lchamini boshqarish mumkin.",
          en: "It displays an image from the internet or your project. You can control its size with `width` and `height`.",
          ru: "Показывает изображение из интернета или проекта. Размер задаётся через `width` и `height`.",
        },
      },
      {
        icon: "ti-world",
        heading: { uz: "Qayerda ishlatamiz?", en: "Where do we use it?", ru: "Где мы это используем?" },
        body: {
          uz: "Mahsulot fotosuratlari, logotiplar, galereyalar, avatarlar — vizual har qanday joyda.",
          en: "Product photos, logos, galleries, avatars — anywhere visual.",
          ru: "Фото товаров, логотипы, галереи, аватары — везде, где нужна графика.",
        },
      },
    ],
    task: {
      uz: "`<img>` tegi bilan rasm qo'shing. `src` ga istalgan rasm manzilini, `alt` ga tavsif yozing va `width=\"200\"` qo'ying.",
      en: "Add an image with `<img>`. Put any image URL in `src`, a description in `alt`, and set `width=\"200\"`.",
      ru: "Добавьте изображение тегом `<img>`. Укажите URL в `src`, описание в `alt` и задайте `width=\"200\"`.",
    },
    starterCode:
      '<h2>Mening rasmim</h2>\n<!-- TODO: <img> tegini qo\'shing: src, alt va width="200" atributlari bilan -->',
    solution:
      '<h2>Mening rasmim</h2>\n<img src="https://picsum.photos/200" alt="Tasodifiy rasm" width="200" />',
    check: {
      dom: [{ selector: "img", min: 1 }],
    },
    monacoLang: "html",
    preview: "html",
    xp: 30,
  },

  // 5 ─────────────────────────────────────────────
  {
    title: { uz: "CSS nima? — rang va shrift", en: "What is CSS? — color & font", ru: "Что такое CSS? — цвет и шрифт" },
    intro: {
      uz: "HTML — skelet, CSS — kiyim. Endi sahifani chiroyli qilamiz.",
      en: "HTML is the skeleton, CSS is the clothing. Now let's make the page beautiful.",
      ru: "HTML — скелет, CSS — одежда. Теперь сделаем страницу красивой.",
    },
    sections: [
      {
        icon: "ti-help-circle",
        heading: { uz: "Bu nima?", en: "What is it?", ru: "Что это?" },
        body: {
          uz: "CSS — Cascading Style Sheets. U HTML elementlarining *ko'rinishini* boshqaradi: rang, shrift, o'lcham, joylashuv. `<style>` ichida `selektor { xususiyat: qiymat; }` ko'rinishida yoziladi.",
          en: "CSS stands for Cascading Style Sheets. It controls the *appearance* of HTML elements: colour, font, size, layout. It's written inside `<style>` as `selector { property: value; }`.",
          ru: "CSS — Cascading Style Sheets. Управляет *внешним видом* элементов HTML: цвет, шрифт, размер, расположение. Пишется в `<style>` как `селектор { свойство: значение; }`.",
        },
      },
      {
        icon: "ti-bulb",
        heading: { uz: "Nega kerak?", en: "Why do you need it?", ru: "Зачем это нужно?" },
        body: {
          uz: "CSS'siz har sayt bir xil oq fonli, qora Times shriftli ko'rinadi. Brend, kayfiyat va qulaylik — barchasi CSS orqali yaratiladi.",
          en: "Without CSS every site looks the same — white background, black Times font. Brand, mood and usability all come from CSS.",
          ru: "Без CSS все сайты выглядят одинаково — белый фон, чёрный шрифт Times. Бренд, настроение и удобство создаёт CSS.",
        },
      },
      {
        icon: "ti-tool",
        heading: { uz: "Nimalar qila oladi?", en: "What can it do?", ru: "Что он умеет?" },
        body: {
          uz: "Rang (`color`, `background`), shrift (`font-size`, `font-family`), chegara, soya, animatsiya va to'liq layout. Bitta CSS minglab elementga ta'sir qila oladi.",
          en: "Colour (`color`, `background`), fonts (`font-size`, `font-family`), borders, shadows, animations and full layout. One rule can affect thousands of elements.",
          ru: "Цвет (`color`, `background`), шрифты (`font-size`, `font-family`), границы, тени, анимации и вёрстку. Одно правило влияет на тысячи элементов.",
        },
      },
      {
        icon: "ti-world",
        heading: { uz: "Qayerda ishlatamiz?", en: "Where do we use it?", ru: "Где мы это используем?" },
        body: {
          uz: "Mutlaqo har bir zamonaviy veb-sayt va ilova dizayni CSS bilan qilinadi. Bu o'yin interfeysi ham!",
          en: "Absolutely every modern website and app design uses CSS. This game's interface too!",
          ru: "Дизайн абсолютно каждого современного сайта и приложения делается на CSS. И интерфейс этой игры тоже!",
        },
      },
    ],
    task: {
      uz: "`<style>` blokida `h1` rangini o'zgartiring (masalan `color: teal;`) va `body` ga `background` rang bering. Natijada o'zgarishni ko'ring.",
      en: "In a `<style>` block, change the `h1` colour (e.g. `color: teal;`) and give `body` a `background` colour. Watch the result change.",
      ru: "В блоке `<style>` измените цвет `h1` (например `color: teal;`) и задайте `body` цвет `background`. Посмотрите, как изменится результат.",
    },
    starterCode:
      "<style>\n  /* TODO: body ga background rang bering */\n  /* TODO: h1 ga color rang bering */\n</style>\n\n<h1>Rangli sarlavha!</h1>\n<p>CSS bilan bo'yaldim.</p>",
    solution:
      "<style>\n  body { background: #0f1722; }\n  h1 { color: #39d353; font-family: sans-serif; }\n</style>\n\n<h1>Rangli sarlavha!</h1>\n<p style=\"color:#aebfd0\">CSS bilan bo'yaldim.</p>",
    check: {
      dom: [
        { selector: "style", min: 1 },
        { selector: "h1", min: 1 },
      ],
      sourceContains: ["background", "color"],
    },
    monacoLang: "html",
    preview: "html",
    xp: 35,
  },

  // 6 ─────────────────────────────────────────────
  {
    title: { uz: "Box model va Flexbox", en: "Box model & Flexbox", ru: "Блочная модель и Flexbox" },
    intro: {
      uz: "Har element — quti. Ularni joylashtirishni o'rganamiz.",
      en: "Every element is a box. Let's learn to arrange them.",
      ru: "Каждый элемент — это блок. Научимся их располагать.",
    },
    sections: [
      {
        icon: "ti-help-circle",
        heading: { uz: "Bu nima?", en: "What is it?", ru: "Что это?" },
        body: {
          uz: "Har HTML element to'rtburchak quti: ichida `padding` (ichki bo'shliq), atrofida `border` (chegara) va `margin` (tashqi bo'shliq). `display: flex` esa qutilarni yonma-yon yoki ustun qilib joylashtiradi.",
          en: "Every element is a rectangular box: `padding` (inner space) inside, `border` around it, and `margin` (outer space) outside. `display: flex` arranges boxes side by side or in a column.",
          ru: "Каждый элемент — прямоугольный блок: `padding` (внутренний отступ), `border` (граница) и `margin` (внешний отступ). `display: flex` располагает блоки в ряд или столбец.",
        },
      },
      {
        icon: "ti-bulb",
        heading: { uz: "Nega kerak?", en: "Why do you need it?", ru: "Зачем это нужно?" },
        body: {
          uz: "Bo'shliq va joylashuvni tushunmasdan chiroyli dizayn qilib bo'lmaydi. Flexbox — zamonaviy layout'ning asosi: menyu, kartalar, markazlash — hammasi shu.",
          en: "You can't design well without understanding spacing and layout. Flexbox is the basis of modern layout: menus, cards, centering — all of it.",
          ru: "Без понимания отступов и расположения хорошего дизайна не сделать. Flexbox — основа современной вёрстки: меню, карточки, центрирование.",
        },
      },
      {
        icon: "ti-tool",
        heading: { uz: "Nimalar qila oladi?", en: "What can it do?", ru: "Что он умеет?" },
        body: {
          uz: "Elementlar orasidagi masofani aniq boshqaradi, ularni qator/ustunga teradi, markazga joylashtiradi (`justify-content`, `align-items`) va ekranga moslashtiradi.",
          en: "It precisely controls spacing, lays elements in rows/columns, centers them (`justify-content`, `align-items`) and adapts to the screen.",
          ru: "Точно управляет отступами, выстраивает элементы в строки/столбцы, центрирует (`justify-content`, `align-items`) и адаптирует под экран.",
        },
      },
      {
        icon: "ti-world",
        heading: { uz: "Qayerda ishlatamiz?", en: "Where do we use it?", ru: "Где мы это используем?" },
        body: {
          uz: "Navbar menyu, mahsulot kartalari panjarasi, formalar, har qanday \"yonma-yon\" joylashuv — zamonaviy sahifaning 90%i.",
          en: "Navbar menus, product card grids, forms, any \"side by side\" layout — 90% of a modern page.",
          ru: "Меню навбара, сетки карточек товаров, формы, любая «рядом» вёрстка — 90% современной страницы.",
        },
      },
    ],
    task: {
      uz: "`display: flex` bilan uchta rangli `<div>` qutini yonma-yon joylashtiring va ular orasiga `gap` bering.",
      en: "Use `display: flex` to place three coloured `<div>` boxes side by side with a `gap` between them.",
      ru: "С помощью `display: flex` расположите три цветных блока `<div>` в ряд с `gap` между ними.",
    },
    starterCode:
      "<style>\n  /* TODO: .row ga display: flex va gap bering */\n  .row {  }\n  .box { padding: 24px; border-radius: 10px; color: #04121a; font-family: sans-serif; }\n</style>\n\n<div class=\"row\">\n  <div class=\"box\" style=\"background:#39d353\">A</div>\n  <!-- TODO: yana ikkita .box <div> qo'shing -->\n</div>",
    solution:
      "<style>\n  .row { display: flex; gap: 12px; }\n  .box { padding: 24px; border-radius: 10px; color: #04121a; font-family: sans-serif; }\n</style>\n\n<div class=\"row\">\n  <div class=\"box\" style=\"background:#39d353\">A</div>\n  <div class=\"box\" style=\"background:#37b6ff\">B</div>\n  <div class=\"box\" style=\"background:#ef9f27\">C</div>\n</div>",
    check: {
      dom: [
        { selector: "style", min: 1 },
        { selector: ".row .box", min: 3 },
      ],
      sourceContains: ["display: flex", "gap"],
    },
    monacoLang: "html",
    preview: "html",
    xp: 40,
  },
];
