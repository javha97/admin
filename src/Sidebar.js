import { Box, } from "@mui/system";
import { List, ListItem, ListItemText, Drawer, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Menu";
import "./app.css"
import React from "react";
export const Sidebar = ({ setsidebar, sidebar }) => {
    const list = ['AddCategory', 'Addproduct', 'Login', "Showproducts"]
    const toggleDrawer = () => {
        setsidebar(!sidebar)
    };
    return (
        <>
            <Box
                role="presentation"
                onClick={() => toggleDrawer()}
            >
                <Drawer
                    open={sidebar}
                    onClose={() => toggleDrawer()}
                >
                    <List sx={{ width: "300px" }}>
                        {list.map((text, index) => (
                            <Link key={index} to={`/${text}`}>
                                <ListItem button key={index}>
                                    <MailIcon />
                                    <ListItemText primary={text} />
                                </ListItem>
                            </Link>

                        ))}
                    </List>
                </Drawer>
            </Box>
        </>
    )
}
