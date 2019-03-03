import React from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";
import uuid from "uuid";

class StudentList extends React.Component {
  state = {
    items: [
      { id: uuid(), name: "balbaal" },
      { id: uuid(), name: "dian" },
      { id: uuid(), name: "ravin" },
      { id: uuid(), name: "anas" }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Container>
          <Button
            color="dark"
            style={{ marginBottom: "5px" }}
            onClick={() => {
              const data = prompt("enter name");
              if (data) {
                this.setState(state => ({
                  items: [...state.items, { id: uuid(), name: data }]
                }));
              }
            }}
          >
            New Data
          </Button>

            {items.map(item => {
                return(
                    <h3 key={item.id}>{item.name}</h3>
                )
            })}

        </Container>
      </div>
    );
  }
}

export default StudentList;
