
const testing =(req,res)=>{
    const {name} = req.body;
    
    if (name) {
        res.status(200).send(`Name is ${name}`);
    } else {
        res.status(400).send('Name is undefined');
    }
};


export default testing;