import React from 'react';

const Picture = (props) => {

  return (
   
     <div className="tile is-ancestor is-justify-content-center is-hidden-mobile">
       <div className="tile is-5 is-parent">
         <div className="tile is-child picture">
         <figure className="image">
          <img 
            className="is-rounded"
            src='https://avatars2.githubusercontent.com/u/69644463?s=460&u=068a3d5c3e5d8b54f6462690521c81decc3ceb01&v=4.jpg'
            alt='elias'
          />
        </figure>
         </div>
       </div>
      </div>
     
  
  )
}

export default Picture;