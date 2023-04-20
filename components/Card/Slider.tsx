import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SliderVariants, SliderWrap } from "./styled";
import { FC, useRef } from "react";
import { ImgWrap } from "styles/img-wrap";
import Image from "next/image";
import Chip from "components/Chip";
import { useState } from "react";

interface ISlider {
  data?: any;
  handleChangeVariant: (idx: number) => void
  variants: {
    images: {
      data: {
        attributes: {
          url: string
        }
      }[]
    }
    title: string
  }[]
}

const Slider: FC<ISlider> = ({variants, handleChangeVariant}) => {

  const swiperRef = useRef(null);
  const [index, setIndex] = useState<number>(0)

  const handleClick = (idx: number) => {
    // @ts-ignore
    if(swiperRef.current?.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideTo(idx)
      setIndex(idx)
      handleChangeVariant(idx)
    }
  }

  return (
    <SliderWrap>
      <Swiper
        ref={swiperRef}
        onActiveIndexChange={index => {setIndex(index.activeIndex); handleChangeVariant(index.activeIndex)}}
        style={{
          overflow: "visible",
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {variants.map((item: any, idx: number) => <SwiperSlide key={idx} style={{height: 'auto'}}>
          <ImgWrap className="slider-img-wrap">
            <Image src={item.images.data[0].attributes.url} fill alt="" />
          </ImgWrap>
        </SwiperSlide>)}
      </Swiper>
      <SliderVariants>
        {variants.map((item: any, idx: number) => <Chip color="secondary" key={idx} label={item.title} onClick={() => handleClick(idx)} variant={index === idx ? 'filled' : 'outlined'}/>)}
      </SliderVariants>
    </SliderWrap>
  );
};

export default Slider;
