const API_BASE_URL = "http://localhost:3001";

export const fetchUserProfile = async (id: string): Promise<any> => {
  if (!id) {
    throw new Error("Invalid user ID");
  }

  const url = `${API_BASE_URL}/profile/${id}`;
  console.log("Request URL:", url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const statusText = response.statusText || "Unknown Error";
      throw new Error(
        `Server returned ${response.status} ${statusText} for ${url}`
      );
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const responseData = await response.text();
      return responseData;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", (error as Error).message);

    if (error instanceof TypeError) {
      console.error("Network error or CORS issue");
    } else if (error instanceof SyntaxError) {
      console.error("Error parsing JSON response");
    }

    return null;
  }
};

export const updateUserProfile = async (
  id: string,
  userData: any
): Promise<any> => {
  const url = `${API_BASE_URL}/profile/edit-profile/update/${id}`;
  console.log("Request URL:", url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), // ส่งข้อมูลผู้ใช้งานไปพร้อมกับ request
    });

    if (!response.ok) {
      const statusText = response.statusText || "Unknown Error";
      throw new Error(
        `Server returned ${response.status} ${statusText} for ${url}`
      );
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", (error as Error).message);

    if (error instanceof TypeError) {
      console.error("Network error or CORS issue");
    } else if (error instanceof SyntaxError) {
      console.error("Error parsing JSON response");
    }

    throw error;
  }
};

export const deleteUserProfile = async (id: string): Promise<any> => {
  if (!id) {
    throw new Error("Invalid user ID");
  }

  const url = `${API_BASE_URL}/profile/edit-profile/delete/${id}`;
  console.log("Request URL:", url);

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const statusText = response.statusText || "Unknown Error";
      throw new Error(
        `Server returned ${response.status} ${statusText} for ${url}`
      );
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", (error as Error).message);

    if (error instanceof TypeError) {
      console.error("Network error or CORS issue");
    } else if (error instanceof SyntaxError) {
      console.error("Error parsing JSON response");
    }

    throw error;
  }
};

export const uploadFile = async (id: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(
      `${API_BASE_URL}/profile/upload-profile-picture/${id}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Error uploading file: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data.success;
    } else {
      const responseData = await response.text();
      console.log("Non-JSON response:", responseData);
      return false;
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return false;
  }
};
