import React, { Component } from "react";
import Footer from "../../components/Footer";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <main className="layout">
        <div className="layout__container">
          {children}
          <Footer />
        </div>
      </main>
    );
  }
}

export default Layout;
