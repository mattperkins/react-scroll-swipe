import React from 'react'
import { render } from 'react-dom'
import { Transition, animated } from 'react-spring'
import './style.css'
import Swiper from './Swiper'

const pages = [
  style => (
    <animated.div style={{ ...style, background: '#b3FFBD' }}>This site can’t be reachedlocalhost refused to connect.
Try:

Checking the connection
Checking the proxy and the firewall
ERR_CONNECTION_REFUSED This site can’t be reachedlocalhost refused to connect.
Try:

Checking the connection
Checking the proxy and the firewall
ERR_CONNECTION_REFUSED</animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: '#B2DBBF' }}>Check your Internet connection
Check any cables and reboot any routers, modems or other network devices you may be using.
Allow Chrome to access the network in your firewall or antivirus settings.
If it is already listed as a program allowed to access the network, try removing it from the list and adding it again.</animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: '#12DBBF' }}>If you use a proxy server…
Check your proxy settings or contact your network administrator to make sure that the proxy server is working. If you don't believe you should be using a proxy server: Go to Applications > System Preferences > Network > Advanced > Proxies and deselect any proxies that have been selected.</animated.div>
  ),
  style => (
    <animated.div style={{ ...style, }}><img style={img} /></animated.div>
  ),
  style => (
    <animated.div style={{ ...style, }}><Swiper /></animated.div>
  )
]

export default class App extends React.PureComponent {
  state = { index: 0 }
  toggle = e =>
    this.setState(state => ({
      index: state.index === 4 ? 0 : state.index + 1,
    }))
  render() {
    return (
      <div className="main" onClick={this.toggle}>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
          {index => pages[index]}
        </Transition>
      </div>
    )
  }
}

const imgStyle = "https://images.unsplash.com/photo-1547759499-79f5c449d257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1824&q=80"
const img = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${imgStyle})`,
  backgroundSize: 'cover'
}


render(<App />, document.getElementById('root'))
