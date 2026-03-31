import {useContext} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { TEXT_SIZE_OPTIONS } from "../../constants";
import styles from "./TextSize.module.scss";
import { ContextClick } from "../../contexts";

const TextSizeControls = (props) => {
  const {amountClicks }= useContext(ContextClick)
  const { size, setSize } = props;
  const showButton = ([title, option]) => (
    <button
      onClick={() => {
        setSize(title);
      }}
      key={title}
      className={classNames({ [styles.active]: size === title })}
    >
      {option.label}
    </button>
  );

  return <>
  <div>{Object.entries(TEXT_SIZE_OPTIONS).map(showButton)}</div>
  <div>amount click {amountClicks}</div>
  </> 
};

TextSizeControls.propTypes = {};

export default TextSizeControls;
