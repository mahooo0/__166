import React, { useState } from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    Card,
    CardContent,
    Button,
} from '@mui/material';

export default function Dashboard() {
    const [asideOpen, setAsideOpen] = useState(false);

    const toggleAside = () => {
        setAsideOpen(!asideOpen);
    };

    return (
        <div className="p-0">
            {/* Header Component */}
            <Header onMenuClick={toggleAside} />

            {/* Aside (Sidebar) Component */}
            <Aside open={asideOpen} onClose={toggleAside} />

            <Box display="flex" flexDirection="row" padding={3} flexGrow={1}>
                {/* Sidebar space */}
                {/* <Box width={250} /> */}
                {/* Dashboard Grid Content */}
                <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                    {/* Card 1 */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Total Revenue
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    $12,500
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Card 2 */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Orders
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    450
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Orders
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Card 3 */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    New Customers
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    34
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Customers
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>{' '}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Total Revenue
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    $12,500
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Card 2 */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Orders
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    450
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Orders
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Card 3 */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    New Customers
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    34
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Customers
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>{' '}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Total Revenue
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    $12,500
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Card 2 */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Orders
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    450
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Orders
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Card 3 */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    New Customers
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    34
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2 }}
                                >
                                    View Customers
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
