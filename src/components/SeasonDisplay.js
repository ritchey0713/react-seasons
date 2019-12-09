import React, { useState, useEffect } from "react"
import SeasonLogger from "./SeasonLogger"

const SeasonDisplay = () => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: "",
    longitude: "",
    errorMsg: ""
  })

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setGeoLocation({...geoLocation, latitude: position.coords.latitude, longitude: position.coords.longitude})
    }, 
    (error) => {
      setGeoLocation({errorMsg: error.message})
    })

  }, [])
    if(geoLocation.errorMsg && !geoLocation.latitude) {
      return (
        <div>
          {geoLocation.errorMsg}
        </div>
      )
    } else if(!geoLocation.errorMsg && geoLocation.latitude) {
      return (
        <div>
          <SeasonLogger location={geoLocation}/>
        </div>
      )
    } else {
      return (
        <p>LOADING</p>
      )
    }
}

export default SeasonDisplay