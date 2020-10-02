export default function handleNumberFormat(amount: string | number) {
  const number = Number(amount);
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
}
