function customShapes(utils, cylinder, cellRenderer){
    function StrategyShape()
    {
        cylinder.call(this);
    }
    
    function GoalShape()
    {
        cylinder.call(this);
    }
    
    function ActorShape()
    {
        cylinder.call(this);
    }
    
    
    function AgentShape()
    {
        cylinder.call(this);
    }
    
    function RoleShape()
    {
        cylinder.call(this);
    }
    
    
    //StrategyShape
    utils.extend(StrategyShape, cylinder);
    
    StrategyShape.prototype.redrawPath = function(path, x, y, w, h, isForeground){
        
    
        x=60;
        y=40;  
        path.moveTo(x-50,y);
        path.lineTo(x+50,y);  //-
        path.lineTo(x+60,y-20); //\    
        path.lineTo(x+50,y-40); // /
        path.lineTo(x-50,y-40); // _
        path.lineTo(x-60,y-20); // \
        path.lineTo(x-50,y); // /
        path.close();
   
    }; 
   
    cellRenderer.registerShape('strategyShape', StrategyShape);

    //Goal Shape
    utils.extend(GoalShape, cylinder);
   
    GoalShape.prototype.redrawPath = function(path1, x1, y1, w1, h1, isForeground){
        
        x1=60;
        y1=40;        
        path1.moveTo(x1-40,y1);
        path1.lineTo(x1+40,y1);  //-
        path1.quadTo(x1+60,y1,x1+60,y1-19); //\       
        path1.lineTo(x1+60,y1-21);  //|
        path1.quadTo(x1+60,y1-40,x1+40,y1-40);// /
        path1.lineTo(x1-40,y1-40); // _
        path1.quadTo(x1-60,y1-40,x1-60,y1-21);// \
        path1.lineTo(x1-60,y1-19);  //|
        path1.quadTo(x1-60,y1,x1-40,y1);// 
        path1.close();
  
    }; 
    cellRenderer.registerShape('goalShape', GoalShape);
   

    //Agent Shape
    utils.extend(AgentShape, cylinder);
    
    AgentShape.prototype.redrawPath = function(c, x, y, w, h){
    {
            
            
            c.moveTo(75,37);
            c.arcTo(37,37, 0,1,1,0,37);
            c.arcTo(-37,37, 0,1,1,75,37);
            
            c.moveTo(5,20);
            c.lineTo(70,20);
            c.close();
        }
    };

    cellRenderer.registerShape('agentShape', AgentShape);


    //Role Shape
    utils.extend(RoleShape, cylinder);
        
    RoleShape.prototype.redrawPath = function(c, x, y, w, h){
    {
            
            /*c.moveTo(36,0);
            c.arcTo(13,13, 0,1,1,-36,0);
            c.arcTo(-13,13, 0,1,1,36,0);
            */

            c.moveTo(75,37);
            c.arcTo(37,37, 0,1,1,0,37);
            c.arcTo(-37,37, 0,1,1,75,37);
            
            c.moveTo(72,50);
            c.arcTo(72,50, 0,0,1,3,50);

            //c.moveTo(32,14);
            //c.arcTo(30,13, 0,0,1,-32,14);
        
        }
    };

    cellRenderer.registerShape('roleShape', RoleShape);

    //Actor
    utils.extend(ActorShape, cylinder);
        
    ActorShape.prototype.redrawPath = function(c, x, y, w, h){

            
            c.moveTo(75,37);
            c.arcTo(37,37, 0,1,1,0,37);
            c.arcTo(-37,37, 0,1,1,75,37);
            
        };

    cellRenderer.registerShape('actorShape', ActorShape);


    }

export default customShapes