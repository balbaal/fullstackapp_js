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
import uuid from "uuid";

class StudentList extends React.Component {
  state = {
    students: [
      { name: "balbaal", identification_number: "758jfkd", college: "", majoring: "", year: "" },
    ],
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { students } = this.state;
    return (
      <div>
        <Container>
          <Button className="newData-btn" onClick={this.toggle}>
            New Student
          </Button>

          <Table striped>
            <thead>
              <tr>
                <th>Identification Number</th>
                <th>Name</th>
                <th>College</th>
                <th>Majoring</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr>
                  <td>{student.identification_number}</td>
                  <td>{student.name}</td>
                  <td>{student.college}</td>
                  <td>{student.majoring}</td>
                  <td>{student.year}</td>
                  <td>
                    <Button
                      onClick={() => {
                        this.setState(state => ({
                          students: state.students.filter(
                            xstudent => xstudent.id !== student.id
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
                  />
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="with a placeholder"
                  />
                  <Label for="college">College</Label>
                  <Input type="select" name="college" id="college">
                    <option>- Select College -</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  <Label for="majoring">Majoring</Label>
                  <Input
                    type="text"
                    name="majoring"
                    id="majoring"
                    placeholder="with a placeholder"
                  />
                  <Label for="name">year</Label>
                  <Input
                    type="number"
                    name="year"
                    id="year"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
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

export default StudentList;
