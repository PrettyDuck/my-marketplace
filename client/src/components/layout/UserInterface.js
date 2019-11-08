import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/AuthAction';
import UserIcon from './UserIcon';

const UserInterface = ({ auth: { user }, logout, color }) => {
  const onLogout = () => {
    document.querySelector('.user-interface-card').style.visibility = 'hidden';
    logout();
  };
  const buttonStyling = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    outline: 'inherit',
    color: '#349a89',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (document.querySelector('.user-interface-card').style.visibility === 'visible') {
          document.querySelector('.user-interface-card').style.visibility = 'hidden';
        }
      }}>
      <div className='user-interface-card'>
        <ul className='user-interface-items'>
          <div className='user-interface-log'>
            <UserIcon color={color} />
            <ul>
              {user !== null
                ? [
                    <li
                      style={{ color: '#000000', fontSize: '12px', lineHeight: '20px' }}
                      key='1'>{`${user.name}`}</li>,
                    <li
                      style={{ color: '#979797', fontSize: '12px', lineHeight: '20px' }}
                      key='2'>{`${user.email}`}</li>,
                  ]
                : null}
              <li>
                <button className='interface-profile-btn'>
                  Profile <span style={{ fontSize: '7px' }}>{'(Feature in progress)'}</span>
                </button>
              </li>
            </ul>
          </div>
          <li className='user-interface-button' style={{ borderBottom: '1px solid #E4E4E4' }}>
            <button style={buttonStyling}>
              Edit Profile <span style={{ fontSize: '7px' }}>{'(Feature in progress)'}</span>
            </button>
          </li>
          <li className='user-interface-button'>
            <button style={buttonStyling} onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </OutsideClickHandler>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(
  mapStateToProps,
  { logout },
)(UserInterface);
