export const signup = (user) => {
  return $.ajax({
    method: "POST",
	  url: "api/users",
	  data: {user} //equivalent to : data: {user: user}
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
	  url: "api/session",
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
	  url: "api/session",
	  data: {user: user}
  });
};
