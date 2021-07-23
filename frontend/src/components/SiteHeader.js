import React from 'react'
import { Link } from 'react-router-dom'

function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/"><h1>Mike Reviews</h1></Link>
    </div>
  )
}

export default SiteHeader