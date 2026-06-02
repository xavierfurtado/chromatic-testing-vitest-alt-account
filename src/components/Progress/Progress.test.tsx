import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Progress from './Progress';

describe('Progress', () => {
  test('renders the default label', async () => {
    const screen = await render(<Progress value={50} />);
    await expect.element(screen.getByText('Loading...')).toBeVisible();
  });

  test('renders a custom label', async () => {
    const screen = await render(<Progress value={50}>Uploading</Progress>);
    await expect.element(screen.getByText('Uploading')).toBeVisible();
  });

  test('exposes the value via the progressbar role', async () => {
    const screen = await render(<Progress value={75} />);
    await expect
      .element(screen.getByRole('progressbar'))
      .toHaveAttribute('aria-valuenow', '75');
  });
});
