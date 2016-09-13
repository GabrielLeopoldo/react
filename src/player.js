import React from 'react'
import { render } from  'react-dom'

const Player = function(props){
  return <footer id="player">
      <h3>NerdCast 531 - Bandas de garagem 2</h3>
      <audio controls>
        <source src="https://nerdcast.jovemnerd.com.br/nerdcast_531_bandas_de_garagem_2.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </footer>
}

export default Player
