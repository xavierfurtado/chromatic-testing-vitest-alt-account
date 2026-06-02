import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import Header from './Header';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
];

describe('Header', () => {
  test('renders the title', async () => {
    const screen = await render(<Header title="Dashboard" />);
    await expect
      .element(screen.getByRole('heading', { name: 'Dashboard' }))
      .toBeVisible();
  });

  test('renders navigation links', async () => {
    const screen = await render(<Header title="App" links={links} />);
    await expect.element(screen.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect.element(screen.getByRole('link', { name: 'About' })).toBeVisible();
  });

  test('invokes onLinkClick with the clicked link', async () => {
    const onLinkClick = vi.fn();
    const screen = await render(
      <Header title="App" links={links} onLinkClick={onLinkClick} />,
    );
    await screen.getByRole('link', { name: 'About' }).click();
    expect(onLinkClick).toHaveBeenCalledWith(links[1]);
  });
});
