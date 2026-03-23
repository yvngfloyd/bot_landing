const cards = [
  {
    title: 'Запись клиентов',
    text: 'Бот помогает собирать заявки на запись и передавать их в удобном виде',
  },
  {
    title: 'FAQ и вопросы',
    text: 'Закрывает типовые вопросы до того, как их начнёт разбирать администратор',
  },
  {
    title: 'Заявки в таблицу',
    text: 'Данные сохраняются структурированно, чтобы не терять обращения и видеть статусы',
  },
]

const niches = ['Клиники', 'Салоны', 'Онлайн-школы', 'Эксперты', 'Сервисы', 'Локальный бизнес']

export default function App() {
  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand">Чат-боты для бизнеса</div>
          <nav className="desktop-nav">
            <button onClick={() => scrollToId('case')}>Кейс</button>
            <button onClick={() => scrollToId('how')}>Как это работает</button>
            <button className="nav-cta" onClick={() => scrollToId('contact')}>Связаться</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section container">
          <div className="hero-copy">
            <div className="hero-badge">Telegram и мессенджер-боты под задачу бизнеса</div>
            <h1>
              Минималистичные боты
              <span>для заявок, записи и FAQ</span>
            </h1>
            <p>
              Без лишней воды. Только полезная логика: запись клиентов, первичный отбор,
              ответы на частые вопросы и передача заявок в удобный формат
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollToId('contact')}>Обсудить задачу</button>
              <button className="secondary-btn" onClick={() => scrollToId('case')}>Посмотреть кейс</button>
            </div>
          </div>

          <div className="hero-preview-wrap">
            <div className="preview-card">
              <div className="preview-screen">
                <div className="preview-top">
                  <div className="preview-avatar" />
                  <div>
                    <div className="preview-title">Бот для бизнеса</div>
                    <div className="preview-subtitle">Пример логики общения</div>
                  </div>
                </div>

                <div className="message-stack">
                  <div className="message message-in">Здравствуйте. Чем могу помочь?</div>
                  <div className="message message-out">Записаться на услугу</div>
                  <div className="message message-in">Уточните формат, удобное время и оставьте контакт</div>
                </div>

                <div className="quick-grid">
                  <div>Запись</div>
                  <div>FAQ</div>
                  <div>Срочно</div>
                  <div>Контакты</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container info-section" id="how">
          <div className="section-head">
            <h2>Что бот закрывает</h2>
            <p>Самые частые задачи, которые можно автоматизировать без перегруза</p>
          </div>

          <div className="cards-grid">
            {cards.map((card) => (
              <article key={card.title} className="info-card">
                <div className="card-icon" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container case-section" id="case">
          <div className="case-main">
            <div className="section-chip">Демо-кейс</div>
            <h2>Бот для стоматологии</h2>
            <p>
              В демо реализованы запись на приём, срочные обращения, FAQ, показ услуг,
              уведомление администратору и сохранение заявок в таблицу
            </p>
            <div className="feature-grid">
              <div>Запись на приём</div>
              <div>Срочные обращения</div>
              <div>FAQ и услуги</div>
              <div>Заявки в таблицу</div>
            </div>
          </div>

          <div className="case-side">
            <h3>Под какие ниши подходит</h3>
            <div className="tag-list">
              {niches.map((niche) => (
                <span key={niche}>{niche}</span>
              ))}
            </div>
            <p>
              Логику можно адаптировать под услуги, консультации, онлайн-школы и любые проекты,
              где есть входящие обращения и повторяющиеся вопросы
            </p>
          </div>
        </section>

        <section className="container contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <div className="section-chip dark-chip">Контакты</div>
              <h2>Можно обсудить задачу без длинных созвонов</h2>
              <p>
                Достаточно коротко описать процесс. Дальше можно показать подходящую логику бота
                и предложить формат под вашу нишу
              </p>
            </div>

            <div className="contact-actions">
              <a className="contact-primary" href="https://t.me/tgbotsetup" target="_blank" rel="noreferrer">
                Написать в Telegram
              </a>
              <a className="contact-secondary" href="https://wa.me/79081673109" target="_blank" rel="noreferrer">
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
