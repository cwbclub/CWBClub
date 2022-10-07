import GithubCorner from '../../components/githubCorner'
import './home.style.css'

export default function Home() {
  return (
    <div className="homeBody">
      <section className="headerSection">
        <div className="github">
          <GithubCorner />
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
      <section></section>
      <section></section>
    </div>
  )
}
