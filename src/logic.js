exports.filterData = data => data.map((element) => {
  if (element.user && element.title) {
    return ({
      Imagesurl: element.user.avatar_url,
      ImagesTitle: element.title,
    });
  }
  return undefined;
}).filter(item => item);
