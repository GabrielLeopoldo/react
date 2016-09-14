import React from 'react'
import { render } from  'react-dom'
import Podcast from './podcasts'
import Player from './player'
import MyFeeds from './my_feeds'

const App = function(props){
    return <section id="podcasts-app">
        <section id="stage">
          <MyFeeds /> 
          <Podcast /> 
        </section>
        <Player />
      </section>
}

export default App;
