import { Box } from '@mui/material';
import React, { useState } from 'react';
import CustomModal from '../../components/Custom/Madal';
import CustomTabel from '../../components/Custom/Tabel';
import { useQuery } from '@tanstack/react-query';
import {
    GetServices,
    GetServicesCategoryes,
    PostServices,
} from '../../Services/Rerquests';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import DeleteModal from '../../components/DeleteModal';
import { useRecoilState } from 'recoil';
import { languageState } from '../../assets/States/mainAtom';

export default function ServicesCategory() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [deleteisOpen, setdeleteIsOpen] = React.useState(false);
    const [REfetch, setREfetch] = React.useState(false);
    const [currentdata, setcurrentdata] = useState<any>(undefined);
    const [language, setLanguage] = useRecoilState(languageState);

    // const [data, setData] = useState([
    //     {
    //         _id: '1',
    //         title: 'Item 1',
    //         description: 'Description 1',
    //         value: '100',
    //     },
    //     {
    //         _id: '2',
    //         title: 'Item 2',
    //         description: 'Description 2',
    //         value: '200',
    //     },
    // ]);
    const {
        data: Services,
        error: ServicesEror,
        isLoading: ServicesLoafing,
    } = useQuery({
        queryKey: ['Services', REfetch],
        queryFn: GetServices,
    });
    const {
        data: ServicesCategory,
        error: ServicesCategoryEror,
        isLoading: ServicesCategoryLoafing,
    } = useQuery({
        queryKey: ['ServicesCategory', REfetch],
        queryFn: GetServicesCategoryes,
    });
    if (ServicesLoafing || ServicesCategoryLoafing) return <Loading />;
    if (ServicesEror || ServicesCategoryEror) {
        console.log('error:', ServicesEror);

        return <h1>error go to log</h1>;
    }
    // console.log(ServicesCategory);
    const handleAdd = () => {
        handleOpen();
    };

    const handleEdit = (item: any) => {
        console.log(
            'Editing item:',
            Services.find((service: any) => service._id === item.id)
        );
        // Logic for editing item

        setcurrentdata(
            Services.find((service: any) => service._id === item.id)
        );
        handleOpen();
    };
    console.log('Services:', Services);

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
        const icon = data.icon;
        console.log('icon:', icon);

        if (currentdata) {
            console.log('currentdata', currentdata);

            try {
                // await PutServicesCategory(currentdata.id, {
                //     name: {
                //         az: data.Name_az,
                //         en: data.Name_en,
                //         ru: data.Name_ru,
                //     },
                // });
                toast.success('updated');
                setREfetch((prew) => !prew);
            } catch (error) {
                toast.error('something went wrong log for more');
            }
        } else {
            try {
                console.log('DATA:::', data);
                const BodyForum = new FormData();
                BodyForum.append('titleAz', data.title_az);
                BodyForum.append('titleEn', data.title_en);
                BodyForum.append('titleRu', data.title_ru);
                BodyForum.append('descAz', data.desc_az);
                BodyForum.append('descEn', data.desc_en);
                BodyForum.append('descRu', data.desc_ru);
                BodyForum.append('descShortAz', data.desc_short_az);
                BodyForum.append('descShortEn', data.desc_short_en);
                BodyForum.append('descShortRu', data.desc_short_ru);
                BodyForum.append('category_id', data.Category);
                BodyForum.append('icon', icon); // here is needto be a file
                console.log('BodyForum content:');
                for (const pair of BodyForum.entries()) {
                    console.log(`${pair[0]}: `, pair[1]);
                }

                await PostServices(BodyForum);
                toast.success('added');
                setREfetch((prew) => !prew);
            } catch (error) {
                console.log(error);

                toast.error('something went wrong log for more');
            }
        }
    };
    return (
        <div>
            {' '}
            <Box p={2}>
                <CustomTabel
                    Title="Services"
                    Table_Head_Data={[
                        'id',
                        'Title',
                        'Short description',
                        'description',
                        'icon',
                        'category id',
                    ]}
                    Table_Body_Data={Services.map((item: any) => {
                        return {
                            id: item._id,
                            title: item.title[language],
                            desc_short: item.desc_short[language],
                            desc: item.desc[language],
                            icon: 'http://localhost:5000' + item.icon, //img url
                            category_id: item.category_id,

                            // Name_az: item.name.az,
                            // Name_ru: item.name.ru,
                            // Name_en: item.name.en,
                        };
                    })}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
                {/* <CustomModal
                    open={isOpen}
                    onClose={handleClose}
                    title="Create Data"
                    fields={[
                        {
                            name: 'Category',
                            type: 'select',
                            options: ServicesCategory.map((item: any) => {
                                return {
                                    value: item._id,
                                    label: item.name[language],
                                };
                            }),
                            // [
                            //     { value: 'tech', label: 'Technology' },
                            //     { value: 'science', label: 'Science' },
                            //     { value: 'art', label: 'Art' },
                            // ],
                        },

                        { name: 'title_az', type: 'text' },
                        { name: 'title_ru', type: 'text' },
                        { name: 'title_en', type: 'text' },
                        { name: 'desc_short_az', type: 'text' },
                        { name: 'desc_short_ru', type: 'text' },
                        { name: 'desc_short_en', type: 'text' },
                        { name: 'desc_az', type: 'quill' },
                        { name: 'desc_ru', type: 'quill' },
                        { name: 'desc_en', type: 'quill' },
                        { name: 'icon', type: 'image' },
                        // { name: 'Description', type: 'quill' },
                        // { name: 'Image', type: 'image' },
                        // { name: 'Additional Images', type: 'multiple-images' },
                    ]}
                    defaultValues={{
                        title_az: currentdata?.title_az,
                        title_ru: currentdata?.title_ru,
                        title_en: currentdata?.title_en,
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
                />{' '} */}
                {/*
                <DeleteModal
                    open={deleteisOpen}
                    onClose={() => {
                        setdeleteIsOpen(false);
                        setcurrentdata(null);
                    }}
                    onConfirm={async () => {
                        try {
                            // await DeleteServicesCategory(currentdata.id);
                            toast.success('deleted');
                            setdeleteIsOpen(false);

                            setREfetch((prew) => !prew);
                        } catch (error) {
                            toast.error('something went wrong log for more');
                        }
                    }}
                /> */}
            </Box>
        </div>
    );
}
