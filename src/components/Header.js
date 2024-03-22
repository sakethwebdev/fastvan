import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    < div>
      <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">

                <NavLink to='/fareestimate' class="nav-link" className='pages'> <h5>Fare Estimate &emsp; </h5> </NavLink>

              </li>

              <li>
                <a class="nav-item" className='pages'> <NavLink to='/order' className='pages' > <h5>Order &emsp; </h5>  </NavLink> </a>
              </li>


              <li>
                <a class="nav-item" className='pages'> <NavLink to='/trackorder' className='pages' > <h5>TrackOrder </h5>  </NavLink> </a>
              </li>

            </ul>


          </div>

        </div>
      </nav>

    
      </div>

    </ div>


  )
}
