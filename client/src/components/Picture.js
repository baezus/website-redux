import React from 'react';

const Picture = (props) => {

  return (
    <div className="is-right">
      <div className="column is-four-fifths">
        <figure className="image is-square is-rounded is-hidden-mobile">
          <img 
            className="image is-rounded is-clickable"
            src='https://avatars2.githubusercontent.com/u/69644463?s=460&u=068a3d5c3e5d8b54f6462690521c81decc3ceb01&v=4.jpg'
            alt='elias'
          />
        </figure>
      </div>
    </div>
  )
}

export default Picture;