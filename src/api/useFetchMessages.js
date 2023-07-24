import axios from "axios";

export default async function useFetchMessages(offset) {
  try {
    const response = await axios.get('https://numia.ru/api/getMessages', {
      params: { offset },
    });
    return { data: response.data.result, error: null };
  } catch (error) {
    return { data: null, error: "Something went wrong :(" };
  }
}
