// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import GroupsIcon from '@mui/icons-material/Groups'

const salesData = [
  {
    stats: '$10k',
    title: 'Total Revinew',
    color: 'success',
    icon: <AttachMoneyIcon sx={{ fontSize: '1.75rem' }} />,
  },
  {
    stats: '8.5k',
    title: 'Total Revinew Count',
    color: 'primary',
    icon: <TrendingUpIcon sx={{ fontSize: '1.75rem' }} />,
  },
  {
    stats: '20.2k',
    color: 'info',
    title: 'Patient Per Day',
    icon: <GroupsIcon sx={{ fontSize: '1.75rem' }} />,
  },
]

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const AccountsCard = () => {
  return (
    <>
      <Card>
        <CardHeader
          title="Analytics Summery"
          subheader={
            <>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                <Box
                  component="span"
                  sx={{ fontWeight: 600, color: 'text.primary' }}
                >
                  {new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </Box>{' '}
                summary
              </Typography>
            </>
          }
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: '2rem !important',
              letterSpacing: '0.15px !important',
            },
          }}
        />
        <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
          <Grid container spacing={[5, 0]}>
            {renderStats()}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default AccountsCard
