const showHidePassword = e => {
  if (e.target.previousElementSibling.type === 'password') {
    e.target.previousElementSibling.type = 'text';
  } else {
    e.target.previousElementSibling.type = 'password';
  }
};

export default showHidePassword;
