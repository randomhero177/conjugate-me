export function setJwtToken(token: string, email: string) {
  console.log(token);
  console.log(email);
  const userObj = getJwtToken();
  if (userObj.token === token && userObj.email === email) {
    console.log("currently all set");
  } else {
    console.log("saaaaaaving in storage");
    localStorage.setItem("auth-token", token);
    localStorage.setItem("userEmail", email);
  }
}
export function getJwtToken() {
  console.log("hello");

  return {
    token: localStorage.getItem("auth-token"),
    email: localStorage.getItem("email"),
  };
}

export function deleteJwtToken() {
  localStorage.removeItem("auth-token");
  localStorage.removeItem("userEmail");
}
