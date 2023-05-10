import React from 'react'
import {Link , Outlet} from "react-router-dom"

const LowerBody = () => {
  return (
    <div>
        <h1>LOWERBODY WORKOUTS</h1>
        <div>
        <Link to="/LowerBody/calf"><button>Calf</button></Link>
        <Link to="/LowerBody/glutes"><button>Glutes</button></Link>
        <Link to="/LowerBody/hamstring"><button>Hamstring</button></Link>
        <Link to="/LowerBody/quads"><button>Quads</button></Link>
        </div>
        <Outlet />
    </div>
  )
}

export default LowerBody