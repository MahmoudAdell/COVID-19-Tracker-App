import React from 'react';
import Chart from './components/Chart/Chart'; 
import Cards from './components/Cards/Cards'; 
import CountryPicker from './components/CountryPicker/CountryPicker'; 
import classes from './App.module.css';
import {fetchData} from './api';
import image from './images/image.png';

class App extends React.Component{
    state={
        data:{},
        country:' ',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({
            data:fetchedData
        })

    }
    handleCountryChange=async(country)=>{
        //fetch data
        const fetchdata=await fetchData(country);
        this.setState({
            data:fetchdata,
            country:country
        })
        console.log(fetchdata);
        
        //set the state

    }
    
    render(){
            const data=this.state.data;
            const country=this.state.country;
            return(
                <div className={classes.container}>
                    <img src={image} alt="Corona Image" className={classes.image}/>
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country}/>
                </div>
            )
    } 

    
  
}

export default App;