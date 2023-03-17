import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img
          src="https://www.compass.com/m/13/334f9246-7e78-41ae-bc03-98ffa13cc7e2/origin.jpg"
          height="500"
        ></img>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Valerie Padgett
          </Typography>
          <Typography class="modal-modal-description" sx={{ mt: 2 }}>
            <a href="mailto:valerie.padgett@compass.com">
              valerie.padgett@compass.com
            </a>
          </Typography>

          <Typography class="modal-modal-description" sx={{ mt: 2 }}>
            (310)872-4268
          </Typography>
          <Typography class="modal-modal-description" sx={{ mt: 2 }}>
            REALTOR® | DRE# 01971759
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
