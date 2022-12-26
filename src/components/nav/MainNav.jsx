import ResponsiveLoginAppBar from "./NavTwo";
import ResponsiveAppBar from "./Nav";

const ValidateMenu = (props) => {
    if (props.isAuthenticated === true) {
        return (
            <>
                <ResponsiveAppBar name="BooksChain"/>
            </>
        )
    } else {
        return (
            <>
                <ResponsiveLoginAppBar name="BooksChain"/>
            </>
        )
    }
}

export default function MainNav(props) {
    return <ValidateMenu isAuthenticated={props.isAuthenticated}/>
}