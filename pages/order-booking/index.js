import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import MainNavbar from 'src/layouts/main/MainNavbar';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { varFadeInUp, MotionInView, ButtonAnimate, varFadeInLeft } from '../../src/components/animate';
import CustomCard from 'src/components/card/CustomCard';
import Page from 'src/components/Page';

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),
    },
}));

export default function DemoTwo() {
    const [slidesToShow, setSlidesToShow] = useState(3);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const cardData = [
        {
            title: 'Demo One',
            image: '/static/mock-images/demo-one-1.png',
        },
        {
            title: 'Demo Two',
            image: '/static/mock-images/demo-one-2.png',
        },
        {
            title: 'Demo Three',
            image: '/static/mock-images/demo-one-3.png',
        },
        {
            title: 'Demo Four',
            image: '/static/mock-images/demo-one-4.png',
        },
        {
            title: 'Demo Five',
            image: '/static/mock-images/demo-one-5.png',
        }
    ]

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 960) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <MainNavbar />
            <Page title="Kitchen | Demo Two">
                <RootStyle>
                    <Container>
                        <MotionInView variants={varFadeInUp}>
                            <Slider {...settings}>
                                {cardData.map((item, index) => (
                                    <CustomCard key={index} cardIndex={index} sx={{ margin: 2 }}>
                                        <Box>
                                            <Typography sx={{ textAlign: 'center' }} variant="h4">
                                                {item.title}
                                            </Typography>
                                            <img src={item.image} alt="" />
                                        </Box>
                                    </CustomCard>
                                ))}
                            </Slider>
                        </MotionInView>

                        <MotionInView variants={varFadeInLeft}>
                            <ButtonAnimate mediumClick={true}>
                                <NextLink href='/demo-two/order-input' passHref>
                                    <Button
                                        sx={{ marginTop: 5, marginBottom: 2 }}
                                        variant='contained'>
                                        See Demo
                                    </Button>
                                </NextLink>
                            </ButtonAnimate>
                        </MotionInView>
                    </Container>
                </RootStyle>
            </Page>
        </>
    );
}
