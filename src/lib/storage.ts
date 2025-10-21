export type TextEntry = { id: string; title: string; content: string; createdAt: number }
export type ImageEntry = { id: string; title: string; dataUrl: string; createdAt: number }
export type AudioEntry = { id: string; title: string; dataUrl: string; createdAt: number }

export type ExhibitDB = {
  texts: TextEntry[]
  images: ImageEntry[]
  audio: AudioEntry[]
}

const KEY = 'my-story-exhibit-db'

export function loadDB(): ExhibitDB {
  const raw = localStorage.getItem(KEY)
  if (!raw) return { texts: [], images: [], audio: [] }
  try {
    const parsed = JSON.parse(raw) as ExhibitDB
    return {
      texts: parsed.texts ?? [],
      images: parsed.images ?? [],
      audio: parsed.audio ?? [],
    }
  } catch {
    return { texts: [], images: [], audio: [] }
  }
}

export function saveDB(db: ExhibitDB) {
  localStorage.setItem(KEY, JSON.stringify(db))
}

export function addText(title: string, content: string): TextEntry {
  const db = loadDB()
  const entry: TextEntry = { id: crypto.randomUUID(), title, content, createdAt: Date.now() }
  db.texts.unshift(entry)
  saveDB(db)
  return entry
}

export function addImage(title: string, dataUrl: string): ImageEntry {
  const db = loadDB()
  const entry: ImageEntry = { id: crypto.randomUUID(), title, dataUrl, createdAt: Date.now() }
  db.images.unshift(entry)
  saveDB(db)
  return entry
}

export function addAudio(title: string, dataUrl: string): AudioEntry {
  const db = loadDB()
  const entry: AudioEntry = { id: crypto.randomUUID(), title, dataUrl, createdAt: Date.now() }
  db.audio.unshift(entry)
  saveDB(db)
  return entry
}

export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}


