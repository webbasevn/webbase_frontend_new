import { Box, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { globalConfig } from "@/ultils/config";
import NotificationIconHeader from "./notification";
import AccountButtonHeader from "./account";
import Image from "next/image";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from "react";
import SidebarDefault from "../sidebar";

export default function HeaderDefault(){
    const [open,setOpen] = useState(false)
    return(
        <>
            <Stack minHeight={60} width="100%" justifyContent="center" alignItems="center" bgcolor="#fff" className="header">
                <Container maxWidth={globalConfig.containerMaxWidth}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        
                        <Typography variant="h2" component="h2" fontSize={15} fontWeight={700} color="primary.main" textTransform="uppercase" display={{xs: 'none', md: 'block'}}>
                            Webbase Admin Systems
                        </Typography>

                        <Stack display={{xs: 'flex', md: 'none'}} alignItems="center" direction="row" spacing={1}>
                            <IconButton onClick={() => setOpen(true)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                            <Image
                                src="/logo.svg"
                                width={120}
                                height={20}
                                alt="Webbase Logo"
                            />
                        </Stack>

                        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={{xs: 1, md: 4}}>
                            <NotificationIconHeader />
                            <AccountButtonHeader />
                        </Stack>

                    </Stack>
                </Container>
            </Stack>

            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <SidebarDefault />
            </Drawer>
        </>
    )
}