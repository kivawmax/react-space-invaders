import React, { useState, useEffect, useCallback } from 'react'
import { makeStyles } from '@mui/styles'
import Bullet from './Bullet'

const style = makeStyles({
    Ship: {
        width: 20,
        height: 20,
        border: '1px solid red',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%)',
    },
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

function Ship() {
    const classes = style()

    const [position, setPosition] = useState({
        bottom: 0,
        left: 210
    })
    const modifier = 10;

    // let keyList = {}

    const [bullets, setBullets] = useState([])
    useEffect(() => {
        const keyHandler = e => {
            let currentBottom = position.bottom
            let currentLeft = position.left

            // keyList[e.key] = true
            switch (e.key) {
                case 'ArrowUp':
                    currentBottom += modifier
                    break;
                case 'ArrowDown':
                    currentBottom -= modifier
                    break;
                case 'ArrowLeft':
                    currentLeft -= modifier
                    break;
                case 'ArrowRight':
                    currentLeft += modifier
                    break;
                case ' ':
                    setBullets(arr => [...arr, [position.left, position.bottom]])

            }

            // if (keyList['ArrowUp']) {
            //     currentBottom += modifier
            // }
            // if (keyList['ArrowDown']) {
            //     currentBottom -= modifier
            // }
            // if (keyList['ArrowLeft']) {
            //     currentLeft -= modifier
            // }
            // if (keyList['ArrowRight']) {
            //     currentLeft += modifier
            // }
            // if (keyList[' ']) {
            //     setBullets(arr => [...arr, [position.left, position.bottom]
            // }


            if (currentBottom >= 480) currentBottom = 480
            if (currentBottom <= 0) currentBottom = 0
            if (currentLeft >= 400) currentLeft = 400
            if (currentLeft <= 20) currentLeft = 20

            setPosition({
                bottom: currentBottom,
                left: currentLeft
            })

            // const testa = useCallback(event => {
            //         delete keyList[e.key]
            //       }, []);
        }
        window.addEventListener('keydown', keyHandler);
        // window.addEventListener('keyup', testa)
        return () => {
            window.removeEventListener('keydown', keyHandler);
            // window.removeEventListener("keyup", testa)

        };
    }, [position, modifier]);



    return (
        <>
            <div className={classes.Ship} style={position} />
            {bullets.map((item, index) => <Bullet key={index} x={item[0]} y={item[1]} />)}
        </>
    )
}

export default Ship
