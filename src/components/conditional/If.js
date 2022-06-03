const If = ({ test, children }) => {
  const elseChild = children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  const ifChildren = children.filter((child) => {
    return child !== elseChild;
  });

  if (test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
};

const Else = ({ test, children }) => {
  return children;
};

export { If, Else };
