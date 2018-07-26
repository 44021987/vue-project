export const getScrollTop = (doc=document) => {
  let scrollTop = 0;
  if (window.pageYOffset) {
    scrollTop = window.pageYOffset;
  } else if (doc.compatMode && doc.compatMode != 'BackCompat') {
    scrollTop = doc.documentElement.scrollTop;
  } else if (doc.body) {
    scrollTop = doc.body.scrollTop;
  }
  return scrollTop;
}
