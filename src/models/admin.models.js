import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    phone: { 
      type: String, 
      required: true, 
      unique: true 
    },
    role: { 
      type: String, 
      enum: ["Admin", "SuperAdmin"], 
      required: true 
    },
    assignedZones: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Zone" 
      }
    ],
  }, {timestamps : true}
);

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;
