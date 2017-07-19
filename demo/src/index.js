import React, {Component} from 'react'
import {render} from 'react-dom'

import SelectedMenu from '../../src'

class Demo extends Component {
  render() {
    let styles = {
      border: 'solid',
      padding: '0px 20px',
      borderRadius: '16px',
    };
    return  <div style={styles}>
              <h1>With :</h1>
              <SelectedMenu items={['google', 'wikipedia', 'clippy', 'github', 'amazon', 'yahoo', 'pinterest', 'youtube', 'lastfm', 'maps', 'yelp', 'tripadvisor', 'soundcloud', 'reddit']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </SelectedMenu>
              <h1>Without :</h1>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
