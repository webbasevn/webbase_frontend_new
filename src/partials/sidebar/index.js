import { Box, Divider, Stack } from "@mui/material";
import Image from "next/image";
import NavbarDefault from "./navbar";

export default function SidebarDefault(){
    return(
        <Stack direction="column" spacing={3}>
            <Box px={2} py={3}>
                <Image
                    src="/logo.svg"
                    width={160}
                    height={22}
                    alt="Logo Webbase"
                />
            </Box>

            <NavbarDefault />
        </Stack>
    )
}