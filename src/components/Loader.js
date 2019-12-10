import React from 'react'

const Loader = () => {
  return (
  <div className="loader">
    <figure className="figure">
      <img src="/images/loader.gif" className="loader__image img-fluid" alt="SPINNER" />
      <p className="figure-caption text-center">Fetching location</p>
    </figure>
  </div>
  )
}

export default Loader
