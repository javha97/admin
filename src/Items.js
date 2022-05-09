import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
export const Items = () => {
    const [rows, setres] = useState('')

    useEffect(() => {
        const getproducts = async () => {
            const res = await axios.get(`http://localhost:8080/`)
            setres(res.data)
        }
        getproducts()
    }, [])
    console.log(rows);
    const columns = [
        {
            field: 'categoryId',
            headerName: 'CategoryId',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'name',
            headerName: 'Name',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            type: 'string',
            width: 110,
            editable: true,
        },
        {
            field: 'image',
            headerName: 'Image',
            type: 'string',
            width: 300,
            editable: true,
            renderCell: (params) => <img src={params.value} style={{ objectFit: "cover", width: "200px", height: "140px" }} />,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 110,
            editable: true,
        },
    ]
    return (
        <Box style={{ height: 600, width: '900px', display: "flex", margin: "0 auto" }}>
            {rows &&
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={150}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            }
        </Box>
    )
} 