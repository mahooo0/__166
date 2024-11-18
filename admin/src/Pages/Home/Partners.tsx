import { Add, Delete, Edit } from '@mui/icons-material';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { DeletePartner, GetPartners } from '../../Services/Rerquests';
import Loading from '../../components/Loading';
import DeleteModal from '../../components/DeleteModal';
import { toast } from 'react-toastify';
import PartnersModal from '../../components/Modals/addPartner';

export default function Partners() {
    const [ismodalopne, setismodalopne] = useState<boolean>(false);
    const [isDeletemodalopne, setisDeletemodalopne] = useState<boolean>(false);
    const [REfetch, setREfetch] = useState<boolean>(false);
    const [CurrentPartner, setCurrentPartner] = useState<string>('');
    const {
        data: Partners,
        error: PartnersEror,
        isLoading: PartnersLoafing,
    } = useQuery({
        queryKey: ['Services', REfetch],
        queryFn: GetPartners,
    });
    console.log(Partners);

    if (PartnersLoafing) return <Loading />;
    if (PartnersEror) {
        console.log('error:', PartnersEror);

        return <h1>error go to log</h1>;
    }
    return (
        <div>
            <Typography
                variant="h4"
                fontWeight="bold"
                className="w-full text-start text-[#FFCC4D] border-b border-black !mb-4"
            >
                Partners:
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="w-[60%]">Icon</TableCell>

                            <TableCell className="!flex flex-row items-center justify-between  ">
                                <Typography variant="body2" className="mr-4">
                                    Actions
                                </Typography>
                                <Tooltip title="Add" arrow>
                                    <Button
                                        onClick={() => {
                                            setismodalopne(true);
                                        }}
                                        variant="contained"
                                        color="success"
                                        sx={{
                                            textTransform: 'none',
                                            padding: '12px 24px',
                                        }}
                                        startIcon={<Add />}
                                    >
                                        ADD
                                    </Button>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Partners?.map((item: any) => (
                            <TableRow>
                                <TableCell>
                                    <img
                                        className="w-[150px]"
                                        src={`http://localhost:5000${
                                            item.Image
                                        }`}
                                    />
                                </TableCell>

                                <TableCell>
                                    <Box
                                        display="flex"
                                        justifyContent="flex-start"
                                    >
                                        <Tooltip title="Edit">
                                            <IconButton
                                                onClick={() => {
                                                    setismodalopne(true);
                                                    setCurrentPartner(item._id);
                                                }}
                                                size="small"
                                            >
                                                <Edit />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton
                                                onClick={
                                                    () => {
                                                        setisDeletemodalopne(
                                                            true
                                                        );
                                                        setCurrentPartner(
                                                            item._id
                                                        );
                                                    }
                                                    // handleDelete(row._id)
                                                }
                                                size="small"
                                                color="error"
                                            >
                                                <Delete />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PartnersModal
                isOpen={ismodalopne}
                id={CurrentPartner}
                onClose={() => {
                    setismodalopne(false);
                    setCurrentPartner('');
                }}
                setREfetc={() => {
                    setREfetch((prew) => !prew);
                }}
            />
            <DeleteModal
                open={isDeletemodalopne}
                onClose={() => {
                    setCurrentPartner('');
                    setisDeletemodalopne(false);
                }}
                onConfirm={async () => {
                    try {
                        await DeletePartner(CurrentPartner);
                        toast.success('deleted');
                        setCurrentPartner('');
                        setisDeletemodalopne(false);
                        setREfetch((prew) => !prew);
                    } catch (error) {
                        console.log(error);
                        toast.error('eror log for mor info');
                    }
                }}
            />
        </div>
    );
}
