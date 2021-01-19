import React from "react";
import './App.css';
import githubicon from '../src/github.png';
import linkedinicon from '../src/linkedinicon.png'
import bookmanager from '../src/library.jpg'
import yahtzee from '../src/yahtzee_image.jpg'
import helpfulbot from '../src/Frame_2.png'

class App extends React.Component {
  state = {
      isLoading: true,
      info: [
        {
          icon: githubicon,
          url: "https://github.com/harryseo1992",
          class: "icon",
          objectID: "github"
        },
        {
          icon: linkedinicon ,
          url: "https://www.linkedin.com/in/jong-hwan-seo-579238202/",
          class: "linkedinicon",
          objectID: "linkedin"
        }
      ],
      projects: [
        {
          src: bookmanager,
          alt: "Book Manager",
          name1: "Book",
          name2: "Manager",
          url: "https://github.com/harryseo1992/BookManager.git"
        },
        {
          src: yahtzee,
          alt: "Yahtzee",
          name1: "Yahtzee",
          name2: "in Python",
          url: "https://github.com/harryseo1992/Yahtzee"
        },
        {
          src: helpfulbot,
          alt: "Helpful Bot",
          name1: "Helpful",
          name2: "Bot",
          url: "https://github.com/harryseo1992/HackNorthEastUselessHack"
        }
      ]
      
  };

  componentDidMount(){
    // Will change isLoading in state to false after 3 seconds - Simulate loading time
    var isLoading = this.state;
    setTimeout(() => {
        this.setState({ isLoading: false })
    }, 2000);
  }

  render() {
    const { isLoading, info, projects } = this.state;
    // Before isLoading is changed to false, the root div will show loading ring
    return (
      <section className="container">
        {isLoading ? (
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        ) : (
          // After loading is "finished", the following will be put on root div
          <div className="content">
            <div className="Iam">
              <p>I am</p>
              <b>
                <div className="innerIam">
                  Harry.<br /> 
                  an aspiring developer.<br />
                  a foodie.<br />
                  a discworld lover.<br />
                  a gamer.
                </div>
              </b>
            </div>
            <article className="about">
              <h4>About me</h4>
              <p>My name is Jong Hwan Seo but my English name is Harry.</p>
            </article>
            <div className="projects">
              <h4>My projects</h4>
              <Project project={ projects } />
            </div>
            <div className="contact">
              <h4>Contact Info</h4>
              <List list={ info }/>
            </div>
          </div>
        )}
      </section>
    );
  }
};

const List = props =>
  props.list.map(info => (
      <a href={ info.url }>
        <img src={ info.icon } className={info.class} alt={info.objectID}/>
      </a>
  ));

const Project = props =>
    props.project.map(projects => (
      <div class="grid">
        <figure class="effect-sadie">
          <img src={ projects.src } alt= { projects.alt }/>
          <figcaption>
            <h2>{ projects.name1 } <span>{ projects.name2 }</span></h2>
            <a href={ projects.url }>View more</a>
          </figcaption>			
        </figure>
      </div>
    ));

export default App;
