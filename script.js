const pageName = document.body.dataset.page;

if (pageName) {
  const currentLink = document.querySelector(`[data-nav="${pageName}"]`);
  if (currentLink) currentLink.classList.add("active");
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
