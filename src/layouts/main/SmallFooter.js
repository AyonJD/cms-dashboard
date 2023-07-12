import { Box, Link, Typography } from '@mui/material'

export default function SmallFooter() {
  return (
    <Box sx={{ background: '#212B36', marginTop: 3, py: '2px' }}>
      <Typography
        variant="subtitle2"
        component={Link}
        to="#"
        align="center"
        sx={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
      >
        Powred by Syntax Systems
      </Typography>
    </Box>
  )
}
