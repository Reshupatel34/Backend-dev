import { userData } from "../model/data.js";

export const allUser = (req, res) => {
  res.json({
    message: "All user ",
    userDataInfo: userData,
  });
};

export const createUser = (req, res) => {
  const { name, email } = req.body;
  let newUser = { id: userData.length + 1, name: name, email: email };

  userData.push(newUser);

  res.json({
    message: "User created",
  });
};

export const deleteUser = (req, res) => {
    try{
 const id = parseInt(req.params.id);
  const idx = userData.findIndex((s) => s.id === id);
  if (idx === -1) {
    return res.json({
      message: "USer not found",
    });
  }
  userData.splice(idx, 1);
  res.json({
    message: "User Deleted",
  });
    }catch(err){
        res.json({message:err})
    }
  
};
