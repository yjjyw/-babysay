// const baseWidth = 375 //设计稿宽度


//获取设备宽度

// const width = window.innerWidth;
//设计稿宽度
const baseWidth = 375;

//基本字体大小

//62.5  1rem = 10px

const baseFontSize = 100;

//根节点字体大小

const setFontSize = () =>{
    //html
    document.querySelector('html').style.fontSize = baseFontSize * (window.innerWidth/baseWidth) + "px"
}

window.addEventListener("resize",()=>{
    setFontSize();
})
setFontSize()