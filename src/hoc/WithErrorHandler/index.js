import React, { Component, Fragment } from "react";

import Modal from "../../components/Modal";

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      let errorMessage = null;

      if (
        this.state.error &&
        this.state.error.message === "Request failed with status code 404"
      ) {
        errorMessage = "Pokemon Not Found :(";
      }

      if (
        this.state.error &&
        this.state.error.message !== "Request failed with status code 404"
      ) {
        errorMessage = this.state.error.message;
      }

      return (
        <Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            <p className="modal__message modal__message--error">
              {errorMessage}
            </p>
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default WithErrorHandler;
