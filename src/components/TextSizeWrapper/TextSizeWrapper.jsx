import {useState} from "react";
import PropTypes from "prop-types";
import TextSizeControls from "./TextSizeControls";
import { TEXT_SIZE_OPTIONS } from "../../constants";

const TextSizeWrapper = (props) => {
  const { children } = props;
  const [size, setSize] = useState("medium");

  return (
    <div style={{fontSize:TEXT_SIZE_OPTIONS[size].fontSize+"px"}}>
      <TextSizeControls size = {size} setSize = {setSize}/>
      {children}
    </div>
  );
};

TextSizeWrapper.propTypes = {};

export default TextSizeWrapper;
