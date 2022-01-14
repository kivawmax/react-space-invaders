// import React, { useEffect, useCallback, useState } from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"
// import Rect from './Rect';
// import Bullet from './Bullet'


// const modifier = 10;

// function App() {
//   const [move, setMove] = useState({
//     bottom: 0,
//     left: 210
//   })



//   let keyList = {}

//   const handleUserKeyPress = useCallback(event => {
//     let flapBox = document.getElementsByClassName("flappy-box")[0]
//     let currentBottom = flapBox.style.bottom;
//     let currentleft = flapBox.style.left;

//     keyList[event.key] = true
//     if (keyList['ArrowUp']) {
//       currentBottom = parseInt(currentBottom) + modifier
//     }
//     if (keyList['ArrowDown']) {

//       currentBottom = parseInt(currentBottom) - modifier
//     }
//     if (keyList['ArrowLeft']) {

//       currentleft = parseInt(currentleft) - modifier
//     }
//     if (keyList['ArrowRight']) {
//       currentleft = parseInt(currentleft) + modifier
//     }
//     if (keyList[" "]) {
//       console.log('space pressed')
//       Bullet(10, 100)
//     }

//     if (currentBottom >= 480) currentBottom = 480
//     if (currentBottom <= 0) currentBottom = 0
//     if (currentleft >= 400) currentleft = 400
//     if (currentleft <= 20) currentleft = 20
//     setMove((pre) => {
//       let newValue = { ...pre }
//       newValue.bottom = currentBottom
//       newValue.left = currentleft
//       return newValue
//     })

//   }, []);


//   const testa = useCallback(event => {
//     delete keyList[event.key]
//   }, []);

//   useEffect(() => {
//     window.addEventListener("keydown", handleUserKeyPress);
//     window.addEventListener("keyup", testa);
//     return () => {
//       window.removeEventListener("keydown", handleUserKeyPress);
//       window.removeEventListener("keyup", testa);
//     };
//   }, [handleUserKeyPress]);




//   return (
//     <>
//       <div className="flappy-box" style={move}/>
//       {/* <Bullet /> */}
//     </>
//   )
// }


// ReactDOM.render(
//   <div id='border'>
//     <App />
//   </div>,
//   document.getElementById('root')
// );


