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

export const myEmail = "dmitriy.malayev@gmail.com"

// styleBody();
// addTitle("Hello There Everyone");
