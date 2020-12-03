const formatValue = (value: number): string =>
  Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(
    value,
  );

export default formatValue;
