const API_BASE_URL = "http://localhost:3001";

const loginUser = async (email: any, password: any): Promise<any> => {
  const url = `${API_BASE_URL}/login`;
  console.log("Request URL:", url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const statusText = response.statusText || "Unknown Error";
      throw new Error(
        `Server returned ${response.status} ${statusText} for ${url}`
      );
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      // Handle non-JSON response
      const responseData = await response.text();
      return responseData;
    }

    // Handle JSON response
    const responseData = await response.json();
    return responseData;
  } catch (error: any) {
    console.error("Error:", (error as Error).message);

    // Handle different error types
    if (error instanceof TypeError) {
      console.error("Network error or CORS issue");
    } else if (error instanceof SyntaxError) {
      console.error("Error parsing JSON response");
    }

    throw error;
  }
};

export { loginUser };
