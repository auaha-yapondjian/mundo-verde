export const cpfMask = (event) => {
  const currentValue = event.target.value
  const updatedValue = currentValue
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");

  event.target.value = updatedValue
}