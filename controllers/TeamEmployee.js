const TeamSchema = require("../models/Teams")

exports.addEmployee=async(req,res)=>{
    const {name,role , slack, employeeCode,}=req.body

    try{
            const newUser = new TeamSchema.employees({
                name, role,employeeCode,slack
            })
            
            await newUser.save()
          
            res.status(200).send({message:"Employee Added"})

    }
    catch (error) {
        res.status(401).json(error)

    }

}

// exports.addEmployee=async (req,res)=>{
//     const {id}= req.params;
//     const result = await TeamSchema.findOne({ id })
//     if (result) {
//         return {
//             statusCode: 500,
//             message: "Employee already exists"
//         }
//     }
//     else {
//         const newEmployee = new TeamSchema({ name, role, email, empcode })
//         newEmployee.save()
//         return {
//             statusCode: 200,
//             message: "Employee Added Successfully"
//         }
//     }
// }

// exports.getEmployees = async(req,res)=>{
//     try{
//         const employees = await TeamSchema.find().sort({createdAt:1})
//         res.status(200).json(employees)

//     }catch(error){
//         res.status(500).json({message:"Server Error"});

//     }
// }

// exports.deleteEmployee = async(req,res)=>{
//    const {id}= req.params;
  
//    TeamSchema.findByIdAndDelete(id)
//    .then((employee)=>{
//     res.status(200).json({message:"Employee deleted"});
//    })
//    .catch((err)=>{
//     res.status(500).json({message:"Server Error"});
//    })
// }
