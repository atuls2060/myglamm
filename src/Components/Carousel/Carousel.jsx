import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import Slider from "react-slick";
import Styles from "./carousel.module.css"
import ProductCard from "../ProductCard";
import { Container, Img } from "@chakra-ui/react";

export default ({ slidesToShow = 1, slidesToScroll = 1, images, products = [] }) => {
  let settings = {
    dots: slidesToShow === 1,
    arrows: true,
    autoplay: true,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots slick-thumb slick active",
    slidesToShow,
    slidesToScroll,
    pauseOnHover: false,
    customPaging: function (i) {
      return <a className={Styles.dot}></a>;
    }
  }
  return (
    <Container p={0} maxW="100%" className={slidesToShow === 1 ? Styles.container : Styles.dark_container}>
      <Slider {...settings}>
        {
          images?.map((item, index) => {
            return <Img key={index} src={item.image} alt="" />
          })
        }
        {
          products?.map((item, index) => {
            return <ProductCard key={index} {...item} />
          })
        }
      </Slider>
    </Container>
  );
};