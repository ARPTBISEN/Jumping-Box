function bounceOff(a,b){
    if (a.x - b.x < b.width/2+a.width/2
      && b.x - a.x < b.width/2 + a.width/2) {
    a.velocityX = a.velocityX * (-1);
    b.velocityX = b.velocityX * (-1);
  }
  if (a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2){
    a.velocityY = a.velocityY * (-1);
    b.velocityY = b.velocityY * (-1);
  }
  }

  function isTouching(c,d){
 if (c.x - d.x < d.width/2 + c.width/2
      && d.x - c.x < d.width/2 + c.width/2
      && c.y - d.y < d.height/2 + c.height/2
      && d.y - c.y < d.height/2 + c.height/2){
        return true;
      }else{
        return false;
      }
    }