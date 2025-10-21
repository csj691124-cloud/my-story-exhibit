import styled from 'styled-components'
import { useState, useRef } from 'react'
import { songTexts, songAudio } from '../data/content'

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

const AudioCard = styled(Card)`
  text-align: center;
`

const CustomAudioPlayer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  border: 2px solid #667eea;
`

const AudioControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const PlayButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: white;
  color: #667eea;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0,0,0,0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const AudioInfo = styled.div`
  flex: 1;
  color: white;
`

const AudioTitle = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`

const TimeDisplay = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255,255,255,0.3);
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
`

const Progress = styled.div<{ progress: number }>`
  height: 100%;
  background: white;
  border-radius: 3px;
  transition: width 0.1s ease;
  width: ${props => props.progress}%;
`

const HiddenAudio = styled.audio`
  display: none;
`

interface AudioItem {
  id: string;
  title: string;
  src: string;
}

function AudioPlayerComponent({ audio }: { audio: AudioItem }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const width = rect.width
      const newTime = (clickX / width) * duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <CustomAudioPlayer>
      <HiddenAudio
        ref={audioRef}
        src={audio.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      <AudioControls>
        <PlayButton onClick={togglePlay}>
          {isPlaying ? '⏸️' : '▶️'}
        </PlayButton>
        <AudioInfo>
          <AudioTitle>{audio.title}</AudioTitle>
          <TimeDisplay>
            {formatTime(currentTime)} / {formatTime(duration)}
          </TimeDisplay>
        </AudioInfo>
      </AudioControls>
      <ProgressBar onClick={handleProgressClick}>
        <Progress progress={progress} />
      </ProgressBar>
    </CustomAudioPlayer>
  )
}

export default function SongPage() {
  return (
    <Section>
      <PageTitle>노래</PageTitle>
      <ContentGrid>
        <SectionContainer>
          <SectionTitle>글</SectionTitle>
          <Grid>
            {songTexts.map((text) => (
              <TextCard key={text.id}>
                <TextTitle>{text.title}</TextTitle>
                <TextContent>{text.content}</TextContent>
              </TextCard>
            ))}
          </Grid>
        </SectionContainer>
        
        <SectionContainer>
          <SectionTitle>노래</SectionTitle>
          <Grid>
            {songAudio.map((audio) => (
              <AudioCard key={audio.id}>
                <AudioPlayerComponent audio={audio} />
              </AudioCard>
            ))}
          </Grid>
        </SectionContainer>
      </ContentGrid>
    </Section>
  )
}