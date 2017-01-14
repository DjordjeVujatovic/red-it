import React, { Component } from 'react';
import Week from '../../components/Week';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import * as data from '../../mock-data';

class Categories extends Component {
  constructor() {
    super();
    this.state = { open: true };
  }
   render() {
      return (
        <Drawer open={ this.state.open }>
          <AppBar
            title="RED it"
          />
          <p>Categories</p>
          <Week />
        </Drawer>
      );
   }
}

export default Categories;