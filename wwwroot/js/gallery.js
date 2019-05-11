
var galleryDataSource = {
    
    imageData: [
    { imageUrl:"images/photo-gallery-13.jpg", group:"guests" },
    { imageUrl:"images/photo-gallery-14.jpg", group:"guests" },
    { imageUrl:"images/photo-gallery-15.jpg", group:"guests" },
    { imageUrl:"images/photo-gallery-16.jpg", group:"guests" },
    { imageUrl:"images/photo-gallery-17.jpg", group:"guests" },
    { imageUrl:"images/photo-gallery-18.jpg", group:"guests" },
    { imageUrl:"images/photo-gallery-19.jpg", group:"guests" },
    { imageUrl:"images/photo-gallery-20.jpg", group:"guests" },
    { imageUrl:"images/photo-gallery-21.jpg", group:"guests" },

    { imageUrl:'images/photo-gallery-22.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-23.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-24.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-25.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-26.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-27.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-28.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-29.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-30.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-31.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-32.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-33.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-34.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-35.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-36.jpg', group:'dessert' },
{ imageUrl:'images/photo-gallery-37.jpg', group:'dessert' },
{ imageUrl:'images/photo-gallery-38.jpg', group:'dessert' },
{ imageUrl:'images/photo-gallery-39.jpg', group:'dessert' },
{ imageUrl:'images/photo-gallery-40.jpg', group:'dessert' },
{ imageUrl:'images/photo-gallery-41.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-42.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-43.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-44.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-45.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-46.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-47.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-48.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-49.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-50.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-51.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-52.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-53.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-54.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-55.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-56.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-57.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-58.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-59.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-60.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-61.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-62.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-63.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-64.jpg', group:'food' },
{ imageUrl:'images/photo-gallery-65.jpg', group:'food' },


    
    ]
};

var source = document.getElementById("gallery-template").innerHTML;
var template = Handlebars.compile(source);


var html = template(galleryDataSource);
$('#gallery-images').html(html);

