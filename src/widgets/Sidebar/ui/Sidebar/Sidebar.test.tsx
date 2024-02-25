import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('should render component', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should collapsed sidebar', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const btn = screen.getByTestId('sidebar-btn');
    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
