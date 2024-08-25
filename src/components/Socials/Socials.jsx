import React from 'react'
import { SOCIALS } from '../../utils/constants'

export const Socials = () => {
  return (
    <ul className="socials">
      {SOCIALS.map(({ icon, link }) => (
        <li key={icon} title={icon} className='socials-item'>
          <a href={link} target='_blank'>
          
          </a>  
        </li>
      ))}
    </ul>
  )
}
