import React, {useEffect} from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Divider, Empty } from 'antd';

import { Sidebar, Messages, ChatInput } from '../../containers/index'
import { StatusBar } from '../../containers/index'
import './Home.scss';
import { dialogsActions } from '../../redux/actions';

const Home = props => {
    
    let { user, setCurrentDialogId } = props;

    const { pathname } = props.location;
    let dialogId = pathname.split('/').pop();


   useEffect(() => {
    const { pathname } = props.location;
    let dialogId = pathname.split('/').pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar  />

        {dialogId ? (
          <div className="chat__dialog">
            <StatusBar />
            <Divider  />
            <Messages />
            <div className="chat__dialog-input">
              <ChatInput user={user} />
            </div>
          </div>
        ) :
        (
          <Empty description='Откройте диалог' />
        )}
      </div>
  </section>
     
  )
}
 
export default withRouter(
  connect(
    (state) => ({ user: state.user.userData }),
    dialogsActions
  )(Home),
);
 