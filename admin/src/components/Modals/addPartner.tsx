import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
} from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {
    PostCAntry,
    PostPartners,
    PutCantry,
    PutPartner,
} from '../../Services/Rerquests';

interface CountryModalProps {
    isOpen: boolean;
    onClose: () => void;
    id?: string;
    setREfetc: () => void;
}

const PartnersModal: React.FC<CountryModalProps> = ({
    isOpen,
    onClose,
    id,
    setREfetc,
}) => {
    const formik = useFormik({
        initialValues: {
            Image: null as File | null,
        },
        onSubmit: async (values) => {
            console.log(values);
            if (!values.Image) {
                toast.info('add image');
                return;
            }
            if (id) {
                console.log('update');

                let bodyForum = new FormData();
                values.Image && bodyForum.append('image', values.Image);
                try {
                    await PutPartner({ id, body: bodyForum });
                    toast.success('updated');
                    values.Image = null;
                    setREfetc();
                    onClose();
                } catch (error) {
                    alert(error);
                    onClose();
                    values.Image = null;
                }
            } else {
                console.log('ass');

                if (values.Image) {
                    let bodyForum = new FormData();
                    bodyForum.append('image', values.Image);
                    try {
                        for (const [key, value] of bodyForum.entries()) {
                            console.log(`${key}:`, value);
                        }

                        await PostPartners(bodyForum);
                        toast.success('aded');
                        values.Image = null;

                        setREfetc();
                        onClose();
                    } catch (error) {
                        alert(error);
                        onClose();
                        values.Image = null;
                    }
                } else {
                    toast.info('fill all info');
                }
            }
        },
    });

    // Handle file input change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            formik.setFieldValue('Image', e.target.files[0]);
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Add Country</DialogTitle>
            <DialogContent>
                {/* File input for country flag */}
                <input
                    accept="image/*"
                    type="file"
                    style={{ display: 'none' }}
                    id="flag-upload"
                    onChange={handleFileChange}
                />
                <label htmlFor="flag-upload">
                    <Button
                        variant="outlined"
                        component="span"
                        startIcon={<UploadIcon />}
                    >
                        Upload Flag
                    </Button>
                </label>

                {/* Text input for country name in Az */}

                {/* Text input for country name in En */}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => formik.handleSubmit()} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PartnersModal;
