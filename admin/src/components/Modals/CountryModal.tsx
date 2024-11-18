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
import { PostCAntry, PutCantry } from '../../Services/Rerquests';

interface CountryModalProps {
    isOpen: boolean;
    onClose: () => void;
    id?: string;
    setREfetc: () => void;
}

const CountryModal: React.FC<CountryModalProps> = ({
    isOpen,
    onClose,
    id,
    setREfetc,
}) => {
    const formik = useFormik({
        initialValues: {
            countryName: '',

            countryFlag: null as File | null,
        },
        onSubmit: async (values) => {
            if (id) {
                let bodyForum = new FormData();
                values.countryFlag &&
                    bodyForum.append('flagIcon', values.countryFlag);
                values.countryName &&
                    bodyForum.append('title', values.countryName);
                try {
                    await PutCantry({ id, body: bodyForum });
                    toast.success('updated');
                    values.countryFlag = null;
                    values.countryName = '';
                    setREfetc();
                    onClose();
                } catch (error) {
                    alert(error);
                    onClose();
                    values.countryFlag = null;
                    values.countryName = '';
                }
            } else {
                if (values.countryName && values.countryFlag) {
                    let bodyForum = new FormData();
                    bodyForum.append('flagIcon', values.countryFlag);
                    bodyForum.append('title', values.countryName);
                    try {
                        await PostCAntry({ body: bodyForum });
                        toast.success('aded');
                        values.countryFlag = null;
                        values.countryName = '';
                        setREfetc();
                        onClose();
                    } catch (error) {
                        alert(error);
                        onClose();
                        values.countryFlag = null;
                        values.countryName = '';
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
            formik.setFieldValue('countryFlag', e.target.files[0]);
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
                <TextField
                    fullWidth
                    margin="normal"
                    id="countryName"
                    label="Country Name Az"
                    type="text"
                    value={formik.values.countryName}
                    onChange={formik.handleChange}
                    variant="outlined"
                    error={
                        formik.touched.countryName &&
                        Boolean(formik.errors.countryName)
                    }
                    helperText={
                        formik.touched.countryName && formik.errors.countryName
                    }
                />

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

export default CountryModal;
