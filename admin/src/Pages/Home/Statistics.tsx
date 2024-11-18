import { Add, Delete, Edit, Margin, Title } from '@mui/icons-material';
import {
    Box,
    Button,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import EditStatistikxText from '../../components/Modals/EditStatistikxText';
import EditStatisticsModal from '../../components/Modals/EditStatistiks';
import DeleteModal from '../../components/DeleteModal';
import Loading from '../../components/Loading';
import { useQuery } from '@tanstack/react-query';
import {
    DeleteServices,
    GetServicesText,
    GetStatistick,
    PostServices,
    PutServices,
    PutServicesText,
} from '../../Services/Rerquests';
import { toast } from 'react-toastify';

export default function Statistics() {
    const initialData = {
        title: { az: 'ssss', en: 'ssss', ru: 'ssss' },
        description: { az: 'AAAAAAAAAA', en: 'ssss', ru: 'ssss' },
    };
    const [open, setOpen] = useState(false);
    const [REfetch, setREfetch] = useState(false);
    const [editopen, seteditOpen] = useState(false);
    const [Deliteopen, setDeliteOpen] = useState(false);
    const [CurrentService, setCurrentService] = useState<any>();
    const {
        data: StatistickTitle,
        error: StatistickTitleEror,
        isLoading: StatistickTitleLoafing,
    } = useQuery({
        queryKey: ['ServicesText', REfetch],
        queryFn: GetServicesText,
    });
    const {
        data: Statistick,
        error: StatistickEror,
        isLoading: StatistickLoafing,
    } = useQuery({
        queryKey: ['Statistick', REfetch],
        queryFn: GetStatistick,
    });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = async (updatedData: any) => {
        console.log('updatedData:', updatedData);
        try {
            await PutServicesText(updatedData);
            toast.success('updated');
            setREfetch((prew) => !prew);
        } catch (error) {
            console.log(error);
            toast.error('error log for more ');
        }
        // (updatedData);
    };
    const dataArray = [
        {
            title: { az: 'aaa', en: 'aaa', ru: 'aaa' },
            description: { az: 'aaa', en: 'aaa', ru: 'aaa' },
            _id: '6737917d9e8a277c35bab2f5',
            value: 'ssss',
            __v: 0,
        },
        {
            title: { az: 'bbb', en: 'bbb', ru: 'bbb' },
            description: { az: 'bbb', en: 'bbb', ru: 'bbb' },
            _id: '1234567890abcdef12345678',
            value: 'tttt',
            __v: 1,
        },
        // Add more objects as needed
    ];
    // console.log(StatistickTitle);

    if (StatistickTitleLoafing || StatistickLoafing) return <Loading />;
    if (StatistickTitleEror || StatistickEror) {
        console.log('error:', StatistickTitleEror || StatistickEror);

        return <h1>error go to log</h1>;
    }
    return (
        <Box p={2}>
            <Typography variant="h3">Statistick Text</Typography>
            <TableContainer component={Paper} className="mt-4">
                <Table aria-label="a dense table" size="small">
                    {' '}
                    {/* Use size="small" for dense variant */}
                    <TableHead>
                        <TableRow>
                            <TableCell className=" w-[15%]">Languige</TableCell>

                            <TableCell width={'40%'}>Ttile</TableCell>
                            <TableCell width={'40%'}>
                                <div className="flex flex-row justify-between">
                                    Description{' '}
                                    <Box className="w-fit flex gap-3">
                                        <Button
                                            onClick={() => setOpen(true)}
                                            variant="contained"
                                            color="primary"
                                        >
                                            <Edit />
                                        </Button>
                                        {/* <Button
                                            variant="contained"
                                            color="error"
                                        >
                                            <Delete />
                                        </Button> */}
                                    </Box>
                                </div>
                            </TableCell>
                            {/* <TableCell></TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell> Az</TableCell>
                            <TableCell>{StatistickTitle?.title.az}</TableCell>
                            <TableCell>
                                {StatistickTitle?.description.az}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> Ru</TableCell>
                            <TableCell>{StatistickTitle?.title.ru}</TableCell>
                            <TableCell>
                                {' '}
                                {StatistickTitle?.description.ru}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> en</TableCell>
                            <TableCell>{StatistickTitle?.title.en}</TableCell>
                            <TableCell>
                                {' '}
                                {StatistickTitle?.description.en}
                            </TableCell>
                        </TableRow>
                        {/* Add more rows as needed */}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="my-4 w-full bg-black h-[3px]" />

            <Typography variant="h3" className="mt-10">
                Statisticks
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="data table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title (AZ)</TableCell>
                            <TableCell>Title (EN)</TableCell>
                            <TableCell>Title (RU)</TableCell>
                            <TableCell>Description (AZ)</TableCell>
                            <TableCell>Description (EN)</TableCell>
                            <TableCell>Description (RU)</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => seteditOpen(true)}
                                >
                                    <Add />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Statistick?.map((item: any) => (
                            <TableRow key={item._id}>
                                <TableCell>{item._id}</TableCell>
                                <TableCell>{item.title.az}</TableCell>
                                <TableCell>{item.title.en}</TableCell>
                                <TableCell>{item.title.ru}</TableCell>
                                <TableCell>{item.description.az}</TableCell>
                                <TableCell>{item.description.en}</TableCell>
                                <TableCell>{item.description.ru}</TableCell>
                                <TableCell>{item.value}</TableCell>
                                <TableCell>
                                    {' '}
                                    <Button
                                        variant="contained"
                                        color="info"
                                        onClick={() => {
                                            seteditOpen(true);
                                            setCurrentService(item);
                                        }}
                                        sx={{ Margin: '8px' }}
                                        className="!mb-2"
                                    >
                                        <Edit />
                                    </Button>{' '}
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => {
                                            setDeliteOpen(true);
                                            setCurrentService(item);
                                        }}
                                    >
                                        <Delete />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* edit TEaxt modal */}
            <EditStatistikxText
                open={open}
                onClose={handleClose}
                data={{
                    title: StatistickTitle?.title,
                    description: StatistickTitle?.description,
                }}
                onSave={handleSave}
            />
            <EditStatisticsModal
                open={editopen}
                onClose={() => {
                    seteditOpen(false);
                    setCurrentService(null);
                }}
                data={CurrentService}
                onSave={async (values) => {
                    if (CurrentService) {
                        // console.log('update');
                        try {
                            await PutServices(values, CurrentService._id);
                            setREfetch((prew) => !prew);
                            toast.success('updated');
                        } catch (error) {}
                    } else {
                        // console.log('add');
                        try {
                            await PostServices(values);
                            toast.success('aded');
                            setREfetch((prew) => !prew);
                        } catch (error) {
                            console.log(error);
                            toast.error('something went wrong log for more');
                        }
                    }
                }}
            />
            <DeleteModal
                open={Deliteopen}
                onClose={() => setDeliteOpen(false)}
                onConfirm={async () => {
                    try {
                        await DeleteServices(CurrentService._id);
                        toast.success('deleted');
                        setREfetch((prew) => !prew);
                    } catch (error) {
                        alert(error);
                    }
                    setDeliteOpen(false);
                }}
            />
        </Box>
    );
}
