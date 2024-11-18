import { Add, Delete, Edit } from '@mui/icons-material';
import {
    Paper,
    Table,
    TableContainer,
    Typography,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
} from '@mui/material';
import React from 'react';

interface Propps {
    Title: string;
    Table_Head_Data: string[];
    Table_Body_Data: any[]; // Accepting dynamic row data
    canAdd?: boolean;
    onAdd?: () => void; // Optional onAdd function
    onEdit?: (item: any) => void; // Optional onEdit function
    onDelete?: (item: any) => void; // Optional onDelete function
}

const CustomTabel = ({
    Title,
    Table_Head_Data,
    Table_Body_Data,
    canAdd = true,
    onAdd,
    onEdit,
    onDelete,
}: Propps) => {
    return (
        <div>
            <Typography variant="h3" className="mt-10">
                {Title}
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="data table">
                    <TableHead>
                        <TableRow>
                            {Table_Head_Data.map((item, i) => (
                                <TableCell key={i}>{item}</TableCell>
                            ))}
                            {canAdd && (
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={onAdd} // Trigger the Add function
                                    >
                                        <Add />
                                    </Button>
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Table_Body_Data.map((item, index) => (
                            <TableRow key={index}>
                                {Object.keys(item).map((key, idx) => (
                                    <TableCell key={idx}>{item[key]}</TableCell>
                                ))}
                                <TableCell>
                                    {onEdit && (
                                        <Button
                                            variant="contained"
                                            color="info"
                                            onClick={() => onEdit(item)}
                                            sx={{ Margin: '8px' }}
                                        >
                                            <Edit />
                                        </Button>
                                    )}
                                    {onDelete && (
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => onDelete(item)}
                                        >
                                            <Delete />
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CustomTabel;
