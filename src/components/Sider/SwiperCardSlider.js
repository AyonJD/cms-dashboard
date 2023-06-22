import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";
import { Box, Typography } from "@mui/material";

export default function SwiperCardSlider({ sliderBackground, cardData }) {
    return (
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper card_swiper">
            {cardData.map((card, index) => (
                <SwiperSlide className="card_swiper-slide" key={index}>
                    <Box sx={{ background: sliderBackground, height: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 2, marginTop: 2 }}>
                                {card.title}
                            </Typography>
                            <img src={card.image} alt={card.title} />
                        </Box>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

