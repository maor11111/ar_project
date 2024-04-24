type userInfo = {
    name: string,
    lastName: string, 
    city: string,
    id: string,
}

const maor:userInfo ={
    name: 'maor',
    lastName: 'azad', 
    city: 'holon',
    id: '1111111',
}

function getMaor()
{
    return(maor);
}

export default getMaor;