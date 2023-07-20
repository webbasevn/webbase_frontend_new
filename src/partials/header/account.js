import { Avatar, Backdrop, Box, Button, CircularProgress, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from "react";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

const menu = [
    {
        icon: <ManageAccountsOutlinedIcon />,
        text: 'Tài khoản'
    },
    {
        icon: <ManageAccountsOutlinedIcon />,
        text: 'Tài khoản'
    },
    {
        icon: <ManageAccountsOutlinedIcon />,
        text: 'Tài khoản'
    },
    {
        icon: <ManageAccountsOutlinedIcon />,
        text: 'Tài khoản'
    },
    {
        icon: <ManageAccountsOutlinedIcon />,
        text: 'Tài khoản'
    },
]


export default function AccountButtonHeader(){
    const {userData,logout} = useAuth()
    const router = useRouter()

    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState(false);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        setAnchorEl(null);
        const confirm = await Swal.fire({
            icon: 'warning',
            title: 'Đăng xuất',
            text: 'Bạn có chắc chắn muốn đăng xuất khỏi hệ thống',
            showCancelButton: true,
            cancelButtonColor: '#555',
            cancelButtonAriaLabel: 'Quay lại',
            confirmButtonAriaLabel: 'Đăng xuất',
            confirmButtonColor: '#d30000'
        })

        if(confirm.isConfirmed === false) return
        setLoading(true)
        try {
            await logout()
            router.push('/auth/login')
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ops,...',
                text: 'Có lỗi xảy ra, vui lòng f5 trang và thử lại',
            })
        }
        setLoading(false)
    }

    return(
        <>
            <Button
                id="account-button"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                        alt={userData?.data?.name}
                        sx={{ width: 24, height: 24, bgcolor: 'primary.main' }}
                    >
                        <Typography variant="body2" fontWeight={500} color="#fff" fontSize={13}>T</Typography>
                    </Avatar>

                    <Typography variant="body2" fontWeight={600} fontSize={14} display={{xs: 'none', md: 'block'}}>
                        Hi ! {userData?.data?.name}
                    </Typography>

                    <KeyboardArrowDownOutlinedIcon sx={{fontSize: 20, color: '#333', display: {xs: 'none', md: 'block'}}}/>
                </Stack>
            </Button>

            <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'account-button',
                }}
            >
                <Paper elevation={0} sx={{ minWidth: 220}}>
                    <MenuList>
                        {menu.map((item,key) =>
                            
                            <MenuItem key={key} sx={styles.item}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    {item.text}
                                </ListItemText>
                            </MenuItem>
                        )}
                        <Divider light />

                        <MenuItem sx={{py: 1}} onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutOutlinedIcon sx={{color: '#d30000',fontSize: 20,}}/>
                            </ListItemIcon>
                            <ListItemText sx={{'& span' : {fontSize: 15, color: '#d30000', fontWeight: 600}}}>
                                Đăng xuất
                            </ListItemText>
                        </MenuItem>

                    </MenuList>
                </Paper>
            </Menu>
            <Box>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Box>
        </>
    )
}

const styles = {
    item: {
        py: 1,
        '& svg': {
            fontSize: 20,
            color: '#888'
        },
        '& span': {
            fontSize: 15
        }
    }
}