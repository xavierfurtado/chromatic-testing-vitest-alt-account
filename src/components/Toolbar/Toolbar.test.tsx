import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Toolbar from './Toolbar';

describe('Toolbar', () => {
  test('renders children inside a toolbar role', async () => {
    const screen = await render(
      <Toolbar>
        <button>One</button>
        <button>Two</button>
      </Toolbar>,
    );
    await expect.element(screen.getByRole('toolbar')).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'One' })).toBeVisible();
  });

  test('lays out horizontally by default', async () => {
    const screen = await render(
      <Toolbar>
        <button>X</button>
      </Toolbar>,
    );
    await expect
      .element(screen.getByRole('toolbar'))
      .toHaveStyle({ flexDirection: 'row' });
  });

  test('lays out vertically when requested', async () => {
    const screen = await render(
      <Toolbar orientation="vertical">
        <button>X</button>
      </Toolbar>,
    );
    await expect
      .element(screen.getByRole('toolbar'))
      .toHaveStyle({ flexDirection: 'column' });
  });
});
