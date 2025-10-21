import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import DotlinePage from './pages/DotlinePage'
import PoetryPage from './pages/PoetryPage'
import SongPage from './pages/SongPage'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
`

const Header = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`

const Brand = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  display: block;
  text-align: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
  }
  
  &.active {
    background: rgba(255,255,255,0.3);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
`

const Main = styled.main`
  min-height: 60vh;
  padding: 2rem 0;
`

function Layout() {
  return (
    <Container>
      <Header>
        <Brand to="/">My Story Exhibit</Brand>
        <Nav>
          <NavLinkStyled to="/dotline">점선면</NavLinkStyled>
          <NavLinkStyled to="/poetry">시</NavLinkStyled>
          <NavLinkStyled to="/song">노래</NavLinkStyled>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

const HomeSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`

const HomeTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HomeDescription = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`

function HomePage() {
  return (
    <HomeSection>
      <HomeTitle>점선면, 시, 노래</HomeTitle>
      <HomeDescription>점선면, 시, 노래로 구성된 나만의 이야기 전시</HomeDescription>
    </HomeSection>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="dotline" element={<DotlinePage />} />
        <Route path="poetry" element={<PoetryPage />} />
        <Route path="song" element={<SongPage />} />
      </Route>
    </Routes>
  )
}

export default App
