import { Box, Container, Paper, Stack } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

export default function AuthLayout({children}){

    return( 
        <Box>
            <Head>
                <title>Webbase</title>
            </Head>
            <Stack direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh" bgcolor="#F5F5F5">
                <Container maxWidth="xs">
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={4}>
                        <Image
                            src="/logo.svg"
                            width={190}
                            height={27}
                            alt="Logo Webbase"
                        />
                        <Paper elevation={0} sx={{py:3, px: 5, minWidth: 450, borderRadius: 2}}>
                            {children}
                        </Paper>
                    </Stack>
                </Container>
            </Stack>
        </Box>
    )
}