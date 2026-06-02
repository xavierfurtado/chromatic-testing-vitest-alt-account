import { describe, test, expect } from 'vitest';
import { CalendarDate } from '@internationalized/date';
import { render } from '../../test-setup';
import Calendar from './Calendar';

describe('Calendar', () => {
  test('renders a custom heading label', async () => {
    const screen = await render(
      <Calendar value={[new CalendarDate(2024, 1, 15)]}>Pick a date</Calendar>,
    );
    await expect.element(screen.getByText('Pick a date')).toBeVisible();
  });

  test('renders weekday headers', async () => {
    const screen = await render(<Calendar value={[new CalendarDate(2024, 1, 15)]} />);
    await expect.element(screen.getByText('Sun')).toBeVisible();
  });

  test('renders day cells for the focused month', async () => {
    const screen = await render(<Calendar value={[new CalendarDate(2024, 1, 15)]} />);
    await expect
      .element(screen.getByRole('button', { name: '15' }))
      .toBeVisible();
  });
});
