import React from 'react';
import {Link ,Outlet} from "react-router-dom";

const UpperBody = () => {
  return (
    <div>
      <h1>UPPER BODY WORKOUTS</h1>
        <div>
            <Link to="/UpperBody/abs"><button>Abs</button></Link>
            <Link to="/UpperBody/biceps"><button>Biceps</button></Link>
            <Link to="/UpperBody/chest"><button>Chest</button></Link>
            <Link to="/UpperBody/forearms"><button>Forearms</button></Link>
            <Link to="/UpperBody/latsandback"><button>LatsAndBack</button></Link>
            <Link to="/UpperBody/shoulders"><button>Shoulders</button></Link>
            <Link to="/UpperBody/triceps"><button>Triceps</button></Link>
            <Link to="/UpperBody/traps"><button>Traps</button></Link>
        </div>
        <Outlet />
    </div>
  )
}

export default UpperBody