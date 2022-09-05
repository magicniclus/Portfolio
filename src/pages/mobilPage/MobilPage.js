import React from 'react';
import moi from "../../assets/me/moi-mobil.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import "./_mobilPage.scss";

const MobilPage = () => {
  let color = "#EDEAE6";

  return (
      <div className='mobilMain'>
        <header className='mobilHeader'>
          <div className="leftContainer">
            <div className="leftConter_topContainer">
                <p>Frontend developpeur.</p>
            </div>  
            <div className="leftConter_bottomContainer">
              <ul>
                <li>Github. <FontAwesomeIcon icon={faArrowUpRightFromSquare} color={color} /></li>
                <li>Tweeter. <FontAwesomeIcon icon={faArrowUpRightFromSquare} color={color} /></li>
                <li>Linkedin. <FontAwesomeIcon icon={faArrowUpRightFromSquare} color={color} /></li>
              </ul>
            </div>  
          </div>  
          <div className="rightContainer">
            <img src={moi} alt="Nicolas Castera" />
          </div>
          <div className="bottomContainer">
            <h1>NICOLAS CASTERA</h1>
          </div>
        </header>  
        <main className='mobilMain'>
          <div className="topContainer">
            <p>
              Jeune développeur passionné, ambitieux et très curieux, je voue une appétence particulière pour l’écosystème Javascript. En veille constante 
              sur les nouvelles technologies, j’accorde un intérêt tout particulier pour React. J’ai complété mes compétences en Front avec le CMS Strapi 
              (API first) proposant entre autre une authentification des plus sécurisée, la gestion des permissions, de la création de contenu ainsi
              qu’un générateur d’API REST rapide et efficace. J'attache une importance capitale au détail dans les animations avec GSAP ou encore Sass pour un 
              code optimisé et facilement compréhensible. À l’écoute de mes clients, je saurai conseiller, orienter, et adapter mon savoir-faire a vos attentes.
            </p>
          </div>
          <div className="bottomContainer">
            <div className="bottomContainer_left">
              <p>Optimal experience in Desktop</p>
            </div>
            <div className="bottomContainer_right">
              <button>Contact</button>
            </div>
          </div>
        </main>
      </div>
  );
};

export default MobilPage;