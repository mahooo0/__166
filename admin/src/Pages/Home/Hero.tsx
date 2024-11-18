import React, { useState } from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    IconButton,
    Paper,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Tooltip,
} from '@mui/material';
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Add,
    Label,
} from '@mui/icons-material';
import CountryModal from '../../components/Modals/CountryModal';
import { useQuery } from '@tanstack/react-query';
import {
    deleteCantry,
    GetCAntries,
    GetHomeHeroTitle,
    PostHomeHeroTitle,
    PostHomeTitleBody,
} from '../../Services/Rerquests';
import EditTitleDialog from '../../components/EditTitleDialog';
import { toast } from 'react-toastify';
import DeleteModal from '../../components/DeleteModal';

// Mock data for the table

const Home_Hero: React.FC = () => {
    const [countryModalOpen, setCountryModalOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [Refetsc, setRefetsc] = useState(false);
    const [title, setTitle] = useState('Editable Title');
    const [CurrentId, setCurrentId] = useState('');
    const [editorHtml, setEditorHtml] = useState<string>(''); // Store the HTML content of the editor
    const [Data, setData] = useState<any>([]); // State to manage table data

    // Fetch data using React Query

    const { data, error, isLoading } = useQuery({
        queryKey: ['horotitle', Refetsc],
        queryFn: GetHomeHeroTitle,
    });
    const queryResult = useQuery({
        queryKey: ['CArtries', Refetsc],
        queryFn: GetCAntries,
    });
    console.log(queryResult.data);

    // Open modal for editing the title
    const handleOpenModal = () => {
        setEditorHtml(title); // Set the current title as the initial content in Quill editor
        setOpenModal(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Handle editor content change
    const handleEditorChange = (value: string) => {
        setEditorHtml(value); // Update the HTML content as the user types in the Quill editor
    };

    // Save the edited title
    const handleSaveTitle = () => {
        setTitle(editorHtml); // Save the HTML content as the new title
        setOpenModal(false);
    };

    // Handle edit action
    const handleEdit = (id: string) => {
        setCountryModalOpen(true);
        setCurrentId(id);
        console.log(id);
    };

    // Handle delete action
    const handleDelete = (id: string) => {
        // const updatedData = Data.filter((_: any, i: number) => i !== index);
        // setData(updatedData);
        setCurrentId(id);
        setOpenDeleteModal(true);
    };

    // Handle loading and error states
    if (isLoading || queryResult.isLoading) {
        return <div>Loading...</div>; // Display loading message
    }

    if (error || queryResult.error instanceof Error) {
        return <div>Error: {error?.message}</div>; // Display error message
    }

    return (
        <div className="p-0">
            <Box padding={3}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={3}
                    className="flex flex-col justify-start w-full"
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        className="w-full text-start text-[#FFCC4D] border-b border-black !mb-4"
                    >
                        Hero title:
                    </Typography>
                    <Box className="flex flex-row justify-between w-full">
                        <Box className="flex flex-col max-w-[60%] gap-4">
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                className=" text-wrap"
                            >
                                Az:{'  '}
                                {data[0]?.title?.az}{' '}
                                {/* Use the fetched title */}
                            </Typography>{' '}
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                className=" text-wrap"
                            >
                                En:{'  '}
                                {data[0]?.title?.en}{' '}
                                {/* Use the fetched title */}
                            </Typography>{' '}
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                className=" text-wrap"
                            >
                                Ru:{'  '}
                                {data[0]?.title?.az}{' '}
                                {/* Use the fetched title */}
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            color="success"
                            sx={{
                                textTransform: 'none',
                                padding: '12px 24px',
                            }}
                            className="h-fit"
                            startIcon={<EditIcon />}
                            onClick={handleOpenModal}
                        >
                            Edit
                        </Button>
                    </Box>
                </Box>

                {/* Table */}
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    className="w-full text-start text-[#FFCC4D] border-b border-black !mb-4"
                >
                    Countries:
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="w-[33%]">Icon</TableCell>
                                <TableCell className="w-[33%]">Title</TableCell>

                                <TableCell className="!flex flex-row items-center justify-between ">
                                    <Typography
                                        variant="body2"
                                        className="mr-4"
                                    >
                                        Actions
                                    </Typography>
                                    <Tooltip title="Add" arrow>
                                        <Button
                                            onClick={() =>
                                                setCountryModalOpen(true)
                                            }
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
                            {queryResult?.data?.map(
                                (row: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <img
                                                className="w-[44px]"
                                                src={`http://localhost:5000${row.flagIcon}`}
                                            />
                                        </TableCell>
                                        <TableCell>{row.title}</TableCell>

                                        <TableCell>
                                            <Box
                                                display="flex"
                                                justifyContent="flex-start"
                                            >
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() =>
                                                            handleEdit(row._id)
                                                        }
                                                        size="small"
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() =>
                                                            handleDelete(
                                                                row._id
                                                            )
                                                        }
                                                        size="small"
                                                        color="error"
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* Modal for editing title */}
            {/* <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>Edit Title</DialogTitle>
                <DialogContent className="flex gap-3 flex-col">
                    <Typography>Title AZ</Typography>
                    <ReactQuill
                        value={editorHtml}
                        onChange={handleEditorChange}
                        theme="snow"
                    />{' '}
                    <Typography>Title AZ</Typography>
                    <ReactQuill
                        value={editorHtml}
                        onChange={handleEditorChange}
                        theme="snow"
                    />{' '}
                    <Typography>Title AZ</Typography>
                    <ReactQuill
                        value={editorHtml}
                        onChange={handleEditorChange}
                        theme="snow"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveTitle} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog> */}
            <EditTitleDialog
                defaultValue={data[0]?.title}
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                handleSaveTitle={async (values: PostHomeTitleBody) => {
                    console.log(values);

                    const res = await PostHomeHeroTitle({
                        body: {
                            title: values, // Correct structure based on the interface
                        },
                    });
                    if (res) {
                        toast.success('tItle is updated');
                        handleCloseModal();
                        setRefetsc((prew) => !prew);
                    }
                }}
            />
            {/* Country Modal */}

            <CountryModal
                id={CurrentId}
                setREfetc={() => setRefetsc((prew) => !prew)}
                isOpen={countryModalOpen}
                onClose={() => {
                    setCountryModalOpen(false);
                    setCurrentId('');
                }}
            />
            {/* Country Modal */}

            <DeleteModal
                open={openDeleteModal}
                onClose={() => {
                    setOpenDeleteModal(false);
                    setCurrentId('');
                }}
                onConfirm={async () => {
                    const res = await deleteCantry(CurrentId);
                    if (res) {
                        toast.success('deleted');
                        setOpenDeleteModal(false);
                        setCurrentId('');
                        setRefetsc((prew) => !prew);
                    }
                    // console.log(CurrentId);
                }}
            />
        </div>
    );
};

export default Home_Hero;
