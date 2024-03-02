import CookiesDOM from "js-cookie";

export interface ICookie {
  name: string;
  value: string;
}

export const getCookie = (cookieName: string) => {
  const cookies = document.cookie.replace("path=/", "");
  const cookiesArray: string[] = cookies.split(";");

  let cookie: ICookie = { name: "", value: "" };
  cookiesArray.forEach((e: string) => {
    const currentCookies = e.split("=");
    if (cookieName == currentCookies[0].trim()) {
      cookie = { name: currentCookies[0], value: currentCookies[1] };
    }
  });
  return cookie;
};

export const Cookies = {
  clear: (cookies?: string[]) => {
    if (cookies && cookies.length > 0) {
      cookies?.forEach((cookie: string) => {
        CookiesDOM.remove(cookie);
      });
    } else {
      throw console.error("errorMessage: Not keywords for remove.");
    }
  },
  set: (cookies: ICookie[]) => {
    cookies.forEach((cookie: ICookie) => {
      CookiesDOM.set(cookie.name, cookie.value);
    });
  },
};

// username = ekko@gmail.com;
// id = 1b4cd67e - 5b5f - 44cd - bab4 - b9abc4281e77;
// token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVra29AZ21haWwuY29tIiwiaWF0IjoxNzA4ODU3NzUwLCJleHAiOjE3MDg4NTc4MTB9.6qx3nz_BoAwy2LXFUb0RcLUFcWr01TTaVaIMHBeEwk4 path = /
