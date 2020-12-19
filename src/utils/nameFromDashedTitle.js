export const nameFromDashedTitle = (dashedTitle) => {
  if (dashedTitle === 'grzegorz-jodlowski.github.io') {
    return 'This website - my portfolio';
  } else if (dashedTitle === 'system-kontroli-jakosci-w-budownictwie') {
    return 'Quality control system in construction industry';
  } else {

    return dashedTitle[0].toUpperCase() + dashedTitle.slice(1).split('-').join(' ');
  }
};
