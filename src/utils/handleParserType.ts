export default function handleParserType(type: string) {
  switch (type) {
    case 'STORE_PAYMENT':
      return ' comprou em ';
    case 'USER_PAYMENT':
      return ' pagou a ';
    case 'SIGN_PAYMENT':
      return ' pagou a assinatura de ';
    case 'CREDIT_PAYMENT':
      return ' comprou créditos em ';
    default:
      return ' pagou a ';
  }
}
