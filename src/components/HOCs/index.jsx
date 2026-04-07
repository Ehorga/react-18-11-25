import { useContext } from "react";
import { ContextClick } from "../../contexts";
const withContextClick = (InnerComponent) => {
    return function InnerComponentWithContextClick(props){
        const {amountClicks, setAmountClicks} = useContext(ContextClick)
        return <InnerComponent {...props} amountClicks = {amountClicks} setAmountClicks = {setAmountClicks}/>
    }
};
export default withContextClick;