import React, { Component } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

class shapes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shape: "Shape Name",
      id: "#shape",
    };
  }

  clickBox = () => {
    this.setState({ shape: "Box", id: "1" });
  };

  clickCircle = () => {
    this.setState({ shape: "Circle", id: "2" });
  };

  clickTriangle = () => {
    this.setState({ shape: "Triangle", id: "3" });
  };

  render() {
    return (
      <Section>
        <Container>
          <Button onClick={this.clickBox}>
            <Box id="1" name="box"></Box>
          </Button>

          <Button onClick={this.clickCircle}>
            <Circle id="2" name="circle"></Circle>
          </Button>

          <Button onClick={this.clickTriangle}>
            <Triangle id="3" name="triangle"></Triangle>
          </Button>
        </Container>

        <SectionLable>
          <Lable>
            <TextField
              label="Shape Id"
              variant="outlined"
              value={this.state.id}
            />
          </Lable>
          <Lable>
            <TextField
              label="Shape Name"
              variant="outlined"
              value={this.state.shape}
            />
          </Lable>
        </SectionLable>
      </Section>
    );
  }
}

export default shapes;

const Section = styled.div``;

const SectionLable = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  display: flex;
`;

const Lable = styled.div`
  margin: 20px;
  padding: 20px;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: lime;
  margin: 20px;
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: red;
  margin: 20px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 200px solid blue;
  margin: 20px;
`;
