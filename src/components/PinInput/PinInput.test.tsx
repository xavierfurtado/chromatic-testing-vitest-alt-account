import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import PinInput from './PinInput';

describe('PinInput', () => {
  test('renders the label', async () => {
    const screen = await render(<PinInput>Verification code</PinInput>);
    await expect.element(screen.getByText('Verification code')).toBeVisible();
  });

  test('renders one field per maxLength', async () => {
    const screen = await render(<PinInput maxLength={4} />);
    expect(screen.getByRole('textbox').elements()).toHaveLength(4);
  });

  test('disables the fields when disabled', async () => {
    const screen = await render(<PinInput maxLength={3} disabled />);
    const inputs = screen.getByRole('textbox').elements();
    expect(inputs).toHaveLength(3);
    inputs.forEach((input) => expect(input).toBeDisabled());
  });
});
