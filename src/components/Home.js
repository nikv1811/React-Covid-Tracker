import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Home = () => {
    const [covidData, setCovidData] = useState([])

  const fetchCovidData = async() =>{
      const {data} = await Axios.get('https://api.covid19india.org/data.json');
      setCovidData(data.statewise);
      console.log(data.statewise);
  }

  useEffect(() => {
      fetchCovidData();
  }, [])


    return (
        // <div className="container container-fluid">
            <div className="row">
            {
            covidData.map(data => {return(
              
                <div className="col col-md-4 mb-4" key={data.statecode}>
                    <div className="card border-success" style={{background: "#242B2E"}}>
                        <div className="card-title">{data.state}</div>
                        <div className="card-body">
                            <div className="card-text text-danger">Active Cases   {data.active}</div>
                            <div className="card-text text-warning">Confirmed Cases   {data.confirmed}</div>
                            <div className="card-text text-secondary">Total Deaths   {data.deaths}</div>
                            <div className="card-text text text-success">Recovered Patients   {data.recovered}</div>
                        </div>        
                    </div>
                </div>
              
            )})
            }
            </div>
        // </div>
    )
}

export default Home
