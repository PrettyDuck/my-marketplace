import React from 'react'
import { connect } from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
 
const Alerts = ({ alerts }) => {
    return (
        alerts.alertsArray.length > 0 && alerts.alertsArray.map((alert) => (
            <div key={alert.id} className='auth-card redirect-card'>
                <FontAwesomeIcon icon = {faExclamationTriangle}/>{alert.msg}
            </div>
        ))
    )
}
const mapStateToProps = state => ({
    alerts: state.alertsReducer
})

export default connect(mapStateToProps)(Alerts)
