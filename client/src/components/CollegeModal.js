import React, { Component } from "react";
import { connect } from "react-redux";
import { addCollege } from "../actions/collegeActions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class CollegeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.college_input = React.createRef();
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  onAddCollege = () => {
    const data = {
      _id: Math.random(),
      college: this.college_input.current.value
    };
    this.props.addCollege(data);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button className="newData-btn" onClick={this.toggle}>
          New College
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New college</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="college">College Name</Label>
                <Input
                  type="text"
                  innerRef={this.college_input}
                  name="college"
                  id="college"
                  placeholder="with a placeholder"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onAddCollege}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { addCollege }
)(CollegeModal);
