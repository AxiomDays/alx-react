import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	return (
		<tr style={{ backgroundColor: "#f5f5f5ab" }}>
			{isHeader ? (
				textSecondCell === null ? (
					<th style={{ backgroundColor: "#deb5b545" }} colSpan={2}>{textFirstCell}</th>
				) : (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td style={{ backgroundColor: "#deb5b545" }}>{textFirstCell}</td>
					<td style={{ backgroundColor: "#deb5b545" }}>{textSecondCell}</td>
				</>
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
