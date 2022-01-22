import { IComments } from "./../types/comments";
import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getAllComments = async () => {
  try {
    const response = await axios.get<IComments[]>(
      `${baseUrl}/comments?_embed=replies`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
