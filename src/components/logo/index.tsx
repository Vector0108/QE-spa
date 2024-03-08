import { Link } from 'react-router-dom';
import { To } from 'history';

// material-ui
import { ButtonBase, Icon } from '@mui/material';
import { SxProps } from '@mui/system';

// project import
import { APP_DEFAULT_PATH } from 'config';
import useAuth from 'hooks/useAuth';

// ==============================|| MAIN LOGO ||============================== //

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
}

const LogoSection = ({ reverse, isIcon, sx, to }: Props) => {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonBase disableRipple {...(isLoggedIn && { component: Link, to: !to ? APP_DEFAULT_PATH : to, sx })}>
      <div>
        <img src='src/assets/images/QE-Logo.png' width={70} style={{paddingTop: '25px'}}/>
      </div>
    </ButtonBase>
  );
};

export default LogoSection;
