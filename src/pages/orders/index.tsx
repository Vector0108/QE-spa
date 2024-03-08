// material-ui
import { IconButton, Tooltip, Typography, Box, Stack, Grid, TableBody, TableCell, TableContainer, Chip, TableHead, TableRow, Table, Paper, Autocomplete, TextField, Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';

// project import
import MainCard from 'components/MainCard';
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';
import { DeleteFilled, EditFilled } from '@ant-design/icons';


interface Order {
  "reportOrderId": 35,
  "subscriptionId": 1,
  "amazonOrderId": string,
  "merchantOrderId": null,
  "purchaseDate": "2024-01-31T14:05:12",
  "lastUpdatedDate": null,
  "orderStatus": "Amazon",
  "fullfilmentChannel": "Amazon.com",
  "salesChannel": "",
  "orderChannel": "N/A",
  "shipServiceLevel": "Expedited",
  "productName": string,
  "sku": "8.89309E+11",
  "asin": "B0876WV6H5",
  "itemStatus": string,
  "quantity": 1,
  "currency": "USD",
  "itemPrice": 53.3,
  "itemTax": 4.32,
  "shippingPrice": 0,
  "shippingTax": 0,
  "giftWrapPrice": 0,
  "giftWrapTax": 0,
  "itemPromotionDiscount": 0,
  "shipPromotionDiscount": 0,
  "shipCity": "ROCHESTER",
  "shipDate": "WA",
  "shipPostalCode": "98579-9267",
  "shipCountry": "US",
  "promotionIDs": "",
  "cpf": "",
  "isBusinessOrder": false,
  "purchaseOrderNumber": "",
  "priceDesignation": "",
  "signatureConfirmationRecommanded": false,
  "insertedDate": string,
  "insertedBy": "1"
};

const data = [
  "Amazon.com",
  "Amazon"
]

const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  },
  xaxis: {
    categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    axisBorder: {
      show: true,
      color: "line"
    },
    tickAmount: 5
  },
  yaxis: {
    labels: {
      style: {
        colors: ["secondary"]
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    show: true
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false
        }
      }
    }
  ]
};

const initialSeries = [
  {
    name: 'Orders',
    data: [0, 250, 500, 1250, 3500]
  }
];

export default function SamplePage () {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [options, setOptions] = useState<ChartProps>(areaChartOptions);
  const [series, setSeries] = useState(initialSeries);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    axios.get('http://100.25.25.75:7000/order')
      .then(res => {
        setOrderData(res.data);
      })
  }, [])

  return (
    <Grid direction={'column'} container gap={4} style={{marginBottom: 30}}>
      <Grid>
        <MainCard 
          title={
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <span style={{fontSize: 18}}>Today's Summary</span>
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
              <Grid direction="row" xs={4} gap={4} style={{display: 'flex', alignItems: 'center'}}>
                <Chip size="large" label="Orders" color="success" />
                <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</Typography>
              </Grid>
              <Grid direction="row" xs={4} gap={4} style={{display: 'flex', alignItems: 'center'}}>
                <Chip size="large" label="Order Items" color="warning" />
                <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16</Typography>
              </Grid>
              <Grid direction="row" xs={4} gap={4} style={{display: 'flex', alignItems: 'center'}}>
                <Chip size="large" label="Return" color="error" />
                <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</Typography>
              </Grid>
            </Stack>
            <Stack direction="row">
              <Grid direction="row" xs={4} gap={4} style={{display: 'flex', alignItems: 'center'}}>
                <Chip size="large" label="Shipped" color="success" />
                <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</Typography>
              </Grid>
              <Grid direction="row" xs={4} gap={4} style={{display: 'flex', alignItems: 'center'}}>
                <Chip size="large" label="Unshipped" color="warning" />
                <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2</Typography>
              </Grid>
              <Grid direction="row" xs={4} gap={4} style={{display: 'flex', alignItems: 'center'}}>
                <Chip size="large" label="Cancelled" color="error" />
                <Typography fontSize={18}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</Typography>
              </Grid>
            </Stack>
          </Stack>
        </MainCard>
      </Grid>

      <MainCard content={false}>
        <Box id="chart" sx={{ bgcolor: 'transparent' }}>
          <ReactApexChart options={options} series={series} type="area" height={450} />
        </Box>
      </MainCard>

      <Typography fontSize={18}><b>Recent Orders</b></Typography>
      
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Order Table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" sx={{ pl: 3 }}>
                  <Checkbox
                    color="primary"
                    inputProps={{
                      'aria-label': 'select all desserts'
                    }}
                  />
                </TableCell>
                <TableCell align="center">Order Id</TableCell>
                <TableCell width={500} align="center">Title</TableCell>
                <TableCell align="center">Order Date</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Profit</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData.map((order: Order) => (
                <TableRow
                  key={order.amazonOrderId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell padding="checkbox" sx={{ pl: 3 }}>
                    <Checkbox
                      color="primary"
                      inputProps={{
                        'aria-label': 'select all desserts'
                      }}
                    />
                  </TableCell>
                  <TableCell scope="row" align="center">
                    {order.amazonOrderId}
                  </TableCell>
                  <TableCell align="center">{order.productName}</TableCell>
                  <TableCell align="center">{order.insertedDate.slice(0, 10)}</TableCell>
                  <TableCell align="center">{order.itemStatus}</TableCell>
                  <TableCell align="center">$ {125}</TableCell>
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

