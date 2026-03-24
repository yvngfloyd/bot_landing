function App() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <span className="brand-mark">B</span>
            <span className="brand-text">Bot.setup</span>
          </div>

          <a
            className="header-cta"
            href="https://wa.me/79081673109"
            target="_blank"
            rel="noreferrer"
          >
            Получить схему
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
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
                <a
                  className="btn btn-primary"
                  href="https://wa.me/79081673109"
                  target="_blank"
                  rel="noreferrer"
                >
                  Получить схему
                </a>

                <a
                  className="btn btn-secondary"
                  href="https://t.me/yevgeniyf1oyd"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-badge">Новая заявка</div>
                <h3>Бот для бизнеса</h3>
                <p>Приём заявок, ответы на вопросы и передача обращения в работу</p>

                <div className="hero-list">
                  <div className="hero-list-item">Оставить заявку</div>
                  <div className="hero-list-item">Услуги и вопросы</div>
                  <div className="hero-list-item">Срочное обращение</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Решение</div>
              <h2>Готовый сценарий первичной обработки обращений</h2>
              <p>
                Бот помогает принять заявку, закрыть типовые вопросы и передать
                в работу уже понятное обращение
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Приём заявок и запись</h3>
                <p>Собирает имя, контакт, услугу и удобное время для связи</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Ответы на частые вопросы</h3>
                <p>Закрывает типовые вопросы без участия администратора</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Срочные обращения</h3>
                <p>Позволяет выделять приоритетные обращения в отдельную ветку</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📄</div>
                <h3>Структурированная заявка</h3>
                <p>Передаёт в работу уже понятную карточку обращения</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Учёт обращений</h3>
                <p>Помогает вести заявки и отслеживать их дальнейшую обработку</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Сценарий под ваш бизнес</h3>
                <p>Логика адаптируется под нишу, вопросы и формат работы</p>
              </div>
            </div>
          </div>
        </section>

        <section className="platforms">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Каналы запуска</div>
              <h2>Не привязываю решение к одной платформе</h2>
              <p>
                Основные сценарии можно запускать в MAX и Telegram.
                WhatsApp можно держать как дополнительный канал
              </p>
            </div>

            <div className="platform-grid">
              <div className="platform-card">
                <div className="platform-icon">M</div>
                <h3>MAX</h3>
                <p>Подходит бизнесу, которому важен локальный и стабильный контур</p>
              </div>

              <div className="platform-card">
                <div className="platform-icon">T</div>
                <h3>Telegram</h3>
                <p>Удобен там, где аудитория уже привыкла писать и оставлять заявки</p>
              </div>

              <div className="platform-card">
                <div className="platform-icon">W</div>
                <h3>WhatsApp</h3>
                <p>Можно использовать как дополнительный канал под задачу клиента</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
