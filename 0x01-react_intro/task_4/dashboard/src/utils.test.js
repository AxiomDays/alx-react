import { render, screen } from '@testing-library/react'
import { getFullYear, getFooterCopy, getLatestNotification} from './utils.js';

test('returns current year', () => {
	expect(getFullYear()).toBe(2024);
});

test('correct footer copy', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');
	expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('returns right notification', () => {
	expect(getLatestNotification()).toBe(
		'<strong>Urgent requirement</strong> - complete by EOD'
	);
});
