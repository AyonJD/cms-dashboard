import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// material
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import NextLink from 'next/link';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ sx }, ref) => {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
      <NextLink href="/" passHref>
        {/* <img src="/static/brand/logo.png" alt="" /> */}
        <Typography variant="h3" sx={{fontFamily: 'Saira Condensed, sans-serif', color: PRIMARY_MAIN }}>
          CMS
        </Typography>
      </NextLink>
    </Box>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
};

export default Logo;
