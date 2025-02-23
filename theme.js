import root from './assets/root.json'

export default function theme(){
    const Darkmode = root.style.DarkMode;
    const Lightmode = root.style.LightMode;
    let activeTheme
    console.log(root.Theme)

    if(root.Theme == "DarkMode"){
        // Current Theme being used 
        activeTheme = Darkmode;
    }else if(root.Theme == "LightMode"){
        // Current Theme being used 
        activeTheme = Lightmode;
    }else{
        console.log("Theme Not Define!")
    }

    return (activeTheme);
}