import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import classes from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards =(props)=>{
    if(!props.data.confirmed){
        return 'Loading...';
    }
    return (
        <div className={classes.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={props.data.confirmed.value}
                                duration={2.5}
                                separator=","
                            
                            />
                            
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of active cases of COVID-19</Typography>
                        
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={props.data.recovered.value}
                                duration={2.5}
                                separator=","
                            
                            />
                            
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of Recoveries cases of COVID-19</Typography>
                        
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={props.data.deaths.value}
                                duration={2.5}
                                separator=","
                            
                            />
                            
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of Deaths caused by COVID-19</Typography>
                        
                    </CardContent>

                </Grid>                                

            </Grid>
        </div>
    )
}

export default Cards;