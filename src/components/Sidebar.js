import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import User from '../containers/User';
import './Sidebar.css';

const Sidebar = ({
  contacts
}) => {
  return (
    <aside className="Sidebar">
      <Scrollbars autoHide>
        {
          contacts.map(contact => {
            const {
              user_id
            } = contact;

            return <User user={contact} key={user_id} />
          })
        }
      </Scrollbars>
    </aside>
  )
};

export default Sidebar;
