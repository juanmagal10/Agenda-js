const name = document.querySelector('.name');
const tel = document.querySelector('.tel');
const adress = document.querySelector('.adress');
const btnAdd = document.querySelector('.btn-add-name');

const contactList=document.querySelector('.contact-list')

const db = window.localStorage;


btnAdd.addEventListener('click',() => {
        let contact = {
            id:Math.random(1,100),
            name:name.value,
            tel: tel.value,
            adress: adress.value,
    }
     saveContact(db, contact)
})

loadContact(db, contactList)



