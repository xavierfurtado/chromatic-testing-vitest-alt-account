import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import TimeField from './TimeField';

describe('TimeField', () => {
  test('renders its label', async () => {
    const screen = await render(<TimeField>Start time</TimeField>);
    await expect.element(screen.getByText('Start time')).toBeVisible();
  });

  test('shows a clear button when a value is set', async () => {
    const screen = await render(<TimeField value="14:30">Time</TimeField>);
    await expect
      .element(screen.getByRole('button', { name: 'Clear time' }))
      .toBeVisible();
  });

  test('clears the value when the clear button is clicked', async () => {
    const onValueChange = vi.fn();
    const screen = await render(
      <TimeField value="14:30" onValueChange={onValueChange}>
        Time
      </TimeField>,
    );
    await screen.getByRole('button', { name: 'Clear time' }).click();
    expect(onValueChange).toHaveBeenCalledWith(
      expect.objectContaining({ value: '' }),
    );
  });

  test('hides the clear button when disabled', async () => {
    const screen = await render(
      <TimeField value="14:30" disabled>
        Time
      </TimeField>,
    );
    expect(
      screen.getByRole('button', { name: 'Clear time' }).query(),
    ).toBeNull();
  });
});
