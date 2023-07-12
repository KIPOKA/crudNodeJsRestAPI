
import {v4 as uuidv4} from 'uuid';


export const createUser =(req, res)=>{
    console.log('Post route reached');
    const user = req.body;
    users.push({... user, id: uuidv4()});

    res.send(`User with name ${user.name} added to the DB`);
}
 export const getUsers= (req, res)=>{
    console.log(users);
    res.send(users);
}
export const getUserById =(req, res) =>{
    const id = req.params.id;

   const userFound = users.find((user) =>user.id === id )
    res.send(userFound);
}

export const deleteUser =(req, res) =>{
    const {id} = req.params;
    users = users.filter((user ) => user.id != id);

    res.send(`User with name ${id} added to the DB`);
}


export const updateUser = (req, res)=>{
    const {id} = req.params;
    const user = users.find((user) => user.id ===id);
    const {name,lastName, age }=req.body; 
    
        if(name) user.name = name;
        if(lastName) user.lastName =lastName;
        if(age) user.age= age;
        
        res.send(`User with name ${id} updated to the DB`); 
} 