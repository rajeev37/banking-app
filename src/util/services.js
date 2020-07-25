import axios from 'axios';

export async function customersGetApi() {
    try {
        const response = await axios.get(`http://localhost:5000/customer`);
        return await response.data;
      } catch (error) {
        return await error;
        console.log(error);
      }
}
export default { customersGetApi };