import axios from "axios";

export const updatePost = async (id: number, newLikes: number) => {
  try {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        likes: newLikes,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    console.log("Successful request", response.data);
    return response.data;
  } catch (error) {
    console.error("An error occurred during the request:", error);
    throw error;
  }
};
