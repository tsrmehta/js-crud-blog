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
