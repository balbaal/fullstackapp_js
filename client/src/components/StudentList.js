import React from "react";
import { Container, Button, Table } from "reactstrap";

import { connect } from "react-redux";
import { getStudents } from "../actions/studentActions";
import { deleteStudent } from "../actions/studentActions";

import StudentModal from "./StudentModal";

class StudentList extends React.Component {
  onDeleteStudent = id => {
    this.props.deleteStudent(id);
  };

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const { students } = this.props.student;
    return (
      <div>
        <Container>
          <StudentModal />
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
              {students.length === 0 ? (
                <tr>
                  <td colSpan="6">
                    <h3 style={{ textAlign: "center" }}>
                      data isn't available . . .
                    </h3>
                  </td>
                </tr>
              ) : (
                students.map(student => (
                  <tr key={student.identification_number}>
                    <td>{student.identification_number}</td>
                    <td>{student.name}</td>
                    <td>{student.college}</td>
                    <td>{student.majoring}</td>
                    <td>{student.year}</td>
                    <td>
                      <Button
                        onClick={() =>
                          this.onDeleteStudent(student.identification_number)
                        }
                        className="remove-btn"
                        color="danger"
                        size="sm"
                      >
                        &times;
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  { getStudents, deleteStudent }
)(StudentList);
