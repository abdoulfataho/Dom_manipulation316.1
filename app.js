// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
const mainEl = document.querySelector("main");
// console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
const header = document.createElement("h1");
header.innerHTML = "DOM MANIPULATION";
mainEl.append(header);
mainEl.classList.add("flex-ctr");
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");


for(let i =0;i<menuLinks.length;i++){
  let link = document.createElement("a")
  link.setAttribute("href", menuLinks[i].href)
  link.textContent = menuLinks[i].text;
  topMenuEl.append(link)
}
