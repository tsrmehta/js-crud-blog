const USER_NAME = "test@liferay.com";
const PASSWORD = "learn";

const AUTH = btoa(`${USER_NAME}:${PASSWORD}`);

const AUTHORIZATION = `Basic ${AUTH}`;

export const getRequest = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: AUTHORIZATION,
      },
      method: 'GET'
    });

    const jsonRes = await res.json();

    if (res.ok) {
      return {
        response: jsonRes,
        error: null,
      };
    } else {
      return {
        response: null,
        error: { status: res.status, message: jsonRes },
      };
    }
  } catch (error) {
    return {
      response: null,
      error,
    };
  }
};

export const postRequest = async (url, body) => {
  const headers= {
    Authorization: AUTHORIZATION,
  }

  if(!(body instanceof FormData)) headers["Content-Type"] = "application/json";

  try {
    const res = await fetch(url, {
      headers,
      method: 'POST',
      body: body instanceof FormData? body : JSON.stringify(body)
    });

    const jsonRes = await res.json();

    if (res.ok) {
      return {
        response: jsonRes,
        error: null,
      };
    } else {
      return {
        response: null,
        error: { status: res.status, message: jsonRes },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      response: null,
      error,
    };
  }
};
export const patchRequest = async (url, body) => {
  const headers= {
    Authorization: AUTHORIZATION,
  }

  if(!(body instanceof FormData)) headers["Content-Type"] = "application/json";

  try {
    const res = await fetch(url, {
      headers,
      method: 'PATCH',
      body: body instanceof FormData? body : JSON.stringify(body)
    });

    const jsonRes = await res.json();

    if (res.ok) {
      return {
        response: jsonRes,
        error: null,
      };
    } else {
      return {
        response: null,
        error: { status: res.status, message: jsonRes },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      response: null,
      error,
    };
  }
};

export const deleteRequest = async(url)=>{
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: AUTHORIZATION,
      },
      method: 'DELETE'
    });

    
    if (res.ok) {
      return {
        response: 'success',
        error: null,
      };
    } else {
      const jsonRes = await res.json();
      return {
        response: null,
        error: { status: res.status, message: jsonRes },
      };
    }
  } catch (error) {
    return {
      response: null,
      error,
    };
  }
}
