import { audio } from '../data/content'

export default function AudioPage() {
  return (
    <section>
      <h2>사운드</h2>
      <div className="grid" style={{ marginTop: 16 }}>
        {audio.map((a) => (
          <div key={a.id} className="card">
            <div style={{ fontWeight: 600, marginBottom: 8 }}>{a.title}</div>
            <audio className="audio-player" controls src={a.src} />
          </div>
        ))}
      </div>
    </section>
  )
}

