import React, { useState } from 'react';
import { Box, IconButton, Dialog, DialogTitle, DialogContent, Grid, Typography, Divider, Paper } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { keyframes } from '@emotion/react';

const fadeInOut = keyframes`
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
`;

const CircleIconGroup = ({ icons, labels }) => {
    const [open, setOpen] = useState(false);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [hoveredIconDetails, setHoveredIconDetails] = useState({});
    const [dialogGradient, setDialogGradient] = useState('');

    const maxVisibleIcons = 10;
    const visibleIcons = icons.slice(0, maxVisibleIcons);
    const hiddenIcons = icons.length - maxVisibleIcons;

    const handleClose = () => {
        setOpen(false);
    };

    const handleMouseEnter = (icon, index) => {
        setHoveredIcon(icon);
        setHoveredIconDetails({
            name: labels[index],
            description: `Description for ${labels[index]}`,
            createdAt: `Created at: ${new Date().toLocaleDateString()}`,
            updatedAt: `Updated at: ${new Date().toLocaleDateString()}`,
        });
        setDialogGradient('linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)');
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 300,
                margin: '0 auto',
                padding: 2,
                background: 'linear-gradient(135deg, #f0f4f8 30%, #d9e2ec 90%)',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #ccc',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '8px 16px',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        background: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Icon Group
                </Typography>
            </Box>
            <Divider sx={{ width: '100%', background: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)', height: 2, marginBottom: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    width: '100%',
                    position: 'relative',
                    padding: '0 2 2 2',
                }}
            >
                {visibleIcons.map((Icon, index) => (
                    <Box key={index} sx={{ textAlign: 'center', margin: '8px', position: 'relative' }}>
                        <IconButton
                            onMouseEnter={() => handleMouseEnter(Icon, index)}
                            onMouseLeave={handleMouseLeave}
                            sx={{
                                padding: 1,
                                transition: 'transform 0.5s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)',
                                    position: 'relative',
                                }}
                            >
                                <Icon sx={{ color: 'white' }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: -4,
                                        right: -4,
                                        width: 16,
                                        height: 16,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)',
                                        opacity: 0.75,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        border: '1px solid #fff',
                                    }}
                                >
                                    {labels[index][0]}
                                </Box>
                            </Box>
                        </IconButton>
                    </Box>
                ))}
                {hiddenIcons > 0 && (
                    <Box sx={{ textAlign: 'center', position: 'relative', marginTop: '16px' }}>
                        <Box
                            onClick={() => setOpen(true)}
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #ff7e5f 30%, #feb47b 90%)',
                                cursor: 'pointer',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                position: 'relative',
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                }}
                            >
                                +{hiddenIcons}
                            </Typography>
                        </Box>
                    </Box>
                )}
                <Divider sx={{ width: '100%', background: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)', margin: '16px 0' }} />
            </Box>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { background: dialogGradient, border: '2px solid', borderColor: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)' } }}>
                <DialogTitle>Select an Icon</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        {icons.map((Icon, index) => (
                            <Grid item xs={3} key={index}>
                                <IconButton
                                    sx={{
                                        padding: 1,
                                        transition: 'transform 0.5s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)',
                                            position: 'relative',
                                        }}
                                    >
                                        <Icon sx={{ color: 'white' }} />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: -4,
                                                right: -4,
                                                width: 16,
                                                height: 16,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)',
                                                opacity: 0.75,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.75rem',
                                                fontWeight: 'bold',
                                                color: '#fff',
                                                border: '1px solid #fff',
                                            }}
                                        >
                                            {labels[index][0]}
                                        </Box>
                                    </Box>
                                </IconButton>
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
            </Dialog>
            {hoveredIcon && (
                <Paper
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #6a11cb 30%, #2575fc 90%)',
                        color: '#ecf0f1',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        zIndex: 10,
                        animation: `${fadeInOut} 2s ease-in-out`,
                    }}
                >
                    <Typography variant="body2"><strong>{hoveredIconDetails.name}</strong></Typography>
                    <Typography variant="body2">{hoveredIconDetails.description}</Typography>
                    <Typography variant="body2">{hoveredIconDetails.createdAt}</Typography>
                    <Typography variant="body2">{hoveredIconDetails.updatedAt}</Typography>
                </Paper>
            )}
        </Box>
    );
};

const App = () => {
    const iconList = [
        Icons.Home,
        Icons.Star,
        Icons.Favorite,
        Icons.Settings,
        Icons.Person,
        Icons.Search,
        Icons.Notifications,
        Icons.Mail,
        Icons.ShoppingCart,
        Icons.Help,
    ];

    const labels = [
        'Home',
        'Star',
        'Favorite',
        'Settings',
        'Person',
        'Search',
        'Notifications',
        'Mail',
        'Cart',
        'Help',
    ];

    return (
        <div>
            <CircleIconGroup icons={iconList} labels={labels} />
        </div>
    );
};

export default App;
