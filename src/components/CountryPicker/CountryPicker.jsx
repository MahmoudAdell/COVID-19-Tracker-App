import React ,{useState,useEffect} from 'react';
import {NativeSelect ,FormControl} from '@material-ui/core';
import classes from './CountryPicker.module.css';
import {fetchcountries} from '../../api';

const CountryPicker =({handleCountryChange})=>{
    const [fetchedCountries,setfetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
        setfetchedCountries(await fetchcountries()) ;
       } ;
       fetchApi();
    },[setfetchedCountries])

    console.log(fetchedCountries);

    return (
        <FormControl className={classes.formControl}>
            <NativeSelect defaultValue=" " onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value=" ">Global</option>
                {fetchedCountries.map((country,i)=>{
                    return <option key={i} value={country}>{country}</option>
                })}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;