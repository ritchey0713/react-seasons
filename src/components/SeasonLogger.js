import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faSnowman } from "@fortawesome/free-solid-svg-icons"

const seasonConfig = {
  Summer: {
    text: "Let's go outside!",
    icon: faSun
  },
  Winter: {
    text: "Burr, it's cold out!",
    icon: faSnowman
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9 ){
    return lat > 0 ? "Summer" : "Winter"
  } else {
    return lat > 0 ? "Winter" : "Summer"
  }
}

const SeasonLogger = (props) => {
  const season = getSeason(props.location.latitude, new Date().getMonth())
  const {text, icon: iconName} = seasonConfig[season]
  return (
    <div className={`text-center season-display ${season}`}>
      <FontAwesomeIcon icon={iconName} size={"7x"} className="icon-left"/>
      <h1>{text}</h1>
      <FontAwesomeIcon icon={iconName} size={"7x"} className="icon-right"/>
    </div>
  )
}

export default SeasonLogger