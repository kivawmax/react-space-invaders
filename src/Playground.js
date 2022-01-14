import React from 'react'
import { makeStyles } from '@mui/styles'

const style = makeStyles({
    Playground:{
        width: 420,
        height: 500,
        border:'1px solid black',
        margin: 'auto',
        position: 'relative',
        overflow: 'hidden',
    }
})

function Playground({children}) {
    const classes = style()
    return (
        <div className={classes.Playground}>
            {children}
        </div>
    )
}

export default Playground
