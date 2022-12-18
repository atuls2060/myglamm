import { Img } from "@chakra-ui/react";
import Styles from "./carousel.module.css";

export default (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={Styles.nextArrow}
            onClick={onClick}
        >
            <Img mr={"-15px"}  src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Farrow_right.svg?alt=media&token=19fa476d-73da-429a-9804-8758b7ad2da0"  alt=""/>
        </div>
    );
}
