import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup'; // Import Yup
import { Height } from '@mui/icons-material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface EditModalProps {
    open: boolean;
    onClose: () => void;
    data?: {
        value: string;
        title: { az: string; en: string; ru: string };
        description: { az: string; en: string; ru: string };
    };
    onSave: (updatedData: any) => void;
}

// Yup schema for validation
const validationSchema = Yup.object().shape({
    value: Yup.string().required('Value is required'),
    title: Yup.object().shape({
        az: Yup.string().required('Title in AZ is required'),
        en: Yup.string().required('Title in EN is required'),
        ru: Yup.string().required('Title in RU is required'),
    }),
    description: Yup.object().shape({
        az: Yup.string().required('Description in AZ is required'),
        en: Yup.string().required('Description in EN is required'),
        ru: Yup.string().required('Description in RU is required'),
    }),
});

const EditStatisticsModal: React.FC<EditModalProps> = ({
    open,
    onClose,
    data,
    onSave,
}) => {
    const [editData, setEditData] = useState(
        data || {
            value: '',
            title: { az: '', en: '', ru: '' },
            description: { az: '', en: '', ru: '' },
        }
    );

    const [errors, setErrors] = useState<any>({});

    useEffect(() => {
        if (data) {
            setEditData(data);
        } else {
            setEditData({
                value: '',
                title: { az: '', en: '', ru: '' },
                description: { az: '', en: '', ru: '' },
            });
        }
    }, [data]);

    const handleChange = (
        field: 'value' | 'title' | 'description',
        langOrValue: string,
        value: string
    ) => {
        if (field === 'value') {
            setEditData((prev) => ({ ...prev, value }));
        } else {
            setEditData((prev) => ({
                ...prev,
                [field]: {
                    ...prev[field],
                    [langOrValue]: value,
                },
            }));
        }
    };

    const handleSave = async () => {
        try {
            // Validate data using Yup
            await validationSchema.validate(editData, { abortEarly: false });
            onSave(editData);
            onClose();
        } catch (validationError) {
            // Collect validation errors
            const formattedErrors: any = {};
            if (validationError instanceof Yup.ValidationError) {
                validationError.inner.forEach((error) => {
                    if (error.path) {
                        formattedErrors[error.path] = error.message;
                    }
                });
            }
            setErrors(formattedErrors);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style} className="overflow-y-scroll">
                <h2>Edit Data</h2>

                {/* Value Field */}
                <TextField
                    label="Value"
                    fullWidth
                    margin="normal"
                    value={editData.value}
                    onChange={(e) => handleChange('value', '', e.target.value)}
                    error={!!errors.value}
                    helperText={errors.value}
                />

                {/* Title Fields */}
                <h4>Title</h4>
                <TextField
                    label="AZ"
                    fullWidth
                    margin="normal"
                    value={editData.title.az}
                    onChange={(e) =>
                        handleChange('title', 'az', e.target.value)
                    }
                    error={!!errors['title.az']}
                    helperText={errors['title.az']}
                />
                <TextField
                    label="EN"
                    fullWidth
                    margin="normal"
                    value={editData.title.en}
                    onChange={(e) =>
                        handleChange('title', 'en', e.target.value)
                    }
                    error={!!errors['title.en']}
                    helperText={errors['title.en']}
                />
                <TextField
                    label="RU"
                    fullWidth
                    margin="normal"
                    value={editData.title.ru}
                    onChange={(e) =>
                        handleChange('title', 'ru', e.target.value)
                    }
                    error={!!errors['title.ru']}
                    helperText={errors['title.ru']}
                />

                {/* Description Fields */}
                <h4>Description</h4>
                <TextField
                    label="AZ"
                    fullWidth
                    margin="normal"
                    value={editData.description.az}
                    onChange={(e) =>
                        handleChange('description', 'az', e.target.value)
                    }
                    error={!!errors['description.az']}
                    helperText={errors['description.az']}
                />
                <TextField
                    label="EN"
                    fullWidth
                    margin="normal"
                    value={editData.description.en}
                    onChange={(e) =>
                        handleChange('description', 'en', e.target.value)
                    }
                    error={!!errors['description.en']}
                    helperText={errors['description.en']}
                />
                <TextField
                    label="RU"
                    fullWidth
                    margin="normal"
                    value={editData.description.ru}
                    onChange={(e) =>
                        handleChange('description', 'ru', e.target.value)
                    }
                    error={!!errors['description.ru']}
                    helperText={errors['description.ru']}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    Save
                </Button>
                <Button variant="text" color="secondary" onClick={onClose}>
                    Cancel
                </Button>
            </Box>
        </Modal>
    );
};

export default EditStatisticsModal;
