import React, { useEffect, useState } from "react";

const content = {
  ru: {
    navSolutions: "Решения",
    navSystems: "Возможности",
    navLaunch: "Запуск",
    navFaq: "FAQ",
    navDiscuss: "Обсудить проект",

    heroTitle1: "Telegram-боты для бизнеса",
    heroTitle2: "под задачи почти любой сложности",
    heroText:
      "Разрабатываю Telegram-ботов для бизнеса: от простых сценариев обработки заявок до более сложных решений с интеграциями, автоматизацией процессов и AI-функциями",
    heroBtn1: "Обсудить проект",

    heroCardLabel: "Как это выглядит в работе",
    heroCardTitle: "Бот закрывает часть процессов без постоянного участия команды",
    heroCardText:
      "Telegram-бот может принимать обращения, собирать данные, вести клиента по сценарию, автоматизировать внутренние действия и при необходимости усиливаться AI-механикой",

    chatBot: "Бот",
    chatClient: "Клиент",
    chatManager: "Команда",

    msg1: "Здравствуйте, хочу понять, какой бот подойдёт для моего бизнеса",
    msg2: "Добрый день 👋 Помогу с этим. Какая задача стоит сейчас",
    msg3: "Нужно принимать заявки, отвечать на частые вопросы и распределять обращения",
    msg4: "Понял. Можно собрать Telegram-бота под эти процессы и при необходимости добавить AI",
    msg5: "А можно ещё связать его с CRM и уведомлениями",
    msg6: "Да, это можно заложить в сценарий и структуру бота",
    msg7: "Запрос понятен: Telegram-бот под заявки, FAQ, CRM и автоматизацию",

    solutionsEyebrow: "Основные решения",
    solutionsTitle:
      "Бот собирается под конкретную бизнес-задачу, а не по шаблону",
    solutionsText:
      "Логика, структура и функции зависят от того, что именно нужно бизнесу: обработка заявок, автоматизация, интеграции, сервисные сценарии или AI-усиление",

    card1Title: "Боты для заявок",
    card1Text:
      "Приём обращений, сбор данных, квалификация клиента и передача заявки в работу",

    card2Title: "Боты для автоматизации",
    card2Text:
      "Сценарии, которые снимают с команды рутинные действия и ускоряют процессы",

    card3Title: "Боты с интеграциями",
    card3Text:
      "Подключение CRM, таблиц, уведомлений, API и других внешних сервисов",

    card4Title: "Сервисные боты",
    card4Text:
      "FAQ, сопровождение, инструкции, навигация по услугам и поддержка клиента внутри Telegram",

    card5Title: "Боты под внутренние процессы",
    card5Text:
      "Решения для сотрудников, заявок, согласований, контроля этапов и внутренних сценариев",

    card6Title: "Боты с AI-усилением",
    card6Text:
      "Если нужно, в Telegram-бот можно встроить AI-функции для ответов, анализа, маршрутизации и более гибкой логики",

    systemsEyebrow: "Что может Telegram-бот",
    systemsTitle: "Не просто отвечает, а становится рабочим инструментом внутри бизнеса",
    systemsText:
      "Бот может быть точкой входа, частью воронки, сервисным интерфейсом, автоматизатором процессов или прослойкой между клиентом, командой и системами",

    step1Title: "Принимает обращения",
    step1Text:
      "Бот может выступать первой точкой контакта и собирать обращения в удобной структуре",

    step2Title: "Ведёт по сценарию",
    step2Text:
      "Направляет клиента, сотрудника или пользователя по продуманной логике без хаоса и лишних шагов",

    step3Title: "Собирает и передаёт данные",
    step3Text:
      "Формирует заявку, бриф, запрос или внутреннюю задачу и отправляет её дальше",

    step4Title: "Автоматизирует рутину",
    step4Text:
      "Убирает повторяющиеся действия, сокращает ручную работу и разгружает команду",

    step5Title: "Интегрируется с системами",
    step5Text:
      "Может работать вместе с CRM, таблицами, уведомлениями, API и другой инфраструктурой",

    step6Title: "Усиливается AI при необходимости",
    step6Text:
      "Если задача требует гибкости, в бота можно встроить AI-функции как дополнительное усиление",

    useEyebrow: "Под какие задачи это подходит",
    useTitle: "Telegram-бот можно собрать под очень разные процессы бизнеса",
    useText:
      "От внешней коммуникации с клиентами до внутренних автоматизаций, сервисных сценариев и решений с расширенной логикой",

    use1Title: "Клиентские сценарии",
    use1Text:
      "Заявки, консультации, ответы на вопросы, сопровождение клиента, брони, записи и маршрутизация обращений",

    use2Title: "Операционные процессы",
    use2Text:
      "Автоматизация повторяющихся действий, уведомлений, распределения запросов и внутренних этапов работы",

    use3Title: "Интеграционные решения",
    use3Text:
      "Связка Telegram-бота с внешними сервисами, CRM, таблицами, API и внутренними системами",

    use4Title: "Боты с AI-функциями",
    use4Text:
      "Если нужен более умный сценарий, можно добавить AI-ответы, обработку запросов, анализ и динамическую логику",

    launchEyebrow: "Этапы запуска",
    launchTitle:
      "Сначала разбираем задачу, затем проектируем механику и только после этого собираем решение",
    launchText:
      "Такой подход позволяет делать не просто красивого бота, а рабочий инструмент, который решает конкретную задачу бизнеса",

    timeline1Title: "Разбор задачи",
    timeline1Text:
      "Смотрим, какая цель стоит у бизнеса, что нужно автоматизировать и какой формат Telegram-бота подойдёт лучше всего",

    timeline2Title: "Проектирование логики",
    timeline2Text:
      "Продумываем сценарии, структуру, ветки, данные, роли, интеграции и точки взаимодействия",

    timeline3Title: "Сборка и тестирование",
    timeline3Text:
      "Собираем бота, подключаем нужные элементы, тестируем механику и дорабатываем детали",

    timeline4Title: "Запуск и развитие",
    timeline4Text:
      "Передаём готовое решение и при необходимости расширяем его новыми функциями дальше",

    faqEyebrow: "FAQ",
    faqTitle: "Частые вопросы перед запуском",

    faq1Title: "Какие Telegram-боты вы разрабатываете",
    faq1Text:
      "От простых ботов под заявки и FAQ до более сложных решений с автоматизацией, интеграциями и AI-функциями",

    faq2Title: "Можно ли сделать бота под нестандартную задачу",
    faq2Text:
      "Да, если задачу можно разложить на сценарий, данные и логику, то под неё обычно можно собрать решение",

    faq3Title: "Можно ли подключить CRM и другие сервисы",
    faq3Text:
      "Да, бот может быть связан с CRM, таблицами, уведомлениями, API и другими системами",

    faq4Title: "Обязательно ли нужен AI",
    faq4Text:
      "Нет, AI нужен не всегда. Во многих задачах хватает хорошо спроектированной логики. AI добавляется тогда, когда он реально усиливает результат",

    faq5Title: "Подходит ли это малому бизнесу",
    faq5Text:
      "Да, если есть повторяющиеся процессы, входящие обращения, сервисные задачи или потребность в автоматизации",

    faq6Title: "Можно ли начать с простой версии",
    faq6Text:
      "Да, можно запустить базовую версию, а потом постепенно расширять её под новые задачи",

    finalEyebrow: "Финальный шаг",
    finalTitle:
      "Покажу, какого Telegram-бота можно собрать именно под вашу задачу",
    finalText:
      "Разберу ваш процесс, предложу логику решения и покажу, как можно реализовать Telegram-бота под ваш бизнес с нужным уровнем сложности",
    finalBtn1: "Обсудить проект",
    finalBtn2: "Посмотреть вариант решения",

    footerSubtitle:
      "Telegram-боты для бизнеса, автоматизации процессов и решений с AI-усилением",
    footerCopyright: "© 2026 b2bots. Все права защищены",
  },

  en: {
    navSolutions: "Solutions",
    navSystems: "Capabilities",
    navLaunch: "Launch",
    navFaq: "FAQ",
    navDiscuss: "Discuss project",

    heroTitle1: "Telegram bots for business",
    heroTitle2: "for tasks of almost any complexity",
    heroText:
      "I build Telegram bots for business: from simple lead handling scenarios to more advanced solutions with integrations, process automation and AI-powered features",
    heroBtn1: "Discuss project",

    heroCardLabel: "How it works",
    heroCardTitle: "The bot handles part of the process without constant team involvement",
    heroCardText:
      "A Telegram bot can receive requests, collect data, guide users through flows, automate internal actions and, when needed, be enhanced with AI",

    chatBot: "Bot",
    chatClient: "Client",
    chatManager: "Team",

    msg1: "Hello, I want to understand what kind of bot would fit my business",
    msg2: "Hi 👋 Sure. What task are you trying to solve right now",
    msg3: "I need to handle leads, answer common questions and distribute requests",
    msg4: "Got it. We can build a Telegram bot for that and add AI if needed",
    msg5: "Can it also be connected to CRM and notifications",
    msg6: "Yes, that can be included in the bot logic and structure",
    msg7: "Request is clear: Telegram bot for leads, FAQ, CRM and automation",

    solutionsEyebrow: "Core solutions",
    solutionsTitle:
      "The bot is built around a real business task, not from a template",
    solutionsText:
      "The logic, structure and features depend on what exactly the business needs: lead handling, automation, integrations, service flows or AI enhancement",

    card1Title: "Lead handling bots",
    card1Text:
      "Receive requests, collect data, qualify users and pass structured leads to the team",

    card2Title: "Automation bots",
    card2Text:
      "Scenarios that remove routine actions from the team and speed up operations",

    card3Title: "Integrated bots",
    card3Text:
      "Connect CRM, spreadsheets, notifications, APIs and external services",

    card4Title: "Service bots",
    card4Text:
      "FAQ, support flows, instructions, service navigation and customer interaction inside Telegram",

    card5Title: "Internal workflow bots",
    card5Text:
      "Solutions for staff, approvals, internal requests, stage control and operational scenarios",

    card6Title: "AI-enhanced bots",
    card6Text:
      "If needed, AI can be added for answers, routing, analysis and more flexible logic",

    systemsEyebrow: "What a Telegram bot can do",
    systemsTitle: "It does not just reply, it becomes a working business tool",
    systemsText:
      "A bot can be an entry point, part of a funnel, a service interface, an automation layer or a bridge between the client, the team and internal systems",

    step1Title: "Receives requests",
    step1Text:
      "The bot can become the first point of contact and collect incoming requests in a structured way",

    step2Title: "Guides through flows",
    step2Text:
      "It moves the client, employee or user through a clear scenario without chaos",

    step3Title: "Collects and transfers data",
    step3Text:
      "It forms a lead, brief, request or internal task and sends it further",

    step4Title: "Automates routine",
    step4Text:
      "Removes repetitive actions, reduces manual work and unloads the team",

    step5Title: "Integrates with systems",
    step5Text:
      "Works together with CRM, spreadsheets, notifications, APIs and other tools",

    step6Title: "Can be enhanced with AI",
    step6Text:
      "If the task needs flexibility, AI functions can be added as an extra layer",

    useEyebrow: "What this fits",
    useTitle: "A Telegram bot can be built for very different business processes",
    useText:
      "From external communication with clients to internal automation, service scenarios and extended logic solutions",

    use1Title: "Client-facing scenarios",
    use1Text:
      "Leads, consultations, FAQs, support, bookings, appointments and request routing",

    use2Title: "Operational processes",
    use2Text:
      "Automation of repetitive actions, notifications, distribution of requests and internal workflows",

    use3Title: "Integration solutions",
    use3Text:
      "Connecting Telegram bots with external services, CRM, spreadsheets, APIs and internal systems",

    use4Title: "Bots with AI features",
    use4Text:
      "If a smarter scenario is needed, AI can be added for answers, processing, analysis and dynamic logic",

    launchEyebrow: "Launch stages",
    launchTitle:
      "First we analyze the task, then design the logic and only then build the solution",
    launchText:
      "This approach helps create not just a nice bot, but a working tool that solves a real business task",

    timeline1Title: "Task analysis",
    timeline1Text:
      "We define the business goal, what needs automation and what format of Telegram bot fits best",

    timeline2Title: "Logic design",
    timeline2Text:
      "We design flows, structure, branches, data, roles, integrations and interaction points",

    timeline3Title: "Build and testing",
    timeline3Text:
      "We build the bot, connect required parts, test the mechanics and refine the details",

    timeline4Title: "Launch and growth",
    timeline4Text:
      "We hand over the solution and can extend it later with new functionality",

    faqEyebrow: "FAQ",
    faqTitle: "Common questions before launch",

    faq1Title: "What kinds of Telegram bots do you build",
    faq1Text:
      "From simple lead and FAQ bots to more advanced solutions with automation, integrations and AI functions",

    faq2Title: "Can you build a bot for a custom task",
    faq2Text:
      "Yes. If the task can be broken down into logic, data and flows, it can usually be implemented",

    faq3Title: "Can it be connected to CRM and other systems",
    faq3Text:
      "Yes, the bot can work with CRM, spreadsheets, notifications, APIs and other tools",

    faq4Title: "Is AI required",
    faq4Text:
      "No. AI is not always necessary. In many cases well-designed logic is enough. AI is added when it really improves the result",

    faq5Title: "Does it fit small businesses",
    faq5Text:
      "Yes, if there are repetitive processes, incoming requests, service tasks or a need for automation",

    faq6Title: "Can we start with a simple version",
    faq6Text:
      "Yes, a basic version can be launched first and expanded later",

    finalEyebrow: "Final step",
    finalTitle:
      "I will show what kind of Telegram bot can be built for your specific task",
    finalText:
      "I will review your process, suggest a solution logic and show how a Telegram bot can be implemented for your business with the right level of complexity",
    finalBtn1: "Discuss project",
    finalBtn2: "See solution option",

    footerSubtitle:
      "Telegram bots for business, process automation and AI-enhanced solutions",
    footerCopyright: "© 2026 b2bots. All rights reserved",
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

        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-brand-block">
              <a className="footer-brand" href="#top" aria-label="b2bots">
                <img src="/logobot.png" alt="b2bots" className="footer-logo" />
                <span className="footer-brand-text">b2bots</span>
              </a>

              <p className="footer-subtitle">{t.footerSubtitle}</p>
            </div>

            <div className="footer-line"></div>

            <div className="footer-bottom">
              <span>{t.footerCopyright}</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
