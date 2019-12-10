import React from 'react'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9 ){
    return lat > 0 ? "Summer" : "Winter"
  } else {
    return lat > 0 ? "Winter" : "Summer"
  }
}

const SeasonLogger = (props) => {
  const season = getSeason(props.location.latitude, new Date().getMonth())
  return (
    <div>
      {season === "Winter" ? "Burr, it's cold out!": "Let's go outside!"}
    </div>
  )
}

export default SeasonLogger