import React from 'react'
import { connect } from 'react-redux'

const UserIcon = (props) => {
    const { auth: { user }, color } = props;

    const logedIconStyle = {
        borderRadius: '50%',
        backgroundColor: color,
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgra(19,15,2,0.72)',
        cursor: 'pointer'
    }
    const getAbbr = () => {
        if (user !== null) {
            const arr = user.name.split(" ");
            const abbr = arr.map((item) => item.charAt(0));
            return abbr;
        }
    }
    return (
        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={logedIconStyle} onClick={() => {
                document.querySelector('.user-interface-card').style.visibility = 'visible'
            }}>{getAbbr()}</span>
        </li>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(UserIcon)
