export const GET_HEADER = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

export function handleErrors(response) {
if (response.status == 401) {
    // window.location.href = "/unauthorized";
}
if (!response.ok) {
    return { error: response.status, isError: true, data: response.json() };
}
return response.json();
}

export function getApiData(url) {
    const token = localStorage.getItem("token");
    try {
      const response = fetch(url, GET_HEADER).then(handleErrors);
      return response
    } catch (err) {
      console.log(e);
      return { success: false, error: err };
    }
}