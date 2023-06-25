import { useEffect, useState } from 'react'
import {
  faRProject,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBasketball, faBeer, faDashboard, faDatabase, faEarth, faRupee, faSwimmer } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
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
          General insurance professional with over 3 years of experience in applying actuarial knowledge to solve complex business problems.
          </p>
          <p align="LEFT">
          Adept in building technical pricing models and monitoring platforms for personal and commercial lines insurance products.
          </p>
          <p>
            If I need to define myself in one sentence that would be a traveller, a sports fanatic,
            and a 12 to 9 employee!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faRProject} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faEarth} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faBeer} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faRupee} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBasketball} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSwimmer} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
