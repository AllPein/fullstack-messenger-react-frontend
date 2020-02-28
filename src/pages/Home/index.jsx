import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { Sidebar } from '../../containers/index'
import './Home.scss';

const Home = props => {
    
   let { user } = props;

  return (
    <section className="home">
      <div className="chat">
        <Sidebar  />
        {user && (
          <div className="chat__dialog">
            <div className="chat__dialog-input">
            </div>
          </div>
        )}
      </div>
  </section>
     
  )
}
 
export default withRouter(
  connect(
    (state) => ({ user: state.user.userData }),
  )(Home),
);
 