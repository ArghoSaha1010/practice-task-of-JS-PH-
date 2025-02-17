function calculateVAT( price ) 
{
    if((price < 0) || (typeof price !== 'number'))
    {
        return "Invalid";
    }
    const total = (Math.abs(price) * 7.5) / 100;
    return total;
}


console.log(calculateVAT(1000));