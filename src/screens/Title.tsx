import React from 'react'

interface Props {
  title: string
}

const Title = (props: Props) => {
  return (
    <div id='desktop-title' className='title'>
      <h1 className='title__text'>{props.title}</h1>
    </div>
  )
}

export default Title