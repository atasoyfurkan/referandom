import React, { Component } from "react";
import ContactModal from "./contactModal";

class Footer extends Component {
  state = {
    contactModalShow: false
  };

  contactModalClose = () => {
    this.setState({ contactModalShow: false });
  };

  render() {
    return (
      <React.Fragment>
        <footer id="profile-footer">
          <a className="img-cover" href="/">
            <img
              src="img/referandom-w.svg"
              alt=""
              srcSet=""
              width="30"
              height="30"
            />
          </a>
          <div className="ui inverted text">
            <a className="item" href="/terms">
              <span>Kullanım Şartları</span>
            </a>
            <a className="item" href="/privacy">
              <span>Gizlilik Politikası</span>
            </a>
            <a
              className="item"
              href="#"
              onClick={() => this.setState({ contactModalShow: true })}
            >
              <span>İletişim</span>
            </a>
          </div>
          <div className="ui inverted text social">
            <a className="item" href="https://facebook.com/">
              <i className="facebook f icon" />
            </a>
            <a className="item" href="https://twitter.com/">
              <i className="twitter icon" />
            </a>
            <a className="item" href="https://instagram.com/">
              <i className="instagram icon" />
            </a>
            <a className="item" href="https://medium.com/">
              <i className="medium icon" />
            </a>
          </div>
        </footer>
        <ContactModal
          show={this.state.contactModalShow}
          onHide={this.contactModalClose}
        />
      </React.Fragment>
    );
  }
}

export default Footer;
