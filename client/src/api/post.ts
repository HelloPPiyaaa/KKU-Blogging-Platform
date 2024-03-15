import { Post } from "../types/post";

const API_BASE_URL = "http://localhost:3001";

const createPost = async (post: any): Promise<any> => {
  const url = `${API_BASE_URL}/posts`;

  const user = JSON.parse(localStorage.getItem("user") as string);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(
        `Server returned ${response.status} ${response.statusText} for ${url}`
      );
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const responseData = await response.text();
      return responseData;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error: any) {
    console.error("Error:", (error as Error).message);
    throw error;
  }
};

const getPosts = async (): Promise<Post[]> => {
  const url = `${API_BASE_URL}/posts`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error:", (error as Error).message);
    throw error;
  }
};

const getPostById = async (id: string): Promise<Post> => {
  const url = `${API_BASE_URL}/posts/${id}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error:", (error as Error).message);
    throw error;
  }
};

export { createPost, getPosts, getPostById };
