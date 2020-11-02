import React from "react";

class AboutMayStudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="aboutMayStudioModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">О приложении</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="centeredText">
                  Приложение создано в<br />
                  <b>Май-студии</b>
                  <br />
                  <br />
                  <a
                    className="linkStyle"
                    style={{ fontSize: "25px", margin: "30px 15px 10px 10px" }}
                    href="https://may-studio.github.io/may-studio"
                  >
                    <i className="fas fa-globe"></i>
                  </a>
                  <a
                    className="linkStyle"
                    style={{ fontSize: "25px", margin: "30px 15px 10px 10px" }}
                    href="https://vk.com/warmay_studio"
                  >
                    <i className="fab fa-vk"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMayStudio;
