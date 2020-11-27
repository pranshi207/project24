class Dustbin
{
    constructor(x,y,width,heigth)
    {
        var options={
            isStatic:true
        }

        this.body= Bodies.rectangle(x,y,width,heigt,options);
        this.width=width;
        this.heigth=height;

        world.add(world,this.body );
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        Push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0);
        rect(0,0,this.width,this.height);
        Pop();
    }
}