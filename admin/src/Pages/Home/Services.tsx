import { Box } from '@mui/material';
import React, { useState } from 'react';
import CustomModal from '../../components/Custom/Madal';
import CustomTabel from '../../components/Custom/Tabel';
import { useQuery } from '@tanstack/react-query';
import {
    DeleteServicesCategory,
    GetServicesCategoryes,
    PostServicesCategory,
    PutServicesCategory,
} from '../../Services/Rerquests';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import DeleteModal from '../../components/DeleteModal';

export default function Services() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [deleteisOpen, setdeleteIsOpen] = React.useState(false);
    const [REfetch, setREfetch] = React.useState(false);
    const [currentdata, setcurrentdata] = useState<any>(undefined);

    const [data, setData] = useState([
        {
            _id: '1',
            title: 'Item 1',
            description: 'Description 1',
            value: '100',
        },
        {
            _id: '2',
            title: 'Item 2',
            description: 'Description 2',
            value: '200',
        },
    ]);
    const {
        data: ServicesCategory,
        error: ServicesCategoryEror,
        isLoading: ServicesCategoryLoafing,
    } = useQuery({
        queryKey: ['ServicesCategory', REfetch],
        queryFn: GetServicesCategoryes,
    });
    if (ServicesCategoryLoafing) return <Loading />;
    if (ServicesCategoryEror) {
        console.log('error:', ServicesCategoryEror);

        return <h1>error go to log</h1>;
    }
    // console.log(ServicesCategory);
    const handleAdd = () => {
        handleOpen();
    };

    const handleEdit = (item: any) => {
        console.log('Editing item:', item);
        // Logic for editing item
        setcurrentdata(item);
        handleOpen();
    };
    console.log('currentdata:', currentdata?.Name_az);

    const handleDelete = (item: any) => {
        // setData(data.filter((d: any) => d._id !== item._id));
        setdeleteIsOpen(true);
        setcurrentdata(item);
    };
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        setcurrentdata(null);
    };

    const handleSubmit = async (data: any) => {
        console.log('Form Data:', data);
        // console.log(currentdata);
        // Handle image file upload as needed
        if (currentdata) {
            console.log('currentdata', currentdata);

            try {
                await PutServicesCategory(currentdata.id, {
                    name: {
                        az: data.Name_az,
                        en: data.Name_en,
                        ru: data.Name_ru,
                    },
                });
                toast.success('updated');
                setREfetch((prew) => !prew);
            } catch (error) {
                toast.error('something went wrong log for more');
            }
        } else {
            try {
                await PostServicesCategory({
                    name: {
                        az: data.Name_az,
                        en: data.Name_en,
                        ru: data.Name_ru,
                    },
                });
                toast.success('added');
                setREfetch((prew) => !prew);
            } catch (error) {
                toast.error('something went wrong log for more');
            }
        }
    };
    return (
        <div>
            {' '}
            <Box p={2}>
                <CustomTabel
                    Title="Dynamic Table"
                    Table_Head_Data={['ID', 'Name Az', 'Name Ru', 'Name En']}
                    Table_Body_Data={ServicesCategory.map((item: any) => {
                        return {
                            id: item._id,
                            Name_az: item.name.az,
                            Name_ru: item.name.ru,
                            Name_en: item.name.en,
                        };
                    })}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
                <CustomModal
                    open={isOpen}
                    onClose={handleClose}
                    title="Create Data"
                    fields={[
                        { name: 'Name_az', type: 'text' },
                        { name: 'Name_ru', type: 'text' },
                        { name: 'Name_en', type: 'text' },
                        // { name: 'Description', type: 'quill' },
                        // { name: 'Image', type: 'image' },
                        // { name: 'Additional Images', type: 'multiple-images' },
                    ]}
                    defaultValues={{
                        Name_az: currentdata?.Name_az,
                        Name_ru: currentdata?.Name_ru,
                        Name_en: currentdata?.Name_en,
                        // Title: 'Sample Title',
                        // Description: 'This is a default description.',
                        // Image: {
                        //     file: null,
                        //     imageUrl: '/path/to/default/image.jpg',
                        // },
                        // 'Additional Images': [
                        //     {
                        //         file: null,
                        //         imageUrl: '/path/to/default/image1.jpg',
                        //     },
                        //     {
                        //         file: null,
                        //         imageUrl: '/path/to/default/image2.jpg',
                        //     },
                        // ],
                    }}
                    onSubmit={handleSubmit}
                />
                <DeleteModal
                    open={deleteisOpen}
                    onClose={() => {
                        setdeleteIsOpen(false);
                        setcurrentdata(null);
                    }}
                    onConfirm={async () => {
                        try {
                            await DeleteServicesCategory(currentdata.id);
                            toast.success('deleted');
                            setdeleteIsOpen(false);

                            setREfetch((prew) => !prew);
                        } catch (error) {
                            toast.error('something went wrong log for more');
                        }
                    }}
                />
            </Box>
        </div>
    );
}
