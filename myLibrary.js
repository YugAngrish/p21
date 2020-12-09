function hasCollided(bulletLeftEdge,wallLeftEdge){
    bulletLeftEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x
    if(bulletLeftEdge>=wallLeftEdge){
      return true;
    }
    else{
      return false;
    }
      
  }