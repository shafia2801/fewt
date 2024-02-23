const activepage=window.location.pathname;
const navlinks=document.querySelectorAll('header a').
foreach(link=>{
if(link.href.includes('${activepage}')}
{
link.classList.add('active');
}
})