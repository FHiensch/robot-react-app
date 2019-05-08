import * as React from "react";
import "./sidebar.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export interface ISidebarProps {
  isCollapsed: boolean;
}

export interface ISidebarState {
  isRobotOn: boolean;
  showModal: boolean;
}

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
  state = {
    isRobotOn: false,
    showModal: false
  };

  constructor(props: ISidebarProps) {
    super(props);

    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);
  }

  handleYes() {
    this.setState({ showModal: false, isRobotOn: false });
  }

  handleNo() {
    this.setState({ showModal: false, isRobotOn: this.state.isRobotOn });
  }

  render() {
    const elements = [
      {
        caption: "Move robot up",
        icon: "angle-double-up"
      },
      {
        caption: "Move robot down",
        icon: "angle-double-down",
        disabled: true
      },
      {
        caption: "Move robot left",
        icon: "angle-double-left"
      },
      {
        caption: "Move robot right",
        icon: "angle-double-right"
      },
      {
        caption: this.state.isRobotOn ? "Turn robot off" : "Turn robot on",
        icon: "power-off",
        classes: this.state.isRobotOn ? "text-danger" : "text-success",
        onClick: () => {
          if (this.state.isRobotOn) {
            this.setState({ showModal: true });
          } else {
            this.setState({ isRobotOn: true });
          }
        }
      },
      {
        caption: "Extra function 1",
        icon: "dungeon",
        hidden: true
      }
    ];

    return (
      <React.Fragment>
        <div
          className={`app-sidebar ${
            this.props.isCollapsed ? "collapsed" : ""
          }`}>
          {elements.map((e, i) => (
            <button
              className={`sidebar-element ${e.classes}`}
              disabled={e.disabled || false}
              hidden={e.hidden || false}
              key={i}
              title={e.caption}
              onClick={e.onClick}>
              <div className="element-icon">
                <i className={`fas fa-${e.icon}`} />
              </div>
              <span className="element-caption">{e.caption}</span>
            </button>
          ))}
        </div>

        <Modal show={this.state.showModal} onHide={this.handleNo}>
          <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to turn off the robot? <br />
            <strong>This could make him sad.</strong>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleNo}>
              No
            </Button>
            <Button variant="primary" onClick={this.handleYes}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Sidebar;
