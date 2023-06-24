import PropTypes from "prop-types";
import s from "./style.module.css";
import image1 from "../../assets/batman-dev.jpeg";
import image2 from "../../assets/cat-dev.jpeg";
import image3 from "../../assets/dog-dev.jpeg";
import image4 from "../../assets/goku-dev.png";

const Images = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
];

const DisplayCharacter = (props) => {
  const currentImage =  Images.filter((img) => img.id === props.character.id);
  let url =  "https://t4.ftcdn.net/jpg/03/08/68/19/240_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg"
  if( currentImage && currentImage.length > 0 ){
    url = currentImage[0].image
  }
   
  return (
    <div className={s.container}>
      {<img width={300} height={300} src={url} />}
    </div>
  );
};
export default DisplayCharacter;

DisplayCharacter.prototype = {
  character: PropTypes.object,
};
