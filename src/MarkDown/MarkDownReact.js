import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './style.css'
import CheatSheet from './CheatSheet'

const MarkDownReact = () => {
  const [markDown, setMarkDown] = useState('')

  return (
    <>
      <div className='center-div'>
        <textarea className='left-side' value={markDown} 
        onChange={(e) => setMarkDown(e.target.value)}
        placeholder='Type Here'></textarea>
        <div className='right-side'><ReactMarkdown>{markDown}</ReactMarkdown></div>
        <div className='second-right'>
          <div className='head'></div>
          <CheatSheet/>
        </div>
      </div>
    </>
  )
}

export default MarkDownReact
