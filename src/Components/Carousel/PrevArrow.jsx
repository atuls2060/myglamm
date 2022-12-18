import Styles from "./carousel.module.css";
import { Img } from "@chakra-ui/react";

export default (props) => {
    const { className, style, onClick} = props;
    return (
        <div
            className={Styles.prevArrow}
            onClick={onClick}
        >
       <Img ml={"-8px"} src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Farrow_left.svg?alt=media&token=ba3d3652-e2df-4cb3-a99a-b682426d9d9c"  alt=""/>
        </div>
    );
}