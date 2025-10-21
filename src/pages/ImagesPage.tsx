import { images } from '../data/content'

export default function ImagesPage() {
  return (
    <section>
      <h2>이미지</h2>
      <div className="grid" style={{ marginTop: 16 }}>
        {images.map((img) => (
          <figure key={img.id} className="card">
            <img src={img.src} alt={img.title} style={{ width: '100%', borderRadius: 6 }} />
            <figcaption>{img.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

