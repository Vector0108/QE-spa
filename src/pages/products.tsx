// material-ui
import { IconButton, Tooltip, Typography, Box, Stack, Grid, TableBody, TableCell, TableContainer, Chip, TableHead, TableRow, Table, Paper, Autocomplete, TextField, Checkbox } from '@mui/material';
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// project import
import MainCard from 'components/MainCard';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

function createData(
  product: string,
  tags: string,
  cogs: string,
  cogs_type: string,
  qty_avail: number,
  value_of_unsellable: string,
  profit_per_unit: string,
) {
  return { product, tags, cogs, cogs_type, qty_avail, value_of_unsellable, profit_per_unit };
}

const rows = [
  createData('Rico Hand Blender with SSL', 'XXXX', 'XXXX', 'XXXX', 100, 'XXXX', 'XXXX'),
  createData('BELL HM390L PLUS 3', 'XXXX', 'XXXX', 'XXXX', 100, 'XXXX', 'XXXX'),
  createData('BELL HM390L PLUS 3', 'XXXX', 'XXXX', 'XXXX', 100, 'XXXX', 'XXXX'),
  createData('BELL HM390L PLUS 3', 'XXXX', 'XXXX', 'XXXX', 100, 'XXXX', 'XXXX'),
  createData('BELL HM390L PLUS 3', 'XXXX', 'XXXX', 'XXXX', 100, 'XXXX', 'XXXX'),
  createData('BELL HM390L PLUS 3', 'XXXX', 'XXXX', 'XXXX', 100, 'XXXX', 'XXXX'),
  createData('BELL HM390L PLUS 3', 'XXXX', 'XXXX', 'XXXX', 100, 'XXXX', 'XXXX'),
];


const data = [
  "Amazon.com",
  "Amazon"
]

export default function SamplePage () {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
    setRowsPerPage(parseInt(event?.target.value!, 10));
    setPage(0);
  };

  return (
    <Grid direction={'column'} container gap={4} style={{marginBottom: 30}}>
        <Grid>
            <MainCard 
              title={
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <span style={{fontSize: 18}}>Summary</span>
                  <Stack direction="row" gap={3}>
                    <Box minWidth={200}>
                      <Autocomplete
                        fullWidth
                        disablePortal
                        id="basic-autocomplete"
                        options={data}
                        renderInput={(params) => <TextField {...params} placeholder="Placeholder" />}
                      />
                    </Box>
                    <Box width={200}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker />
                      </LocalizationProvider>
                    </Box>
                  </Stack>
                </Stack>
              } 
              border={false} 
              boxShadow
            >
              <Stack direction="column" gap={4}>
                <Stack direction="row">
                  <Grid direction="row" xs={6} gap={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Chip size="large" label="Active Product" color="success" />
                    <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;105</Typography>
                  </Grid>
                  <Grid direction="row" xs={6} gap={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Chip size="large" label="Out of Stock" color="warning" />
                    <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2</Typography>
                  </Grid>
                </Stack>
                <Stack direction="row" style={{display: 'flex', alignItems: 'center'}}>
                  <Chip size="large" label="Out of Stock" color="error" />
                  <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2</Typography>
                </Stack>
              </Stack>
            </MainCard>
        </Grid>

      <Typography fontSize={18}><b>Products</b></Typography>
      
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Product Table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Tags</TableCell>
                <TableCell align="center">COGS</TableCell>
                <TableCell align="center">COGS Type</TableCell>
                <TableCell align="center">QTY Avail</TableCell>
                <TableCell align="center">Value of unsellable returns (%)</TableCell>
                <TableCell align="center">Profit per unit</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.product}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell scope="row" align="center">
                    {row.product}
                  </TableCell>
                  <TableCell align="center">{row.tags}</TableCell>
                  <TableCell align="center">{row.cogs}</TableCell>
                  <TableCell align="center">{row.cogs_type}</TableCell>
                  <TableCell align="center">{row.qty_avail}</TableCell>
                  <TableCell align="center">{row.value_of_unsellable}</TableCell>
                  <TableCell align="center">{row.profit_per_unit}</TableCell>
                  <TableCell style={{justifyContent:'center', display: 'flex'}}>
                    {
                      <Stack direction="row">
                        <IconButton color="success" aria-label="Edit">
                          <Tooltip title="Edit">
                            <EditFilled />
                          </Tooltip>
                        </IconButton>
                        <IconButton color="error" aria-label="Delete">
                          <Tooltip title="Delete">
                            <DeleteFilled />
                          </Tooltip>
                        </IconButton>
                      </Stack>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  )
};

