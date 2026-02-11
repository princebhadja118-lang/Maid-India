import React from "react";
import { Box, Typography } from "@mui/material";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import ChildCareIcon from "@mui/icons-material/ChildCare"
import ElderlyIcon from "@mui/icons-material/Elderly"
import HomeIcon from '@mui/icons-material/Home'

const services = [
    {
        title: "House Cleaning",
        desc: "Professional home cleaning service.",
        icon: <CleaningServicesIcon />
    },
    {
        title: "Cooking Maid",
        desc: "Daily cooking support at home.",
        icon: <RestaurantIcon />
    },
    {
        title: "Babysitter",
        desc: "Safe childcare service.",
        icon: <ChildCareIcon />
    },
    {
        title: "Elder Care",
        desc: "Support for senior citizens.",
        icon: <ElderlyIcon />
    },
    {
        title: "Full Time",
        desc: "Live-in maid for household chores and daily assistance.",
        icon: <HomeIcon />
    }
];

const Services = () => {
    return (
        <Box sx={{ py: 6, px: 4, height: 585, display: 'flex', flexDirection: 'column', background: "orange" }}>
            <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center', fontWeight: "bold", textAlign: "center", mb: 4, mt: 10 }}>
                Our Services
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3 }}>
                {services.map((item, i) => (
                    <Box key={i} sx={{ background: "white", p: 3, borderRadius: 2, textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,.1)", transition: "0.3s", "&:hover": { transform: "translateY(-5px)" } }}>
                        <Box sx={{ fontSize: 40, mb: 1 }}>{item.icon}</Box>
                        <Typography fontWeight="bold">{item.title}</Typography>
                        <Typography fontSize={14} color="text.secondary">
                            {item.desc}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Services;
