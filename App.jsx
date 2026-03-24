import "./style.css"

function App() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">

          <div className="hero-copy">
            <div className="eyebrow">
              MAX, Telegram и WhatsApp для приёма заявок
            </div>

            <h1>
              Боты для записи клиентов и обработки обращений
            </h1>

            <p className="hero-text">
              Приём заявок, ответы на частые вопросы и передача
              структурированных обращений в работу
            </p>

            <div className="hero-subline">
              Подходит для: салонов, клиник, услуг и локального бизнеса
            </div>

            <a
              href="https://wa.me/79081673109"
              className="btn-primary"
            >
              Получить схему
            </a>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">

          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Приём заявок и запись</h3>
              <p>Бот собирает имя, контакт, услугу и удобное время</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Ответы на частые вопросы</h3>
              <p>Закрывает типовые вопросы без участия администратора</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Срочные обращения</h3>
              <p>Отдельная ветка для срочных заявок с приоритетом</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Структурированная заявка</h3>
              <p>Администратор получает готовую карточку обращения</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Учёт обращений</h3>
              <p>Все заявки сохраняются и отслеживаются по статусам</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Сценарий под бизнес</h3>
              <p>Логика адаптируется под конкретную нишу</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default App
