class Cinema{
name = "Block";
location = "Mall";
capacity = 100;
displayInfo(){
return this.name + " " + this.location + " " + this.capacity;
}
show(movie){
return this.name +" is showing " + this.movie;    
}

}
const category = new Cinema("Black", "Beach", 200);
