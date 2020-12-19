import React, { Component, ErrorInfo } from "react";

interface Props {}
interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
    state = {
        hasError: false,
    };



    public static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error: ", error);
        console.log("Stack Trace: ", errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <div>
                <h1>Something went wrong((((</h1>
                <button onClick={()=>console.log("Contact us")}> Contact us</button>
            </div>
        }

        return this.props.children;
    }
}
