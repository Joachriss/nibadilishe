import { Button } from "@mui/joy"
import { useRouteError, Link } from 'react-router-dom'

export const RouterErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col justify-center">
            <div className="text-center space-y-2 flex flex-col mx-auto">
                <h1 className="text-5xl font-bold">404</h1>
                <div className="text-3xl">Oops!</div>
                <p className="text-2xl">Sorry, an unexpected error has occurred. <br /><span className="text-lg">The page you requested is not available</span></p>
                <div><Link to="/"><Button color="primary">Go home</Button></Link></div>
            </div>
        </div>
    )
}
