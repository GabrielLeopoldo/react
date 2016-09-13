import React from 'react'
import { render } from  'react-dom'

const Podcast = function(){
  return (
  <section id="the-podcast">
    <header>
      <img class="cover" src="https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg" />
      <div>
        <h1>NerdCast</h1>
        <h2>Jovem Nerd</h2>
        <p>O mundo vira piada no Jovem Nerd</p>
      </div>
    </header>

    <ul id="podcast-episodes">
      <li>
        <h3>NerdCast 531 - Bandas de garagem 2</h3>
        <button>►</button>
      </li>
      <li>
        <h3>NerdCast 531 - Bandas de garagem 2</h3>
        <button>►</button>
      </li>
    </ul>
  </section>
  )
}

export default Podcast
