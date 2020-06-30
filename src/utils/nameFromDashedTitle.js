export const nameFromDashedTitle = (dashedTitle) => {
  return dashedTitle[0].toUpperCase() + dashedTitle.slice(1).split('-').join(' ');
};
