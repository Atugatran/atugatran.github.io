let Mini_Project = null;

fetch("https://atugatran-projects.github.io/_Apis/Atul22g/Apps.json")
    .then((res) => res.json())
    .then((result) => {
        apps = result;
        loadApps();
    });

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadApps() {
    let apps_container = document.getElementById("apps-container");
    let apps_item = apps.map((i) => {
        return `
<a target="_blank" href="${i.src}" id="link2">
    <i class="${i.logo}" style="color: ${i.logoColor};"></i>
    <div class="label">
        <span class="name">${i.title}</span>
        <span class="url">${i.subTitle}</span>
    </div>
</a>
`;
    });
    apps_container.innerHTML = apps_item.join("");
}