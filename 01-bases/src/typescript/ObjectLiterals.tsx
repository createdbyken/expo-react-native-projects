interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 28,
    firstName: "Ken",
    lastName: "Sanchez",
    address: {
      country: "Mexico",
      houseNo: 1,
      street: "Main Street",
    },
  };

  return (
    <>
      <h3>Objetos Literals</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
