const path = require('path');
const isAuth=(request,response,next)=>{
    // Sunday =0 ; Monday =1; Tuesday =2; Wednesday =3; Thersday= 4; Friday =5; Saturday =6
    const d = new Date();
    if( (d.getDay() == 0 || d.getDay() == 6) && (d.getHours() >17 || d.getHours()<9) ){
        // return response.status(401).send({msg:'You are not authorized'})
        return response.sendFile(path.join(__dirname+'/public/closed.html'));
    }else{next()}
    }
module.exports= isAuth;