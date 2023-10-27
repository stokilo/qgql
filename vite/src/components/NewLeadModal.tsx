import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import MyProfile from "./MyProfile";

export default function NewLeadModal() {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <React.Fragment>

            <Button
                color="primary"
                startDecorator={<DownloadRoundedIcon />}
                size="sm"
                onClick={() => setOpen(true)}>
                New Lead
            </Button>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >New lead</Typography>
                    <MyProfile setOpen={setOpen}></MyProfile>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}
