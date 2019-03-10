import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../actions/studentActions";
import { getColleges } from "../actions/collegeActions";
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

class StudentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.identification_number_input = React.createRef();
    this.college_input = React.createRef();
    this.year_input = React.createRef();
    this.name_input = React.createRef();
    this.majoring_input = React.createRef();
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  onAddstudent = () => {
    const data = {
      identification_number: this.identification_number_input.current.value,
      majoring: this.majoring_input.current.value,
      college_id: Number(this.college_input.current.value),
      year: this.year_input.current.value,
      name: this.name_input.current.value
    };

    this.props.addStudent(data);
    this.toggle();
  };

  componentDidMount() {
    this.props.getColleges();
  }

  render() {
    const { colleges } = this.props.college;
    return (
      <div>
        <Button className="newData-btn" onClick={this.toggle}>
          New Student
        </Button>

        {/* modal */}
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>New Student</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="identification_number">
                    Identification Number
                  </Label>
                  <Input
                    type="text"
                    name="identification_number"
                    id="identification_number"
                    placeholder="with a placeholder"
                    innerRef={this.identification_number_input}
                  />
                  <Label for="name">Name</Label>
                  <Input
                    innerRef={this.name_input}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="with a placeholder"
                  />
                  <Label for="college">College</Label>
                  <Input
                    innerRef={this.college_input}
                    type="select"
                    name="college"
                    id="college"
                  >
                    <option value={0}>- Select College -</option>
                    {colleges.map(college => {
                      return (
                        <option key={college._id} value={college._id}>
                          {college.college}
                        </option>
                      );
                    })}
                  </Input>
                  <Label for="majoring">Majoring</Label>
                  <Input
                    innerRef={this.majoring_input}
                    type="text"
                    name="majoring"
                    id="majoring"
                    placeholder="with a placeholder"
                  />
                  <Label for="name">year</Label>
                  <Input
                    innerRef={this.year_input}
                    type="number"
                    name="year"
                    id="year"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.onAddstudent}>
                Submit
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.student,
  college: state.college
});

export default connect(
  mapStateToProps,
  { addStudent, getColleges }
)(StudentModal);
