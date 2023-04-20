export const getUniqueArr = (left: any, right: any) => {
  const isDiff = (a: any, b: any) => a.id === b.id && a.idVariant === b.idVariant;

  const onlyInLeft = (left: any, right: any, compareFunction: any) => {
    return left.filter((leftValue: any) => {
      return !right.some((rightValue: any) =>
        compareFunction(leftValue, rightValue)
      );
    });
  };

  return onlyInLeft(left, right, isDiff);
}

