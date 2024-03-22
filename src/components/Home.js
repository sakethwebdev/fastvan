import React from 'react'

export default function home() {
  return (
    <div>


<div id="demo" class="carousel slide" data-bs-ride="carousel" >


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
  
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="../images/back.jpg" class="d-block w-100" height={"550px"} />
  </div>
  <div class="carousel-item ">
    <img src="../images/pic1.jpeg" class="d-block w-100" height={"550px"} />
  </div>
  <div class="carousel-item ">
    <img src="../images/pic3.jpeg" class="d-block w-100" height={"550px"} />
  </div>
  <div class="carousel-item ">
    <img src="../images/pic4.jpeg" class="d-block w-100" height={"550px"} />
  </div>
  <div class="carousel-item ">
    <img src="../images/pic5.jpeg" class="d-block w-100"  height={"550px"}/>
  </div>
  
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>




       

    </div>
  )
}
