const addTwoNumbers = (a: number, b: number): string => {
  return `${a + b}`;
};

export const BasicFunctions = () => {
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de la suma es {addTwoNumbers(1, 2)}</span>
    </>
  );
};
