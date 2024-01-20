import './index.css'

const LocationContainer = props => {
  const {locationDetails} = props
  const {name, imageUrl, description} = locationDetails

  return (
    <li className="location-lists">
      <div className="location-card-container">
        <img src={imageUrl} alt={name} className="location-img" />
        <div className="location-description-LocationContainer">
          <h1 className="location-heading">{name}</h1>
          <p className="location-description">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default LocationContainer
