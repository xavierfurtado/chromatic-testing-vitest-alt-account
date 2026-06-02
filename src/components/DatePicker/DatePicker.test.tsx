import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  test('renders a label above the control', async () => {
    const screen = await render(<DatePicker>Departure date</DatePicker>);
    await expect.element(screen.getByText('Departure date')).toBeVisible();
  });

  test('renders the text input', async () => {
    const screen = await render(<DatePicker />);
    await expect.element(screen.getByRole('textbox')).toBeVisible();
  });

  test('renders the clear trigger', async () => {
    const screen = await render(<DatePicker />);
    await expect
      .element(screen.getByRole('button', { name: 'Clear' }))
      .toBeVisible();
  });

  test('opens the calendar popup when the trigger is clicked', async () => {
    const screen = await render(<DatePicker />);
    await screen.getByRole('button', { name: '📅' }).click();
    await expect.element(screen.getByText('Sun')).toBeVisible();
  });
});
