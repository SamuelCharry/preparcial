import { render, screen, fireEvent } from '@testing-library/react';
import PrefsPage from './page';
import { UserPrefsProvider } from '@/context/UserPrefsContext';

function renderWithCtx(ui: React.ReactNode) {
  return render(<UserPrefsProvider>{ui}</UserPrefsProvider>);
}

test('permite escribir nombre y guardar', () => {
  renderWithCtx(<PrefsPage />);

  const name = screen.getByLabelText('Nombre') as HTMLInputElement;
  fireEvent.change(name, { target: { value: 'Ana' } });

  const save = screen.getByRole('button', { name: /guardar|save/i });
  fireEvent.click(save);

  expect(name.value).toBe('Ana');
});
