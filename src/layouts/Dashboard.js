import React, { Component } from 'react';
import { Typography, TextField, Paper, Button } from '@material-ui/core';

class Dashboard extends Component {
  state = {
    title: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <Paper>
        <Typography variant="h2" align="center" color="inherit" gutterBottom>
          Exercises
        </Typography>
        <form>
          <TextField
            name="title"
            label="Exercise"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" color="primary" variant="raised">Create</Button>
        </form>
      </Paper>
    );
  }
}

export default Dashboard;
