import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Slider from './Slider';

describe('Slider', () => {
  test('renders the label', async () => {
    const screen = await render(<Slider value={[50]}>Volume</Slider>);
    await expect.element(screen.getByText('Volume')).toBeVisible();
  });

  test('exposes the current value via the slider role', async () => {
    const screen = await render(<Slider value={[30]}>Volume</Slider>);
    await expect
      .element(screen.getByRole('slider'))
      .toHaveAttribute('aria-valuenow', '30');
  });

  test('marks the slider thumb disabled when disabled', async () => {
    const screen = await render(
      <Slider value={[10]} disabled>
        Volume
      </Slider>,
    );
    await expect
      .element(screen.getByRole('slider'))
      .toHaveAttribute('aria-disabled', 'true');
  });
});
