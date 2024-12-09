import { Box, Card, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import DashboardLayout from '@/components/layouts/DashboardLayout';
import {
    People as PeopleIcon,
    ShoppingCart as ShoppingCartIcon,
    AttachMoney as AttachMoneyIcon,
    Assessment as AssessmentIcon,
} from '@mui/icons-material';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const Dashboard = () => {
    return (
        <DashboardLayout>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" sx={{ mb: 4 }}>
                    Панель управления
                </Typography>

                <Grid container spacing={3}>
                    {/* Статистические карточки */}
                    <Grid item xs={12} sm={6} md={3}>
                        <StyledCard>
                            <Box>
                                <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                >
                                    Пользователи
                                </Typography>
                                <Typography variant="h4">1,234</Typography>
                            </Box>
                            <PeopleIcon
                                sx={{ fontSize: 40, color: 'primary.main' }}
                            />
                        </StyledCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <StyledCard>
                            <Box>
                                <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                >
                                    Заказы
                                </Typography>
                                <Typography variant="h4">456</Typography>
                            </Box>
                            <ShoppingCartIcon
                                sx={{ fontSize: 40, color: 'secondary.main' }}
                            />
                        </StyledCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <StyledCard>
                            <Box>
                                <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                >
                                    Доход
                                </Typography>
                                <Typography variant="h4">$5,678</Typography>
                            </Box>
                            <AttachMoneyIcon
                                sx={{ fontSize: 40, color: 'success.main' }}
                            />
                        </StyledCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <StyledCard>
                            <Box>
                                <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                >
                                    Конверсия
                                </Typography>
                                <Typography variant="h4">12%</Typography>
                            </Box>
                            <AssessmentIcon
                                sx={{ fontSize: 40, color: 'warning.main' }}
                            />
                        </StyledCard>
                    </Grid>

                    {/* Основной контент */}
                    <Grid item xs={12}>
                        <Card sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Последние действия
                            </Typography>
                            {/* Здесь можно добавить таблицу или список действий */}
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </DashboardLayout>
    );
};

export default Dashboard;
