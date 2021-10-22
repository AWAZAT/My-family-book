var updatedImage = ["https://i0.wp.com/feminisminindia.com/wp-content/uploads/2019/05/mothers-day.jpg?fit=493%2C360&ssl=1","https://via-images.global.ssl.fastly.net/76d1ea39-a4eb-4270-b9dc-899653415f8f/Fathers-day.jpg?","https://thumbs.dreamstime.com/z/kids-playing-floor-parents-relaxing-sofa-home-cute-kids-playing-parents-relaxing-sofa-home-together-smiling-113175494.jpg"];
var updatedNames = ["Mom","Dad","Sister"];
var d = 0;
function update(){
document.getElementById("dadb-day").src = updatedImage[d];
document.getElementById("d-bday").innerHTML = updatedNames[d];
d = d + 1;
if(d > 2){d = 0};
}