import React from 'react'
import a from "../assets/about.mp4"
const About = () => {
 

  return (
    <div className='about'>
      
      <div className='about-container section-center'>
        <article>
          <h1>À Propos de Nous</h1>
          <p>
            Située au cœur de la région de Fatick, Diakhao est la dernière
            capitale du royaume du Sine, une région riche en histoire et en
            culture. En tant que gardienne des vestiges du royaume, classés au
            Patrimoine mondial de l’UNESCO, Diakhao joue un rôle essentiel dans
            la préservation de notre patrimoine commun.
          </p>

          <p>
            À l'entrée du village se dresse fièrement la maison royale, un
            témoignage vivant de la grandeur passée du Sine. Dès que l'on
            franchit le portail, chaque mètre carré de cette concession évoque
            la riche histoire du Sine. Les nombreux mausolées des rois qui
            reposent en ces lieux plongent le visiteur dans une atmosphère de
            recueillement, rappelant l'importance de ce site sacré.
          </p>

          <p>
            Bour Sine Coumba Ndoffene Diouf, le roi du Sine, a choisi Diakhoa
            comme refuge, marquant un tournant dans l'histoire de ce lieu
            emblématique. Aujourd'hui, nous nous engageons à préserver, célébrer
            et partager l'héritage culturel et historique de Diakhoa Sine avec
            le monde entier.
          </p>
        </article>
        <article>
          <h1>Notre Mission</h1>
          <p>
            Notre mission est de promouvoir et partager la richesse de la
            culture, de l'histoire et des événements de Diakhoa Sine. Nous
            souhaitons préserver l'héritage de cette région historique tout en
            offrant une plateforme aux visiteurs du monde entier pour explorer
            et apprendre l'importance de cette terre. Nous sommes déterminés à
            faire rayonner l'histoire et la culture uniques de Diakhoa Sine,
            contribuant ainsi à la préservation de notre patrimoine pour les
            générations futures.
          </p>
        </article>
        <article>
          <h1>Notre Équipe</h1>
          <p>
            Notre équipe est composée de passionnés de l'histoire et de la
            culture de Diakhoa Sine. Nous travaillons en étroite collaboration
            avec des experts locaux, des historiens, des artistes et des membres
            de la communauté pour garantir l'authenticité de notre contenu.
            Notre engagement envers la préservation du patrimoine de Diakhoa
            Sine nous anime chaque jour.
          </p>
        </article>
        <article>
          <h1>Contactez-nous</h1>
          <p>
            N'hésitez pas à nous contacter pour toute question, suggestion ou
            collaboration. Votre contribution à la préservation de l'histoire de
            Diakhoa Sine est la bienvenue.
          </p>
        </article>
        <article>
          <h1>Nos Projets</h1>
          <p>
            Nous sommes engagés dans plusieurs projets visant à mettre en valeur
            l'histoire et la culture de Diakhao Sine. Notre équipe travaille sur
            la numérisation d'archives historiques, la création de guides
            touristiques, et l'organisation d'événements culturels pour faire
            revivre les traditions du Sine.
          </p>
        </article>
        <article>
          <h1>Découvrez Diakhao Sine</h1>
          <div class='video-container'>
            <video id='myVideo' controls loop>
              <source src={a} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            
          </div>

          <p>
            Plongez dans l'histoire et la beauté de Diakhao Sine en regardant
            notre vidéo exclusive. Explorez les sites historiques, les coutumes
            locales et l'héritage unique de cette région captivante. Nous vous
            invitons à embarquer pour un voyage inoubliable à travers Diakhao
            Sine.
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
