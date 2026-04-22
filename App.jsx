function App() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">B</span>
            <span>Bot.setup</span>
          </a>

          <nav className="header-nav">
            <a href="#tasks">Задачи</a>
            <a href="#solutions">Решения</a>
            <a href="#steps">Запуск</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="header-cta" href="/contact.html">
            Обсудить задачу
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">MAX, Telegram и WhatsApp для приёма заявок</div>

              <h1>Боты для бизнеса, которые принимают обращения и доводят клиента до заявки.</h1>

              <p className="hero-text">
                Помогаю бизнесу автоматизировать первичную коммуникацию с клиентом: отвечать на частые
                вопросы, собирать контакты, квалифицировать обращения и передавать в работу уже понятные
                заявки.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact.html">
                  Получить схему под бизнес
                </a>

                <a
                  className="btn btn-secondary"
                  href="https://t.me/tgbotsetup"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Telegram
                </a>
              </div>

              <div className="hero-points">
                <span>Приём обращений.</span>
                <span>Ответы на частые вопросы.</span>
                <span>Запись, бронь и заявки.</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <div className="panel-badge">Сценарий первичной обработки.</div>
                <h3>Бот берёт на себя рутину.</h3>
                <p>
                  Принимает сообщение, уточняет запрос, помогает клиенту пройти до следующего шага и
                  передаёт в работу уже структурированное обращение.
                </p>

                <div className="panel-flow">
                  <div className="flow-item">Новое обращение.</div>
                  <div className="flow-item">Уточнение запроса.</div>
                  <div className="flow-item">Сбор контакта.</div>
                  <div className="flow-item">Передача в работу.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="tasks">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Какие задачи закрывает бот.</div>
              <h2>Полезен там, где у бизнеса много первичных обращений.</h2>
              <p>
                Особенно хорошо работает в нишах, где клиенты задают одинаковые вопросы, записываются,
                бронируют, оставляют заявку или сначала пишут, а не звонят.
              </p>
            </div>

            <div className="cards-grid cards-grid-4">
              <article className="info-card">
                <h3>Запись и бронь.</h3>
                <p>Салоны, студии, клиники, базы отдыха, лофты и офлайн-сервисы.</p>
              </article>

              <article className="info-card">
                <h3>Первичный бриф.</h3>
                <p>Юристы, агентства, консалтинг, digital-студии и сервисные офисы.</p>
              </article>

              <article className="info-card">
                <h3>FAQ и фильтрация.</h3>
                <p>Бизнесы с повторяющимися вопросами до покупки или перед визитом.</p>
              </article>

              <article className="info-card">
                <h3>Работа с входящими.</h3>
                <p>Там, где клиенту удобнее написать в мессенджер, чем звонить.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="functions">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Что делает бот.</div>
              <h2>Три основных процесса, которые бот добавляет в бизнес.</h2>
              <p>
                Бот не заменяет команду, а снимает хаос на первом этапе общения с клиентом и делает входящий
                поток более управляемым.
              </p>
            </div>

            <div className="cards-grid cards-grid-3">
              <article className="feature-card">
                <div className="feature-icon">1</div>
                <h3>Приём и обработка обращений.</h3>
                <p>
                  Бот встречает клиента, отвечает на частые вопросы, уточняет запрос и не даёт терять
                  входящие из-за долгого ответа или перегруженного администратора.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">2</div>
                <h3>Доведение до заявки или записи.</h3>
                <p>
                  Помогает пройти путь от первого сообщения до конкретного действия: оставить заявку,
                  записаться, запросить консультацию или забронировать слот.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">3</div>
                <h3>Передача структурированного обращения.</h3>
                <p>
                  Собирает ключевые данные заранее и передаёт менеджеру или администратору уже понятную
                  заявку, а не хаотичную переписку.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="solutions">
          <div className="container">
            <div className="section-head section-head-dark">
              <div className="section-kicker section-kicker-dark">Типы решений.</div>
              <h2>Сценарий бота собирается под процесс конкретного бизнеса.</h2>
              <p>
                Логика адаптируется под нишу, тип обращения, каналы связи и этапы обработки заявки.
              </p>
            </div>

            <div className="cards-grid cards-grid-2">
              <article className="dark-card">
                <h3>Бот для записи и брони.</h3>
                <p>
                  Подходит для бизнеса, где клиент выбирает услугу, дату, время, специалиста или формат
                  размещения.
                </p>
              </article>

              <article className="dark-card">
                <h3>Бот для обработки входящих.</h3>
                <p>
                  Принимает первичный запрос, отвечает на типовые вопросы и квалифицирует обращение до
                  подключения менеджера.
                </p>
              </article>

              <article className="dark-card">
                <h3>Бот для FAQ и сервиса.</h3>
                <p>
                  Закрывает повторяющиеся вопросы по услугам, стоимости, условиям, адресу, маршруту и
                  дальнейшим шагам.
                </p>
              </article>

              <article className="dark-card">
                <h3>Бот для сбора заявок и брифов.</h3>
                <p>
                  Помогает сервисным и B2B-бизнесам получать не пустое сообщение, а уже оформленный запрос
                  с нужными данными.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="steps">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Как проходит запуск.</div>
              <h2>Запуск строится по понятным этапам.</h2>
              <p>
                Сначала разбираем бизнес-процесс, затем проектируем сценарий, подключаем нужные каналы и
                доводим решение до рабочего состояния.
              </p>
            </div>

            <div className="steps-grid">
              <article className="step-card">
                <div className="step-number">01</div>
                <h3>Разбираем задачу.</h3>
                <p>Смотрим, как сейчас обрабатываются входящие и где бот даст наибольшую пользу.</p>
              </article>

              <article className="step-card">
                <div className="step-number">02</div>
                <h3>Проектируем сценарий.</h3>
                <p>Продумываем логику диалога, этапы, вопросы, ветки и точки передачи заявки.</p>
              </article>

              <article className="step-card">
                <div className="step-number">03</div>
                <h3>Подключаем и тестируем.</h3>
                <p>Собираем решение, подключаем каналы, тестируем сценарии и корректируем детали.</p>
              </article>

              <article className="step-card">
                <div className="step-number">04</div>
                <h3>Запускаем в работу.</h3>
                <p>Передаём готовое решение и при необходимости сопровождаем после запуска.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="pricing">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Тарифы.</div>
              <h2>Два формата запуска под разные задачи.</h2>
              <p>
                По умолчанию бот размещается на стороне клиента, чтобы у бизнеса сразу были свои доступы,
                свой хостинг и полный контроль над проектом.
              </p>
            </div>

            <div className="pricing-grid">
              <article className="price-card">
                <div className="price-label">Базовый.</div>
                <div className="price-value">от 20 000 до 25 000 ₽.</div>
                <p className="price-text">
                  Подходит, если нужен основной рабочий сценарий: приём обращений, запись, выбор услуги,
                  FAQ и передача заявки в работу.
                </p>

                <ul className="price-list">
                  <li>Интеграция логики под бизнес.</li>
                  <li>Запись, бронь или приём заявки.</li>
                  <li>Базовые ответы на частые вопросы.</li>
                  <li>Сбор контакта и структурированное обращение.</li>
                  <li>Размещение по умолчанию на стороне клиента.</li>
                </ul>
              </article>

              <article className="price-card price-card-accent">
                <div className="price-label">ПРО.</div>
                <div className="price-value">от 30 000 до 35 000 ₽.</div>
                <p className="price-text">
                  Подходит, если нужна более гибкая логика: дополнительные ветки, подтверждения, маршруты,
                  несколько сценариев и сопровождение после запуска.
                </p>

                <ul className="price-list">
                  <li>Всё из базового.</li>
                  <li>Расширенная логика и дополнительные ветки.</li>
                  <li>Сценарии подтверждения, переноса, новых гостей.</li>
                  <li>Более глубокая настройка под процесс бизнеса.</li>
                  <li>Первый месяц сопровождения после запуска.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">FAQ.</div>
              <h2>Частые вопросы до старта.</h2>
            </div>

            <div className="faq-grid">
              <article className="faq-card">
                <h3>Сколько занимает запуск.</h3>
                <p>Зависит от сложности сценария. Базовую версию можно собрать быстрее, сложные решения требуют больше этапов и тестов.</p>
              </article>

              <article className="faq-card">
                <h3>Можно ли подключить CRM.</h3>
                <p>Да. Логика может быть связана с CRM, таблицами, внутренними процессами и внешними сервисами.</p>
              </article>

              <article className="faq-card">
                <h3>Можно ли поставить на наш сервер.</h3>
                <p>Да. По умолчанию я как раз предлагаю размещение на стороне клиента, если это удобно бизнесу.</p>
              </article>

              <article className="faq-card">
                <h3>Подходит ли это маленькому бизнесу.</h3>
                <p>Да, если у бизнеса уже есть входящие обращения, типовые вопросы, бронь, запись или заявки через переписку.</p>
              </article>

              <article className="faq-card">
                <h3>Что входит в сопровождение.</h3>
                <p>Зависит от тарифа. В расширенном формате можно включить первый месяц сопровождения после запуска.</p>
              </article>

              <article className="faq-card">
                <h3>Нужен ли сайт.</h3>
                <p>Не обязательно. Бот может быть самостоятельной точкой входа, а сайт или лендинг только усиливают конверсию.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container">
            <div className="cta-box">
              <div className="cta-copy">
                <div className="section-kicker">Финальный шаг.</div>
                <h2>Покажу, как такой бот будет работать именно под ваш бизнес.</h2>
                <p>
                  Если хотите, разберу ваш процесс и покажу, какой сценарий бота можно собрать именно под
                  вашу нишу, формат заявок и канал общения с клиентом.
                </p>
              </div>

              <div className="cta-actions">
                <a className="btn btn-primary" href="/contact.html">
                  Обсудить задачу
                </a>

                <a
                  className="btn btn-secondary"
                  href="https://t.me/tgbotsetup"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Telegram
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
