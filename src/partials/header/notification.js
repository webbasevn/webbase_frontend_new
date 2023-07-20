import { Badge, Box, IconButton } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function NotificationIconHeader(){
    return(
        <Box display={{xs: 'none', md: 'block'}}>
            <IconButton>
                <Badge badgeContent={4} color="primary">
                    <NotificationsNoneIcon color="action" />
                </Badge>
            </IconButton>
        </Box>
    )
}