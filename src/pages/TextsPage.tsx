import { texts } from '../data/content'

export default function TextsPage() {
  return (
    <section>
      <h2>글</h2>
      <div className="grid" style={{ marginTop: 16 }}>
        {texts.map((t) => (
          <article key={t.id} className="card">
            <h3 style={{ marginTop: 0 }}>{t.title}</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{t.content}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

