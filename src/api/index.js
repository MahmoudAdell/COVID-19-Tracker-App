import React from 'react';
import axios from 'axios' ;

const url='https://covid19.mathdro.id/api';
export const fetchData=async(country)=>{
   let modefiedURL=url;
   if(country&&country!==" "){
    modefiedURL=`${url}/countries/${country}`;
   }

    try{
        const response=await axios.get(modefiedURL)
        .then(response=>{return response.data});

        const modifiedData={
            confirmed:response.confirmed,
            recovered:response.recovered,
            deaths:response.deaths,
            lastUpdate:response.lastUpdate,
        }
        return modifiedData;
    }catch(error){

    }
}

export const fetchDailyData=async()=>{
    try{
        const data=await axios.get(`${url}/daily`)
        .then(response=>{return response.data});

        const modifiedData=data.map((dailyData)=>({
              confirmed:dailyData.confirmed.total,
              deaths:dailyData.deaths.total,
              date:dailyData.reportDate,
        }));

        return modifiedData;


    }catch(error){
        console.log(error);
    }
    
}

export const fetchcountries = async()=>{
    try{
        const response =await axios.get(`${url}/countries`)
        .then(res=>{return res.data});
        return response.countries.map((country)=>country.name);
    }catch(error){
        console.log(error);
    }
}