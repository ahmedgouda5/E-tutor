"use client";

import { Component, ReactNode } from "react";
import Error from "@/components/Error";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  reset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return <Error reset={this.reset} />;
    }

    return this.props.children;
  }
}
