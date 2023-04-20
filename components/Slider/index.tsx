import { Swiper, SwiperSlide } from "swiper/react"
import { SliderWrap } from "./styled"
import { ImgWrap } from "styles/img-wrap"
import Image from "next/image"
import { FC } from "react"

interface ISlider {
  data: any[]
}

const APP_API = process.env.APP_API

const Slider: FC<ISlider> = ({data}) => {
  return (
    <SliderWrap>
      <Swiper
        style={{
          overflow: "visible",
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {data.map((item: string, idx: number) => <SwiperSlide key={idx} style={{height: 'auto'}}>
          <ImgWrap>
            <Image src={item} fill alt="" />
          </ImgWrap>
        </SwiperSlide>)}
      </Swiper>
    </SliderWrap>
  )
}

export default Slider