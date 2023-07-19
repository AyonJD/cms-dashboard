import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import menu2Fill from '@iconify/icons-eva/menu-2-fill'
// material
import { alpha, styled } from '@mui/material/styles'
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from '@mui/material'
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer'
//
import { MHidden } from '../../components/@material-extend'
import { useTheme } from '@mui/material/styles'
import AccountPopover from './AccountPopover'
import { useRouter } from 'next/router'
import { useState } from 'react'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280
const COLLAPSE_WIDTH = 102

const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}))

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
}

export default function DashboardNavbar({ onOpenSidebar }) {
  const router = useRouter()
  const { isCollapse } = useCollapseDrawer()
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <RootStyle
      sx={{
        ...(isCollapse && {
          width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` },
        }),
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)', // Fix on Mobile
        boxShadow: theme.customShadows.z8,
        bgcolor: 'background.default',
      }}
    >
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: 'text.primary' }}
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        {/* <Searchbar /> */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: 'text.primary',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'inline-block',
            },
          }}
        >
          Seamless Selection Made Easy
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Solutions
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose()
              router.push('/order-placement/order-form')
            }}
          >
            Order Placement
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose()
              router.push('/order-booking/select-product')
            }}
          >
            Order Booking
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose()
              router.push('/order-delivery/select-product')
            }}
          >
            Order Delivery
          </MenuItem>
        </Menu>

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 2 }}>
          <Button
            onClick={() => router.push('/#details')}
            sx={{ color: 'text.primary' }}
          >
            Details
          </Button>
          
          <Button
            onClick={() => router.push('/contact-us')}
            sx={{ color: 'text.primary' }}
          >
            Contact Us
          </Button>

          <Button
            onClick={() => router.push('/auth/login')}
            variant="contained"
            sx={{ color: '#fff' }}
          >
            Login
          </Button>
          {/* <LanguagePopover />
          <NotificationsPopover /> */}
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  )
}
