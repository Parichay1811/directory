import React from 'react';

const PersonTable = ({ people }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Aadhar Number</th>
          <th>Mobile Number</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {people.length === 0 ? (
          <tr><td colSpan="5" style={{ textAlign: 'center' }}><strong>No data</strong></td></tr>
        ) : (
          people.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.dob}</td>
              <td>{p.aadhar}</td>
              <td>{p.mobile}</td>
              <td>{p.age}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default PersonTable;
