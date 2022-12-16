import { ArrowRightIcon } from "@chakra-ui/icons";
import { background } from "@chakra-ui/react";
import Styles from "./carousel.module.css";

export default (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={Styles.nextArrow}
            onClick={onClick}
        >
            <ArrowRightIcon />
        </div>
    );
}
