const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const add = document.querySelector('.add');
const input = document.querySelector('.submit');
const textarea = document.getElementById('task');
const see = document.querySelector('.see');
const theTasks = [];

const removeClass = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const createChild = function (text){
    const newChild = document.createElement('div');
    newChild.classList.add('task');
    newChild.textContent = text;
    overlay.appendChild(newChild);
    return newChild;
}

const adding = function (){
    
    if(!overlay.classList.contains('hidden')) overlay.classList.add('hidden');
    if(textarea.value === '') return ;

    if(!modal.classList.contains('hidden')) modal.classList.add('hidden');

    if(theTasks.length === 10)
    {
        alert('Can not add more tasks there are to many undone!!!!');
        return;
    }
    else
        theTasks.push(createChild(textarea.value));
    textarea.value = '';
};

add.addEventListener('click',removeClass);

document.addEventListener('keydown',function (event){
    if((!modal.classList.contains('hidden') || !overlay.classList.contains('hidden')) && event.key === 'Escape')
        adding();
});

input.addEventListener('click',adding);

see.addEventListener('click',function (){
    overlay.classList.remove('hidden');

for(let i = 0;i < theTasks.length;i++)
    theTasks[i].addEventListener('click',function (){
        overlay.removeChild(theTasks[i]);
        theTasks.pop(theTasks[i]);
    });

});

