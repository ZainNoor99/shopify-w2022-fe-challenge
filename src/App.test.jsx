import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

const mockResponse = {
  data: [
    {
      title: 'test title',
      explanation: 'test explanation',
      hdurl: 'testhdurl',
      url: 'testurl',
      date: '1900-01-01',
    },
  ],
};

test('renders <App />', async () => {
  axios.get.mockResolvedValueOnce(mockResponse);
  render(<App />);
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  const linkElement = screen.getByText(/Shopify Winter 2022 FE Challenge/i);
  expect(linkElement).toBeInTheDocument();
});

test('makes NASA API call', async () => {
  axios.get.mockResolvedValueOnce(mockResponse);
  render(<App />);
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
});
