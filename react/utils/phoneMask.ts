export const phoneMask = (event: any) => {
  const currentValue = event.target.value

  const updatedValue = currentValue
    .replace(/\D/g, '')
    .substring(0, 11)
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2')

  event.target.value = updatedValue
}
