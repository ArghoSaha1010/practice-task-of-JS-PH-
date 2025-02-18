function calculateVAT( price ) 
{
    if((price < 0) || (typeof price !== 'number'))
    {
        return "Invalid";
    }
    const total = (Math.abs(price) * 7.5) / 100;
    return total;
}

function  validContact( contact ) 
{
    if(typeof contact !== 'string')
    {
        return "Invalid";
    }
    else if( (contact[0] !== '0') || (contact[1] !== '1') || (contact.length !== 11) || (contact.includes(' ')))
    {
        return false;
    }
    
    return true;
}


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


function  validProposal( person1 , person2 ) 
{
    if((typeof person1 !== 'object') || (typeof person2 !== 'object') || (Array.isArray(person1)) || (Array.isArray(person2)))
    {
        return "Invalid"
    }

    if((person1.gender !== person2.gender) && ((Math.abs(person1.age - person2.age) >= 0) && (Math.abs(person1.age - person2.age) <= 7)))
    {
        return true;
    }
    else
    {
        return false;
    }
}


function  calculateSleepTime( times )
{
    if(Array.isArray(times) !== true)
    {
        return "Invalid";
    }


    for(let i = 0; i < times.length; i++)
    {
        if(typeof times[i] !== 'number')
        {
            return 'Invalid';
        }
    }

    let sum=0;
    for(const time of times)
    {
        sum += time;
    }

    const hour = Math.floor(sum / 3600);
    sum = sum % 3600;
    const min = Math.floor(sum / 60);
    sum = sum % 60;
    const sec = Math.floor(sum);

    let store =
    {
        hour: hour,
        minute: min,
        second: sec
    }
    
    return store;
}