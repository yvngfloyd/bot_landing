import React, { useState } from 'react'

export default function App() {
  const [activeImage, setActiveImage] = useState(null)

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const heroPoints = [
    'Принимает заявки 24/7 без ожидания ответа',
    'Отвечает на частые вопросы и снижает нагрузку на администратора',
    'Отдельно обрабатывает срочные обращения',
    'Передаёт структурированные заявки в Telegram и Google Таблицу',
  ]

  const problems = [
    {
      title: 'Потеря обращений',
      text: 'Сообщения приходят в разном формате, теряются в переписке и не доходят до нормальной обработки',
    },
    {
      title: 'Ручные ответы',
      text: 'Администратор тратит время на одни и те же вопросы вместо работы с уже готовыми заявками',
    },
    {
      title: 'Нет приоритета',
      text: 'Срочные случаи смешиваются с обычными сообщениями, из-за чего важные обращения легко упустить',
    },
  ]

  const features = [
    {
      title: 'Запись на приём',
      text: 'Бот собирает контакт, тип обращения, услугу и удобное время для связи',
    },
    {
      title: 'FAQ и услуги',
      text: 'Типовые вопросы закрываются ещё до подключения администратора',
    },
    {
      title: 'Срочные обращения',
      text: 'Для срочных случаев есть отдельная ветка и приоритетная обработка',
    },
    {
      title: 'Карточка клиента',
      text: 'Администратор получает уже структурированное обращение, а не свободный текст',
    },
    {
      title: 'Учёт заявок',
      text: 'Данные автоматически сохраняются в Google Таблицу со статусами',
    },
    {
      title: 'Понятный путь клиента',
      text: 'Клиент быстро проходит сценарий и получает понятное подтверждение после отправки заявки',
    },
  ]

  const results = [
    {
      metric: '0-10 секунд',
      text: 'примерно столько может занимать первый ответ клиенту через сценарий бота',
    },
    {
      metric: '≈ 2 месяца',
      text: 'иллюстративная окупаемость стартового сценария для локальной клиники',
    },
    {
      metric: '1-2 записи',
      text: 'достаточно вернуть в месяц при консервативной модели, чтобы экономика стала положительной',
    },
  ]

  const fit = [
    'Стоматологии',
    'Косметология',
    'Медцентры',
    'Салоны с записью',
  ]

  const steps = [
    {
      number: '01',
      title: 'Разбираем задачу',
      text: 'Смотрим, как сейчас приходят обращения, где теряются заявки и какие вопросы повторяются чаще всего',
    },
    {
      number: '02',
      title: 'Собираем логику',
      text: 'Проектируем сценарий под вашу нишу: запись, FAQ, срочные обращения, передача данных и статусы',
    },
    {
      number: '03',
      title: 'Запускаем бота',
      text: 'Настраиваем тексты, таблицу учёта, уведомления и размещаем решение на хостинге',
    },
    {
      number: '04',
      title: 'Дорабатываем под работу',
      text: 'После запуска можно адаптировать ветки, FAQ, услуги и форматы заявок под реальную нагрузку',
    },
  ]

  const faq = [
    {
      q: 'Подойдёт ли это только стоматологиям',
      a: 'Нет. Стартовое позиционирование мы делаем под клиники и бизнес с записью, но сам сценарий легко адаптируется под косметологию, медуслуги и другие локальные услуги',
    },
    {
      q: 'Нужна ли CRM',
      a: 'Нет. На старте можно работать через Telegram и Google Таблицу. Если нужно, дальше логику можно усложнять',
    },
    {
      q: 'Что нужно от клиента',
      a: 'Обычно достаточно списка услуг, частых вопросов, логики записи и понимания, какие данные должны попадать администратору',
    },
    {
      q: 'Сколько стоит запуск',
      a: 'Стартовый сценарий можно считать от 15 000 ₽. Итоговая стоимость зависит от числа веток, текстов, FAQ и логики интеграций',
    },
  ]

  const openTelegram = () => {
    window.open('https://t.me/yevgeniyf1oyd', '_blank')
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/79081673109', '_blank')
  }

  return (
    <>
      <div className="page-shell">
        <header className="header">
          <div className="container header-inner">
            <button className="brand" onClick={() => scrollToId('hero')}>
              <span className="brand-mark">B</span>
              <span className="brand-text">Bot.setup</span>
            </button>

            <nav className="nav">
              <button onClick={() => scrollToId('product')}>Возможности</button>
              <button onClick={() => scrollToId('case')}>Кейс</button>
              <button onClick={() => scrollToId('process')}>Этапы</button>
              <button onClick={() => scrollToId('faq')}>FAQ</button>
            </nav>

            <button className="header-cta" onClick={() => scrollToId('contact')}>
              Получить схему
            </button>
          </div>
        </header>

        <main>
          <section className="hero" id="hero">
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Telegram-боты для клиник и бизнеса с записью</div>

                <h1>
                  Чат-боты для стоматологий и клиник, которые принимают заявки,
                  отвечают на частые вопросы и не дают терять обращения
                </h1>

                <p className="hero-text">
                  Готовый сценарий для первичных обращений в Telegram:
                  запись, FAQ, срочные случаи, передача заявки администратору
                  и фиксация в таблице без хаоса в переписке
                </p>

                <div className="hero-points">
                  {heroPoints.map((point) => (
                    <div className="hero-point" key={point}>
                      <span className="check">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-actions">
                  <button className="btn btn-primary" onClick={() => scrollToId('contact')}>
                    Получить схему бота
                  </button>
                  <button className="btn btn-secondary" onClick={() => scrollToId('case')}>
                    Посмотреть кейс
                  </button>
                </div>

                <div className="hero-note">
                  Стартовый сценарий можно адаптировать под вашу нишу и формат записи
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-backdrop"></div>

                <div className="phone-card">
                  <div className="phone-top">
                    <div className="phone-avatar"></div>
                    <div>
                      <div className="phone-title">Клиника</div>
                      <div className="phone-subtitle">Telegram-бот для первичных обращений</div>
                    </div>
                  </div>

                  <div className="chat-bubble chat-bubble-light">
                    Здравствуйте
                    <br />
                    Выберите нужный вариант обращения
                  </div>

                  <div className="chat-actions">
                    <div className="chat-action">Запись на приём</div>
                    <div className="chat-action">Услуги и цены</div>
                    <div className="chat-action">Срочный случай</div>
                  </div>

                  <div className="chat-bubble chat-bubble-blue">
                    Укажите удобное время и контакт для связи
                  </div>
                </div>

                <div className="floating-card floating-card-top">
                  <div className="floating-label">Новая заявка</div>
                  <div className="floating-text">Контакт, услуга, срочность, удобное время</div>
                </div>

                <div className="floating-card floating-card-middle">
                  <div className="floating-label">Администратору</div>
                  <div className="floating-text">Структурированная карточка вместо свободного текста</div>
                </div>

                <div className="floating-card floating-card-bottom">
                  <div className="floating-label">Google Таблица</div>
                  <div className="floating-text">Учёт заявок и статусов в одном месте</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-muted" id="product">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Что именно решает бот</div>
                <h2>Убирает хаос во входящих обращениях и делает первичную обработку понятной</h2>
                <p>
                  В презентации у тебя уже сильная логика боли: ручные однотипные ответы,
                  потеря заявок, смешивание срочных и обычных обращений. Именно это и надо продавать первым слоем
                </p>
              </div>

              <div className="problem-grid">
                {problems.map((item) => (
                  <div className="problem-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Что получает бизнес</div>
                <h2>Не просто бот, а готовый сценарий первичного контакта с клиентом</h2>
                <p>
                  Сайт должен продавать не разработку как процесс, а результат:
                  быстрый первый ответ, структурированную заявку, приоритизацию срочных случаев и единый учёт
                </p>
              </div>

              <div className="feature-grid">
                {features.map((item) => (
                  <article className="feature-card" key={item.title}>
                    <div className="feature-icon"></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-dark" id="case">
            <div className="container">
              <div className="section-head section-head-dark">
                <div className="section-kicker">Кейс</div>
                <h2>Telegram-бот для стоматологической клиники</h2>
                <p>
                  Основа кейса уже сильная: запись, FAQ, срочные обращения,
                  уведомление администратору и учёт заявок в Google Таблице
                </p>
              </div>

              <div className="case-layout">
                <div className="case-copy">
                  <div className="case-badges">
                    <span>Запись на приём</span>
                    <span>FAQ и услуги</span>
                    <span>Срочные обращения</span>
                    <span>Учёт заявок</span>
                  </div>

                  <p>
                    Бот собирает ключевые данные клиента, отделяет срочные обращения,
                    показывает услуги и цены, отправляет структурированную карточку администратору
                    и сохраняет всё в таблицу для дальнейшей обработки
                  </p>

                  <div className="case-stats">
                    <div className="case-stat">
                      <strong>5-30 минут → 0-10 секунд</strong>
                      <span>скорость первого ответа по модели из кейса</span>
                    </div>
                    <div className="case-stat">
                      <strong>≈ 2 месяца</strong>
                      <span>иллюстративная окупаемость стартового сценария</span>
                    </div>
                    <div className="case-stat">
                      <strong>15 000 ₽</strong>
                      <span>ориентир для разового запуска базовой версии</span>
                    </div>
                  </div>
                </div>

                <div className="case-gallery">
                  <button
                    className="case-shot"
                    onClick={() =>
                      setActiveImage({
                        src: '/case-interface.png',
                        title: 'Интерфейс бота',
                        text: 'Главное меню, сценарий записи, FAQ и быстрый первый контакт',
                      })
                    }
                  >
                    <img src="/case-interface.png" alt="Интерфейс Telegram-бота" />
                    <div className="case-shot-caption">
                      <strong>Интерфейс бота</strong>
                      <span>Главное меню и сценарий первого касания</span>
                    </div>
                  </button>

                  <button
                    className="case-shot"
                    onClick={() =>
                      setActiveImage({
                        src: '/case-table.png',
                        title: 'Google Таблица',
                        text: 'Фиксация заявок, статусы и удобный учёт для дальнейшей обработки',
                      })
                    }
                  >
                    <img src="/case-table.png" alt="Фиксация заявок в таблице" />
                    <div className="case-shot-caption">
                      <strong>Google Таблица</strong>
                      <span>Структурированный учёт заявок и статусов</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Для кого это подходит</div>
                <h2>Начинаем с клиник и бизнеса, где есть запись, FAQ и повторяющиеся обращения</h2>
                <p>
                  Ядро позиционирования лучше держать узким.
                  Самый сильный заход сейчас это стоматологии и клиники,
                  а ниже уже можно показывать, куда сценарий масштабируется
                </p>
              </div>

              <div className="fit-grid">
                {fit.map((item) => (
                  <div className="fit-card" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-muted" id="process">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Как проходит работа</div>
                <h2>Понятный запуск без сложного внедрения</h2>
                <p>
                  Для малого локального бизнеса важно видеть не только результат,
                  но и простой путь от задачи до запуска
                </p>
              </div>

              <div className="steps-grid">
                {steps.map((step) => (
                  <div className="step-card" key={step.number}>
                    <div className="step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Почему это выгодно</div>
                <h2>Решение окупается не только временем, но и возвратом потерянных обращений</h2>
                <p>
                  В кейсе уже есть хороший экономический аргумент:
                  даже при консервативной модели достаточно вернуть 1 дополнительную запись в месяц,
                  чтобы экономика стала положительной
                </p>
              </div>

              <div className="results-grid">
                {results.map((item) => (
                  <div className="result-card" key={item.metric}>
                    <strong>{item.metric}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="results-note">
                Расчёт иллюстративный. Финальная экономика зависит от среднего чека, потока обращений и ниши
              </div>
            </div>
          </section>

          <section className="section section-muted" id="faq">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">FAQ</div>
                <h2>Частые вопросы до первого контакта</h2>
              </div>

              <div className="faq-list">
                {faq.map((item) => (
                  <div className="faq-item" key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section contact-section" id="contact">
            <div className="container">
              <div className="contact-card">
                <div className="contact-copy">
                  <div className="section-kicker">Контакт</div>
                  <h2>Могу собрать схему бота под вашу задачу</h2>
                  <p>
                    Напишите нишу, как сейчас приходят обращения и что чаще всего спрашивают клиенты.
                    В ответ можно собрать логику сценария под ваш бизнес
                  </p>
                </div>

                <div className="contact-actions">
                  <button className="btn btn-primary" onClick={openTelegram}>
                    Написать в Telegram
                  </button>
                  <button className="btn btn-secondary" onClick={openWhatsApp}>
                    Написать в WhatsApp
                  </button>
                  <div className="contact-phone">+7 908 167-31-09</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {activeImage && (
        <div className="modal-overlay" onClick={() => setActiveImage(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveImage(null)}
              aria-label="Закрыть"
            >
              ×
            </button>

            <img className="modal-image" src={activeImage.src} alt={activeImage.title} />

            <div className="modal-copy">
              <h3>{activeImage.title}</h3>
              <p>{activeImage.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
