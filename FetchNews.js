import React, { useState } from 'react'
import axios from 'axios'
import './FetchNews.css'

function FetchNews() {

    const [flight,setFlight] = useState([])

    const fetchNews =() =>{
        console.log("clicked")
        axios.get("https://api.spacexdata.com/v3/launches?limit=100&launch_success=true")

        .then((response) => {
            console.log(response)

            setFlight(response.data)
        
            
        });
    }
    return (
        <>
        <span className='heading'>SpaceX Launch Programs</span>
       
            <div className='columns'>
<div class="sidenav">
<span className='l-h5'>Filters</span>
<br/>
<span className='l-main'>Lanuch Year</span>
<br/>
       <button className='btn btn-success' onClick={fetchNews}>2006</button>
       <button className='btn btn-success' onClick={fetchNews}>2007</button>
       <button className='btn btn-success' onClick={fetchNews}>2008</button>
       <button className='btn btn-success' onClick={fetchNews}>2009</button>
       <button className='btn btn-success' onClick={fetchNews}>2010</button>
       <button className='btn btn-success' onClick={fetchNews}>2011</button>
       <button className='btn btn-success' onClick={fetchNews}>2012</button>
       <button className='btn btn-success' onClick={fetchNews}>2013</button>
       <button className='btn btn-success' onClick={fetchNews}>2014</button>
       <button className='btn btn-success' onClick={fetchNews}>2015</button>
       <button className='btn btn-success' onClick={fetchNews}>2016</button>
       <button className='btn btn-success' onClick={fetchNews}>2017</button>
       <button className='btn btn-success' onClick={fetchNews}>2018</button>
       <button className='btn btn-success' onClick={fetchNews}>2019</button>
       <button className='btn btn-success' onClick={fetchNews}>2020</button>
       <br/>
        
       <span className='l-main'>Successful  Lanuch</span>
       <br />
       <button className='btn btn-success' onClick={fetchNews}>True</button>
       <button className='btn btn-success' onClick={fetchNews}>False</button>

       <span className='l-main'>Successful Landing</span>
       <br />
       <button className='btn btn-success' onClick={fetchNews}>True</button>
       <button className='btn btn-success'>False</button>
</div>
</div>




       
<div class="main">
        <div className='container'>
            <div className='row'>
                {
                    flight.map((value)=>{
                        return(
                            <div className='col-4'>
                <div className="card" >
  <img src={value.links} className="card-img-top" alt=""/>
  <div className="card-body">
  <h4 className="card-title">{value.mission_name} #{value.flight_number}</h4>
  <h5 className="card-title">{<br/>}</h5>
    <h5 className="card-title">Mission ids: {value.mission_id}</h5>
    <h5 className="card-text">Launch Year: {value.launch_year}</h5>
    <h5 className="card-title">Successful Launch: {value.launch_success}</h5>
    <h5 className="card-title">Successful Landing: {value.launch_failure_details}</h5>
    
    
  </div>
</div>
                </div>
                
                        );
                    })
                }
            </div>
        </div>
        </div>

        </>
    )
}

export default FetchNews