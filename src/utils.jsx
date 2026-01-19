
export function formatDate(dateString) {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return `${days[date.getDay()]} ${
    months[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}
