import { Box, Container, Stack } from "@mui/material";
import Head from "next/head";

import HeaderDefault from "@/partials/header";
import SidebarDefault from "@/partials/sidebar";
import { useAuth } from "@/hooks/useAuth";
import LoadingScreen from "@/components/loading/loadingScreen";
import { useRouter } from "next/router";

export default function MainLayout({children}){

    const {userData,firstLoading} = useAuth()

    const router = useRouter()

    if(firstLoading) return <LoadingScreen />
    
    if(!userData){
        router.push('/auth/login')
        return <LoadingScreen />
    }

    return( 
        <Box>
            <Head>
                <title>Webbase Dashboard</title>
            </Head>
            <Stack height="100vh" direction="row">
                <Box width={250} className="sidebar" display={{xs: 'none', md: 'block'}}>
                    <SidebarDefault />
                </Box>
                <Box flexGrow={1} className="mainWrap" bgcolor="#fafafa">
                    <HeaderDefault />
                    <Container maxWidth="xl">
                        <Box py={3}>
                            {children}
                        </Box>
                    </Container>
                </Box>
            </Stack>
        </Box>
    )
}