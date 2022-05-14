export const processTime = (time = "00:00") => {

  let [hour, minute] = time.split(":");
  let meridian, h;
  if (hour > 12) {
    meridian = "PM";
    h = hour - 12;
  } else if (hour <= 12) {
    meridian = "AM";
    h = hour;
    if (hour === 12) {
      meridian = "PM";
    }
    if (hour === "00") {
      h = 12;
    }
  }
  return `${h}:${minute} ${meridian}`;
};

export const processDate = (date) => {
  const [d, m, y] = date.split("/");
  return `${y}-${m}-${d}`;
};

