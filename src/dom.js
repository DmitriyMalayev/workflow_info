console.log("dom file");

const body = document.querySelector("body");
export const styleBody = () => {
  body.style.background = "blue";
};

export const addTitle = (text) => {
  const title = document.createElement("h1");
  title.textContent = text;
  body.appendChild(title);
};

export const myEmail = () => {
  const emailInfo = document.createElement("h1");
  emailInfo.textContent = "dmitriy.malayev@gmail.com";
  body.appendChild(emailInfo);
};

export const phoneNumber = "347-761-4403";

// export {styleBody, addTitle, phoneNumber};
// This will also work
// styleBody();
// addTitle("Hello There Everyone");
