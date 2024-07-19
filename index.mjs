import sharp from "sharp";
import axios from "axios";
// const sharp = require("sharp");

async function addWaterMark(imageURL) {
  // Fetch the image from the URL
  const response = await axios.get(imageURL, { responseType: 'arraybuffer' });
  const imageBuffer = Buffer.from(response.data, 'binary');

  sharp(imageBuffer)
    .metadata()
    .then((metadata) => {
      console.log(metadata)
      return metadata
    })
    .catch((err) => console.log("ERROR: ", err));
}

// try {

const res = await addWaterMark('https://images.graana.rocks/images/original/avsjemwm8zp6opg9oni0/1708491583.jpg')
console.log(res)
//   console.log('Hello')
// } catch (e) {
//   console.log('e', e)
// }
