let btn = document.querySelector('#new_quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes  = [
    {
        quote:`"I do the very best I know how - the very best I can; and i mean to keep on doing so until the end"`,
        person:`Abraham Lincoln`
    },
    {
        quote:`“It is during our darkest moments that we must focus to see the light.”`,
        person:`Aristotle`
    },
    {
        quote:`“Spread love everywhere you go. Let no one ever come to you without leaving happier.”`,
        person:`Mother Teresa`
    },
    {
        quote:`“Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.”`,
        person:`Martin Luther King Jr`
    },
    {
        quote:`“Only a life lived for others is a life worthwhile.”`,
        person:`Albert Einstein`
    }
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})