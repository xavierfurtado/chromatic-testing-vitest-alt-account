import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Divider from './Divider';

describe('Divider', () => {
  test('renders a separator line', async () => {
    const screen = await render(<Divider />);
    await expect.element(screen.getByRole('separator')).toBeInTheDocument();
  });

  test('applies a custom color to the line', async () => {
    const screen = await render(<Divider color="rgb(255, 0, 0)" />);
    await expect
      .element(screen.getByRole('separator'))
      .toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
  });
});
