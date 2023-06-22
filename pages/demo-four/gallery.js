import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Page from "src/components/Page";
import SwiperGallery from "src/components/Sider/SwiperGallery";
import { MotionInView, TextAnimate, varFadeInDown, varFadeInUp } from "src/components/animate";
import MainNavbar from "src/layouts/main/MainNavbar";

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),
    },
}));

export default function Gallery() {
    const cardData = [
        {
            title: 'Demo One',
            image: '/static/mock-images/slider-1.jpg',
        },
        {
            title: 'Demo Two',
            image: '/static/mock-images/slider-2.jpg',
        },
        {
            title: 'Demo Three',
            image: '/static/mock-images/slider-3.jpg',
        },
        {
            title: 'Demo Four',
            image: '/static/mock-images/slider-4.jpg',
        }
    ]

    return (
        <>
            <MainNavbar />
            <Page title="Kitchen | Gallery">
                <RootStyle>
                    <Container>
                        <MotionInView variants={varFadeInDown}>
                            <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontFamily: 'cursive' }}>
                                Visit Our Gallery
                            </Typography>
                        </MotionInView>

                        <MotionInView variants={varFadeInUp}>
                            <SwiperGallery cardData={cardData} />
                        </MotionInView>
                    </Container>
                </RootStyle>
            </Page>
        </>
    )
}