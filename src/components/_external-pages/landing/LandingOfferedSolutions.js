import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
// material
import { useTheme, styled, alpha } from '@mui/material/styles';
import {
    Box,
    Grid,
    Card,
    Link,
    Stack,
    Button,
    Divider,
    Container,
    Typography,
} from '@mui/material';
//
import {
    varZoomIn,
    varFadeIn,
    varFadeInUp,
    MotionInView,
    varFadeInDown,
    varFadeInRight,
} from '../../animate';
import CustomCard from 'src/components/card/CustomCard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import TapasIcon from '@mui/icons-material/Tapas';

// ----------------------------------------------------------------------

const SOLUTIONTITLE = ['Order Placement', 'Order Booking', 'Order Delivery'];
const SOLUTION_URL = ['/order-placement/order-form', '/order-booking/select-product', '/order-delivery/select-product'];
const SOLUTION_ICON = [RestaurantIcon, RamenDiningIcon, TapasIcon];

const SOLUtION_ITEMS = [...Array(3)].map((_, index) => ({
    title: SOLUTIONTITLE[index],
    icon: SOLUTION_ICON[index],
    url: SOLUTION_URL[index],

}));

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),
    },
}));

// ----------------------------------------------------------------------

// function SolutionsCard({ solution, cardIndex }) {
//     const theme = useTheme();
//     const { title, icon } = solution;

//     const isLight = theme.palette.mode === 'light';

//     return (
//         <Card
//             sx={{
//                 cursor: 'pointer',
//                 p: 5,
//                 boxShadow: (theme) =>
//                     `0px 48px 80px ${alpha(
//                         isLight ? theme.palette.grey[500] : theme.palette.common.black,
//                         0.12
//                     )}`,
//                 ...(cardIndex === 1 && {
//                     boxShadow: (theme) =>
//                         `0px 48px 80px ${alpha(
//                             isLight ? theme.palette.grey[500] : theme.palette.common.black,
//                             0.48
//                         )}`,
//                 }),
//             }}
//         >
//             <Stack spacing={5}>
//                 <div>
//                     <Typography
//                         variant='overline'
//                         sx={{ mb: 2, color: 'text.disabled', display: 'block' }}
//                     >
//                         LICENSE
//                     </Typography>
//                     <Typography variant='h4'>{title}</Typography>
//                 </div>
//             </Stack>
//         </Card>
//     );
// }

export default function LandingOfferedSolutions() {

    return (
        <RootStyle>
            <Container sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row'
                }
            }}>
                <Box>
                    <motion.div variants={varFadeInRight}>
                        <Typography variant='h1' >
                            Start your <br />
                            new journey <br /> with
                            <Typography
                                component='span'
                                variant='h1'
                                sx={{ color: 'primary.main' }}
                            >
                                &nbsp;Kitchen
                            </Typography>
                        </Typography>
                    </motion.div>

                    <motion.div variants={varFadeInRight}>
                        <Typography sx={{
                            marginTop: 4, marginBottom: 4, marginRight: {
                                xs: 0,
                                sm: 0,
                                md: 4
                            }
                        }}>
                            Experience the perfect harmony of culinary mastery and inviting accommodations at Kitchen Hotel, ensuring an unforgettable stay.
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={5}>
                    {SOLUtION_ITEMS.map((item, index) => (
                        <NextLink href={item.url} passHref key={index}>
                            <Grid item xs={12} md={index === 2 ? 12 : 6}>
                                <MotionInView
                                    variants={index === 0 || index === 1 ? varFadeInDown : varFadeInUp}
                                >
                                    <CustomCard cardIndex={index}>
                                        <Stack spacing={5}>
                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <item.icon sx={{ color: 'primary.main' }} style={{ fontSize: 50, mb: 2 }} />
                                                <Typography sx={{ color: 'primary.main' }} variant='h4'>{item.title}</Typography>
                                            </div>
                                        </Stack>
                                    </CustomCard>
                                </MotionInView>
                            </Grid>
                        </NextLink>
                    ))}
                </Grid>
            </Container>
        </RootStyle >
    );
}
