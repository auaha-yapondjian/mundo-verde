export const maskDate = (date: string) => {
  return date
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d{1,2})/, "$1/$2")
    .replace(/(\d{2})(\d{1,2})/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1");
};

export const handleClean = (obj: any) => {
  for (const key in obj) {
    if (
      obj[key] === "" ||
      obj[key] === undefined ||
      obj[key] === "* Selecione *"
    ) {
      delete obj[key];
    }
  }

  return obj;
};

export const maskHour = (hour: string) => {
  return hour
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d{1,2})/, "$1:$2")
    .replace(/(\d{2})\d+?$/, "$1");
};
