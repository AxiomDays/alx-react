import React from 'react';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    return (
        <tr>
            {isHeader ? <NullRow textFirstCell={textFirstCell} textSecondCell={textSecondCell} /> :
                <>
                    <td>
                        {textFirstCell}
                    </td>
                    <td>
                        {textSecondCell}
                    </td>
                </>
            }
        </tr>
    );
}

const NullRow = ({ textFirstCell, textSecondCell }) => {

    if (textSecondCell) {
        return (
            <>
                <th>{textFirstCell}</th> <th>{textSecondCell}</th>
            </>
        )
    } else {
        return (
            <>
                <th>
                    {textFirstCell}
                </th>
                <th>
                    {textSecondCell}
                </th>
            </>
        )
    }
}

export default CourseListRow;