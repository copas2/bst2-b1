import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export default class App extends Component {
  render() {
    return (
      <div style={{width: 400}}>
        <BootstrapTable striped hover
          keyField="id"
          columns={ [
            { dataField: 'id', text: 'ID'}, 
            { dataField: 'name', text: 'Name', filter: textFilter()}
          ] }
          data={ [
            {id:1, name: "one"},
            {id:2, name: "two"},
            {id:3, name: "three"},
            {id:4, name: "four"},
            {id:5, name: "five"},
            {id:6, name: "six"},
          ] }
          cellEdit={ cellEditFactory({ mode: 'click' }) }
          pagination={ paginationFactory({
            sizePerPage: 5,
            totalSize: 6,
          }) }
          filter={ filterFactory() }  
        />
      </div>
    );
  }
}
