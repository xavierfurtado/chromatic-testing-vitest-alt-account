import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import Select from './Select';

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

describe('Select', () => {
  test('renders the label', async () => {
    const screen = await render(<Select items={items}>Fruit</Select>);
    await expect.element(screen.getByText('Fruit')).toBeVisible();
  });

  test('shows the placeholder before a selection is made', async () => {
    const screen = await render(<Select items={items} placeholder="Choose a fruit" />);
    await expect.element(screen.getByText('Choose a fruit')).toBeVisible();
  });

  test('selecting an option invokes onValueChange', async () => {
    const onValueChange = vi.fn();
    const screen = await render(
      <Select items={items} onValueChange={onValueChange} />,
    );
    await screen.getByRole('button').click();
    await screen.getByRole('option', { name: 'Banana' }).click();
    expect(onValueChange).toHaveBeenCalledWith(
      expect.objectContaining({ value: ['banana'] }),
    );
  });
});
