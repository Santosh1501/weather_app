import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudIcon from '@material-ui/icons/Cloud';
const usestyles = makeStyles({
    component: {
        margin: 50
    },

    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 1.5
    },
    value: {
        color: '#fff'
    },
    icon: {
        marginRight: 15,
        color: 'darkred'
    }
})

const WeatherInfo = ({ data }) => {

    const classes = usestyles()
    return (
        <>
            {
                data ?
                    <Box className={classes.component}>
                        <Typography className={classes.row}><LocationOnIcon className={classes.icon} />City Name: <Box component="span" className={classes.value}>{data.name},{data.sys.country}</Box></Typography>
                        <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon} />Temperature: <Box component="span" className={classes.value}>{data.main.temp}°C</Box></Typography>
                        <Typography className={classes.row}><OpacityIcon className={classes.icon} />Humidity: <Box component="span" className={classes.value}>{data.main.humidity}%</Box></Typography>
                        <Typography className={classes.row}><WbSunnyIcon className={classes.icon} />Sunrise: <Box component="span" className={classes.value}>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
                        <Typography className={classes.row}><Brightness4Icon className={classes.icon} />Sunset: <Box component="span" className={classes.value}>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
                        <Typography className={classes.row}><DehazeIcon className={classes.icon} />Condition : <Box component="span" className={classes.value}>{data.weather[0].main}</Box></Typography>
                        <Typography className={classes.row}><CloudIcon className={classes.icon} />Clouds : <Box component="span" className={classes.value}>{data.clouds.all}%</Box></Typography>
                        <Typography></Typography>
                    </Box> : ''
            }
        </>
    )
}

export default WeatherInfo
