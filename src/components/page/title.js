import { Stack, Typography } from "@mui/material";

export default function TitlePage({...props}){
    return(
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h1" component="h1" fontWeight={600} fontSize={18} color="#333">
                {props.title}
            </Typography>

            {props.actionBtn}
        </Stack>
    )
}