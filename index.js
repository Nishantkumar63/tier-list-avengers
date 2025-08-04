 const tierInput = document.getElementById("tier");
 console.log(tierInput);

 const submitBtn = document.getElementById("submit");

 const imageForm = document.getElementById('image-form');
 imageForm.addEventListener('click', (event) => {
     event.preventDefault();
     console.log('form submitted');
     const imageItemInput = document.getElementById('image-item');
     const imageUrl = imageItemInput.value;

     createTierListItem(imageUrl);
     imageItemInput.value = '';

 });


 submitBtn.addEventListener('click', (event) => {
     event.preventDefault(); //stops the default behaviour of the event

     console.log("button is clicked")
     const target = event.target; //to get access element on which this event was fired
     if (tierInput.value == " ") {
         alert('please enter a tier list name');
         return;
     }

     createTierList(tierInput.value); //call kiya h function ko 
     tierInput.value = '';


 });

 function createTierList(tierListName) {
     const newTierList = document.createElement('div')
     newTierList.classList.add('tier-list'); //class di h tag ko

     const heading = document.createElement('h1');
     heading.textContent = tierListName;

     const newTierListItems = document.createElement('div');
     newTierListItems.classList.add('tier-list-items');


     newTierList.appendChild(heading); //main div mai lane ke liye kiya h yeh

     newTierList.appendChild(newTierListItems);


     const tiersection = document.getElementById('tier-list-section')
     tiersection.appendChild(newTierList);





 }

 function createTierListItem(imageUrl) {
     const imageDiv = document.createElement('div');
     imageDiv.classList.add("item-container");


     const img = document.createElement('img');
     img.src = imageUrl; //its a property that we are adding in 

     imageDiv.appendChild(img);


     const nonTierSection = document.getElementById('non-tier-section');

     nonTierSection.appendChild(imageDiv);


 }