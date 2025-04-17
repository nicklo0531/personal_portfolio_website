console.log('js activated')


// allContainers.forEach(container => {
//     container.addEventListener('click', () =>{
//         console.log('a container has been clicked');
//     });
// });

// let allContainers = document.querySelectorAll('.container');
// allContainers.forEach((container) => {
//     container.addEventListener('click', function(){
//         let hiddenItems = querySelectorAll('.hidden')
//         hiddenItems.forEach(item => {
//             item.style.display = 'block';
//         });
//     })
// })

// if else to close
let allContainers = document.querySelectorAll('.container');

allContainers.forEach((container) => {
    container.addEventListener('click', function () {
        let hiddenItems = container.querySelectorAll('.hidden');

        hiddenItems.forEach(item => {
            if (item.style.display === 'block') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });
});

allContainers.forEach((container) => {
    container.addEventListener('keydown', function () {
        let hiddenItems = container.querySelectorAll('.hidden');

        hiddenItems.forEach(item => {
            if (item.style.display === 'block') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });
});



// the list bullets are gone