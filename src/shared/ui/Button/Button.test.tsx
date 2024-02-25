import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('should render component', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText('Click')).toBeInTheDocument();
  });

  test('should render with button theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Click</Button>);
    expect(screen.getByText('Click')).toHaveClass('clear');
  });
});
