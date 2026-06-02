import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import Footer from './Footer';

describe('Footer', () => {
  test('renders the label text', async () => {
    const screen = await render(<Footer label="© 2025 Acme" />);
    await expect.element(screen.getByText('© 2025 Acme')).toBeVisible();
  });

  test('renders the provided links', async () => {
    const screen = await render(<Footer>{['Privacy', 'Terms']}</Footer>);
    await expect.element(screen.getByText('Privacy')).toBeVisible();
    await expect.element(screen.getByText('Terms')).toBeVisible();
  });

  test('invokes onLinkClick with the clicked link', async () => {
    const onLinkClick = vi.fn();
    const screen = await render(
      <Footer onLinkClick={onLinkClick}>{['Privacy']}</Footer>,
    );
    await screen.getByText('Privacy').click();
    expect(onLinkClick).toHaveBeenCalledWith('Privacy');
  });
});
