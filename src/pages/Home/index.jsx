import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Divider } from 'antd';

import { Sidebar, Messages } from '../../containers/index'
import { StatusBar } from '../../components/index'
import './Home.scss';

const Home = props => {
    
   let { user } = props;

  return (
    <section className="home">
      <div className="chat">
        <Sidebar  />

        {user && (
          <div className="chat__dialog">
            <StatusBar />
            <Divider  />
            <Messages />
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
 