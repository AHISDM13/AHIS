// import React, { Component } from "react";
// import { Bar } from "react-chartjs-2";
// import axios from "axios";
// import { connect } from "react-redux";

// class TeacherAverageStudentBar extends Component {
//   constructor() {
//     super();

//     this.state = {
//       data: {}
//     };
//   }

//   render() {
//     const data = {
//       labels: [
//         "Quiz 1",
//         "Quiz 2",
//         "Quiz 3",
//         "Quiz 4",
//         "Quiz 5",
//         "Quiz 6",
//         "Quiz 7"
//       ],
//       datasets: [
//         {
//           label: "Quiz scores per class",
//           backgroundColor: "rgba(255,99,132,0.2)",
//           borderColor: "rgba(255,99,132,1)",
//           borderWidth: 1,
//           hoverBackgroundColor: "rgba(255,99,132,0.4)",
//           hoverBorderColor: "rgba(255,99,132,1)",
//           data: [65, 59, 80, 81, 56, 55, 40]
//         }
//       ]
//     };

//     return (
//       <div style={{ height: "200px", width: "300px" }}>
//         <h2>Student Average Quiz Scores</h2>
//         <Bar
//           data={data}
//           width={350}
//           height={200}
//           options={{
//             responsive: false,
//             maintainAspectRatio: true
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default TeacherAverageStudentBar;

import React from "react";
// import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class TeacherAverageStudentBar extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Profile Progress",
                  accessor: "progress",
                  Cell: row => (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#dadada",
                        borderRadius: "2px"
                      }}
                    >
                      <div
                        style={{
                          width: `${row.value}%`,
                          height: "100%",
                          backgroundColor:
                            row.value > 66
                              ? "#85cc00"
                              : row.value > 33
                                ? "#ffbf00"
                                : "#ff2e00",
                          borderRadius: "2px",
                          transition: "all .2s ease-out"
                        }}
                      />
                    </div>
                  )
                },
                {
                  Header: "Status",
                  accessor: "status",
                  Cell: row => (
                    <span>
                      <span
                        style={{
                          color:
                            row.value === "relationship"
                              ? "#ff2e00"
                              : row.value === "complicated"
                                ? "#ffbf00"
                                : "#57d500",
                          transition: "all .3s ease"
                        }}
                      >
                        &#x25cf;
                      </span>{" "}
                      {row.value === "relationship"
                        ? "In a relationship"
                        : row.value === "complicated"
                          ? `It's complicated`
                          : "Single"}
                    </span>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

export default TeacherAverageStudentBar;
