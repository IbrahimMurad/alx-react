import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr>
      {isHeader ? (
        <React.Fragment>
          {textSecondCell === null ? (
            <React.Fragment>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </React.Fragment>
          ) : (
            <th colSpan="2">{textFirstCell}</th>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </React.Fragment>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
