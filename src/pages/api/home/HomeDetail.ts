import axios from 'axios';

export const homeConnectApi = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/filteringAccommodationList"
    );
    return response.data;
  }catch (e){
    throw new Error(`${e}`);
  }
}