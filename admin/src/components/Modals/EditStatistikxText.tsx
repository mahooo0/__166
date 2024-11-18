import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface EditModalProps {
    open: boolean;
    onClose: () => void;
    data?: {
        title: { az: string; en: string; ru: string };
        description: { az: string; en: string; ru: string };
    };
    onSave: (updatedData: any) => void;
}

const EditModal: React.FC<EditModalProps> = ({
    open,
    onClose,
    data,
    onSave,
}) => {
    const [editData, setEditData] = useState(
        data || {
            title: { az: '', en: '', ru: '' },
            description: { az: '', en: '', ru: '' },
        }
    );

    useEffect(() => {
        if (data) {
            setEditData(data);
        } else {
            setEditData({
                title: { az: '', en: '', ru: '' },
                description: { az: '', en: '', ru: '' },
            });
        }
    }, [data]);

    const handleChange = (
        field: 'title' | 'description',
        lang: 'az' | 'en' | 'ru',
        value: string
    ) => {
        setEditData((prev) => ({
            ...prev,
            [field]: {
                ...prev[field],
                [lang]: value,
            },
        }));
    };

    const handleSave = () => {
        onSave(editData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <h2>Statistics Text</h2>

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
                />
                <TextField
                    label="EN"
                    fullWidth
                    margin="normal"
                    value={editData.title.en}
                    onChange={(e) =>
                        handleChange('title', 'en', e.target.value)
                    }
                />
                <TextField
                    label="RU"
                    fullWidth
                    margin="normal"
                    value={editData.title.ru}
                    onChange={(e) =>
                        handleChange('title', 'ru', e.target.value)
                    }
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
                />
                <TextField
                    label="EN"
                    fullWidth
                    margin="normal"
                    value={editData.description.en}
                    onChange={(e) =>
                        handleChange('description', 'en', e.target.value)
                    }
                />
                <TextField
                    label="RU"
                    fullWidth
                    margin="normal"
                    value={editData.description.ru}
                    onChange={(e) =>
                        handleChange('description', 'ru', e.target.value)
                    }
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

export default EditModal;
