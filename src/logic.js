exports.filterData = data => data.map((element) => {
  if (element.user && element.title) {
    return ({
      imagesUrl: element.user.avatar_url,
      imagesTitle: element.title,
    });
  }
  return undefined;
}).filter(item => item);
