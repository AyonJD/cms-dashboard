import { Box, Button, Container, Typography } from "@mui/material";
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import Page from "src/components/Page";
import MainNavbar from "src/layouts/main/MainNavbar";
import { useRouter } from "next/router";
import SwiperAutoSlider from "src/components/Sider/SwiperAutoSlider";
import { ButtonAnimate, MotionInView } from "src/components/animate";

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),
    },
}));

export default function LandingSlider() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/demo-four/product-portfolio');

        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    const handleGoBack = () => {
        router.push('/demo-four');

        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    return (
        <>
            <MainNavbar />
            <Page title="Kitchen | Landing Slider">
                <RootStyle>
                    <Container>
                        <SwiperAutoSlider />

                        <Box sx={{ mt: 5 }}>
                            {/* <MotionInView variants={}> */}
                            <ButtonAnimate>
                                <NextLink href="/demo-four/product-portfolio" passHref>
                                    <Button
                                        // onClick={handleRedirect}
                                        variant="contained" color="primary" sx={{ mr: 2 }}>
                                        Product Portfolio
                                    </Button>
                                </NextLink>
                            </ButtonAnimate>

                            <ButtonAnimate mediumClick={true}>
                                <NextLink href="/demo-four/" passHref>
                                    <Button
                                        // onClick={handleGoBack}
                                        variant="contained" color="primary" sx={{ mr: 2 }}>
                                        Go Back
                                    </Button>
                                </NextLink>
                            </ButtonAnimate>
                        </Box>
                    </Container>
                </RootStyle>
            </Page>
        </>
    )
}