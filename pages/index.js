/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import Color, { Palette } from "color-thief-react"
import React, {useState, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import getPredominantColorFromImgURL from 'color-thief-react/lib/utils/getPredominantColorFromImgURL'

const Loading = () => <div>Loading...</div>;
const sminoCaptions = [
  `let's see it...`,
  `stole’d yo heart 💔`,
  `Stuff’on Marbury`,
  `kan’t be a mirror 2 sumn das broken .`,
  `frodak 📸`,
  `obi-wan kinobe bryant 🛸`,
  `Loafer Grace 🗽`,
  `fashion weak .`,
  `mexico w/ dese bands issa Mariachi 🥁`,
  `steppachaun 🍀👟`,
  `Really B. Havinport`,
  `🍦Kream Abdul Jabboy🍦`,
  `Malcom X’tra Lemon Peppa ™️`,
  `sayin the least + doin the most 💡`,
  `keep a lil circle kuz I peephoes`,
  `Fallon Iverson`,
  `i love hard if i love at all..❤️💔`,
  `Slide Drexler`,
  `¿ hoodie season ?`,
  `“ Blurr Underwood `,
  `FROLAROID 📸`,
  `Thread Zeppelin 🧵🪡`,
  `Donny Outthaway`,
  `soda lotta records 🥤`,
  `Rule #1 - “Have fun wit the shit .”`,
  `“ Smi J Walker ”`
]

export default function Home() {
  const imgSrc = "https://live.staticflickr.com/65535/50237066832_72c7290c5c_c.jpg";
  const [hslColor, sethslColor ] = useState([]);
  const [ colorName, setColorName ] = useState("blue");
  const [smiCaption, setSmiCaption ] = useState(0);
  const [pictureNumber, setPictureNumber] = useState(0);
  // const imageLinkRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState();
  const [ dontDisplay, setdontDisplay ] = useState(false);

  const hslColorWheel = [
    "midRed", "warmRed", "orange", "warmYellow", "midYellow", "coolYellow", "yellowGreen", "warmGreen", "midGreen", "coolGreen",
     "greenCyan", "warmCyan", "midCyan", "coolCyan", "blueCyan", "coolBlue", "midBlue", "warmBlue", "violet", "coolMagenta",
      "midMagenta", "warmMagenta", "redMagenta", "coolRed"
  ]
  const sminoPictures = ["smino.png", "ohThatsHard.png", "thatsItRightThurr.png", "decentt.png", "durtyy.png"];
  
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    e.preventDefault();
    setPictureNumber(Math.floor(Math.random() * 3))
    // console.log(pictureNumber)
    setdontDisplay(true)
    }

  const removeSelectedImage = () => {
    setSelectedImage();
    setSmiCaption(0);
    setPictureNumber(0);
    setdontDisplay(false);
  };

  return (
    <Container fluid className={styles.containerStyle}>
      <img
        src="luv4rent.png"
        alt="logo"
        className={styles.logo}>
      </img>  
          <img
            src="polaroid.png"
            alt="polaroid image"
            className={styles.polaroid}>
          </img>
          <div
            className={styles.divPreview}>
            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                className={styles.divPreviewImage}
                alt="Thumb"
              />
            )}
          </div>
          <div className={styles.caption}>{sminoCaptions[smiCaption]}</div>
            <input
              accept="image/*"
              type="file"
              onChange={imageChange}
              className={styles.fileUpload}
            />
          <button onClick={removeSelectedImage} className={styles.restart}>
            Restart
          </button>
      {selectedImage && (
        <Palette src={URL.createObjectURL(selectedImage)} crossOrigin="anonymous" format="hslArray" colorCount={4}>
          {({ data, loading }) => {
            if (!loading) {
              sethslColor(data[1][0]);
              if (hslColor >= 0 && hslColor < 10) {
                setColorName(hslColorWheel[0]);
                setSmiCaption(0);
                console.log(1)
              } else if (hslColor >= 10 && hslColor < 25) {
                setColorName(hslColorWheel[1]);
                setSmiCaption(1);
                console.log(2)
              } else if (hslColor >= 25 && hslColor < 40) {
                setColorName(hslColorWheel[2]);
                setSmiCaption(2);
                console.log(3)
              } else if (hslColor >= 40 && hslColor < 55) {
                setColorName(hslColorWheel[3]);
                setSmiCaption(3);
                console.log(4)
              } else if (hslColor >= 55 && hslColor < 70) {
                setColorName(hslColorWheel[4]);
                setSmiCaption(4);
                console.log(5)
              } else if (hslColor >= 70 && hslColor < 85) {
                setColorName(hslColorWheel[5]);
                setSmiCaption(5);
                console.log(6)
              } else if (hslColor >= 85 && hslColor < 100) {
                setColorName(hslColorWheel[6]);
                setSmiCaption(6);
                console.log(7)
              } else if (hslColor >= 100 && hslColor < 115) {
                setColorName(hslColorWheel[7]);
                setSmiCaption(7);
                console.log(8)
              } else if (hslColor >= 115 && hslColor < 130) {
                setColorName(hslColorWheel[8]);
                setSmiCaption(8);
                console.log(9)
              } else if (hslColor >= 130 && hslColor < 145) {
                setColorName(hslColorWheel[9]);
                setSmiCaption(9);
                console.log(smiCaption)
              } else if (hslColor >= 145 && hslColor < 160) {
                setColorName(hslColorWheel[10]);
                setSmiCaption(10);
                console.log(smiCaption)
              } else if (hslColor >= 160 && hslColor < 175) {
                setColorName(hslColorWheel[11]);
                setSmiCaption(11);
                console.log(smiCaption)
              } else if (hslColor >= 175 && hslColor < 190) {
                setColorName(hslColorWheel[12]);
                setSmiCaption(12);
                console.log(smiCaption)
              } else if (hslColor >= 190 && hslColor < 205) {
                setColorName(hslColorWheel[13]);
                setSmiCaption(13);
                console.log(smiCaption)
              } else if (hslColor >= 205 && hslColor < 220) {
                setColorName(hslColorWheel[14]);
                setSmiCaption(14);
                console.log(smiCaption)
              } else if (hslColor >= 220 && hslColor < 235) {
                setColorName(hslColorWheel[15]);
                setSmiCaption(15);
                console.log(smiCaption)
              } else if (hslColor >= 235 && hslColor < 250) {
                setColorName(hslColorWheel[16]);
                setSmiCaption(16);
                console.log(smiCaption)
              } else if (hslColor >= 250 && hslColor < 265) {
                setColorName(hslColorWheel[17]);
                setSmiCaption(17);
                console.log(smiCaption)
              } else if (hslColor >= 265 && hslColor < 280) {
                setColorName(hslColorWheel[18]);
                setSmiCaption(18);
                console.log(smiCaption)
              } else if (hslColor >= 280 && hslColor < 295) {
                setColorName(hslColorWheel[19]);
                setSmiCaption(19);
                console.log(smiCaption)
              } else if (hslColor >= 295 && hslColor < 310) {
                setColorName(hslColorWheel[19]);
                setSmiCaption(20);
                console.log(smiCaption)
              } else if (hslColor >= 310 && hslColor < 325) {
                setColorName(hslColorWheel[19]);
                setSmiCaption(21);
                console.log(smiCaption)
              } else if (hslColor >= 325 && hslColor < 340) {
                setColorName(hslColorWheel[19]);
                setSmiCaption(22);
                console.log(smiCaption)
              } else if (hslColor >= 340 && hslColor < 360) {
                setColorName(hslColorWheel[19]);
                setSmiCaption(23);
                console.log(smiCaption)
              } else {
                console.log("issue")
              }
            }
          }}
        </Palette>
      )}
      <img
        src={sminoPictures[pictureNumber]}
        alt="smino reaction"
        className={styles.smino}>
      </img> 
    </Container>
  )
}

const styleStuff = {
  image: { maxWidth: "50%"},
};
