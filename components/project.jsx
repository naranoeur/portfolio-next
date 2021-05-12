import React from 'React';
import styles from './project.module.scss'

const Project = ({ title, description, skills, sampleUrl, githubUrl, videoUrl }) => (
  <div className={styles.container}>
    <div className={styles.title}> {title} </div>
    <div className={styles.description}> {description} </div>
    <div className={styles.links}>
      {sampleUrl && 
        <a className={styles.sampleUrl} href={sampleUrl} >Project Link</a>
      }
      {videoUrl && 
        <a className={styles.videoUrl} href={videoUrl} >Video Link</a>
      }
      {githubUrl && 
        <a className={styles.github} href={githubUrl}>
          Code on Github
        </a>
      }
    </div>
    <div className={styles.skills}> 
      {skills.map((skill) => <div className={styles.skill}> {skill} </div>)}
    </div>
  </div>

)

export default Project