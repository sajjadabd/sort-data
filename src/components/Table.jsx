import React from "react";

const Table = ({ content }) => {
  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>email</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item) => (
            <tr key={item.id}>
              <td>{item.email}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
