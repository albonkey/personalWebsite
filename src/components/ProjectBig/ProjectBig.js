import React from 'react';
import './ProjectBig.scss';

const ProjectBig = ({img, title, description, techList, links}) => {
  return(
    <div className='projectBig'>
      <img src={require(`../../assets/${img}`).default} alt={title}/>
      <div className='projectBig-info'>
        <h2>{title}</h2>
        <p>
          { description }
        </p>
        <div className='projectBig-tech'>
          <div className='projectBig-underheader'> Technologies Used</div>
          <ul className='projectBig-list'>
            {
              techList.map((tech, i) => {
                return <li key={i}>{tech}</li>
              })
            }
          </ul>
        </div>
        <div className='projectBig-links'>
          <div className='projectBig-underheader'>Links</div>
          <ul className='projectBig-list'>
            {
              links.map((link, i) => {
                return <li key={i}><a href={link.link}>{link.name}</a></li>
              })
            }
          </ul>

        </div>
      </div>
    </div>
  )
}

export default ProjectBig;
