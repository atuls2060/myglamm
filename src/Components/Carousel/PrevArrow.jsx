import {ArrowLeftIcon } from "@chakra-ui/icons";
import Styles from "./carousel.module.css";

export default (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={Styles.prevArrow}
            onClick={onClick}
        >
            <ArrowLeftIcon/>
        </div>
    );
}