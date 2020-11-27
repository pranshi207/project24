class Ground
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        world.add(world,this.body);
        
    }

    display()

    {
        var groundPos=this.body.position;

        Push()
        translate(groundPos.x,groundPos.y);
        rectMode(CENTER)
        Fill(128,128,128)
        rect(0,0,this.w,this.h);
        Pop()
    }

}