function makeProjectElement(project) {
  const { title, description, image, link } = project;
  return `
  <div class="project-box">
    <img src="${image}.png" alt="${title}" />
    <div class="project-layer">
      <h4>${title}</h4>
      <p>${description}</p>
      <a href="${link}" target="_blank"><i class="bx bx-link-external"></i></a>
    </div>
  </div>`;
}

window.onload = async () => {
  const projectContainer = document.querySelector("#project-container");
  projects.reverse().forEach((project) => {
    projectContainer.innerHTML += makeProjectElement(project);
  });
};
