import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='card'>
                <img alt="" src="https://media.istockphoto.com/photos/dangerous-hooded-hacker-breaks-into-government-data-servers-and-a-picture-id817486228?k=6&m=817486228&s=612x612&w=0&h=pZd6esBWGq7TVUuUhLyJziNnhK9UPRhOO2cpU7JDTMg="></img>
                <div className='blue-text'>
                    Card #1
                </div>
            </div>
         );
    }
}
 
export default Card;