import { IUser } from "./../types/user";
import { IComments, IReplies } from "types/comments";
import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getUserComment = async () => {
  try {
    const response = await axios.get<IUser[]>(
      `${baseUrl}/comments?name=Terry Bator`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

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

export const sendNewComment = async (info: IComments) => {
  try {
    await axios.post<IComments[]>(`${baseUrl}/comments`, info);
  } catch (error) {
    console.log(error);
  }
};

export const editChosenComment = async (id: number, info: IComments) => {
  try {
    await axios.put<IComments[]>(`${baseUrl}/comments/${id}`, info);
  } catch (error) {
    console.log(error);
  }
};

export const deleteChosenComment = async (id: number) => {
  try {
    await axios.delete<IComments[]>(`${baseUrl}/comments/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const addNewReply = async (info: IReplies) => {
  try {
    await axios.post<IReplies>(`${baseUrl}/replies`, info);
  } catch (error) {
    console.log(error);
  }
};
