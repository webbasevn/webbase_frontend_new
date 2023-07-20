import TitlePage from "@/components/page/title";
import useDarkmode from "@/hooks/redux/useDarkmode";
import { Button, Paper } from "@mui/material";

export default function BlankPage(){

    const [isDark, setDarkMode]  = useDarkmode()

    console.log(isDark)

    return(
        <>
            <TitlePage 
                title="Blank page"
            />

            <Paper elevation={0} sx={{ p: 3}}>
                <Button onClick={() => setDarkMode(!isDark)}>click di</Button>
            </Paper>
        </>
    )
}