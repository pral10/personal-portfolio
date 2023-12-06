
import {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-p1.png'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['R', 'A', 'L', 'A', 'D', 'H']
    const jobArray = [
        'R',
        'e',
        'c',
        'e',
        'n',
        't',
        ' ',
        'G',
        'r',
        'a',
        'd',
        'u',
        'a',
        't',
        'e',
        '.'
      ]
      useEffect(() => {
        let timeoutId= setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return() => {
            clearTimeout(timeoutId)
        }

      }, [])
    
      

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="software developer"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
             <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
           
          </h1>
          <h2>I am looking for software developer job. </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          </div>
          <Logo />
        
</div>
<Loader type="pacman" />
    </>
    
  );
}

export default Home