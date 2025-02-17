function  willSuccess( marks ) 
{
    if(Array.isArray(marks) !== true)
    {
        return "Invalid";
    }


    let count = 0;
    for(const mark of marks)
    {
        if(mark >= 50)
        {
            count++;
        }
    }
    
    if(count > (marks.length - count))
    {
        return true;
    }
    else
    {
        return false;
    }
}


console.log(willSuccess(['adsf','aef']));