import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import Project from '../components/project'
import ContactForm from '../components/contactForm'
import PopupScreen from '../components/popupScreen'

const projectData = [
  {
    title: "Porfolio",
    skills: ["react.js", "next.js", "HTML", "CSS"],
    description: "Personal porfolio website",
    githubUrl: "https://github.com/",
    sampleUrl: "/",
    videoUrl: "/", 
  },
  {
    title: "Youtube",
    skills: ["Javascript", "algorithms"],
    description: "Educational programming content",
    githubUrl: "",
    sampleUrl: "https://youtube.com/",
    videoUrl: "", 
  }
]


const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pheezx Coding</title>
        <meta name="description" content="Pheezx Coding Porfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navigation}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="/resume.pdf">Resume</a>
        <a onClick={() => setShowContactForm(true)}>Contact</a>
      </div>
      <div id="about" className={styles.identity}>
        <div className={styles.logoImage}>
          <Image src="/main.png" alt="Vercel Logo" width={100} height={100} />
        </div>
        <div className={styles.text}>
          <div className={styles.name}>Pheezx Coding</div>
          <div className={styles.description}>Full stack web developer with frontend focus</div>
        </div>
      </div>
      <div id="projects" className={styles.projects}>
        <div className={styles.title}>Projects</div>
        {projectData.map((data) => <Project {...data} key={data.title}/>)}
      </div>
      <div id="contact" className={styles.contact}>
        {showContactForm &&
          <PopupScreen onClose={() => setShowContactForm(false)} >
            <div>
              <div className={styles.title}>Contact Form</div>
              <ContactForm />
            </div>
          </PopupScreen>
        }
      </div>
     </div>
  )
}

export default Home