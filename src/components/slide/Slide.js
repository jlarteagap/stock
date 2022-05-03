import React, { useRef, useState, useEffect } from 'react'
import './slide.css'
import { Slideshow } from './Slideshow'
import useData from '../../hooks/useData'

const Slide = () => {
  const { menuObserver } = useData()
  const slideRef = useRef()
  const [slideVisible, setSlideVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setSlideVisible('#')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0.5
      }
    )
    observer.observe(slideRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(slideVisible)
    }
  }, [entryObserver, slideVisible])
  return (
    <div ref={slideRef}>
      <div className="slide" id="#">
        <Slideshow />
      </div>
    </div>
  )
}
export default Slide
