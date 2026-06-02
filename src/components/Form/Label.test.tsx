import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Label from './Label';

describe('Label', () => {
  test('renders its text', async () => {
    const screen = await render(<Label htmlFor="email">Email Address</Label>);
    await expect.element(screen.getByText('Email Address')).toBeVisible();
  });

  test('associates with a field via htmlFor', async () => {
    const screen = await render(<Label htmlFor="email">Email Address</Label>);
    await expect
      .element(screen.getByText('Email Address'))
      .toHaveAttribute('for', 'email');
  });

  test('uses inverted text color when inverted', async () => {
    const screen = await render(<Label inverted>Inverted</Label>);
    // white text (#FFFFFF) in inverted mode
    await expect
      .element(screen.getByText('Inverted'))
      .toHaveStyle({ color: 'rgb(255, 255, 255)' });
  });
});
