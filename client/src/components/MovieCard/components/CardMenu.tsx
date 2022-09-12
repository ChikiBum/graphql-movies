import { useState, MouseEvent } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  onCardSelect: Function;
}

const CardMenu = ({ onCardSelect }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onAddFilm = () => {
    onCardSelect();
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
      }}
    >
      <IconButton
        sx={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        sx={{ left: "-55px" }}
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "10ch",
          },
        }}
      >
        <MenuItem onClick={onAddFilm}>Select</MenuItem>
      </Menu>
    </div>
  );
};

export default CardMenu;
