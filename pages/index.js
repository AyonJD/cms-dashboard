// layouts
import MainLayout from 'src/layouts/main';
// material
import { styled } from '@mui/material/styles';
// components
import Page from 'src/components/Page';
import {
  LandingHero
} from 'src/components/_external-pages/landing';
import LandingOfferedSolutions from 'src/components/_external-pages/landing/LandingOfferedSolutions';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <MainLayout>
      <RootStyle
        title='CMS'
        id='move_top'
      >
        <LandingHero />
        <ContentStyle>
          <LandingOfferedSolutions />
        </ContentStyle>
      </RootStyle>
    </MainLayout>
  );
}
