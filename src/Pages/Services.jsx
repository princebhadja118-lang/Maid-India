import React from "react";
import { Box, Typography } from "@mui/material";

const services = [
    {
        title: "House Cleaning",
        desc: "Professional home cleaning service.",
        img: "/src/assets/Cleaning.png"
    },
    {
        title: "Cooking Maid",
        desc: "Daily cooking support at home.",
        img: "/src/assets/Cooking.png"
    },
    {
        title: "Babysitter",
        desc: "Safe childcare service.",
        img: "/src/assets/Baby.png"
    },
    {
        title: "Elder Care",
        desc: "Support for senior citizens.",
        img: "/src/assets/old.png"
    },
    {
        title: "Full Time",
        desc: "Live-in maid for household chores and daily assistance.",
        img: "/src/assets/FullTime.png"
    }
];

const Services = () => {
    return (
        <Box sx={{ background: "#fff8ec", pb: 5 }}>
            <Box sx={{ color: '#023047', py: 6, px: 4, height: 500, display: 'flex', flexDirection: 'column', background: "linear-gradient(0deg,#fff8ec,#ffb703)", justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 2, mt: 10 }}>
                    Our Services
                </Typography>
                <Typography variant="body1">
                    Professional maid services for <b>your daily needs.</b>
                </Typography>
                <Typography variant="body1" mt={8}>
                    Home &gt; <b>Services</b>
                </Typography>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3, m: 10 }}>
                {services.map((item, i) => (
                    <Box key={i} sx={{ background: "white", p: 3, borderRadius: 2, textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,.1)", transition: "0.3s", "&:hover": { transform: "translateY(-5px)" } }}>
                        <img src={item.img} />
                        <Typography fontWeight="bold" mt={1}>{item.title}</Typography>
                        <Typography fontSize={14} mt={1} color="text.secondary">
                            {item.desc}
                        </Typography>
                    </Box>
                ))}
            </Box>

        </Box>
    );
};

export default Services;
