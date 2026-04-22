import React, { useEffect, useState } from "react";

const content = {
  ru: {
    navSolutions: "Решения",
    navSystems: "Возможности",
    navLaunch: "Запуск",
    navFaq: "FAQ",
    navDiscuss: "Обсудить задачу",

    heroTitle1: "Теряете клиентов в переписке",
    heroTitle2: "Бот возьмёт входящие на себя",
    heroText:
      "Разрабатываю ботов для бизнеса, которые отвечают на частые вопросы, собирают контакты, уточняют запрос и передают в работу уже готовые обращения",
    heroBtn1: "Получить схему под бизнес",

    heroCardLabel: "Как это выглядит в работе",
    heroCardTitle: "Бот обрабатывает первое обращение вместо менеджера",
    heroCardText:
      "Пока команда занята, бот отвечает клиенту, уточняет запрос и передаёт менеджеру уже понятную заявку",

    chatBot: "Бот",
    chatClient: "Клиент",
    chatManager: "Менеджер",

    msg1: "Здравствуйте! Подскажите стоимость и как записаться",
    msg2: "Добрый день 👋 Помогу с этим. Какая услуга вас интересует",
    msg3: "Нужна консультация и ближайшее свободное время",
    msg4: "Отлично. Подскажите ваше имя и номер для подтверждения",
    msg5: "Анна, +7 900 123 45 67",
    msg6: "Готово. Передаю менеджеру оформленное обращение",
    msg7: "Получил заявку: Анна, консультация, просит ближайшее время",

    solutionsEyebrow: "Основные решения",
    solutionsTitle:
      "Бот собирается под конкретный процесс, а не просто ради автоматизации",
    solutionsText:
      "Логика зависит от ниши, канала общения, типа заявки и того, какой путь клиент должен пройти до записи, консультации или обращения",

    card1Title: "Бот для записи",
    card1Text:
      "Подходит для бизнеса, где клиенту нужно выбрать услугу, дату, специалиста или удобный слот",

    card2Title: "Бот для входящих",
    card2Text:
      "Принимает первичный запрос, отвечает на типовые вопросы и не даёт терять обращения в нерабочее время",

    card3Title: "Бот для FAQ",
    card3Text:
      "Закрывает повторяющиеся вопросы по услугам, стоимости, условиям, локации и дальнейшим шагам",

    card4Title: "Бот для заявок",
    card4Text:
      "Собирает контакт, бриф и ключевые детали заранее, чтобы менеджер получал уже понятное обращение",

    card5Title: "Бот для брони",
    card5Text:
      "Подходит для студий, площадок, отелей, услуг и других форматов, где важна быстрая фиксация интереса",

    card6Title: "Бот под процесс",
    card6Text:
      "Можно собрать сценарий под внутреннюю механику бизнеса, CRM, таблицы, заявки и внешние сервисы",

    systemsEyebrow: "Что бот делает внутри процесса",
    systemsTitle: "Не просто отвечает, а двигает клиента по понятной логике",
    systemsText:
      "Важен не сам факт наличия бота, а то, как именно он встроен в обработку обращений и на каком этапе помогает команде",

    step1Title: "Встречает клиента",
    step1Text:
      "Бот отвечает сразу после входящего сообщения и не оставляет человека без реакции в первые минуты",

    step2Title: "Уточняет запрос",
    step2Text:
      "Помогает понять, что именно нужно клиенту, и ведёт его по заранее продуманной логике",

    step3Title: "Собирает данные",
    step3Text:
      "Имя, контакт, формат услуги, удобное время, детали заявки и другая информация, нужная бизнесу",

    step4Title: "Отвечает на FAQ",
    step4Text:
      "Снимает часть однотипных вопросов и сокращает нагрузку на администратора или менеджера",

    step5Title: "Доводит до действия",
    step5Text:
      "Запись, бронь, заявка, запрос консультации или другая целевая точка в воронке",

    step6Title: "Передаёт в работу",
    step6Text:
      "Менеджер получает уже структурированное обращение и быстрее включается в следующий этап коммуникации",

    useEyebrow: "Где это особенно полезно",
    useTitle: "Лучше всего бот работает там, где люди сначала пишут, а не звонят",
    useText:
      "Особенно это актуально для бизнеса с частыми вопросами, заявками, записями, бронью и большим количеством однотипных входящих",

    use1Title: "Услуги и запись",
    use1Text:
      "Салоны, клиники, студии, частные практики, сервисы и другие ниши, где нужно быстро принять обращение и провести человека до записи",

    use2Title: "Локальный офлайн-бизнес",
    use2Text:
      "Там, где сообщения приходят вечером, ночью или в часы пик, когда сотрудники заняты и не успевают быстро ответить",

    use3Title: "B2B и сервисные компании",
    use3Text:
      "Когда важно не просто получить сообщение, а собрать первичный бриф и передать менеджеру более полный запрос",

    use4Title: "Проекты с мессенджерами как точкой входа",
    use4Text:
      "Если трафик уже идёт в Telegram или WhatsApp, бот помогает сделать этот канал более управляемым",

    launchEyebrow: "Этапы запуска",
    launchTitle:
      "Сначала разбираем процесс, потом собираем сценарий и только после этого запускаем",
    launchText:
      "Такой подход позволяет делать не просто красивый интерфейс, а рабочий инструмент, который встроен в реальную коммуникацию бизнеса",

    timeline1Title: "Разбор бизнес-задачи",
    timeline1Text:
      "Смотрим, как сейчас обрабатываются входящие, где теряются люди и какой сценарий даст наибольшую пользу",

    timeline2Title: "Проектирование сценария",
    timeline2Text:
      "Продумываем структуру диалога, ветки, вопросы, точки принятия решения и логику передачи обращения",

    timeline3Title: "Сборка и тестирование",
    timeline3Text:
      "Подключаем каналы, собираем механику, проверяем путь клиента и дорабатываем детали до рабочего состояния",

    timeline4Title: "Запуск в работу",
    timeline4Text:
      "Передаём готовое решение и при необходимости сопровождаем после старта, чтобы всё работало стабильно",

    faqEyebrow: "FAQ",
    faqTitle: "Частые вопросы перед запуском",

    faq1Title: "Сколько занимает запуск",
    faq1Text:
      "Зависит от сложности логики, количества веток и подключений, но простые решения запускаются заметно быстрее",

    faq2Title: "Можно ли подключить CRM",
    faq2Text:
      "Да, сценарий можно связать с CRM, таблицами, уведомлениями и внутренними бизнес-процессами",

    faq3Title: "Можно ли использовать только Telegram",
    faq3Text:
      "Да, можно собрать решение под один канал или сразу под несколько точек входа",

    faq4Title: "Подходит ли это малому бизнесу",
    faq4Text:
      "Да, если уже есть входящие обращения, запись, бронь или частые вопросы в переписке",

    faq5Title: "Что получает менеджер на выходе",
    faq5Text:
      "Не просто переписку, а уже собранный запрос с базовой структурой, чтобы быстрее продолжить коммуникацию",

    faq6Title: "Нужен ли для этого сайт",
    faq6Text:
      "Нет, бот может быть самостоятельной точкой входа и принимать обращения напрямую из мессенджера",

    finalEyebrow: "Финальный шаг",
    finalTitle: "Покажу, какой сценарий бота можно собрать именно под ваш бизнес",
    finalText:
      "Разберу ваш процесс, скажу где бот даст реальную пользу и предложу понятную схему под ваш формат заявок, общения и обработки входящих",
    finalBtn1: "Обсудить задачу",
    finalBtn2: "Написать в Telegram",
  },

  en: {
    navSolutions: "Solutions",
    navSystems: "Capabilities",
    navLaunch: "Launch",
    navFaq: "FAQ",
    navDiscuss: "Discuss project",

    heroTitle1: "Losing clients in chats",
    heroTitle2: "The bot will handle inbound messages for you",
    heroText:
      "I build bots for businesses that answer common questions, collect contacts, clarify requests and pass ready-to-handle leads to your team",
    heroBtn1: "Get a bot outline",

    heroCardLabel: "How it works",
    heroCardTitle: "The bot handles the first contact instead of the manager",
    heroCardText:
      "While your team is busy, the bot replies to the client, clarifies the request and sends the manager a structured lead",

    chatBot: "Bot",
    chatClient: "Client",
    chatManager: "Manager",

    msg1: "Hello, can you tell me the price and how to book",
    msg2: "Hi 👋 Sure. What service are you interested in",
    msg3: "I need a consultation and the nearest available time",
    msg4: "Great. Please send your name and phone number",
    msg5: "Anna, +7 900 123 45 67",
    msg6: "Done. Sending the completed request to the manager",
    msg7: "Lead received: Anna, consultation, wants the nearest available slot",

    solutionsEyebrow: "Core solutions",
    solutionsTitle: "The bot is built around your process, not just automation",
    solutionsText:
      "The logic depends on your niche, communication channel, lead type and the path the client needs to take before booking or requesting a consultation",

    card1Title: "Booking bot",
    card1Text:
      "Great for businesses where clients choose a service, date, specialist or time slot",

    card2Title: "Inbound bot",
    card2Text:
      "Handles first-touch requests, answers common questions and prevents lost leads outside working hours",

    card3Title: "FAQ bot",
    card3Text:
      "Handles repeated questions about services, pricing, terms, location and next steps",

    card4Title: "Lead capture bot",
    card4Text:
      "Collects contact details, brief and key request data before a manager joins the conversation",

    card5Title: "Reservation bot",
    card5Text:
      "Works well for studios, venues, hotels, services and other formats where fast intent capture matters",

    card6Title: "Custom process bot",
    card6Text:
      "Can be built around your internal flow, CRM, tables, forms and external services",

    systemsEyebrow: "How the bot works inside the process",
    systemsTitle: "It does not just reply, it moves the client forward",
    systemsText:
      "What matters is not the fact that a bot exists, but how it is integrated into lead handling and where it helps your team most",

    step1Title: "Greets instantly",
    step1Text:
      "The bot replies right after the inbound message and does not leave the client waiting",

    step2Title: "Clarifies the request",
    step2Text:
      "It helps understand what exactly the client needs and guides them through a clear flow",

    step3Title: "Collects data",
    step3Text:
      "Name, contact, service type, preferred time and other information your business needs",

    step4Title: "Handles FAQ",
    step4Text:
      "Reduces repetitive questions and lowers the load on your admin or manager",

    step5Title: "Drives to action",
    step5Text:
      "Booking, reservation, lead submission, consultation request or another target action",

    step6Title: "Hands off to the team",
    step6Text:
      "Your manager gets a structured request and can continue the conversation faster",

    useEyebrow: "Best use cases",
    useTitle: "Works best when people message first instead of calling",
    useText:
      "Especially useful for businesses with repeated questions, bookings, reservations and a high volume of similar inbound messages",

    use1Title: "Services and appointments",
    use1Text:
      "Salons, clinics, studios, private practices, service companies and other niches where fast response matters",

    use2Title: "Local offline businesses",
    use2Text:
      "Especially when messages come in during evenings, nights or rush hours while staff is busy",

    use3Title: "B2B and service companies",
    use3Text:
      "When it is important not just to receive a message, but to collect a short brief before a manager joins",

    use4Title: "Messenger-first projects",
    use4Text:
      "If your traffic already goes into Telegram or WhatsApp, a bot makes the channel much more manageable",

    launchEyebrow: "Launch stages",
    launchTitle: "First we analyze the process, then build the logic and only then launch",
    launchText:
      "This approach helps create not just a nice interface, but a working tool integrated into real business communication",

    timeline1Title: "Business analysis",
    timeline1Text:
      "We review how inbound requests are handled now, where leads are lost and what scenario will bring the most value",

    timeline2Title: "Scenario design",
    timeline2Text:
      "We design the dialogue structure, branches, questions, decision points and handoff logic",

    timeline3Title: "Build and testing",
    timeline3Text:
      "We connect channels, assemble the flow, test the customer path and refine the details",

    timeline4Title: "Go live",
    timeline4Text:
      "We hand over the ready solution and can support it after launch if needed",

    faqEyebrow: "FAQ",
    faqTitle: "Common questions before launch",

    faq1Title: "How long does launch take",
    faq1Text:
      "It depends on the logic complexity, number of branches and integrations, but simple solutions launch faster",

    faq2Title: "Can it be connected to a CRM",
    faq2Text:
      "Yes, the scenario can be connected to a CRM, spreadsheets, notifications and internal business processes",

    faq3Title: "Can we use only Telegram",
    faq3Text:
      "Yes, the solution can be built for one channel or several entry points at once",

    faq4Title: "Does it fit small businesses",
    faq4Text:
      "Yes, if you already have inbound requests, bookings, reservations or repeated questions in chats",

    faq5Title: "What does the manager receive",
    faq5Text:
      "Not just a chat, but a structured request that makes the next step much faster",

    faq6Title: "Do we need a website",
    faq6Text:
      "No, the bot can work as a standalone entry point and receive requests directly in a messenger",

    finalEyebrow: "Final step",
    finalTitle: "I will show what bot scenario can be built specifically for your business",
    finalText:
      "I will review your process, show where a bot brings real value and suggest a clear flow for your inbound communication",
    finalBtn1: "Discuss project",
    finalBtn2: "Message on Telegram",
  },
};

function App() {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const t = content[lang];

  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="b2bots">
            <img src="/logobot.png" alt="b2bots" className="brand-logo" />
            <div className="brand-text">b2bots</div>
          </a>

          <nav className="nav-links">
            <a href="#solutions">{t.navSolutions}</a>
            <a href="#systems">{t.navSystems}</a>
            <a href="#launch">{t.navLaunch}</a>
            <a href="#faq">{t.navFaq}</a>
          </nav>

          <div className="header-actions">
            <div className="mini-switches">
              <button
                className={`mini-btn ${theme === "dark" ? "active" : ""}`}
                onClick={() => setTheme("dark")}
                type="button"
                aria-label="Dark theme"
              >
                🌙
              </button>

              <button
                className={`mini-btn ${theme === "light" ? "active" : ""}`}
                onClick={() => setTheme("light")}
                type="button"
                aria-label="Light theme"
              >
                ☀️
              </button>

              <button
                className={`mini-btn ${lang === "ru" ? "active" : ""}`}
                onClick={() => setLang("ru")}
                type="button"
              >
                RU
              </button>

              <button
                className={`mini-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
                type="button"
              >
                EN
              </button>
            </div>

            <a
              className="btn btn-small"
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
            >
              {t.navDiscuss}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
              </h1>

              <p className="hero-text">{t.heroText}</p>

              <div className="hero-actions">
                <a
                  className="btn"
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.heroBtn1}
                </a>
              </div>
            </div>

            <div className="hero-card chat-card">
              <div className="card-label">{t.heroCardLabel}</div>
              <h3>{t.heroCardTitle}</h3>
              <p>{t.heroCardText}</p>

              <div className="chat-window">
                <div className="chat-message client">
                  <div className="chat-role">{t.chatClient}</div>
                  <div className="chat-bubble">{t.msg1}</div>
                </div>

                <div className="chat-message bot">
                  <div className="chat-role">{t.chatBot}</div>
                  <div className="chat-bubble">{t.msg2}</div>
                </div>

                <div className="chat-message client">
                  <div className="chat-role">{t.chatClient}</div>
                  <div className="chat-bubble">{t.msg3}</div>
                </div>

                <div className="chat-message bot">
                  <div className="chat-role">{t.chatBot}</div>
                  <div className="chat-bubble">{t.msg4}</div>
                </div>

                <div className="chat-message client">
                  <div className="chat-role">{t.chatClient}</div>
                  <div className="chat-bubble">{t.msg5}</div>
                </div>

                <div className="chat-message bot">
                  <div className="chat-role">{t.chatBot}</div>
                  <div className="chat-bubble">{t.msg6}</div>
                </div>

                <div className="chat-message manager">
                  <div className="chat-role">{t.chatManager}</div>
                  <div className="chat-bubble manager-bubble">{t.msg7}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.solutionsEyebrow}</div>
              <h2>{t.solutionsTitle}</h2>
              <p>{t.solutionsText}</p>
            </div>

            <div className="grid three">
              <article className="card">
                <h3>{t.card1Title}</h3>
                <p>{t.card1Text}</p>
              </article>

              <article className="card">
                <h3>{t.card2Title}</h3>
                <p>{t.card2Text}</p>
              </article>

              <article className="card">
                <h3>{t.card3Title}</h3>
                <p>{t.card3Text}</p>
              </article>

              <article className="card">
                <h3>{t.card4Title}</h3>
                <p>{t.card4Text}</p>
              </article>

              <article className="card">
                <h3>{t.card5Title}</h3>
                <p>{t.card5Text}</p>
              </article>

              <article className="card">
                <h3>{t.card6Title}</h3>
                <p>{t.card6Text}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="systems" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.systemsEyebrow}</div>
              <h2>{t.systemsTitle}</h2>
              <p>{t.systemsText}</p>
            </div>

            <div className="steps">
              <article className="step-card">
                <div className="step-num">01</div>
                <h3>{t.step1Title}</h3>
                <p>{t.step1Text}</p>
              </article>

              <article className="step-card">
                <div className="step-num">02</div>
                <h3>{t.step2Title}</h3>
                <p>{t.step2Text}</p>
              </article>

              <article className="step-card">
                <div className="step-num">03</div>
                <h3>{t.step3Title}</h3>
                <p>{t.step3Text}</p>
              </article>

              <article className="step-card">
                <div className="step-num">04</div>
                <h3>{t.step4Title}</h3>
                <p>{t.step4Text}</p>
              </article>

              <article className="step-card">
                <div className="step-num">05</div>
                <h3>{t.step5Title}</h3>
                <p>{t.step5Text}</p>
              </article>

              <article className="step-card">
                <div className="step-num">06</div>
                <h3>{t.step6Title}</h3>
                <p>{t.step6Text}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.useEyebrow}</div>
              <h2>{t.useTitle}</h2>
              <p>{t.useText}</p>
            </div>

            <div className="grid two">
              <article className="card">
                <h3>{t.use1Title}</h3>
                <p>{t.use1Text}</p>
              </article>

              <article className="card">
                <h3>{t.use2Title}</h3>
                <p>{t.use2Text}</p>
              </article>

              <article className="card">
                <h3>{t.use3Title}</h3>
                <p>{t.use3Text}</p>
              </article>

              <article className="card">
                <h3>{t.use4Title}</h3>
                <p>{t.use4Text}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="launch" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.launchEyebrow}</div>
              <h2>{t.launchTitle}</h2>
              <p>{t.launchText}</p>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-num">01</div>
                <div>
                  <h3>{t.timeline1Title}</h3>
                  <p>{t.timeline1Text}</p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">02</div>
                <div>
                  <h3>{t.timeline2Title}</h3>
                  <p>{t.timeline2Text}</p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">03</div>
                <div>
                  <h3>{t.timeline3Title}</h3>
                  <p>{t.timeline3Text}</p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">04</div>
                <div>
                  <h3>{t.timeline4Title}</h3>
                  <p>{t.timeline4Text}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.faqEyebrow}</div>
              <h2>{t.faqTitle}</h2>
            </div>

            <div className="faq-list">
              <article className="faq-item">
                <h3>{t.faq1Title}</h3>
                <p>{t.faq1Text}</p>
              </article>

              <article className="faq-item">
                <h3>{t.faq2Title}</h3>
                <p>{t.faq2Text}</p>
              </article>

              <article className="faq-item">
                <h3>{t.faq3Title}</h3>
                <p>{t.faq3Text}</p>
              </article>

              <article className="faq-item">
                <h3>{t.faq4Title}</h3>
                <p>{t.faq4Text}</p>
              </article>

              <article className="faq-item">
                <h3>{t.faq5Title}</h3>
                <p>{t.faq5Text}</p>
              </article>

              <article className="faq-item">
                <h3>{t.faq6Title}</h3>
                <p>{t.faq6Text}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container final-box">
            <div>
              <div className="eyebrow">{t.finalEyebrow}</div>
              <h2>{t.finalTitle}</h2>
              <p>{t.finalText}</p>
            </div>

            <div className="final-actions">
              <a
                className="btn"
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
              >
                {t.finalBtn1}
              </a>

              <a
                className="btn btn-secondary"
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
              >
                {t.finalBtn2}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
