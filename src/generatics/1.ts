import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
fetchData<{ name: string }>('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));

export { fetchData };