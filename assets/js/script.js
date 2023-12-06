const installAnimatedPanel = () => {
  const animationPath = document.querySelectorAll('.animation-path');
  const buttons = document.querySelectorAll(".btn");
  const animated = document.querySelector(".animated");
  

  function removeActiveClass() {
    buttons.forEach((item) => {
      item.classList.remove("active")
    })
  }

  const changeCase = (event) => {
   
    removeActiveClass();
    event.target.classlist.add ('active')
    const getBtnCase = event.target.getAttribute("data-animation")
    const case3 = document.querySelector('#' + getBtnCase)
    case3.classlist.add ('active')
    
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", changeCase);
  });

  // animationPath.forEach(path => {
  //     console.log(path);
  // })
}
 document.querySelector(".panel") ? installAnimatedPanel() : null;


