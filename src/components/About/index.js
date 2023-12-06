import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {
  faAngular,
  faCss3,
  faJava,
  faHtml5,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
        clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a recent college graduate looking for software developer roles. I am very ambitious and hardworking.
            I have a strong knowledge about the front end tools as well as i can code using Java, Python and C/C++.
          </p>
          <p align="LEFT">
            I am confident about what I do and always want to bring best out of me. 
          </p>
          <p>
             I define myself as a sports fanatic and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About