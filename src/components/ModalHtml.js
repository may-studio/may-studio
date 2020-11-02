import React from "react";

class ModalHtml extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let modal = this.props.content;

    return (
      <div>
        <div
          className="modal fade"
          id="ModalHtml"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modal.title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div
                className="modal-body"
                dangerouslySetInnerHTML={{ __html: modal.text }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalHtml;
