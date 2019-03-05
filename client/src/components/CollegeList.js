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

class CollegeList extends React.Component {
  state = {
    colleges: [
      { id: "l3758jfkd", college: "University Of Indonesia" },
    ],
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { colleges } = this.state;
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
                <tr>
                  <td>{college.id}</td>
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
                  <Label for="college">
                      College Name
                  </Label>
                  <Input
                    type="text"
                    name="college"
                    id="college"
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

export default CollegeList;
