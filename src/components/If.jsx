// 1. LØSNING MED CONDITIONAL RENDERING
const If = ({ children, condition }) => {
  return <>{condition && children}</>;
};

export default If;

// 2. LØSNING MED TERNARY OPERATOR
// const If = ({ children, condition }) => {
//   return <>{condition ? children : "Her er tomt"}</>;
// };

// export default If;

// 3. LØSNING MED IF/ELSE
// const If = ({ children, condition }) => {
//   let content;
//   if (condition) {
//     content = children;
//   } else {
//     content = "Her er tomt";
//   }
//   return content;
// };

// export default If;
