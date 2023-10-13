import React, { useState } from 'react'
import a from '../assets/home-about.png'

const HomeAbout = () => {
  const initialTextLimit = 100 
  const [showMore, setShowMore] = useState(false)
  const [textLimit, setTextLimit] = useState(initialTextLimit)

  const handleToggleText = () => {
    if (showMore) {
      
      setTextLimit(initialTextLimit)
    } else {
      
      setTextLimit(10000) 
    }
    setShowMore(!showMore)
  }

  return (
    <div className='home-about section-center'>
      <div className='home-about-container'>
        <article data-aos='fade-right' className='home-about-content'>
          <h3>Qui sommes-nous</h3>
          <h2>Passionnés de Diakhoa Sine</h2>
          <p>
            {`Bienvenue sur le site officiel de Diakhoa Sine, une cité chargée
            d'histoire et de culture au cœur de Bour Sine Coumba Ndoffene Diouf,
            au Sénégal. Notre mission est de vous emmener dans un voyage à
            travers le temps, de vous plonger dans les racines profondes de
            cette cité mythique, de vous faire découvrir les récits fascinants
            qui ont façonné Diakhoa Sine au fil des siècles.`.substr(
              0,
              textLimit
            )}
          </p>

          <p>
            {`Diakhoa Sine est bien plus qu'une simple localité. C'est un lieu où
            l'histoire, la tradition et la modernité se rencontrent
            harmonieusement. Notre équipe de passionnés est déterminée à
            partager l'histoire riche et les trésors culturels de Diakhoa Sine
            avec le monde entier. Nous croyons en la préservation de notre
            patrimoine pour les générations futures.`.substr(0, textLimit)}
          </p>

          <p>
            {`Explorez nos pages pour plonger dans le passé, découvrir les
            traditions uniques de Diakhoa Sine et rester informé des événements
            passionnants qui animent notre communauté. Que vous soyez un
            résident, un voyageur ou simplement un amoureux de la culture, vous
            êtes le bienvenu ici. Notre site est une ressource précieuse pour en
            apprendre davantage sur Diakhoa Sine, sa culture vibrante, ses
            événements à ne pas manquer et les personnes qui donnent vie à cette
            cité extraordinaire.`.substr(0, textLimit)}
          </p>
          <p>
            {` Rejoignez-nous dans cette aventure, explorez notre site et découvrez
            tout ce que Diakhoa Sine a à offrir. Nous sommes fiers de partager
            notre histoire, notre patrimoine et notre culture avec vous.
            Bienvenue dans l'univers de Diakhoa Sine, une cité empreinte de
            mystère, de beauté et d'authenticité.`.substr(0, textLimit)}
          </p>

          <button class='btn' onClick={handleToggleText}>
            <div class='line-btn top-line'></div>
            {showMore ? 'Afficher moins' : 'Afficher plus'}
            <div class='line-btn bottom-line'></div>
          </button>
        </article>
        <article data-aos='fade-right' className='home-about-big-img'>
          <img src={a} alt='' className='home-about-img' />
        </article>
      </div>
    </div>
  )
}

export default HomeAbout
