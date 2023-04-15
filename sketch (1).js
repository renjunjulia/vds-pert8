const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;
function setup() {
  createCanvas(400, 400);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  
  s=createInput("200");
  s.position(10,30)
  
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  
  population = 200;
  for (let i=0; i<population;i++){
    flock.push(new Boid());
  }
}

function draw() {
  background(100);
  text("posisi",70,20)
  text("Align",60,390)
  text("Cohesion",170,390)
  text("Separation",290,390)
  text("tugas vds",290,20)
  text("simulasi floking",290,40)
  text("nama :julia fitriani",290,60)
  text("nim  :121160064",290,80)
  text("prodi:matematika",290,100)
  
  for (let boid of flock){
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
  }
}