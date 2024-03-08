// material-ui
import { Theme } from '@mui/material/styles';
import { Box, useMediaQuery, Tooltip, Button, Grid, Stack, Autocomplete, TextField } from '@mui/material';
import { LogoutOutlined } from '@ant-design/icons';

// project importx
import Profile from './Profile';
import FullScreen from './FullScreen';
import MobileSection from './MobileSection';
import Notification from './Notification';

import useConfig from 'hooks/useConfig';
import DrawerHeader from 'layout/Dashboard/Drawer/DrawerHeader';

// types
import { MenuOrientation } from 'types/config';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const clientData = [
    "Jay Escamila"
  ]

  return (
    <>
    {/* {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
    {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
    {!downLG && <Profile />}
    {downLG && <MobileSection />} */}
    <Stack direction="row" spacing={5}>
      <Stack direction="row" spacing={1}>
        <span style={{display: 'flex', alignItems: 'center', fontSize: 15}}>
          Select Client :
        </span>
        <Box minWidth={200}>
          <Autocomplete
            fullWidth
            disablePortal
            id="basic-autocomplete"
            options={clientData}
            renderInput={(params) => <TextField {...params} placeholder="Placeholder" />}
          />
        </Box>
      </Stack>
      <Notification />
      <span style={{display: 'flex', alignItems: 'center', fontSize: 15}}>
        Welcome JJ
      </span>
      <Box>
        <Button size="large" style={{color: 'text.primary'}} >
          Logout&nbsp;&nbsp;<LogoutOutlined />
        </Button>
      </Box>
    </Stack>
    </>
  );
};

export default HeaderContent;
