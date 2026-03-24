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
    'Принимают обращения 24/7 и отвечают сразу',
    'Закрывают частые вопросы без участия администратора',
    'Выделяют срочные обращения в отдельный сценарий',
    'Передают структурированные заявки в работу',
  ]

  const painPoints = [
    {
      title: 'Заявки теряются',
      text: 'Часть обращений остаётся без ответа, теряется в переписке или приходит в неудобном формате',
    },
    {
      title: 'Администратор перегружен',
      text: 'Одни и те же вопросы по услугам, записи и стоимости каждый день забирают время у живой работы с клиентами',
    },
    {
      title: 'Нет порядка в обработке',
      text: 'Срочные случаи, новые заявки и обычные вопросы смешиваются между собой и усложняют работу',
    },
  ]

  const features = [
    {
      title: 'Приём заявок и запись',
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
      title: 'Структурированная заявка',
      text: 'Администратор получает уже понятную карточку обращения, а не разрозненные сообщения клиента',
    },
    {
      title: 'Учёт обращений',
      text: 'Заявки можно сохранять в таблицу со статусами и дальнейшей обработкой',
    },
    {
      title: 'Сценарий под ваш бизнес',
      text: 'Логика собирается под конкретную нишу, повторяющиеся вопросы и формат работы',
    },
  ]

  const platforms = [
    {
      title: 'MAX',
      text: 'Подходит бизнесу, которому важен российский контур и спокойная работа внутри локального рынка',
    },
    {
      title: 'Telegram',
      text: 'Удобен там, где аудитория уже привыкла писать, задавать вопросы и оставлять заявки в привычном мессенджере',
    },
    {
      title: 'WhatsApp',
      text: 'Можно держать как дополнительный канал под конкретную задачу и привычки клиентов',
    },
  ]

  const stats = [
    {
      value: 'Быстрый первый ответ',
      text: 'Клиент не ждёт, пока администратор освободится и дойдёт до переписки',
    },
    {
      value: 'Меньше ручной рутины',
      text: 'Часть типовых вопросов и первичная маршрутизация закрываются автоматически',
    },
    {
      value: 'Больше понятных заявок',
      text: 'В работу попадает уже структурированное обращение, а не хаотичная переписка',
    },
  ]

  const audience = [
    'Стоматологии',
    'Частные клиники',
    'Косметология',
    'Услуги с записью',
  ]

  const steps = [
    {
      number: '01',
      title: 'Разбираю текущий сценарий',
      text: 'Смотрю, как сейчас приходят обращения, какие вопросы повторяются и где именно бизнес теряет заявки',
    },
    {
      number: '02',
      title: 'Собираю логику бота',
      text: 'Проектирую приём заявки, FAQ, ветки обращений, передачу данных в работу и нужный канал запуска',
    },
    {
      number: '03',
      title: 'Запускаю рабочую версию',
      text: 'Настраиваю тексты, меню, учёт, уведомления и готовый сценарий общения',
    },
    {
      number: '04',
      title: 'Дорабатываю после запуска',
      text: 'По реальным обращениям можно улучшать ветки, формулировки, FAQ и структуру заявок',
    },
  ]

  const faq = [
    {
      q: 'Это только для Telegram',
      a: 'Нет. Основные каналы запуска это MAX и Telegram. Решение подбирается под задачу бизнеса и под то, где клиентам привычнее писать',
    },
    {
      q: 'Можно ли подключить WhatsApp',
      a: 'Да. Как дополнительный канал это можно рассматривать под конкретную задачу бизнеса',
    },
    {
      q: 'Нужна ли CRM',
      a: 'Нет. На старте можно работать через мессенджер и таблицу учёта, без тяжёлого внедрения',
    },
    {
      q: 'Подходит ли это только клиникам',
      a: 'Нет. Лучше всего решение работает там, где есть запись клиентов, повторяющиеся вопросы и поток первичных обращений',
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
              <button type="button" onClick={() => scrollToId('platforms')}>Каналы</button>
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
              <button type="button" onClick={() => scrollToId('platforms')}>Каналы</button>
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
                <div className="eyebrow">
                  Боты для записи клиентов и обработки обращений в MAX и Telegram
                </div>

                <h1>
                  Боты для записи клиентов и обработки обращений
                </h1>

                <p className="hero-text">
                  Готовый сценарий для первичных обращений: запись, FAQ, срочные случаи,
                  передача заявки администратору и учёт обращений без хаоса в переписке
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
                  Основной запуск через MAX и Telegram, WhatsApp можно подключить под задачу
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
                <div className="section-kicker">Проблема</div>
                <h2>Потери начинаются не после рекламы, а в момент первого сообщения клиента</h2>
                <p>
                  Когда обращения приходят вручную, администратор отвечает не сразу, срочные случаи
                  не выделяются, а часть заявок теряется в переписке. В итоге бизнес теряет и время,
                  и часть клиентов, которые были уже готовы оставить заявку
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
                  Бот принимает обращение, помогает клиенту быстро пройти нужный сценарий, закрывает
                  часть типовых вопросов и передаёт в работу уже понятную и структурированную заявку
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

          <section className="section section-muted" id="platforms">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Каналы запуска</div>
                <h2>Не привязываю решение к одной платформе</h2>
                <p>
                  Основные сценарии сейчас можно запускать в MAX и Telegram. Это позволяет выбрать
                  привычный канал для клиента и не зависеть только от одной платформы. Если нужен
                  дополнительный канал, можно отдельно рассмотреть и WhatsApp
                </p>
              </div>

              <div className="platform-grid">
                {platforms.map((item) => (
                  <article className="platform-card" key={item.title}>
                    <div className="platform-icon">{item.title[0]}</div>
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
                <h2>Кейс бота для клиники с записью, FAQ и обработкой срочных обращений</h2>
                <p>
                  На базе этого сценария можно собрать рабочее решение для клиники или локального
                  бизнеса с записью. Бот принимает обращение, показывает варианты действий, помогает
                  клиенту быстро оставить заявку и передаёт данные в работу
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
                    Такой сценарий особенно хорошо подходит там, где поток обращений повторяется,
                    а часть работы администратора можно снять автоматизацией первого контакта
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
                    <img src="/case-interface.png" alt="Интерфейс бота" />
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
                        title: 'Учёт обращений',
                        text: 'Фиксация заявок, статусов и дальнейшей обработки в одном месте',
                      })
                    }
                  >
                    <img src="/case-table.png" alt="Учёт обращений" />
                    <div className="case-shot-caption">
                      <strong>Учёт обращений</strong>
                      <span>Структурированный список заявок и статусов для дальнейшей работы</span>
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
                <h2>Лучше всего это работает в нишах, где есть запись и повторяющиеся обращения</h2>
                <p>
                  На старте основная специализация это стоматологии, частные клиники, косметология
                  и другие услуги, где клиенту нужно быстро получить ответ, записаться или оставить
                  понятную заявку
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
                <div className="section-kicker">Почему это выгодно</div>
                <h2>Бот окупается не только экономией времени, но и возвратом потерянных обращений</h2>
                <p>
                  Даже базовый сценарий даёт эффект за счёт более быстрого первого ответа, понятной
                  логики общения и меньшего числа потерянных заявок на старте
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
            </div>
          </section>

          <section className="section" id="process">
            <div className="container">
              <div className="section-head">
                <div className="section-kicker">Этапы работы</div>
                <h2>Запуск без сложного внедрения и лишней перегрузки</h2>
                <p>
                  Для локального бизнеса важна не только автоматизация, но и простой путь от идеи
                  до рабочего решения
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
                  <h2>Могу собрать схему бота под ваш бизнес</h2>
                  <p>
                    Напишите, как сейчас к вам приходят обращения, какие вопросы повторяются чаще
                    всего и где удобнее принимать заявки: в MAX, Telegram или в нескольких каналах.
                    На основе этого можно собрать рабочую логику под ваш бизнес
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
