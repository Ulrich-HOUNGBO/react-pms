import {Link, useRouteError} from "react-router-dom";
import {Button} from "primereact/button";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}

export default ErrorPage
