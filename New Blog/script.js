const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");

btn1.addEventListener("like", (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
  
    console.dir(event.target.id);
  })

