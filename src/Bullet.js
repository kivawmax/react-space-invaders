import React, {useState, useEffect} from 'react'
import { makeStyles } from '@mui/styles'

const bulletStyles = makeStyles({
    bullet: {
        width: 5,
        height: 10,
        border: "0.5 solid black",
        position: 'absolute',
        backgroundColor: 'black',
        left: '50%',
        transform: 'translate(-50 %)',
        bottom: 0,
        zIndex: -1,
    }
})


function Bullet({ x = 0, y = 0}) {
    const [originPostition, setOriginPostition] = useState([x, y])
    const classes = bulletStyles();

    useEffect(() => {
        const a = setInterval(function () {
            setOriginPostition(pre => {
                let newValue = [...pre]
                newValue[1] = newValue[1] + 10
                return newValue
            })
        }, 1)
        return () =>  clearInterval(a)
    }, [])

    if(originPostition[1] > 510) {
        return null
    }

    return (
        <div className={classes.bullet} style={{ left: originPostition[0], bottom: originPostition[1] }}/>
    ) 
}

export default Bullet
