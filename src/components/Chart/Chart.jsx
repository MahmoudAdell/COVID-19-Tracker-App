import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import classes from './Chart.module.css';
const Charts =({data,country})=>{
    const [dailyData,setDailyData]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });
    const lineChart=(
        dailyData.length
        ?(
        <Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:"Infected",
                    borderColor:"#3333ff",
                    fill:true,
                }
                ,{
                    data:dailyData.map(({deaths})=>deaths),
                    label:"Deaths",
                    borderColor:"red",
                    backgroundColor:"rgpa(255,0,0,0.5)",
                    fill:true,
                }],

            }}
        />
        )
        :null
    )

    const barChart=(
        data.confirmed
        ?(
            <Bar 
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'

                        ],
                        data:[data.confirmed.value,data.recovered.value,data.deaths.value]

                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true,text:`Current State In ${country}`}

                }}
            />

        ):null


    );
    return (
        <div className={classes.container}>
            {(country===" ")?lineChart:barChart}
        </div>

    )
}

export default Charts;