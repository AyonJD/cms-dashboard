// material
import { Card } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

export default function CustomCard({ cardIndex, children, sx }) {
    const theme = useTheme();

    const isLight = theme.palette.mode === 'light';

    return (
        <Card
            sx={{
                cursor: 'pointer',
                p: 5,
                boxShadow: (theme) =>
                    `0px 48px 80px ${alpha(
                        isLight ? theme.palette.grey[500] : theme.palette.common.black,
                        0.12
                    )}`,
                ...(cardIndex === 1 && {
                    boxShadow: (theme) =>
                        `0px 48px 80px ${alpha(
                            isLight ? theme.palette.grey[500] : theme.palette.common.black,
                            0.48
                        )}`,
                }),
                ...sx,
            }}
        >
            {children}
        </Card>
    );
}