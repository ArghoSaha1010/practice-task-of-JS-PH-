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
    const hour = parseInt(sum / 3600);
    sum = sum % 3600;
    const min = parseInt(sum / 60);
    sum = sum % 60;
    const sec = parseInt(sum);

    let store =
    {
        hour: hour,
        minute: min,
        second: sec
    }

    return store;
}
    
console.log(calculateSleepTime());