import { useState } from 'react'
import { addText } from '../lib/storage'

type Props = { onAdded?: () => void }

export default function TextEditor({ onAdded }: Props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return
    addText(title.trim(), content.trim())
    setTitle('')
    setContent('')
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
      <textarea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">글 추가</button>
    </form>
  )
}


