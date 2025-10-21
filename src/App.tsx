import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import TextsPage from './pages/TextsPage'
import ImagesPage from './pages/ImagesPage'
import AudioPage from './pages/AudioPage'
import GalleryPage from './pages/GalleryPage'
import './App.css'

function Layout() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="brand">My Story Exhibit</Link>
        <nav className="nav">
          <NavLink to="/texts">글</NavLink>
          <NavLink to="/images">이미지</NavLink>
          <NavLink to="/audio">사운드</NavLink>
          <NavLink to="/gallery">전시</NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

function HomePage() {
  return (
    <section>
      <h1>내 인생 전시</h1>
      <p>글, 이미지, 사운드를 업로드하고 전시하세요.</p>
    </section>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="texts" element={<TextsPage />} />
        <Route path="images" element={<ImagesPage />} />
        <Route path="audio" element={<AudioPage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  )
}

export default App
