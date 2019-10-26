import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { connect } from 'react-redux'
import { logout } from '../../store/actions/AuthAction'
import UserIcon from './UserIcon'

const UserInterface = ({ auth: { user }, logout, color }) => {
    const onLogout = () => {
        document.querySelector('.user-interface-card').style.visibility = 'hidden';
        logout();
    }
    const buttonStyling = {
        border: 'none',
        background: 'none',
        color: 'inherit',
        cursor: 'pointer',
        outline: 'inherit'
    }
    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                if (document.querySelector('.user-interface-card').style.visibility === 'visible') {
                    document.querySelector('.user-interface-card').style.visibility = 'hidden'
                }
            }}>
            <div className='user-interface-card'>
                <ul className='user-interface-items'>
                    <UserIcon color={color} />
                    {user !== null ? `${user.name} ${user.email}` : null}
                    <li className='user-interface-button' style={{ borderBottom: '1px solid #E4E4E4' }}>
                        <button style={buttonStyling} >Edit Profile</button>
                    </li>
                    <li className='user-interface-button'>
                        <button style={buttonStyling} onClick={onLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </OutsideClickHandler>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(UserInterface)
