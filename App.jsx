import React from 'react'

export default function App() {
  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const cards = [
    {
      title: 'Запись клиентов',
      text: 'Бот помогает собирать заявки на запись и передавать их в удобном виде',
      type: 'calendar',
    },
    {
      title: 'FAQ и вопросы',
      text: 'Закрывает типовые вопросы до того, как их начнёт разбирать администратор',
      type: 'chat',
    },
    {
      title: 'Заявки в таблицу',
      text: 'Данные сохраняются структурированно, чтобы не терять обращения и видеть статусы',
      type: 'table',
    },
  ]

  const niches = [
    'Клиники',
    'Салоны',
    'Онлайн-школы',
    'Эксперты',
    'Сервисы',
    'Локальный бизнес',
  ]

  const renderCardVisual = (type) => {
    if (type === 'calendar') {
      return (
        <div className="info-visual info-visual-calendar" aria-hidden="true">
          <div className="calendar-ring ring-left"></div>
          <div className="calendar-ring ring-right"></div>
          <div className="calendar-top"></div>
          <div className="calendar-body">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )
    }

    if (type === 'chat') {
      return (
        <div className="info-visual info-visual-chat" aria-hidden="true">
          <div className="chat-bubble chat-bubble-main">?</div>
          <div className="chat-bubble chat-bubble-side"></div>
        </div>
      )
    }

    if (type === 'table') {
      return (
        <div className="info-visual info-visual-table" aria-hidden="true">
          <div className="table-row">
            <span></span>
            <span></span>
          </div>
          <div className="table-row">
            <span></span>
            <span></span>
          </div>
          <div className="table-row">
            <span></span>
            <span></span>
          </div>
        </div>
      )
    }

    return <div className="info-visual"></div>
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">Чат-боты для бизнеса</div>

          <nav className="nav">
            <button onClick={() => scrollToId('case')}>Кейс</button>
            <button onClick={() => scrollToId('how')}>Как это работает</button>
            <button className="nav-primary" onClick={() => scrollToId('contact')}>
              Связаться
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-left">
              <div className="hero-badge">Telegram и мессенджер-боты под задачу бизнеса</div>

              <h1 className="hero-title">
                Удобные боты
                <span>для заявок, записи и FAQ</span>
              </h1>

              <p className="hero-text">
                Без лишней воды. Только полезная логика: запись клиентов, первичный отбор,
                ответы на частые вопросы и передача заявок в удобный формат
              </p>

              <div className="hero-actions">
                <button className="btn btn-dark" onClick={() => scrollToId('contact')}>
                  Обсудить задачу
                </button>
                <button className="btn btn-light" onClick={() => scrollToId('case')}>
                  Посмотреть кейс
                </button>
              </div>
            </div>

            <div className="hero-right">
              <div className="phone-card">
                <div className="phone-screen">
                  <div className="phone-top">
                    <div className="phone-avatar"></div>
                    <div>
                      <div className="phone-title">Бот для бизнеса</div>
                      <div className="phone-subtitle">Пример логики общения</div>
                    </div>
                  </div>

                  <div className="chat">
                    <div className="msg msg-left">Здравствуйте. Чем могу помочь?</div>
                    <div className="msg msg-right">Записаться на услугу</div>
                    <div className="msg msg-left">
                      Уточните формат, удобное время и оставьте контакт
                    </div>

                    <div className="phone-buttons">
                      <div>Запись</div>
                      <div>FAQ</div>
                      <div>Срочно</div>
                      <div>Контакты</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <div className="section-head">
              <h2>Что бот закрывает</h2>
              <p>Самые частые задачи, которые можно автоматизировать без перегруза</p>
            </div>

            <div className="cards-grid">
              {cards.map((card) => (
                <div className="info-card" key={card.title}>
                  {renderCardVisual(card.type)}
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="case">
          <div className="container case-grid">
            <div className="case-card">
              <div className="case-badge">Демо-кейс</div>
              <h2>Бот для стоматологии</h2>
              <p>
                В демо реализованы запись на приём, срочные обращения, FAQ, показ услуг,
                уведомление администратору и сохранение заявок в таблицу
              </p>

              <div className="case-points">
                <div>Запись на приём</div>
                <div>Срочные обращения</div>
                <div>FAQ и услуги</div>
                <div>Заявки в таблицу</div>
              </div>
            </div>

            <div className="niche-card">
              <h3>Под какие ниши подходит</h3>

              <div className="niche-tags">
                {niches.map((niche) => (
                  <div className="tag" key={niche}>
                    {niche}
                  </div>
                ))}
              </div>

              <p>
                Логику можно адаптировать под услуги, консультации, онлайн-школы и любые
                проекты, где есть входящие обращения и повторяющиеся вопросы
              </p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-box">
              <div className="contact-left">
                <div className="contact-badge">Контакты</div>
                <h2>Можно обсудить задачу без длинных созвонов</h2>
                <p>
                  Достаточно коротко описать процесс. Дальше можно показать подходящую
                  логику бота и предложить формат под вашу нишу
                </p>
              </div>

              <div className="contact-right">
                <a className="btn btn-white" href="https://t.me/tgbotsetup">
                  Написать в Telegram
                </a>
                <a className="btn btn-outline" href="https://wa.me/79500000000">
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
