import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const account = [
    {
        link: '/users',
        label: 'Tài khoản',
        icon: <AccountBalanceWalletOutlinedIcon />
    },
    {
        link: '/packages',
        label: 'Gói dịch vụ',
        icon: <AccountBalanceWalletOutlinedIcon />
    },
    {
        link: '/servers',
        label: 'Servers',
        icon: <AccountBalanceWalletOutlinedIcon />
    },
]

const account1 = [
    {
        link: '/users',
        label: 'Tài khoản',
        icon: <AccountBalanceWalletOutlinedIcon />
    },
    {
        link: '/packages',
        label: 'Gói dịch vụ',
        icon: <AccountBalanceWalletOutlinedIcon />
    },
    {
        link: '/servers',
        label: 'Servers',
        icon: <AccountBalanceWalletOutlinedIcon />
    },
]

export default function NavbarDefault(){
    return(
        <Stack direction="column" spacing={3} px={2}>

            <Box>
                <Link href="/">
                    <Stack direction="row" alignItems="center" spacing={2} sx={styles.navItem} className="active">
                        <GridViewOutlinedIcon />
                        <Typography variant="body2" sx={styles.navItemLabel}>
                            Dashboard
                        </Typography>
                    </Stack>
                </Link>
            </Box>

            <Box>
                <Typography variant="body2" sx={styles.label}>
                    Source
                </Typography>

                <Stack direction="column" spacing={0.5} >
                    {account.map((item,key) =>
                        <Link href={item.link} key={key}>
                            <Stack direction="row" alignItems="center" spacing={2} sx={styles.navItem}>
                                {item.icon}
                                <Typography variant="body2" sx={styles.navItemLabel}>
                                    {item.label}
                                </Typography>
                            </Stack>
                        </Link>
                    )}
                </Stack>
            </Box>

            <Box>
                <Typography variant="body2" sx={styles.label}>
                    Data
                </Typography>

                <Stack direction="column" spacing={0.5} >
                    {account1.map((item,key) =>
                        <Link href={item.link} key={key}>
                            <Stack direction="row" alignItems="center" spacing={2} sx={styles.navItem}>
                                {item.icon}
                                <Typography variant="body2" sx={styles.navItemLabel}>
                                    {item.label}
                                </Typography>
                            </Stack>
                        </Link>
                    )}
                </Stack>
            </Box>

            <Box>
                <Typography variant="body2" sx={styles.label}>
                    Account
                </Typography>

                <Stack direction="column" spacing={0.5} >
                    {account1.map((item,key) =>
                        <Link href={item.link} key={key}>
                            <Stack direction="row" alignItems="center" spacing={2} sx={styles.navItem}>
                                {item.icon}
                                <Typography variant="body2" sx={styles.navItemLabel}>
                                    {item.label}
                                </Typography>
                            </Stack>
                        </Link>
                    )}
                </Stack>
            </Box>

        </Stack>
    )
}

const styles = {
    label: {
        fontSize: 11,
        fontWeight: 600,
        color: '#888',
        textTransform: 'uppercase',
        mb: 1.5
    },
    navItem: {
        p: 1,
        borderRadius: 1,
        transition: '0.5s easy-in-out',
        '&:hover':{
            bgcolor: '#eee'
        },
        '& svg': {
            fontSize: 20,
            color: '#666'
        }
    },
    navItemLabel: {
        fontWeight: 500,
        color: '#555',
        fontSize: 14
    }
}