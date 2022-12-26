import MainNav from "./nav/MainNav";
import BasicSpeedDial from "./widgets/Add/Add";
import Typography from "@mui/material/Typography";
import {Breadcrumbs, Link} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
import LoginWidget from "./widgets/login/Login";
import BlogCard from "./widgets/Blogs/Blog";
import Blog from "./widgets/Blogs/Blog";

function Login(props) {
    if (props.isLogin === false) {
        return (
            <Grid2 container spacing={1}>
                <Grid2 xs={10}>
                </Grid2>
                <Grid2 xs={2}>
                    <LoginWidget/>
                </Grid2>
            </Grid2>
        )
    }
}

const isLogin = false;

export default function App() {
    return (
        <div>
            <MainNav isAuthenticated={isLogin}/>
            <div>
                {/* <BasicSpeedDial/> */}
                <Breadcrumbs aria-label="breadcrumb" marginLeft={7} marginTop={2}>
                    <Link underline="hover" color="inherit" href="/">
                        BooksChain
                    </Link>
                    <Typography color="text.primary">Home</Typography>
                </Breadcrumbs>
                {/*<div>
                    <Login isLogin={isLogin} />
                </div>*/}
                <div>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={8}>
                            <Blog />
                        </Grid2>
                        <Grid2 xs={4}>

                        </Grid2>
                    </Grid2>
                </div>
            </div>
        </div>
    )
}