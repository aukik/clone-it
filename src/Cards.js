import React, { useState } from "react"
import Card from "react-tinder-card"
import "./Cards.css"
function Cards() {
  const [ card, setCard ] = useState([
    {
      name : "CSGO",
      url  :
        "https://i.pinimg.com/originals/ff/c3/8d/ffc38d9bce22d7a9eaa07b890e3af1a2.jpg",
    },
    {
      name : "Brawlhalla",
      url  :
        "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7vvLZLvuQ7NGZvAA3wpfQH/87951e206cef6c5d5060cdb09a5447c6/BHxAC_KeyArt_NoText.jpg",
    },
  ])
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete)
  }
  const outOfFrame = name => {
    console.log(name + "left the screen")
  }
  return (
    <div className='cards'>
      <div className='cards__cardContainer'>
        {card.map(c => (
          <Card
            className='swipe'
            key={c.name}
            preventSwipe={[ "up", "down" ]}
            onSwipe={dir => swiped(dir, c.name)}
            onCardLeftScreen={() => outOfFrame(c.name)}
          >
            <div style={{ backgroundImage: `url(${c.url})` }} className='card'>
              <h3>{c.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Cards
