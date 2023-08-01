const darkBtn = document.getElementById('dark')
const lightBtn = document.getElementById('light')


const setColorMode = () => {
    if (localStorage.getItem('colorMode') === 'dark')  {
        setDarkMode(); 
        darkBtn.click(); 
    } else {
        setLightMode();
        lightBtn.click();
    };
};

const setDarkMode = () => {   
    document.querySelector('body').classList = 'dark';
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
}

setColorMode()

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioButtons.length; i++){
    radioButtons[i].addEventListener('click', (event) => {
        if(darkBtn.checked) {
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
        } else {
            localStorage.setItem('colorMode', 'light');
            setLightMode();
        }  
    });
}

