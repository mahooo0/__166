import React, { useEffect } from 'react';
import { Button, Typography, Box, Modal, TextField } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Upload } from '@mui/icons-material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflowY: 'scroll',
    boxShadow: 24,
    p: 4,
};

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    fields: { name: string; type: string }[];
    onSubmit: (data: { [key: string]: any }) => void;
    defaultValues?: { [key: string]: any }; // Optional default values prop
}

const CustomModal: React.FC<ModalProps> = ({
    open,
    onClose,
    title,
    fields,
    onSubmit,
    defaultValues = {}, // Default to an empty object if not provided
}) => {
    // Initialize formData with defaultValues
    const [formData, setFormData] = React.useState<{ [key: string]: any }>(
        defaultValues
    );
    // console.log(formData);
    useEffect(() => {
        setFormData(defaultValues);
    }, [defaultValues]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleQuillChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSingleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, files } = event.target;
        if (files && files.length > 0) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setFormData((prev) => ({ ...prev, [name]: { file, imageUrl } }));
        }
    };

    const handleMultipleImagesChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, files } = event.target;
        if (files && files.length > 0) {
            const imageFiles = Array.from(files);
            const imagePreviews = imageFiles.map((file) => ({
                file,
                imageUrl: URL.createObjectURL(file),
            }));

            setFormData((prev) => ({
                ...prev,
                [name]: imagePreviews,
            }));
        }
    };

    const handleImageRemove = (fieldName: string, index: number) => {
        const updatedImages = formData[fieldName].filter(
            (_: any, idx: number) => idx !== index
        );
        setFormData((prev) => ({
            ...prev,
            [fieldName]: updatedImages,
        }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h3" className="!mb-7">
                    {title}
                </Typography>

                {fields.map((field, index) => {
                    switch (field.type) {
                        case 'quill':
                            return (
                                <div key={index}>
                                    <Typography variant="h5" className="!mt-7">
                                        {field.name}
                                    </Typography>

                                    <ReactQuill
                                        className="mt-4"
                                        value={formData[field.name] || ''}
                                        onChange={(value) =>
                                            handleQuillChange(field.name, value)
                                        }
                                        theme="snow"
                                    />
                                </div>
                            );
                        case 'image':
                            return (
                                <div key={index}>
                                    <Typography
                                        variant="h5"
                                        className="!mt-7 !mb-4"
                                    >
                                        {field.name} (Single Image)
                                    </Typography>
                                    <input
                                        type="file"
                                        name={field.name}
                                        style={{ display: 'none' }}
                                        id={field.name}
                                        accept="image/*"
                                        onChange={handleSingleImageChange}
                                    />
                                    <label htmlFor={field.name}>
                                        <Button
                                            variant="outlined"
                                            component="span"
                                            startIcon={<Upload />}
                                        >
                                            Upload
                                        </Button>
                                    </label>
                                    <div>
                                        {formData[field.name]?.imageUrl && (
                                            <div>
                                                <img
                                                    src={
                                                        formData[field.name]
                                                            .imageUrl
                                                    }
                                                    className="w-[100px] h-[100px] mt-4"
                                                    alt="Preview"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        case 'multiple-images':
                            return (
                                <div key={index}>
                                    <Typography
                                        variant="h5"
                                        className="!mt-7 !mb-4"
                                    >
                                        {field.name} (Multiple Images)
                                    </Typography>
                                    <input
                                        type="file"
                                        name={field.name}
                                        style={{ display: 'none' }}
                                        id={field.name}
                                        accept="image/*"
                                        multiple
                                        onChange={handleMultipleImagesChange}
                                    />
                                    <label htmlFor={field.name}>
                                        <Button
                                            variant="outlined"
                                            component="span"
                                            startIcon={<Upload />}
                                        >
                                            Upload Multiple
                                        </Button>
                                    </label>
                                    <div className="image-previews mt-4 flex flex-row flex-wrap gap-3">
                                        {formData[field.name]?.map(
                                            (image: any, idx: number) => (
                                                <div
                                                    key={idx}
                                                    className="relative"
                                                >
                                                    <img
                                                        src={image.imageUrl}
                                                        className="w-[100px] h-[100px] mr-2 mb-2"
                                                        alt={`Preview ${idx + 1}`}
                                                    />
                                                    <Button
                                                        onClick={() =>
                                                            handleImageRemove(
                                                                field.name,
                                                                idx
                                                            )
                                                        }
                                                        variant="contained"
                                                        color="error"
                                                        size="small"
                                                        className="absolute top-0 right-0"
                                                    >
                                                        X
                                                    </Button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            );
                        default:
                            return (
                                <div key={index}>
                                    <Typography variant="h5" className="!mt-7 ">
                                        {field.name}
                                    </Typography>
                                    <TextField
                                        name={field.name}
                                        label={field.name}
                                        type={field.type || 'text'}
                                        fullWidth
                                        margin="normal"
                                        value={formData[field.name] || ''} // Set default value here
                                        onChange={handleChange}
                                    />
                                </div>
                            );
                    }
                })}

                <Button
                    className="!mt-4"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Save
                </Button>
                <Button
                    className="!mt-4"
                    variant="text"
                    color="secondary"
                    onClick={onClose}
                >
                    Cancel
                </Button>
            </Box>
        </Modal>
    );
};

export default CustomModal;
