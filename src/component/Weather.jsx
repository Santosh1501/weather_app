import React from 'react'
import { Box } from '@material-ui/core'
import bgimg from '../assets/images/bg.jpg'
import { makeStyles } from '@material-ui/styles'
import Form from './Form'

const usestyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        width: '60%',
        alignItems: 'center',
        margin: '0 auto'
    },
    leftContainer: {
        backgroundImage: `url(${bgimg})`,
        height: '80%',
        width: '30%',
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
        height: '80%',
        width: '70%',
        borderRadius: '0 20px 20px 0'
    }
})

const Weather = () => {

    const classes = usestyles()
    return (
        <>
            <Box className={classes.component}>
                <Box className={classes.leftContainer}></Box>
                <Box className={classes.rightContainer}>
                    <Form />
                </Box>
            </Box>
        </>
    )
}

export default Weather
