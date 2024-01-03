import { gql, useLazyQuery } from "@apollo/client";

const GET_NUMBERS = gql`
  query GetNumber {
    value
  }
`;

export const App = () => {
  const [getNumber, { data }] = useLazyQuery<{ value: number }>(GET_NUMBERS, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <>
      <button
        onClick={() => {
          getNumber();
        }}
      >
        Get Number
      </button>
      {data ? <h1>Value: {data.value}</h1> : <p>Empty</p>}
    </>
  );
};
