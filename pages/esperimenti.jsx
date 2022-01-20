import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import LayoutDefault from "../layout/index";
import styles from "../styles/Esperimenti.module.scss";


export default function Esperimenti() {
  const [speed, setSpeed] = useState(5);
  const [opacity, setOpacity] = useState(0.5);
  const [size, setSize] = useState(5);
  const [number, setNumber] = useState(180);
  const [forma, setForma] = useState("square");
  const [colorPicker, setColorPicker] = useState("#ee5b5bff");
  const [collision, setCollision] = useState("false");
  const [direction, setDirection] = useState("none");
  const [outMode, setOutMode] = useState("bounce");
  const [bounce, setBounce] = useState("false")


  return (
    <LayoutDefault>
      <div className={styles.panel}>
      <br/>
  // SPEED
        <label>Speed</label>
        <input
          type="range"
          name=""
          id=""
          min="0"
          max="30"
          onChange={(e) => setSpeed(e.target.value * 1)}
        />

<br/><br/>
          //OPACITY
        <label>Opacity</label>
        <input
          placeholder="0 to 1"
          type="number"
          name=""
          id=""
          onChange={(e) => setOpacity(e.target.value * 1)}
        />
<br/><br/>
          //SIZE
        <label>Size</label>
        <input
          type="range"
          name=""
          id=""
          min="1"
          max="20"
          onChange={(e) => setSize(e.target.value * 1)}

        />
      
      <br/><br/>
//NUMBER OBJ
      <label>Number</label>
        <input
          placeholder="1 to 1000"
          type="number"
          name=""
          id=""
          onChange={(e) => setNumber(e.target.value)}

        />
<br/><br/>
          //FORM
<label>Form</label>
        <select
        
          type="range"
          name=""
          id=""
          onChange={(e) => setForma(e.target.value)}
        >
        <option value="square" selected>square</option>
        <option value="circle" >circle</option>
        <option value="triangle" >triangle</option>
        <option value="star" >star</option>
        <option value='polygon' >polygon</option>
        </select>
      
<br/><br/>
          //COLOR
        <label>Color</label>
        <input
          type="color"
          name=""
          id=""
          onChange={(e) => setColorPicker(e.target.value)}
         />

<br/><br/>
        //COLLISION
        <label>Collision</label>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => setCollision(e.target.checked)}
          />
<br/><br/>
        //DIRECTION
          <label>Direction</label>
          <select
            // type="range"
            name=""
            id=""
            onChange={(e) => setDirection(e.target.value)}
          >
          <option value="none" selected>none</option>
          <option value="bottom" >bottom</option>
          <option value="top" >top</option>
          <option value="left" >left</option>
          <option value="right" >right</option>
          </select>
<br/><br/>
            //OUT MODE
          <label>Out Mode</label>
          <select
            // type="range"
            name=""
            id=""
            onChange={(e) => setOutMode(e.target.value)}
          >
          <option value="bounce" selected>bounce</option>
          <option value="out" >out</option>
          </select>

          <br/><br/>
      //BOUNCE
          <label>Bounce</label>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => setBounce(e.target.checked)}
          />
        
      </div>
      <div className={styles.wrapper}>
        <Particles
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: colorPicker,
              },
              links: {
                color: "#00ff00",
                distance: 10,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: collision,
              },
              move: {
                bounce: bounce,
                direction: direction,
                enable: true,
                outMode: outMode,
                random: false,
                speed: speed,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: number,
              },
              opacity: {
                value: opacity,
              },
              shape: {
                type: forma,
              },
              size: {
                random: true,
                value: size,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </LayoutDefault>
  );
}
