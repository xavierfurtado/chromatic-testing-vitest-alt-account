import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import Toggle from './Toggle';

describe('Toggle', () => {
  test('renders the accompanying label', async () => {
    const screen = await render(<Toggle>Notifications</Toggle>);
    await expect.element(screen.getByText('Notifications')).toBeVisible();
  });

  test('reflects the pressed state', async () => {
    const screen = await render(<Toggle pressed>On</Toggle>);
    await expect
      .element(screen.getByRole('button'))
      .toHaveAttribute('aria-pressed', 'true');
  });

  test('invokes onPressedChange when clicked', async () => {
    const onPressedChange = vi.fn();
    const screen = await render(<Toggle onPressedChange={onPressedChange}>X</Toggle>);
    await screen.getByRole('button').click();
    expect(onPressedChange).toHaveBeenCalledWith(true);
  });

  test('is disabled when the disabled prop is set', async () => {
    const screen = await render(<Toggle disabled>X</Toggle>);
    await expect.element(screen.getByRole('button')).toBeDisabled();
  });
});
