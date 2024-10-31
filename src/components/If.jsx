// LØSNING MED CONDITIONAL RENDERING
// const If = ({ children, condition }) => {
//   return <>{condition && children}</>;
// };

// export default If;

// LØSNING MED TERNARY OPERATOR
const If = ({ children, condition }) => {
  return <>{condition ? children : "Her er tomt"}</>;
};

export default If;
