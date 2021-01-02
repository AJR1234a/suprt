class Drops {
    constructor(x,y){

      super(30,30,30) 

    }
update(){
database.ref('/').update({
    drops:position
});

}
display(){
ellipse(20,30,30);
super.display();
}

}