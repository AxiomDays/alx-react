import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	return (
		<tr style={{ backgroundColor: "#5f5f5ab" }}>
			{isHeader ? (
				textSecondCell === null ? (
					<th className={css(styles.theader)} style={{ backgroundColor: "#deb5b545" }} colSpan={2}>{textFirstCell}</th>
				) : (
					<>
						<th className={css(styles.theader)} >{textFirstCell}</th>
						<th className={css(styles.theader)} >{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td className={css(styles.tdinheader)} style={{ backgroundColor: "#deb5b545" }}>{textFirstCell}</td>
					<td className={css(styles.tdinheader)} style={{ backgroundColor: "#deb5b545" }}>{textSecondCell}</td>
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

const styles = StyleSheet.create({
	theader: {
		borderBottom: '1px solid #ddd'
	},

	tdinheader: {
		width: '80 %'
	}
});

//tr: nth - child(2) {
//	text - align: left;
//}

export default CourseListRow;
