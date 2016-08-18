import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


class Main extends React.Component {
   render() {
      return (
          <section>
            <header>
              <div className='container'>
                    <nav>
                      <ul>
                          <li><Link to='/home'>Home</Link></li>
                          <li><Link to='/hello'>Hello</Link></li>
                          <li><Link to='/secret'>Secret</Link></li>
                      </ul>
                                            <div className='clear'></div>

                      {this.props.children}
                    </nav>
                 </div>
            </header>
          </section>
      );
   }
}

export default Main;


