import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
} from '@mui/material';
import ReactQuill from 'react-quill';
import { Formik, Field, Form } from 'formik';
import 'react-quill/dist/quill.snow.css'; // Import the Quill styles

interface EditTitleDialogProps {
    openModal: boolean;
    defaultValue: any;
    handleCloseModal: () => void;
    handleSaveTitle: (values: { az: string; en: string; ru: string }) => void;
}

const EditTitleDialog: React.FC<EditTitleDialogProps> = ({
    defaultValue,
    openModal,
    handleCloseModal,
    handleSaveTitle,
}) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Edit Title</DialogTitle>
            <Formik
                initialValues={{
                    az: defaultValue.az,
                    en: defaultValue.en,
                    ru: defaultValue.ru,
                }}
                onSubmit={handleSaveTitle}
            >
                {({ values, handleChange, handleBlur }) => (
                    <Form>
                        <DialogContent className="flex gap-3 flex-col">
                            <Typography>Title AZ</Typography>
                            <Field name="az">
                                {({ field }: any) => (
                                    <ReactQuill
                                        value={field.value}
                                        onChange={(value) =>
                                            handleChange({
                                                target: { name: 'az', value },
                                            })
                                        }
                                        theme="snow"
                                    />
                                )}
                            </Field>

                            <Typography>Title EN</Typography>
                            <Field name="en">
                                {({ field }: any) => (
                                    <ReactQuill
                                        value={field.value}
                                        onChange={(value) =>
                                            handleChange({
                                                target: { name: 'en', value },
                                            })
                                        }
                                        theme="snow"
                                    />
                                )}
                            </Field>

                            <Typography>Title RU</Typography>
                            <Field name="ru">
                                {({ field }: any) => (
                                    <ReactQuill
                                        value={field.value}
                                        onChange={(value) =>
                                            handleChange({
                                                target: { name: 'ru', value },
                                            })
                                        }
                                        theme="snow"
                                    />
                                )}
                            </Field>
                        </DialogContent>

                        <DialogActions>
                            <Button
                                onClick={handleCloseModal}
                                color="secondary"
                            >
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Save
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
};

export default EditTitleDialog;
