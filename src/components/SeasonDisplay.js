import React, { useState, useEffect } from "react"

const SeasonDisplay = () => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: "",
    longitude: "",
    errorMsg: ""
  })

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log("sd")
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
          location: {geoLocation.latitude} {geoLocation.longitude}
        </div>
      )
    } else {
      return (
        <p>LOADING</p>
      )
    }
}

export default SeasonDisplay