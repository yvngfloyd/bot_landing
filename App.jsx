import React from "react";

function App() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 88;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(elementPosition - headerOffset, 0);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <button type="button" className="brand" onClick={() => scrollToId("hero")}>
            <span className="brand-mark">B</span>
            <span className="brand-text">Bot.setup</span>
          </button>

          <nav className="nav">
            <button type="button" onClick={() => scrollToId("pain")}>Что решает бот</button>
            <button type="button" onClick={() => scrollToId("platforms")}>Каналы</button>
            <button type="button" onClick={() => scrollToId("case")}>Кейс</button>
            <button type="button" onClick={() => scrollToId("pricing")}>Тарифы</button>
            <button type="button" onClick={() => scrollToId("process")}>Этапы</button>
            <button type="button" onClick={() => scrollToId("faq")}>FAQ</button>
          </nav>

          <a className="header-cta" href="/contact.html">
            Выбрать связь
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                MAX, Telegram и WhatsApp для приёма заявок
              </div>

              <h1>Боты для записи клиентов и обработки обращений</h1>

              <p className="hero-text">
                Приём заявок, ответы на частые вопросы и передача
                структурированных обращений в работу
              </p>

              <div className="hero-subline">
                Подходит для: салонов, клиник, услуг и локального бизнеса
              </div>

              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact.html">
                  Выбрать связь
                </a>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => scrollToId("case")}
                >
                  Посмотреть кейс
                </button>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-backdrop"></div>

              <div className="phone-card">
                <div className="phone-top">
                  <div className="phone-avatar"></div>
                  <div>
                    <div className="phone-title">Бот для бизнеса</div>
                    <div className="phone-subtitle">Приём заявок и обработка обращений</div>
                  </div>
                </div>

                <div className="chat-bubble chat-bubble-light">
                  Здравствуйте
                  <br />
                  Выберите, с чем вам помочь
                </div>

                <div className="chat-actions">
                  <div className="chat-action">Оставить заявку</div>
                  <div className="chat-action">Услуги и вопросы</div>
                  <div className="chat-action">Срочное обращение</div>
                </div>

                <div className="chat-bubble chat-bubble-blue">
                  Укажите контакт и удобное время для связи
                </div>
              </div>

              <div className="floating-card floating-card-top">
                <div className="floating-label">Новая заявка</div>
                <div className="floating-text">Имя, контакт, услуга, срочность и удобное время</div>
              </div>

              <div className="floating-card floating-card-middle">
                <div className="floating-label">В работу</div>
                <div className="floating-text">Готовая структурированная заявка вместо хаотичной переписки</div>
              </div>

              <div className="floating-card floating-card-bottom">
                <div className="floating-label">Учёт обращений</div>
                <div className="floating-text">Заявки и статусы в одном месте для дальнейшей обработки</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="pain">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Что решает бот</div>
              <h2>Потери начинаются не после рекламы, а в момент первого сообщения клиента</h2>
              <p>
                Когда обращения приходят вручную, администратор отвечает не сразу,
                срочные случаи не выделяются, а часть заявок теряется в переписке.
                В итоге бизнес теряет время и клиентов уже на первом контакте
              </p>
            </div>

            <div className="problem-grid">
              <div className="problem-card">
                <h3>Заявки теряются</h3>
                <p>Часть обращений остаётся без ответа или приходит в неудобном для обработки виде</p>
              </div>

              <div className="problem-card">
                <h3>Администратор перегружен</h3>
                <p>Типовые вопросы по услугам, записи и стоимости каждый день забирают время у живой работы</p>
              </div>

              <div className="problem-card">
                <h3>Нет порядка в обращениях</h3>
                <p>Срочные случаи, новые заявки и обычные вопросы смешиваются между собой</p>
              </div>
            </div>

            <div className="feature-grid feature-grid-top">
              <article className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Приём заявок и запись</h3>
                <p>Бот собирает имя, контакт, услугу и удобное время для связи без хаоса в переписке</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Ответы на частые вопросы</h3>
                <p>Услуги, цены, подготовка к приёму и другие типовые вопросы закрываются автоматически</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Срочные обращения</h3>
                <p>Для срочных случаев можно сделать отдельную ветку и приоритетную обработку</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">📄</div>
                <h3>Структурированная заявка</h3>
                <p>Администратор получает уже понятную карточку обращения, а не разрозненные сообщения клиента</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Учёт обращений</h3>
                <p>Заявки можно сохранять в таблицу со статусами и дальнейшей обработкой</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Сценарий под ваш бизнес</h3>
                <p>Логика собирается под конкретную нишу, повторяющиеся вопросы и формат работы</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="platforms">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Каналы запуска</div>
              <h2>Не привязываю решение к одной платформе</h2>
              <p>
                Основные сценарии сейчас можно запускать в MAX и Telegram.
                Это позволяет выбрать привычный канал для клиента и не зависеть
                только от одной платформы. WhatsApp можно держать как дополнительный вариант
              </p>
            </div>

            <div className="platform-grid">
              <article className="platform-card">
                <div className="platform-icon platform-icon-max" aria-hidden="true">
                  <svg viewBox="0 0 64 64" className="platform-svg">
                    <rect x="10" y="10" width="44" height="44" rx="14" fill="currentColor" opacity="0.12" />
                    <path
                      d="M18 42V22h5.2l8.8 11.2L40.8 22H46v20h-5.8V31.6L32 42l-8.2-10.4V42H18z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3>MAX</h3>
                <p>Подходит бизнесу, которому важен российский контур и спокойная работа внутри локального рынка</p>
              </article>

              <article className="platform-card">
                <div className="platform-icon platform-icon-telegram" aria-hidden="true">
                  <svg viewBox="0 0 64 64" className="platform-svg">
                    <circle cx="32" cy="32" r="22" fill="currentColor" opacity="0.12" />
                    <path
                      d="M45.5 21.5 17.8 32.2c-1.9.7-1.8 3.4.2 4l7.1 2.2 2.8 8.5c.5 1.6 2.5 2.1 3.7.9l4-4.1 7.8 5.7c1.4 1 3.4.2 3.8-1.5l5.1-23.1c.4-2-1.5-3.8-3.4-3.1Zm-4.3 6.2-11 10.5-.4 5.1-1.8-5.6-5.7-1.8 18.9-7.3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3>Telegram</h3>
                <p>Удобен там, где аудитория уже привыкла писать, задавать вопросы и оставлять заявки</p>
              </article>

              <article className="platform-card">
                <div className="platform-icon platform-icon-whatsapp" aria-hidden="true">
                  <svg viewBox="0 0 64 64" className="platform-svg">
                    <circle cx="32" cy="32" r="18" fill="currentColor" />
                    <path
                      d="M25.5 47l2-5.6a15 15 0 1 1 5.4 1A15 15 0 0 1 28 41.4L25.5 47Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M38.3 35.6c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.3-2.2-2.7-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2.1-.4 0-.6-.1-.2-.8-1.8-1-2.5-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2 2.9 1.2 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.7-.4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3>WhatsApp</h3>
                <p>Можно держать как дополнительный канал под конкретную задачу и привычки клиентов</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="case">
          <div className="container">
            <div className="section-head section-head-dark">
              <div className="section-kicker">Кейс</div>
              <h2>Кейс бота для клиники с записью, FAQ и обработкой срочных обращений</h2>
              <p>
                Такой сценарий особенно хорошо подходит там, где поток обращений повторяется,
                а часть работы администратора можно снять автоматизацией первого контакта
              </p>
            </div>

            <div className="case-layout">
              <div className="case-copy">
                <div className="case-badges">
                  <span>Запись на приём</span>
                  <span>Ответы на частые вопросы</span>
                  <span>Срочные обращения</span>
                  <span>Учёт заявок</span>
                </div>

                <p>
                  Бот помогает быстро принять первичное обращение, показать основные варианты действий,
                  собрать данные клиента и передать их в работу в понятной форме
                </p>

                <div className="case-stats">
                  <div className="case-stat">
                    <strong>Быстрый первый контакт</strong>
                    <span>Клиент не ждёт, пока администратор дойдёт до переписки</span>
                  </div>

                  <div className="case-stat">
                    <strong>Понятный путь клиента</strong>
                    <span>От первого сообщения до заявки без лишнего хаоса</span>
                  </div>

                  <div className="case-stat">
                    <strong>Структурированные данные</strong>
                    <span>В работу передаётся уже собранная информация по обращению</span>
                  </div>
                </div>
              </div>

              <div className="case-gallery">
                <div className="case-shot">
                  <img src="/case-interface.png" alt="Интерфейс бота" />
                  <div className="case-shot-caption">
                    <strong>Интерфейс бота</strong>
                    <span>Понятный путь клиента от первого сообщения до заявки</span>
                  </div>
                </div>

                <div className="case-shot">
                  <img src="/case-table.png" alt="Учёт обращений" />
                  <div className="case-shot-caption">
                    <strong>Учёт обращений</strong>
                    <span>Структурированный список заявок и статусов для дальнейшей работы</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="pricing">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Тарифы</div>
              <h2>Можно начать с базового сценария и перейти на расширенный формат</h2>
              <p>
                Для части бизнеса достаточно базового запуска. Если нужен более глубокий сценарий,
                интеграции и доработка логики, подойдёт расширенный тариф
              </p>
            </div>

            <div className="pricing-grid">
              <div className="pricing-card pricing-card-basic">
                <div className="pricing-top-line pricing-top-line-green"></div>
                <div className="pricing-label">тариф</div>
                <h3 className="pricing-title pricing-title-green">БАЗОВЫЙ</h3>
                <p className="pricing-description">
                  Подходит бизнесу, которому нужен быстрый запуск без перегруза логикой
                </p>

                <div className="pricing-price">от 15 000 ₽</div>
                <div className="pricing-period">разовый запуск</div>

                <a className="pricing-button pricing-button-green" href="/contact.html">
                  Обсудить запуск
                </a>

                <div className="pricing-features-title">Что входит</div>
                <ul className="pricing-list">
                  <li>Базовый сценарий бота</li>
                  <li>Приём заявок и запись</li>
                  <li>Ответы на частые вопросы</li>
                  <li>Передача обращения в работу</li>
                  <li>Один канал запуска</li>
                  <li>Первичная настройка текстов</li>
                </ul>
              </div>

              <div className="pricing-card pricing-card-pro">
                <div className="pricing-top-line pricing-top-line-blue"></div>
                <div className="pricing-label">тариф</div>
                <h3 className="pricing-title pricing-title-blue">РАСШИРЕННЫЙ</h3>
                <p className="pricing-description">
                  Для бизнеса, которому нужен максимум сценариев, доработок и гибкости под процесс
                </p>

                <div className="pricing-price">от 35 000 ₽</div>
                <div className="pricing-period">разовый запуск</div>

                <a className="pricing-button pricing-button-blue" href="/contact.html">
                  Обсудить запуск
                </a>

                <div className="pricing-features-title">Что входит</div>
                <ul className="pricing-list">
                  <li>Всё из базового тарифа</li>
                  <li>Несколько веток сценария</li>
                  <li>Срочные обращения и маршрутизация</li>
                  <li>Учёт заявок и статусов</li>
                  <li>Несколько каналов запуска</li>
                  <li>Доработка логики под процесс</li>
                </ul>
              </div>
            </div>

            <div className="pricing-table-wrap">
              <h3 className="pricing-table-title">Сравнение тарифов</h3>

              <div className="pricing-table">
                <div className="pricing-table-row pricing-table-head">
                  <div className="pricing-table-cell pricing-table-feature">Функция</div>
                  <div className="pricing-table-cell">Базовый</div>
                  <div className="pricing-table-cell">Расширенный</div>
                </div>

                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-feature">Приём заявок и запись</div>
                  <div className="pricing-table-cell">Да</div>
                  <div className="pricing-table-cell">Да</div>
                </div>

                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-feature">Ответы на частые вопросы</div>
                  <div className="pricing-table-cell">Да</div>
                  <div className="pricing-table-cell">Да</div>
                </div>

                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-feature">Один канал запуска</div>
                  <div className="pricing-table-cell">Да</div>
                  <div className="pricing-table-cell">Да</div>
                </div>

                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-feature">Несколько каналов запуска</div>
                  <div className="pricing-table-cell">Нет</div>
                  <div className="pricing-table-cell">Да</div>
                </div>

                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-feature">Срочные обращения</div>
                  <div className="pricing-table-cell">Базово</div>
                  <div className="pricing-table-cell">Да</div>
                </div>

                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-feature">Учёт обращений и статусов</div>
                  <div className="pricing-table-cell">Опционально</div>
                  <div className="pricing-table-cell">Да</div>
                </div>

                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-feature">Глубокая доработка логики</div>
                  <div className="pricing-table-cell">Нет</div>
                  <div className="pricing-table-cell">Да</div>
                </div>

                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-feature">Подстройка под процесс бизнеса</div>
                  <div className="pricing-table-cell">Базово</div>
                  <div className="pricing-table-cell">Расширенно</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Этапы работы</div>
              <h2>Запуск без сложного внедрения и лишней перегрузки</h2>
              <p>
                Для локального бизнеса важна не только автоматизация, но и простой путь
                от идеи до рабочего решения
              </p>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <h3>Разбираю текущий сценарий</h3>
                <p>Смотрю, как сейчас приходят обращения, какие вопросы повторяются и где бизнес теряет заявки</p>
              </div>

              <div className="step-card">
                <div className="step-number">02</div>
                <h3>Собираю логику бота</h3>
                <p>Проектирую приём заявки, FAQ, ветки обращений, передачу данных в работу и нужный канал запуска</p>
              </div>

              <div className="step-card">
                <div className="step-number">03</div>
                <h3>Запускаю рабочую версию</h3>
                <p>Настраиваю тексты, меню, учёт, уведомления и готовый сценарий общения</p>
              </div>

              <div className="step-card">
                <div className="step-number">04</div>
                <h3>Дорабатываю после запуска</h3>
                <p>По реальным обращениям можно улучшать ветки, формулировки, FAQ и структуру заявок</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="faq">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">FAQ</div>
              <h2>Частые вопросы перед запуском</h2>
            </div>

            <div className="faq-list">
              <div className="faq-item">
                <h3>Это только для Telegram</h3>
                <p>Нет. Основные каналы запуска это MAX и Telegram. При необходимости можно рассмотреть и WhatsApp</p>
              </div>

              <div className="faq-item">
                <h3>Можно ли подключить WhatsApp</h3>
                <p>Да. Как дополнительный канал это можно использовать под конкретную задачу бизнеса</p>
              </div>

              <div className="faq-item">
                <h3>Нужна ли CRM</h3>
                <p>Нет. На старте можно работать через мессенджер и таблицу учёта, без тяжёлого внедрения</p>
              </div>

              <div className="faq-item">
                <h3>Подходит ли это только клиникам</h3>
                <p>Нет. Лучше всего решение работает там, где есть запись клиентов, повторяющиеся вопросы и поток обращений</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="contact-copy">
                <div className="section-kicker">Контакт</div>
                <h2>Могу собрать схему бота под ваш бизнес</h2>
                <p>
                  Напишите, как сейчас к вам приходят обращения, какие вопросы повторяются чаще всего
                  и где удобнее принимать заявки: в MAX, Telegram или в нескольких каналах
                </p>
              </div>

              <div className="contact-actions">
                <a
                  className="btn btn-primary"
                  href="https://t.me/yevgeniyf1oyd"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Telegram
                </a>

                <a
                  className="btn btn-secondary"
                  href="https://wa.me/79081673109"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в WhatsApp
                </a>

                <a className="contact-email" href="mailto:bots.setup@mail.ru">
                  bots.setup@mail.ru
                </a>

                <a className="contact-phone" href="tel:+79081673109">
                  +7 908 167-31-09
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
