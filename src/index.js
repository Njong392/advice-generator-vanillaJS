const number = document.querySelector('#number');
const quote = document.querySelector('#quote');
const dice = document.querySelector('#dice');

dice.addEventListener('click', () => {
    const getAdvice = async() => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
    
        return data;
    };
    
    getAdvice()
        .then( data => {
            const id = data['slip']['id'];
            const advice = data['slip']['advice'];
    
            number.innerHTML = `${id}`;
            quote.innerHTML = `${advice}`;
    
        }).catch(() => console.log('There was some error fetching the data'));
})