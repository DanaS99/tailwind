import React from 'react'
import './SkillCard.css'

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
        className={`skills_card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
    >
        <div className='skills_icon'>
            <img src={iconUrl} alt={title}></img>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default SkillCard