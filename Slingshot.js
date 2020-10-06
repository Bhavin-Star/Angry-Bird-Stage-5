class Slingshot{
    
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.sling1 = loadImage('sprites/sling1.png')
        this.sling2 = loadImage('sprites/sling2.png')
        this.sling3 = loadImage('sprites/sling3.png')

        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    }


    display(){
        
        image(this.sling1,200,29,40,190);
        image(this.sling2,170,29,40,125);

        if(this.sling.bodyA){
            push();
            if(this.sling.bodyA.position.x < 220){
                strokeWeight(7);
                stroke(48,22,8);
                line(this.sling.bodyA.position.x - 15, this.sling.bodyA.position.y, this.pointB.x-10, this.pointB.y+5);
                line(this.sling.bodyA.position.x - 15, this.sling.bodyA.position.y, this.pointB.x+30, this.pointB.y+5);
                
                image(this.sling3,this.sling.bodyA.position.x - 25,this.sling.bodyA.position.y - 10,15,30);
            }
            else{
                strokeWeight(3);
                stroke(48,22,8);
                line(this.sling.bodyA.position.x + 25, this.sling.bodyA.position.y, this.pointB.x-10, this.pointB.y+5);
                line(this.sling.bodyA.position.x + 25, this.sling.bodyA.position.y, this.pointB.x+30, this.pointB.y+5);
                
                image(this.sling3,this.sling.bodyA.position.x + 25,this.sling.bodyA.position.y - 10,15,30);}
        
        
    }
    pop();
    }

}