import React from "react";
import { Container, Button, Table, Spinner } from "reactstrap";

import { connect } from "react-redux";
import { getColleges, deleteCollege } from "../actions/collegeActions";

import CollegeModal from "./CollegeModal";

class CollegeList extends React.Component {
  onDeleteCollege = id => {
    this.props.deleteCollege(id);
    // alert(id)
  };

  componentDidMount() {
    this.props.getColleges();
  }

  render() {
    const { colleges, loading } = this.props.college;
    return (
      <div>
        <Container>
          <CollegeModal />
          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>College</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading === true ? (
                <tr>
                  <td colSpan="3">
                    <h3 style={{ textAlign: "center" }}>
                      <Spinner color="primary" />
                    </h3>
                  </td>
                </tr>
              ) : colleges.length === 0 ? (
                <tr>
                  <td colSpan="3">
                    <h3 style={{ textAlign: "center" }}>
                      data isn't available
                    </h3>
                  </td>
                </tr>
              ) : (
                colleges.map(college => (
                  <tr key={college._id}>
                    <td>{college._id}</td>
                    <td>{college.college}</td>
                    <td>
                      <Button
                        onClick={() => this.onDeleteCollege(college._id)}
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
  college: state.college
});

export default connect(
  mapStateToProps,
  { getColleges, deleteCollege }
)(CollegeList);
