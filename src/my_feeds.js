import React from 'react'
import { render } from  'react-dom'

const MyFeeds = function(props){
  return (
      <aside id="my-feeds">
    <h2>Meus Feeds</h2>
    <form>
      <input placeholder="URL feed..."/><input type="submit" value="Adicionar" />
    </form>
    <ul>
      <li class="selected">
        <img src="https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg" />
      </li>
      <li>
        <img src="https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg" />
      </li>
      <li>
        <img src="https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg" />
      </li>
    </ul>
    </aside>
    )
}

export default MyFeeds
