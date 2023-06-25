import PropTypes from "prop-types";
import s from "./style.module.css";


const DisplayCharacter = (props) => {

  let url =  "https://t4.ftcdn.net/jpg/03/08/68/19/240_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg"
  if( props.character.profile ){
    url = "/src/assets/"+ props.character.profile
  }
   console.log(props)
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
