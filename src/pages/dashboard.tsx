// material-ui
import { Alert, Typography, Box, Stack, Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Paper, TablePagination, Checkbox } from '@mui/material';
import React from 'react';

// project import
import MainCard from 'components/MainCard';
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';
import { InfoCircleFilled } from '@ant-design/icons';

function createData(
  asin: string,
  title: string,
  cost: number,
  profit: number,
  roi: number,
) {
  return { asin, title, cost, profit, roi };
}

const rows = [
  createData('BOB2SIZ67J', 'Rico Hand Blender with Chutney', 20, 50, 45),
  createData('CX98RDI58I', 'iBELL HM390L PLUS 300', 100, 120, 5),
  createData('ISOE482R6P', 'Nalsa Oven MasterChef 16BK Order', 1000, 1200, 10),
];

const columnChartOptions = {
  chart: {
    type: 'bar',
    height: 430,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 8,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['1 Feb', '2 Feb', '3 Feb', '4 Feb']
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val}`;
      }
    }
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
    name: 'Toys',
    data: [45, 28, 30, 29]
  },
  {
    name: 'Mobile',
    data: [38, 30, 56, 36]
  },
  {
    name: 'Automobiles',
    data: [33, 34, 40, 39]
  }
];

export default function SamplePage () {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [options, setOptions] = React.useState<ChartProps>(columnChartOptions);
  const [series, setSeries] = React.useState(initialSeries);
  
  return (
    <Grid direction={'column'} container gap={4} style={{marginBottom: 30}}>
      <Alert color="primary" variant="border" icon={<InfoCircleFilled />} style={{display: 'flex', alignItems: 'center'}} onClose={() => {}}>
        <Typography variant="h5"> 5 Sku out of Stock. </Typography>
      </Alert>
      <Grid direction={'row'} container gap={6}>
        <Grid xs={5}>
          <MainCard title={<span style={{fontSize: 18}}>Today 13 Feburary 2024</span>} border={false} boxShadow>
            <Stack direction="column" gap={1.5}>
              <Typography fontSize={16}>Sales&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.00</Typography>
              <Typography fontSize={16}>Gross Income&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
              <Typography fontSize={16}>Expenses&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
              <Typography fontSize={16}>Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
              <Typography fontSize={16}>Costs of good Sold&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
              <Typography fontSize={16}>Net Profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
            </Stack>
          </MainCard>
        </Grid>
        <Grid xs={5}>
          <MainCard title={<span style={{fontSize: 18}}>Month to date 1 - 13 Feburary 2024</span>} border={false} boxShadow>
            <Stack direction="column" gap={1.5}>
              <Typography fontSize={16}>Sales&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $0.00</Typography>
              <Typography fontSize={16}>Gross Income&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
              <Typography fontSize={16}>Expenses&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
              <Typography fontSize={16}>Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
              <Typography fontSize={16}>Costs of good Sold&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
              <Typography fontSize={16}>Net Profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp; XXXXXX</Typography>
            </Stack>
          </MainCard>
        </Grid>
      </Grid>

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
                <TableCell align="center">ASIN</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Cost</TableCell>
                <TableCell align="center">Profit</TableCell>
                <TableCell align="center">ROI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.asin}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{ pl: 3 }} padding="checkbox">
                    <Checkbox
                      color="primary"
                    />
                  </TableCell>
                  <TableCell scope="row" align="center">
                    {row.asin}
                  </TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.cost}</TableCell>
                  <TableCell align="center">{row.profit}</TableCell>
                  <TableCell align="center">{row.roi}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Typography fontSize={18}><b>Weekly Sales</b></Typography>

      <MainCard content={false}>
        <Box id="chart" sx={{ bgcolor: 'transparent' }}>
          <ReactApexChart options={options} series={series} type="bar" height={450} />
        </Box>
      </MainCard>
    </Grid>
  )
};

