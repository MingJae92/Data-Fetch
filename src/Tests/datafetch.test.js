
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import DataFetch from '../components/DataFetch';
import '@testing-library/jest-dom';

// Your test cases go here



const mock = new MockAdapter(axios);

describe('DataFetch component', () => {
  it('fetches and displays data', async () => {
    // Mock the API response
    mock.onGet('https://fakestoreapi.com/products').reply(200, [
      {
        id: '1',
        title: 'Test Product',
        price: '10.99',
        description: 'Test Description',
        category: 'Test Category',
        image: 'https://example.com/test.jpg'
      }
    ]);

    const { getByText } = render(<DataFetch />);

    // Assert that the loading state is rendered
    expect(getByText('Data-Fetch')).toBeInTheDocument();

    // Wait for the data to be fetched and displayed
    await waitFor(() => expect(getByText('Test Category')).toBeInTheDocument());

    // Assert that the fetched data is displayed
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('10.99')).toBeInTheDocument();
  });
});
