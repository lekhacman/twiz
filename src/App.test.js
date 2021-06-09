import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', function () {
  let http;

  beforeEach(function () {
    http = { post: jest.fn() };
    render(<App maxChars={10} http={http} />);
  });

  it('should handle input change', () => {
    const linkElement = screen.getByText('Twiz');
    expect(linkElement).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    userEvent.type(input, '123');

    userEvent.type(input, '45678');
    expect(screen.getByText('2')).toBeInTheDocument();

    userEvent.type(input, '90');
    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.type(input, 'meh');
    expect(screen.getByText('-3')).toBeInTheDocument();

    http.post.mockResolvedValueOnce({ data: { status: 'Success' } });
    userEvent.click(screen.getByText('Tweet'));
    expect(http.post).toBeCalledTimes(1);
  });
});
