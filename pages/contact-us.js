import {
  Button,
  FormControl,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Page from 'src/components/Page'
import { ButtonAnimate } from 'src/components/animate'
import CustomCard from 'src/components/card/CustomCard'
import MainLayout from 'src/layouts/main'
import { FONT_MONO } from 'src/theme/typography'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(6),
  height: '100%',
}))

export default function () {
  return (
    <MainLayout>
      <RootStyle title="CMS | Contact Us" id="move_top">
        <CustomCard
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: {
              xs: '100%',
              sm: '70%',
              md: '500px',
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                sx={{ mb: 3, textAlign: 'center', fontFamily: FONT_MONO }}
              >
                Contact us
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField label="Name" color="primary" sx={{ mb: 1 }} />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField label="Email" color="primary" sx={{ mb: 1 }} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextareaAutosize
                  aria-label="minimum height"
                  variant="outlined"
                  minRows={5}
                  placeholder="Message"
                  sx={{ mb: 1 }}
                  style={{
                    width: '100%',
                    padding: 10,
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </CustomCard>
      </RootStyle>
    </MainLayout>
  )
}
