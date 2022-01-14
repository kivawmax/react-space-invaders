import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'

// let enemies = []

// for (let i = 0; i < 6; i++) {
//     let randomPosit = Math.floor(Math.random() * (400 - 30) + 30)
//     enemies.push(randomPosit)
// }

const enemyStyles = makeStyles({
    enemy: {
        width: 30,
        height: 10,
        border: '0.5 solid black',
        position: 'absolute',
        background: 'black',
        bottom: 400,
        left: 210
    }
})


let moveUnit = 1

function Enemy({ x=210, y=400}) {
    let classes = enemyStyles()

    const [oriPosition, setOriPosition] = useState([x, y])

    function moveEnemy() {
        if(oriPosition[0] >= 410){

            moveUnit = -1
        } 
        if(oriPosition[0] <= 10){
            moveUnit = 1
        }

        console.log(oriPosition)
        console.log(moveUnit)

        setOriPosition(pre => {
            let newVal = [...pre]
            newVal[0] = newVal[0] + moveUnit
            return newVal
        })
    }

    useEffect(() => {
        const a = setInterval(() => {
            moveEnemy()
            // console.log(1)
        }, 10)

    
        return () => clearInterval(a)
    }, [moveEnemy])


return (
    <div className={classes.enemy} style={{left: oriPosition[0], bottom: oriPosition[1]}}/>
)
}

export default Enemy
