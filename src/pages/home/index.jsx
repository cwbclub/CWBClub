import GithubCorner from '../../components/githubCorner'
import './home.style.css'
import whyus1 from '../../assets/whyus1.svg'
import whyus2 from '../../assets/whyus2.svg'
import whyus3 from '../../assets/whyus3.svg'
import SocialIcon from '../../components/socialIcon'
import { FaAngleDoubleDown } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="homeBody">
      <section className="headerSection">
        <div className="githubCorner">
          <GithubCorner />
        </div>
        <div className="downArrow">
          <FaAngleDoubleDown />
        </div>
        <div className="textbox">
          <p className="subheader">Your Own Coding Club</p>
          <h1>Welcome to CWBClub</h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            corrupti accusantium maiores quibusdam tempora molestiae mollitia
            officia optio repellendus voluptatum cumque ipsam sint, voluptas hic
            sunt similique et consequuntur. Quas?
          </p>
          <div className="discordBtnDiv">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Join Our Discord
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Know about CanWeBe!
            </a>
          </div>
        </div>
      </section>
      <div className="secondSection">
        <section className="whyus">
          <h2>Why us!</h2>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consequatur, laudantium nesciunt
          </p>
          <div className="whyusFlex">
            <div className="whyusCard">
              <img src={whyus1} alt="" srcset="" />
              <p className="subheader">Sub Header One</p>
              <p className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus dolore exercitationem blanditiis quasi,
              </p>
            </div>
            <div className="whyusCard">
              <img src={whyus2} alt="" srcset="" />
              <p className="subheader">Sub Header One</p>
              <p className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus dolore exercitationem blanditiis quasi,
              </p>
            </div>
            <div className="whyusCard">
              <img src={whyus3} alt="" srcset="" />
              <p className="subheader">Sub Header One</p>
              <p className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus dolore exercitationem blanditiis quasi,
              </p>
            </div>
          </div>
        </section>
        <section className="socials">
          <p>Follow us on Social Medias</p>
          <div className="socialWrapper">
            <SocialIcon name="facebook" src="#" />
            <SocialIcon name="instagram" src="#" />
            <SocialIcon name="twitter" src="#" />
            <SocialIcon name="github" src="#" />
            <SocialIcon name="discord" src="#" />
          </div>
        </section>
        <section className="about">
          <div className="aboutCard">
            <div className="content">
              <h4>About</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur vero eveniet expedita! Fuga perspiciatis debitis
                tempore aperiam optio sit, nostrum recusandae quisquam. Ad
                cumque placeat dolor itaque illo sed. Perspiciatis!
              </p>
            </div>
            <img src={whyus2} alt="" srcset="" />
          </div>
        </section>

        <footer>
          All rights are reserved by{' '}
          <a
            href="https://canwebe.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            CanWeBe!
          </a>{' '}
          {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
