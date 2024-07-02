import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const Tables = () => {
  const { data, searchQuery } = useSelector((state) => state.table);
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tables;
