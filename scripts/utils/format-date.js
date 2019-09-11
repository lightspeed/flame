// Utility go get current date in yyyy-mm-dd format
module.exports = function formatDate() {
  const d = new Date();
  // eslint-disable-next-line prefer-template
  let month = '' + (d.getMonth() + 1);
  // eslint-disable-next-line prefer-template
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};
