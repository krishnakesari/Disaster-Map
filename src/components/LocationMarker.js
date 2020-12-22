
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ latitude, longitude, onClick }) => {
    return (
        <div className={"Location-marker"} onClick={onClick}>
            <Icon icon={locationIcon} className={"location-icon"} />
        </div>
    )
}

export default LocationMarker
