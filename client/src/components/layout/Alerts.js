import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const Alerts = (props) => 
{
    const { alerts, classNameForAlertStyling} = props;
    return (
        alerts.alertsArray.length > 0 && alerts.alertsArray.map((alert) => (
            <div key={alert.id} className={classNameForAlertStyling}>
                <FontAwesomeIcon icon={faExclamationTriangle} />{alert.msg}
            </div>
        ))
    )
}
const mapStateToProps = state => ({
    alerts: state.alertsReducer
})

export default connect(mapStateToProps)(Alerts)
