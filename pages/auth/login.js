import { LoadingButton } from '@mui/lab'
import {
  CardHeader,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { setStorage } from 'api/useStorage'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import CustomCard from 'src/components/card/CustomCard'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

export default function Login() {
  const router = useRouter()

  const handleLogin = () => {
    toast.success('Login successful')
    setStorage('demo_token', '12345678')
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }

  return (
    <RootStyle>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '500px',
        }}
      >
        <CustomCard sx={{ width: '100%' }}>
          <CardHeader
            title="Login to continue"
            titleTypographyProps={{
              sx: {
                mb: 4,
                textAlign: 'center',
                lineHeight: '2rem !important',
                letterSpacing: '0.15px !important',
                marginTop: '-30px',
              },
            }}
          />
          <FormControl fullWidth sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Email address"
              type="email"
              autoComplete="email"
              autoFocus
              sx={{ mb: 3 }}
            />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{ mb: 3 }}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 3 }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Typography
                variant="subtitle2"
                component={Link}
                to="#"
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                Forgot password?
              </Typography>
            </Stack>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </LoadingButton>
          </FormControl>
        </CustomCard>
      </Container>
    </RootStyle>
  )
}
