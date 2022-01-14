import React from 'react'
import { makeStyles } from '@mui/styles';

const myStyle = makeStyles({
  rect: {
    width: 20,
    height: 20,
    backgroundColor: 'purple',
    top: 100,
    left: 210,
    transform: `translate(-50%)`,
    position: 'absolute'
  },
})

function Rect({ top, left, c }) {
  const classes = myStyle();
  return (
    <div className={classes.rect} style={{ top: top, left: left, backgroundColor: c }}>
    </div>
  )
}

export default Rect
