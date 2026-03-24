import React, { useEffect, useState } from 'react'

export default function App() {
  const [activeImage, setActiveImage] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 88
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = Math.max(elementPosition - headerOffset, 0)

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setMobileMenuOpen(false)
  }

  const openTelegram = () => {
    window.open('https://t.me/yevgeniyf1oyd', '_blank', 'noopener,noreferrer')
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/79081673109', '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) {
        setMobileMenuOpen(false)
      }
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null)
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const heroPoints = [
    'Принимает обращения 24/7 и отвечает сразу',
    'Закрывает частые вопросы без участия администратора',
    'Отдельно обрабатывает срочные обращения',
    'Передаёт структурированные заявки в Telegram и Google Таблицу',
  ]

  const painPoints = [
    {
      title: 'Заявки теряются',
      text: 'Часть обращений остаётся без ответа, теряется в переписке или приходит в неудобном формате',
    },
    {
      title: 'Администратор перегружен',
      text: 'Одни и те же вопросы по услугам, ценам и записи забирают время у живой работы с клиентами',
    },
    {
      title: 'Нет порядка в обработке',
      text: 'Срочные случаи, первичные обращения и обычные вопросы смешиваются между собой',
    },
  ]

  const features = [
    {
      title: 'Запись на приём',
      text: 'Бот собирает имя, контакт, услугу и удобное время для связи без хаоса в переписке',
    },
    {
      title: 'Ответы на частые вопросы',
      text: 'Услуги, цены, подготовка к приёму и другие типовые вопросы закрываются автоматически',
    },
    {
      title: 'Срочные обращения',
      text: 'Для срочных случаев можно сделать отдельную ветку и приоритетную обработку',
    },
    {
      title: 'Карточка обращения',
      text: 'Администратор получает уже понятную заявку, а не разрозненные сообщения клиента',
    },
    {
      title: 'Учёт в таблице',
      text: 'Заявки сохраняются в Google Таблицу со статусами и дальнейшей обработкой',
    },
    {
      title: 'Логика под ваш бизнес',
      text: 'Сценарий адаптируется под конкретную нишу, услуги и реальные повторяющиеся вопросы',
    },
  ]

  const stats = [
    {
      value: '0-10 сек',
      text: 'примерный первый ответ клиенту через сценарий бота',
    },
    {
      value: '≈ 2 мес',
      text: 'иллюстративная окупаемость базового сценария по кейсу',
    },
    {
      value: '1-2 записи',
      text: 'может быть достаточно в месяц, чтобы решение уже окупалось',
    },
  ]

  const audience = [
    'Стоматологии',
    'Частные клиники',
    'Косметология',
    'Салоны с записью',
  ]

  const steps = [
    {
      number: '01',
      title: 'Разбираю ваш сценарий',
      text: 'Смотрю, как сейчас приходят обращения, какие вопросы повторяются и где именно теряются заявки',
    },
    {
      number: '02',
      title: 'Собираю логику бота',
      text: 'Проектирую запись, FAQ, ветки обращений, передачу данных администратору и учёт заявок',
    },
    {
      number: '03',
      title: 'Запускаю рабочую версию',
      text: 'Настраиваю тексты, меню, таблицу, уведомления и размещаю готовое решение',
    },
    {
      number: '04',
      title: 'Дорабатываю после запуска',
      text: 'По реальным обращениям можно улучшать ветки, формулировки, FAQ и структуру заявок',
    },
  ]

  const faq = [
    {
      q: 'Это подходит только стоматологиям',
      a: 'Нет. Основной заход у сайта через стоматологии и клиники, потому что под них уже есть сильный кейс. Но сам сценарий можно адаптировать и под косметологию, медуслуги и локальный бизнес с записью',
    },
    {
      q: 'Нужна ли CRM',
      a: 'Нет. На старте можно работать через Telegram и Google Таблицу. Для малого бизнеса этого часто достаточно',
    },
    {
      q: 'Что нужно от клиента',
      a: 'Обычно нужен список услуг, частые вопросы, понимание логики записи и того, какие данные должны попадать администратору',
    },
    {
      q: 'Сколько стоит запуск',
      a: 'Базовый сценарий можно рассматривать от 15 000 ₽. Итоговая стоимость зависит от объёма логики, числа веток и наполнения',
    },
  ]

  return (
    <>
      <div className="page-shell">
        <header className="header">
          <div className="container header-inner">
            <button
              type="button"
              className="brand"
              onClick={() => scrollToId('hero')}
              aria-label="Перейти к началу страницы"
            >
              <span className="brand-mark">B</span>
              <span className="brand-text">Bot.setup</span>
            </button>

            <nav className="nav" aria-label="Основная навигация">
              <button type="button" onClick={() => scrollToId('pain')}>Проблема</button>
              <button type="button" onClick={() => scrollToId('product')}>Решение</button>
              <button type="button" onClick={() => scrollToId('case')}>Кейс</button>
              <button type="button" onClick={() => scrollToId('process')}>Этапы</button>
              <button type="button" onClick={() => scrollToId('faq')}>FAQ</button>
            </nav>

            <div className="header-actions">
              <button
                type="button"
                className="header-cta desktop-only"
                onClick={() => scrollToId('contact')}
              >
                Получить схему
              </button>

              <button
                type="button"
                className="burger"
                aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>

          <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="container mobile-menu-inner">
              <button type="button" onClick={() => scrollToId('pain')}>Проблема</button>
              <button type="button" onClick={() => scrollToId('product')}>Решение</button>
              <button type="button" onClick={() => scrollToId('case')}>Кейс</button>
              <button type="button" onClick={() => scrollToId('process')}>Этапы</button>
              <button type="button" onClick={() => scrollToId('faq')}>FAQ</button>
              <button
                type="button"
                className="header-cta mobile-cta"
                onClick={() => scrollToId('contact')}
              >
                Получить схему
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="hero">
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Telegram-боты для стоматологий и бизнеса с записью</div>

                <h1>
                  Бот для клиники, который принимает обращения,
                  отвечает на частые вопросы и не даёт терять заявки
                </h1>

                <p className="hero-text">
                  Готовый сценарий для первичных обращений в Telegram:
                  запись, FAQ, срочные случаи, передача заявки администратору
                  и учёт в таблице без хаоса в переписке
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
                  <button type="button" className="btn btn-primary" onClick={() => scrollToId('contact')}>
                    Получить схему бота
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => scrollToId('case')}>
                    Посмотреть кейс
                  </button>
                </div>

                <div className="hero-note">
                  Подходит для стоматологий, клиник, косметологии и других услуг с записью
                </div>
              </div>

              <div className="hero-visual" aria-hidden="true">
                <div className="hero-backdrop"></div>

                <div className="phone-card">
                  <div className="phone-top">
                    <div className="phone-avatar"></div>
                    <div>
                      <div className="phone-title">Клиника</div>
                      <div className="phone-subtitle">Telegram-бот для обработки обращений</div>
                    </div>
                  </div>

                  <div className="chat-bubble chat-bubble-light">
                    Здравствуйте
                    <br />
                    Выберите, с чем вам помочь
                  </div>

                  <div className="chat-actions">
                    <div className="chat-action">Запись на приём</div>
                    <div className="chat-action">Услуги и цены</div>
                    <div className="chat-action">Срочный случай</div>
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
                  <div className="floating-label">Администратору</div>
                  <div className="floating-text">Готовая структурированная карточка клиента</div>
                </div>

                <div className="floating-card floating-card-bottom">
                  <div className="floating-label">Google Таблица</div>
                  <div className="floating-text">Учёт заявок и статусов в одном месте</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-muted" id="pain">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Проблема</div>
                <h2>Большая часть потерь происходит не из-за рекламы, а на этапе первого контакта</h2>
                <p>
                  Когда ответы идут вручную, заявки приходят в разном формате, а срочные обращения
                  ничем не выделяются, бизнес теряет время и часть клиентов ещё до записи
                </p>
              </div>

              <div className="problem-grid">
                {painPoints.map((item) => (
                  <div className="problem-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="product">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Решение</div>
                <h2>Это не просто бот, а готовый сценарий первичной обработки обращений</h2>
                <p>
                  Бот принимает заявку, закрывает часть типовых вопросов, выделяет срочные случаи
                  и передаёт администратору уже понятную карточку клиента для дальнейшей работы
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
                <h2>Кейс Telegram-бота для стоматологической клиники</h2>
                <p>
                  На основе этого сценария можно показывать не абстрактный продукт,
                  а понятное решение для реального локального бизнеса
                </p>
              </div>

              <div className="case-layout">
                <div className="case-copy">
                  <div className="case-badges">
                    <span>Запись на приём</span>
                    <span>FAQ</span>
                    <span>Срочные обращения</span>
                    <span>Учёт заявок</span>
                  </div>

                  <p>
                    Бот помогает клинике быстро принять первичное обращение, показать основные услуги,
                    выделить срочный случай, передать администратору уже структурированную заявку
                    и сохранить обращение в таблицу для дальнейшей обработки
                  </p>

                  <div className="case-stats">
                    <div className="case-stat">
                      <strong>5-30 минут → 0-10 секунд</strong>
                      <span>примерная разница в первом ответе по модели из кейса</span>
                    </div>
                    <div className="case-stat">
                      <strong>≈ 2 месяца</strong>
                      <span>иллюстративная окупаемость базового запуска</span>
                    </div>
                    <div className="case-stat">
                      <strong>15 000 ₽</strong>
                      <span>ориентир для стартового сценария без перегруза логикой</span>
                    </div>
                  </div>
                </div>

                <div className="case-gallery">
                  <button
                    type="button"
                    className="case-shot"
                    onClick={() =>
                      setActiveImage({
                        src: '/case-interface.png',
                        title: 'Интерфейс бота',
                        text: 'Главное меню, сценарий первого обращения, ветки записи и FAQ',
                      })
                    }
                  >
                    <img src="/case-interface.png" alt="Интерфейс Telegram-бота" />
                    <div className="case-shot-caption">
                      <strong>Интерфейс бота</strong>
                      <span>Понятный путь клиента от первого сообщения до заявки</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="case-shot"
                    onClick={() =>
                      setActiveImage({
                        src: '/case-table.png',
                        title: 'Google Таблица',
                        text: 'Фиксация заявок, статусов и дальнейшей обработки в одном месте',
                      })
                    }
                  >
                    <img src="/case-table.png" alt="Таблица учёта заявок" />
                    <div className="case-shot-caption">
                      <strong>Google Таблица</strong>
                      <span>Учёт обращений и статусов для администратора</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Для кого</div>
                <h2>Лучше всего решение работает там, где есть запись и повторяющиеся обращения</h2>
                <p>
                  Основная специализация на старте это стоматологии и частные клиники.
                  Дальше тот же подход масштабируется на бизнес, где нужно быстро принимать заявки
                  и разгружать администратора
                </p>
              </div>

              <div className="fit-grid">
                {audience.map((item) => (
                  <div className="fit-card" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-muted">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Почему это окупается</div>
                <h2>Бот экономит время и помогает не терять обращения на самом первом этапе</h2>
                <p>
                  Даже базовый сценарий может давать экономический эффект за счёт более быстрого первого ответа,
                  структуры заявок и возврата части клиентов, которые раньше просто терялись
                </p>
              </div>

              <div className="results-grid">
                {stats.map((item) => (
                  <div className="result-card" key={item.value}>
                    <strong>{item.value}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="results-note">
                Экономика зависит от среднего чека, количества обращений и того, как сейчас устроена обработка заявок
              </div>
            </div>
          </section>

          <section className="section" id="process">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Этапы работы</div>
                <h2>Запуск без сложного внедрения и долгой подготовки</h2>
                <p>
                  Для локального бизнеса важна не только автоматизация, но и простой путь от идеи до рабочего решения
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

          <section className="section section-muted" id="faq">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">FAQ</div>
                <h2>Частые вопросы перед запуском</h2>
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
                  <h2>Могу собрать схему бота под вашу клинику или услугу</h2>
                  <p>
                    Напишите, как сейчас к вам приходят обращения, что чаще всего спрашивают клиенты
                    и как устроена запись. На основе этого можно собрать логику сценария под ваш бизнес
                  </p>
                </div>

                <div className="contact-actions">
                  <button type="button" className="btn btn-primary" onClick={openTelegram}>
                    Написать в Telegram
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={openWhatsApp}>
                    Написать в WhatsApp
                  </button>
                  <a className="contact-phone" href="tel:+79081673109">
                    +7 908 167-31-09
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {activeImage && (
        <div
          className="modal-overlay"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
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
