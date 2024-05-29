import React from 'react'
import './Program.css'
import program1 from '../../Assets/program-1.png'
import program2 from '../../Assets/program-2.png'
import program3 from '../../Assets/program-3.png'
import program_icon_1 from '../../Assets/program-icon-1.png'
import program_icon_2 from '../../Assets/program-icon-2.png'
import program_icon_3 from '../../Assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs container'>
      <div className="program" id='program'>
        <img src={program1} alt="program 1" />
        <div className="caption">
            <img src={program_icon_1} alt="Programs" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="program 2" />
        <div className="caption">
            <img src={program_icon_2} alt="Programs" />
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="program 3" />
        <div className="caption">
            <img src={program_icon_3} alt="Programs" />
            <p>Post-Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
