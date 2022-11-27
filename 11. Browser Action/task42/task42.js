contents.onclick = function(event) {

  let target = event.target.closest('a');
  console.log(target)
  console.log(contents.contains(target))
  console.log(target.getAttribute('href'))

  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute('href'));
  }

  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    console.log(isLeaving)
    if (!isLeaving) return false;
  }

};