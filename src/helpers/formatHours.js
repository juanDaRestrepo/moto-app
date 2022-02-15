

export const formatHours = () =>{
    
    let hour = 8;
    let arrayHours= [];
    let stringFormat = '';
    let am = true;
    for( let i=1; i<=12; i++){
        if(hour<12 && am){
            stringFormat = hour +':00 A.M';
            arrayHours.push(stringFormat);
            stringFormat = hour +':30 A.M';
            arrayHours.push(stringFormat);
            hour++;
        }

        if(hour>=12 || !am){
            if(hour===13){
                hour = 1;
                am = false;
            }
            if(hour===8){
                stringFormat = hour +':00 P.M';
                arrayHours.push(stringFormat);
            }else{
                stringFormat = hour +':00 P.M';
                arrayHours.push(stringFormat);
                stringFormat = hour +':30 P.M';
                arrayHours.push(stringFormat);
                hour++;
            }
            
        }        
        
        
    }

    return arrayHours;
}