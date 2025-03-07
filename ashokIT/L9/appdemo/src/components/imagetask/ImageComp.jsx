
import "./ImageComp.css";
import { useState } from "react";


function ImageComp() {

    let[title, setTitle] = useState("React")

    let [url, setUrl] = useState("https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjplnld3gptkremcqom5q.png");

    const changeToAngular = () =>{

        setUrl("https://miro.medium.com/v2/resize:fit:1400/1*exqug2FOuGIwh_SEWWbKZA.png ")

        setTitle("Angular");
    }

    const changeToReact = () => {
        setUrl("https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjplnld3gptkremcqom5q.png")

        setTitle("React");
    }

    return(
        <div id="ImageComp">
          <h2 style = {{color: "red"}}>{title }</h2>
          <img src={url} width="400" height="300"/>
          <br/>
          <br/>

          <button onClick={changeToReact}>React</button>
          <button onClick={changeToAngular }>Angular</button>
         </div>
    );
}

export default ImageComp; 