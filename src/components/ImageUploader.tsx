import { useState } from 'react'
import { addImage, readFileAsDataURL } from '../lib/storage'

type Props = { onAdded?: () => void }

export default function ImageUploader({ onAdded }: Props) {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !file) return
    const dataUrl = await readFileAsDataURL(file)
    addImage(title.trim(), dataUrl)
    setTitle('')
    setFile(null)
    onAdded?.()
  }

  return (
    <form className="uploader" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button type="submit">이미지 업로드</button>
    </form>
  )
}


