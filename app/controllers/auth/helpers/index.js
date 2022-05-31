const { checkPermissions } = require("./checkPermissions");
const { findUser } = require("./findUser");
const { findUserById } = require("./findUserById");
const { generateToken } = require("./generateToken");
const { getUserIdFromToken } = require("./getUserIdFromToken");
const { passwordsDoNotMatch } = require("./passwordsDoNotMatch");
const { returnRegisterToken } = require("./returnRegisterToken");
const { setUserInfo } = require("./setUserInfo");
const { updatePassword } = require("./updatePassword");

module.exports = {
  checkPermissions,
  findUser,
  findUserById,
  generateToken,
  getUserIdFromToken,
  passwordsDoNotMatch,
  returnRegisterToken,
  setUserInfo,
  updatePassword,
};
