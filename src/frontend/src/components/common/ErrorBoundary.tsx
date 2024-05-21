import React, { Component } from "react";
import {
  ErrorBoundaryPropsType,
  ErrorBoundaryStateType,
} from "../../types/errorBoundaryTypes";

export default class ErrorBoundary extends Component<
  ErrorBoundaryPropsType,
  ErrorBoundaryStateType
> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = {
      error: false,
    };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error: true });
    console.log("error ", error, errorInfo);
  }
  render() {
    return this.state.error ? (
      <div className="whole__page__container w-full h-full flex flex-col gap-6 items-center justify-center ">
        <h2 className="text-4xl">An Error Occured.</h2>
        <button className="go__home__button medium__button">Go Home</button>
      </div>
    ) : (
      this.props.children
    );
  }
}
