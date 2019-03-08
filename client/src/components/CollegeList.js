import React from "react";
import {
  Container,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";
import { getColleges, addCollege } from "../actions/collegeActions";

class CollegeList extends React.Component {
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

  componentDidMount() {
    this.props.getColleges();
  }

  render() {
    const { colleges } = this.props.college;
    return (
      <div>
        <Container>
          <Button className="newData-btn" onClick={this.toggle}>
            New College
          </Button>

          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>College</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map(college => (
                <tr key={college._id}>
                  <td>{college._id}</td>
                  <td>{college.college}</td>
                  <td>
                    <Button
                      onClick={() => {
                        this.setState(state => ({
                          colleges: state.colleges.filter(
                            xcollege => xcollege.id !== college.id
                          )
                        }));
                      }}
                      className="remove-btn"
                      color="danger"
                      size="sm"
                    >
                      &times;
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        {/* modal */}
        <div>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  college: state.college
});

export default connect(
  mapStateToProps,
  { getColleges, addCollege }
)(CollegeList);
