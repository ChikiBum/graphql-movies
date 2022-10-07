import { useState } from "react";
import {
  Modal,
  Typography,
  Box,
  IconButton,
  Paper,
  InputBase,
  Divider,
  Alert,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";

import { CopyToClipboard } from "react-copy-to-clipboard";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ConfirmModalProps {
  open: boolean;
  url: string;
  title: string;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

const ConfirmModal = ({ open, url, title, onClose }: ConfirmModalProps) => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="List URL"
              inputProps={{ "aria-label": "List URL" }}
              value={url}
            />
            <IconButton sx={{ p: "10px" }} aria-label="preview">
              <RemoveRedEyeIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="List URL"
              >
                <ContentCopyIcon />
              </IconButton>
            </CopyToClipboard>
          </Paper>
          {openAlert && (
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setOpenAlert(false)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Copied!
            </Alert>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
