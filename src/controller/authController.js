const path = require("path");
exports.getLogin = (req, res) => {
  res.render(path.join("auth", "login"), {
    pageTitle: "Login",
  });
};
exports.getRegister = (req, res) => {
  res.render(path.join("auth", "register"), {
    pageTitle: "Register",
  });
};
exports.getIndex = (req, res) => {
  res.render(path.join("auth", "index"), {
    pageTitle: "Login or Register",
  });
};
