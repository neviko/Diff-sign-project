
/*OBJECT*/

//object : clip video
function clip(name, clipUrl)
{
    this.name = name;
    this.clipUrl = clipUrl;
}

//object : single quesion
function response(name,imageUrl)
{
    this.name = name;
    this.pictUrl = imageUrl;
}

/*FUNCTIONS*/

//function : return random num
function getRandomArbitrary(min, max) 
{
  return Math.random() * (max - min) + min;
}

//function : getClip (return name and url)
function getClip(db,All) 
{
    var listDetailsClip = [];
    listDetailsClip = db.getRandomClip(All);// FOR URIA_EDY
    
    videoClip = new clip(listDetailsClip[0],listDetailsClip[1]);
    
    return videoClip;
}

//function : create a set of reponse
function createSetofResponse(db,nameOfPicture)
{
    var responses = [];
    var i = 0 ;
    var num = getRandomArbitrary(1,4);    
    while (i<4)
    {
        if (i == num)
            var response = new response(nameOfPicture,db.getPictUrl(nameOfPicture)); // for URIA_EDY 
        else
            var response = new response(nameOfPicture,db.getRandomPictUrl()); // for  URIA_EDY
        responses.push(response);
        i++;
    }
    return responses;
}