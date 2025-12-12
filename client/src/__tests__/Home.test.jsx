// client/src/__tests__/Home.test.jsx
// Unit test for Home component rendering

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import Home from '../components/Home.jsx';

describe('Home component', () => {
  it('renders the main welcome heading', () => {
    render(<Home />);

    // Home.jsx에 있는 실제 텍스트 기준
    const heading = screen.getByText(/Welcome to My Portfolio/i);

    expect(heading).toBeInTheDocument();
  });
});
