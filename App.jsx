import React from "react";

function App() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <div className="logo">Bot.setup</div>

          <nav className="nav-links">
            <a href="#problems">Задачи</a>
            <a href="#solutions">Решения</a>
            <a href="#launch">Запуск</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            className="btn btn-small"
            href="https://t.me/tgbotcase"
            target="_blank"
            rel="noreferrer"
          >
            Обсудить задачу
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">MAX, Telegram и WhatsApp для приёма заявок</div>
              <h1>Боты для бизнеса, которые принимают обращения и доводят клиента до заявки.</h1>
              <p className="hero-text">
                Помогаю бизнесу автоматизировать первичную коммуникацию с клиентом:
                отвечать на частые вопросы, собирать контакты, квалифицировать обращения
                и передавать в работу уже понятные заявки
              </p>

              <div className="hero-actions">
                <a
                  className="btn"
                  href="https://t.me/tgbotcase"
                  target="_blank"
                  rel="noreferrer"
                >
                  Получить схему под бизнес
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://t.me/tgbotcase"
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

            <div className="hero-card">
              <div className="card-label">Сценарий первичной обработки.</div>
              <h3>Бот берёт на себя рутину</h3>
              <p>
                Принимает сообщение, уточняет запрос, помогает клиенту пройти до
                следующего шага и передаёт в работу уже структурированное обращение
              </p>

              <div className="flow">
                <div className="flow-item">Новое обращение</div>
                <div className="flow-item">Уточнение запроса</div>
                <div className="flow-item">Сбор контакта</div>
                <div className="flow-item">Передача в работу</div>
              </div>
            </div>
          </div>
        </section>

        <section id="problems" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Какие задачи закрывает бот</div>
              <h2>Бот полезен там, где у бизнеса много первичных обращений</h2>
              <p>
                Особенно хорошо работает в нишах, где клиенты задают одинаковые вопросы,
                записываются, бронируют, оставляют заявку или сначала пишут, а не звонят
              </p>
            </div>

            <div className="grid three">
              <article className="card">
                <h3>Запись и бронь.</h3>
                <p>
                  Салоны, студии, клиники, лофты, базы отдыха, офлайн-сервисы.
                </p>
              </article>

              <article className="card">
                <h3>Первичный бриф.</h3>
                <p>
                  Юристы, агентства, консалтинг, digital-студии, сервисные офисы.
                </p>
              </article>

              <article className="card">
                <h3>FAQ и фильтрация.</h3>
                <p>
                  Бизнесы с частыми вопросами до покупки или перед визитом.
                </p>
              </article>

              <article className="card">
                <h3>Работа с входящими</h3>
                <p>
                  Там, где клиенту проще написать в мессенджер, чем звонить
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="solutions" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Что делает бот?</div>
              <h2>Три основных процесса, которые бот добавляет в бизнес</h2>
              <p>
                Бот не заменяет команду, а снимает хаос на первом этапе общения с клиентом
                и делает входящий поток более управляемым
              </p>
            </div>

            <div className="steps">
              <article className="step-card">
                <div className="step-num">1</div>
                <h3>Приём и обработка обращений</h3>
                <p>
                  Бот встречает клиента, отвечает на частые вопросы, уточняет запрос и не
                  даёт терять входящие из-за долгого ответа или перегруженного администратора
                </p>
              </article>

              <article className="step-card">
                <div className="step-num">2</div>
                <h3>Доведение до заявки или записи</h3>
                <p>
                  Помогает пройти путь от первого сообщения до конкретного действия:
                  оставить заявку, записаться, запросить консультацию или забронировать слот
                </p>
              </article>

              <article className="step-card">
                <div className="step-num">3</div>
                <h3>Передача структурированного обращения.</h3>
                <p>
                  Собирает ключевые данные заранее и передаёт менеджеру или администратору
                  уже понятную заявку, а не хаотичную переписку
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Типы решений</div>
              <h2>Сценарий бота собирается под процесс конкретного бизнеса.</h2>
              <p>
                Логика адаптируется под нишу, тип обращения, каналы связи и этапы обработки заявки.
              </p>
            </div>

            <div className="grid two">
              <article className="card">
                <h3>Бот для записи и брони</h3>
                <p>
                  Подходит для бизнеса, где клиент выбирает услугу, дату, время, специалиста
                  или формат размещения
                </p>
              </article>

              <article className="card">
                <h3>Бот для обработки входящих.</h3>
                <p>
                  Принимает первичный запрос, отвечает на типовые вопросы и квалифицирует
                  обращение до подключения менеджера
                </p>
              </article>

              <article className="card">
                <h3>Бот для FAQ и сервиса.</h3>
                <p>
                  Закрывает повторяющиеся вопросы по услугам, стоимости, условиям, адресу,
                  маршруту и дальнейшим шагам
                </p>
              </article>

              <article className="card">
                <h3>Бот для сбора заявок и брифов.</h3>
                <p>
                  Помогает сервисным и B2B-бизнесам получать не пустое сообщение, а уже
                  оформленный запрос с нужными данными
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="launch" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Как проходит запуск.</div>
              <h2>Запуск строится по понятным этапам</h2>
              <p>
                Сначала разбираем бизнес-процесс, затем проектируем сценарий, подключаем
                нужные каналы и доводим решение до рабочего состояния
              </p>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-num">01</div>
                <div>
                  <h3>Разбираем задачу.</h3>
                  <p>
                    Смотрим, как сейчас обрабатываются входящие и где бот даст наибольшую пользу
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">02</div>
                <div>
                  <h3>Проектируем сценарий.</h3>
                  <p>
                    Продумываем логику диалога, этапы, вопросы, ветки и точки передачи заявки
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">03</div>
                <div>
                  <h3>Подключаем и тестируем.</h3>
                  <p>
                    Собираем решение, подключаем каналы, тестируем сценарии и корректируем детали
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">04</div>
                <div>
                  <h3>Запускаем в работу</h3>
                  <p>
                    Передаём готовое решение и при необходимости сопровождаем после запуска
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">FAQ.</div>
              <h2>Частые вопросы до старта</h2>
            </div>

            <div className="faq-list">
              <article className="faq-item">
                <h3>Сколько занимает запуск</h3>
                <p>
                  Зависит от сложности сценария. Базовую версию можно собрать быстрее,
                  сложные решения требуют больше этапов и тестов
                </p>
              </article>

              <article className="faq-item">
                <h3>Можно ли подключить CRM</h3>
                <p>
                  Да. Логика может быть связана с CRM, таблицами, внутренними процессами
                  и внешними сервисами
                </p>
              </article>

              <article className="faq-item">
                <h3>Можно ли поставить на наш сервер</h3>
                <p>
                  Да. По умолчанию я как раз предлагаю размещение на стороне клиента,
                  если это удобно бизнесу
                </p>
              </article>

              <article className="faq-item">
                <h3>Подходит ли это маленькому бизнесу.</h3>
                <p>
                  Да, если у бизнеса уже есть входящие обращения, типовые вопросы,
                  бронь, запись или заявки через переписку
                </p>
              </article>

              <article className="faq-item">
                <h3>Что входит в сопровождение.</h3>
                <p>
                  Зависит от тарифа. В расширенном формате можно включить первый месяц
                  сопровождения после запуска
                </p>
              </article>

              <article className="faq-item">
                <h3>Нужен ли сайт</h3>
                <p>
                  Не обязательно. Бот может быть самостоятельной точкой входа, а сайт
                  или лендинг только усиливают конверсию
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container final-box">
            <div>
              <div className="eyebrow">Финальный шаг</div>
              <h2>Покажу, как такой бот будет работать именно под ваш бизнес</h2>
              <p>
                Если хотите, разберу ваш процесс и покажу, какой сценарий бота можно
                собрать именно под вашу нишу, формат заявок и канал общения с клиентом
              </p>
            </div>

            <div className="final-actions">
              <a
                className="btn"
                href="https://t.me/tgbotcase"
                target="_blank"
                rel="noreferrer"
              >
                Обсудить задачу
              </a>
              <a
                className="btn btn-secondary"
                href="https://t.me/tgbotcase"
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
