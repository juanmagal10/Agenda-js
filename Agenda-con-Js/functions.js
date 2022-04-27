const saveContact=(db, contact)=>{
    db.setItem(contact.id, JSON.stringify(contact))
    window.location.href = '/';
}
    
const loadContact = () => {
    let keys = Object.keys(db)
    for (key of keys) {
        let contact = JSON.parse(db.getItem(key))
        createContact(contactList,contact, db)
    }
}

const createContact = (parentNode, contact, db) => {
    let contactDiv = document.createElement('div');
    let contactName = document.createElement('h3');
    let contactNumber = document.createElement('p');
    let contactAdress = document.createElement('p');
    let deleteIcon = document.createElement('i')
    
    contactName.innerHTML = contact.name;
    contactNumber.innerHTML = contact.tel;
    contactAdress.innerHTML = contact.adress;

    contactDiv.classList.add('contact');
    contactName.classList.add('name');
    contactNumber.classList.add('tel');
    contactAdress.classList.add('adress');
    deleteIcon.classList.add('fa-solid', 'fa-trash-can', 'icono');

    deleteIcon.addEventListener('click', () => {
        db.removeItem(contact.id);
        window.location.href = '/';
    })

    contactDiv.appendChild(contactName);
    contactDiv.appendChild(contactNumber);
    contactDiv.appendChild(contactAdress);
    contactDiv.appendChild(deleteIcon);

    parentNode.appendChild(contactDiv)
}