import styled from 'styled-components'
import { poetryImages, poetryTexts } from '../data/content'

const Section = styled.section`
  padding: 2rem 0;
`

const PageTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const ContentGrid = styled.div`
  display: grid;
  gap: 3rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`

const SectionContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border: 1px solid #f0f0f0;
`

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    border-color: #667eea;
  }
`

const ImageCard = styled(Card)`
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`

const ImageCaption = styled.figcaption`
  font-weight: 600;
  color: #495057;
  font-size: 1.1rem;
`

const TextCard = styled(Card)`
  text-align: left;
`

const TextTitle = styled.h4`
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
`

const TextContent = styled.p`
  color: #495057;
  line-height: 1.8;
  font-size: 1rem;
  margin: 0;
  white-space: pre-wrap;
`

export default function PoetryPage() {
  return (
    <Section>
      <ContentGrid>
        <SectionContainer>
          <SectionTitle>이미지</SectionTitle>
          <Grid>
            {poetryImages.map((img) => (
              <ImageCard key={img.id}>
                <Image src={img.src} alt={img.title} />
              </ImageCard>
            ))}
          </Grid>
        </SectionContainer>
        
        <SectionContainer>
          <Grid>
            {poetryTexts.map((text) => (
              <TextCard key={text.id}>
                <TextTitle>{text.title}</TextTitle>
                <TextContent>{text.content}</TextContent>
              </TextCard>
            ))}
          </Grid>
        </SectionContainer>
      </ContentGrid>
    </Section>
  )
}