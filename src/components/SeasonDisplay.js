import React, { useState, useEffect } from "react"

const SeasonDisplay = () => {
  const [geoLocation, setGeoLocation] = useState({})

  useEffect(() => {
    fetch(window.navigator.geolocation.getCurrentPosition((position) => {
      setGeoLocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
    }))

  }, []) 
  
  return (
    <div>
      {geoLocation.latitude ? <p>{geoLocation.latitude}, {geoLocation.longitude}</p>: "no"}     
    </div>
  )
}

export default SeasonDisplay