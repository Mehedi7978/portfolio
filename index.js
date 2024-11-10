let photo = document.getElementById('photo1');

let photos = [
    'https://images.unsplash.com/photo-1526494661200-9d7cfd4b2404?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb3RiYWxsfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1724064710352-3cbcee4bc3a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9uYWxkb3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1655918059192-f6332e645272?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVzc2l8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb3RiYWxsfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1653260449168-436c9629a846?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va2NvdmVyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1653259768330-5d53b8affa25?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2tjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.istockphoto.com/id/1159397218/photo/summer-beach-and-sea-with-clear-sky-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZRFf9n8jQplutwPfopYHh9jB3IbflRjy1erLQQPRD74=',
    'https://images.unsplash.com/photo-1619628922275-104e0c8e5ae4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9jZWFuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.istockphoto.com/id/1169602395/photo/coco-palm-on-tropical-paradise-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=wNhgT-8gw75-QUryV741KRESa5ytCIx58sSQ5utEZtc='
]



//preloaded images 


let preloadedImages = photos.map((src) => {
    let img = new Image();
    img.src = src;
    return img;
});




let currentPhotoIndex = 0;

function changePhoto() {
    // Set the background image to the current photo in the array
    photo.src= photos[currentPhotoIndex];
    
    
    // Update index to go to the next photo, looping back if needed
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
}

// Call changePhoto every 2 seconds (2000 ms)
setInterval(changePhoto, 2000)