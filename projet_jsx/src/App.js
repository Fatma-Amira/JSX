import React from 'react';
import './App.css';
import myImage from './imageInSrc.jpg';
import myVideo from './myVideo.mp4';
import './style.css';

function App() {
  return (
    <div className="App" >
 <div   style = {{border: 'solid 1px black', maxWidth: '100vw'}}>
 <h1 className = "title red"> Nature </h1>   

     <br />   

       <img src = {myImage}  /> <br /> 

          <img src = {"/imageInPublic.jpg"}/>   

</div>
<video width="320" height="240" controls>  
 
 <source src={myVideo} type="video/mp4"/> 

</video> 
</div>
  );
}

export default App;
