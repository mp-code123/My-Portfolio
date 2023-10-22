import React from 'react'

const WorksItem = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} className="work__img" alt="" />
      <h3 className="work__title">{item.title}</h3>
      {item.link != ''?

        <a href={item.link} className="work__button" target="_blank">
        Demo <i className="bx bx-right-arrow-alt"></i>
      </a>:
      'Yet To Be Hosted'
      }
    </div>
  )
}

export default WorksItem
