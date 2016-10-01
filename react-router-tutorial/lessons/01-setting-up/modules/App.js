import React from 'react'
import { Link, IndexLink} from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
    	<div>
    	<h1><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></h1>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )  }
})
