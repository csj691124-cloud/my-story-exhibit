import { texts, images, audio } from '../data/content'

export default function GalleryPage() {
  return (
    <section>
      <h2>전시</h2>
      <div style={{ display: 'grid', gap: 24 }}>
        <div>
          <h3>글</h3>
          <div className="grid">
            {texts.map((t) => (
              <article key={t.id} className="card">
                <h4 style={{ marginTop: 0 }}>{t.title}</h4>
                <p style={{ whiteSpace: 'pre-wrap' }}>{t.content}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3>이미지</h3>
          <div className="grid">
            {images.map((img) => (
              <figure key={img.id} className="card">
                <img src={img.src} alt={img.title} style={{ width: '100%', borderRadius: 6 }} />
                <figcaption>{img.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div>
          <h3>사운드</h3>
          <div className="grid">
            {audio.map((a) => (
              <div key={a.id} className="card">
                <div style={{ fontWeight: 600, marginBottom: 8 }}>{a.title}</div>
                <audio className="audio-player" controls src={a.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

