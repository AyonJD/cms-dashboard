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
import LoginIcon from '@mui/icons-material/Login'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import Page from 'src/components/Page'
import { useState } from 'react'
import { loginEmail, loginPass } from 'src/constant/constant'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundImage: 'url("/static/old.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
}))

const LoginFormStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  position: 'relative',
  width: '550px',
}))

const IconWrapperStyle = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(6px)',
  boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)',
  border: '2px solid #fff',
  zIndex: '9',
}))

export default function Login() {
  const router = useRouter()
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setLoginData(prev => ({ ...prev, [name]: value }))
  }

  const handleLogin = () => {
    if (loginData.email !== loginEmail) {
      toast.error('Wrong Email address')
      return
    }
    if (loginData.password !== loginPass) {
      toast.error('Incorrect Password')
      return
    }
    toast.success('Login successful')
    setStorage('demo_token', '12345678')
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }

  return (
    <RootStyle>
      <Page title="CMS | Login" />
      <LoginFormStyle>
        <IconWrapperStyle>
          <HealthAndSafetyIcon sx={{ fontSize: 35 }} />
        </IconWrapperStyle>
        <Container maxWidth="sm">
          <CustomCard
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(6px)',
              boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)',
            }}
          >
            <CardHeader
              title={'Login to Continue'}
              titleTypographyProps={{
                sx: {
                  mb: 4,
                  textAlign: 'center',
                  lineHeight: '2rem !important',
                  letterSpacing: '0.15px !important',
                  marginTop: '-10px',
                },
              }}
            />
            <FormControl fullWidth sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Email address"
                type="email"
                name="email"
                onChange={e => handleChange(e)}
                autoComplete="email"
                autoFocus
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff',
                    },
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={e => handleChange(e)}
                autoComplete="current-password"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff',
                    },
                  },
                }}
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
      </LoginFormStyle>
    </RootStyle>
  )
}
