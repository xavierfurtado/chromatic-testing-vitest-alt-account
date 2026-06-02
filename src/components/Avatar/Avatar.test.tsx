import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  test('renders the fallback initials', async () => {
    const screen = await render(<Avatar alt="John Doe" fallback="JD" />);
    await expect.element(screen.getByText('JD')).toBeVisible();
  });

  test('applies a circular root shape', async () => {
    const screen = await render(
      <Avatar alt="John Doe" fallback="JD" ids={{ root: 'avatar-root' }} />,
    );
    const root = screen.getByText('JD').element().parentElement!;
    expect(root).toHaveStyle({ borderRadius: '50%' });
  });
});
