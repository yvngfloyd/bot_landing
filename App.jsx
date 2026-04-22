import React from "react";

function App() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="b2bots">
            <img src="/logobot.png" alt="b2bots" className="brand-logo" />
            <div className="brand-text">b2bots</div>
          </a>

          <nav className="nav-links">
            <a href="#solutions">Решения</a>
            <a href="#systems">Возможности</a>
            <a href="#launch">Запуск</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            className="btn btn-small"
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
          >
            Обсудить задачу
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">Telegram, MAX и WhatsApp</div>

              <h1 className="hero-title">
                Боты для бизнеса,
                <br />
                которые принимают обращения
                <br />
                и доводят клиента до заявки
              </h1>

              <p className="hero-text">
                Разрабатываю ботов для бизнеса, которые отвечают на частые вопросы,
                собирают контакты, уточняют запрос и передают в работу уже
                структурированные обращения
              </p>

              <div className="hero-actions">
                <a
                  className="btn"
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Получить схему под бизнес
                </a>

                <a
                  className="btn btn-secondary"
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Telegram
                </a>
              </div>

              <div className="hero-points">
                <span>Приём входящих</span>
                <span>FAQ и фильтрация</span>
                <span>Запись и бронь</span>
                <span>Сбор заявок</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-label">Сценарий обработки обращения</div>
              <h3>Бот берёт на себя первый этап коммуникации</h3>
              <p>
                Клиент пишет в мессенджер, бот отвечает, уточняет задачу, собирает
                контакт и передаёт менеджеру уже понятный запрос вместо хаотичной
                переписки
              </p>

              <div className="flow">
                <div className="flow-item">Новое обращение</div>
                <div className="flow-item">Уточнение потребности</div>
                <div className="flow-item">Сбор контакта и данных</div>
                <div className="flow-item">Передача заявки в работу</div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Основные решения</div>
              <h2>Бот собирается под конкретный процесс, а не просто ради автоматизации</h2>
              <p>
                Логика зависит от ниши, канала общения, типа заявки и того, какой
                путь клиент должен пройти до записи, консультации или обращения
              </p>
            </div>

            <div className="grid three">
              <article className="card">
                <h3>Бот для записи</h3>
                <p>
                  Подходит для бизнеса, где клиенту нужно выбрать услугу, дату,
                  специалиста или удобный слот
                </p>
              </article>

              <article className="card">
                <h3>Бот для входящих</h3>
                <p>
                  Принимает первичный запрос, отвечает на типовые вопросы и не даёт
                  терять обращения в нерабочее время
                </p>
              </article>

              <article className="card">
                <h3>Бот для FAQ</h3>
                <p>
                  Закрывает повторяющиеся вопросы по услугам, стоимости, условиям,
                  локации и дальнейшим шагам
                </p>
              </article>

              <article className="card">
                <h3>Бот для заявок</h3>
                <p>
                  Собирает контакт, бриф и ключевые детали заранее, чтобы менеджер
                  получал уже понятное обращение
                </p>
              </article>

              <article className="card">
                <h3>Бот для брони</h3>
                <p>
                  Подходит для студий, площадок, отелей, услуг и других форматов,
                  где важна быстрая фиксация интереса
                </p>
              </article>

              <article className="card">
                <h3>Бот под процесс</h3>
                <p>
                  Можно собрать сценарий под внутреннюю механику бизнеса, CRM,
                  таблицы, заявки и внешние сервисы
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="systems" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Что бот делает внутри процесса</div>
              <h2>Не просто отвечает, а двигает клиента по понятной логике</h2>
              <p>
                Важен не сам факт наличия бота, а то, как именно он встроен в
                обработку обращений и на каком этапе помогает команде
              </p>
            </div>

            <div className="steps">
              <article className="step-card">
                <div className="step-num">01</div>
                <h3>Встречает клиента</h3>
                <p>
                  Бот отвечает сразу после входящего сообщения и не оставляет
                  человека без реакции в первые минуты
                </p>
              </article>

              <article className="step-card">
                <div className="step-num">02</div>
                <h3>Уточняет запрос</h3>
                <p>
                  Помогает понять, что именно нужно клиенту, и ведёт его по
                  заранее продуманной логике
                </p>
              </article>

              <article className="step-card">
                <div className="step-num">03</div>
                <h3>Собирает данные</h3>
                <p>
                  Имя, контакт, формат услуги, удобное время, детали заявки и
                  другая информация, нужная бизнесу
                </p>
              </article>

              <article className="step-card">
                <div className="step-num">04</div>
                <h3>Отвечает на FAQ</h3>
                <p>
                  Снимает часть однотипных вопросов и сокращает нагрузку на
                  администратора или менеджера
                </p>
              </article>

              <article className="step-card">
                <div className="step-num">05</div>
                <h3>Доводит до действия</h3>
                <p>
                  Запись, бронь, заявка, запрос консультации или другая целевая
                  точка в воронке
                </p>
              </article>

              <article className="step-card">
                <div className="step-num">06</div>
                <h3>Передаёт в работу</h3>
                <p>
                  Менеджер получает уже структурированное обращение и быстрее
                  включается в следующий этап коммуникации
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Где это особенно полезно</div>
              <h2>Лучше всего бот работает там, где люди сначала пишут, а не звонят</h2>
              <p>
                Особенно это актуально для бизнеса с частыми вопросами, заявками,
                записями, бронью и большим количеством однотипных входящих
              </p>
            </div>

            <div className="grid two">
              <article className="card">
                <h3>Услуги и запись</h3>
                <p>
                  Салоны, клиники, студии, частные практики, сервисы и другие
                  ниши, где нужно быстро принять обращение и провести человека до записи
                </p>
              </article>

              <article className="card">
                <h3>Локальный офлайн-бизнес</h3>
                <p>
                  Там, где сообщения приходят вечером, ночью или в часы пик, когда
                  сотрудники заняты и не успевают быстро ответить
                </p>
              </article>

              <article className="card">
                <h3>B2B и сервисные компании</h3>
                <p>
                  Когда важно не просто получить сообщение, а собрать первичный
                  бриф и передать менеджеру более полный запрос
                </p>
              </article>

              <article className="card">
                <h3>Проекты с мессенджерами как точкой входа</h3>
                <p>
                  Если трафик уже идёт в Telegram, MAX или WhatsApp, бот помогает
                  сделать этот канал более управляемым
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="launch" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Этапы запуска</div>
              <h2>Сначала разбираем процесс, потом собираем сценарий и только после этого запускаем</h2>
              <p>
                Такой подход позволяет делать не просто красивый интерфейс, а рабочий
                инструмент, который встроен в реальную коммуникацию бизнеса
              </p>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-num">01</div>
                <div>
                  <h3>Разбор бизнес-задачи</h3>
                  <p>
                    Смотрим, как сейчас обрабатываются входящие, где теряются люди
                    и какой сценарий даст наибольшую пользу
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">02</div>
                <div>
                  <h3>Проектирование сценария</h3>
                  <p>
                    Продумываем структуру диалога, ветки, вопросы, точки принятия
                    решения и логику передачи обращения
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">03</div>
                <div>
                  <h3>Сборка и тестирование</h3>
                  <p>
                    Подключаем каналы, собираем механику, проверяем путь клиента и
                    дорабатываем детали до рабочего состояния
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-num">04</div>
                <div>
                  <h3>Запуск в работу</h3>
                  <p>
                    Передаём готовое решение и при необходимости сопровождаем после
                    старта, чтобы всё работало стабильно
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">FAQ</div>
              <h2>Частые вопросы перед запуском</h2>
            </div>

            <div className="faq-list">
              <article className="faq-item">
                <h3>Сколько занимает запуск</h3>
                <p>
                  Зависит от сложности логики, количества веток и подключений,
                  но простые решения запускаются заметно быстрее
                </p>
              </article>

              <article className="faq-item">
                <h3>Можно ли подключить CRM</h3>
                <p>
                  Да, сценарий можно связать с CRM, таблицами, уведомлениями и
                  внутренними бизнес-процессами
                </p>
              </article>

              <article className="faq-item">
                <h3>Можно ли использовать только Telegram</h3>
                <p>
                  Да, можно собрать решение под один канал или сразу под несколько
                  точек входа
                </p>
              </article>

              <article className="faq-item">
                <h3>Подходит ли это малому бизнесу</h3>
                <p>
                  Да, если уже есть входящие обращения, запись, бронь или частые
                  вопросы в переписке
                </p>
              </article>

              <article className="faq-item">
                <h3>Что получает менеджер на выходе</h3>
                <p>
                  Не просто переписку, а уже собранный запрос с базовой структурой,
                  чтобы быстрее продолжить коммуникацию
                </p>
              </article>

              <article className="faq-item">
                <h3>Нужен ли для этого сайт</h3>
                <p>
                  Нет, бот может быть самостоятельной точкой входа и принимать
                  обращения напрямую из мессенджера
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container final-box">
            <div>
              <div className="eyebrow">Финальный шаг</div>
              <h2>Покажу, какой сценарий бота можно собрать именно под ваш бизнес</h2>
              <p>
                Разберу ваш процесс, скажу где бот даст реальную пользу и предложу
                понятную схему под ваш формат заявок, общения и обработки входящих
              </p>
            </div>

            <div className="final-actions">
              <a
                className="btn"
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
              >
                Обсудить задачу
              </a>

              <a
                className="btn btn-secondary"
                href="https://t.me/"
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
