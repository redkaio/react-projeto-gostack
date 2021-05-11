import { Button, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import { ChatButton, ChatHeader } from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ChatHeader>
        Nome do cliente
        <ChatButton onClick={handleClick}>
          <MoreVertIcon />
        </ChatButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Finalizar atendimento</MenuItem>
          <MenuItem onClick={handleClose}>Dados do usuário</MenuItem>
        </Menu>
      </ChatHeader>

    </>
  )
};
export default Header;