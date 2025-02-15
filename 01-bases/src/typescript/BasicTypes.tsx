export const BasicTypes = () => {
  const name: string = "Ken";
  const age: number = 28;
  const isActive: boolean = true;
  const powers: string[] = ["Ruby", "Rails", "AWS"];

  return (
    <>
      <h3>Basic Types</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>{isActive ? "Active" : " No Active"}</p>
      <p>{powers.join(", ")}</p>
    </>
  );
};
