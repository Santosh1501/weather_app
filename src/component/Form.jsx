import React, { useEffect, useState } from 'react'
import { Box, TextField, Button, makeStyles } from '@material-ui/core'
import { getData } from '../service/api'
import WeatherInfo from './WeatherInfo'


const usestyles = makeStyles({

    component: {
        padding: 10,
        background: '#445A6f'
    },
    input: {
        color: 'white',
        marginRight: 15
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: "blue",
        marginTop: 5
    }
})


const Form = () => {

    const classes = usestyles()


    const [data, getWeatherData] = useState()

    const [city, setCity] = useState('')

    const [country, setCountry] = useState('')

    const [click, handelClick] = useState(false)

    useEffect(() => {
        const getweather = async () => {

            city && await getData(city, country).then((response) => {

                getWeatherData(response.data)
            })
        }
        getweather()
        handelClick(false)
    }, [click])

    const handelCity = (value) => {
        setCity(value)
    }

    const handelCountry = (value) => {
        setCountry(value)
    }

    return (
        <>
            <Box className={classes.component}>
                <TextField label="City" inputProps={{ className: classes.input }} className={classes.input} onChange={(e) => handelCity(e.target.value)} />
                <TextField label="Country" inputProps={{ className: classes.input }} className={classes.input} onChange={(e) => handelCountry(e.target.value)} />
                <Button variant="contained" color="primary" className={classes.button} onClick={() => handelClick(true)}>
                    Get Weather
                </Button>
            </Box>

            <WeatherInfo data={data} />
        </>
    )
}

export default Form
