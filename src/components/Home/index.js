import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/p_LOGO.jpg'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','P','r', 'a', 'j', 'a', 'l']
  const jobArray = [
    'D',
    'a',
    't',
    'a',
    ' ',
    'S',
    'c',
    'i',
    'e',
    'n',
    't',
    'i',
    's',
    't',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
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
          <h2>GI Actuary / Data Expert / IIT Delhi</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          
        </div>
        <Logo />
        <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
      </div>
      
      <Loader type="pacman" />
    </>
  )
}

export default Home
