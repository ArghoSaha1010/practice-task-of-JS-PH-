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

const store = validContact("01819234567");
console.log(store);
