
import axios from 'axios';

export default async function handler(req, res) {

// Axios GET Default
try {
    const data = await axios
  .get("http://34.143.197.93:5000/");
console.log("data",data.data)
    res.status(200).json({
        "s":"Sdc",
       data: data.data
    })
} catch (error) {
    console.log(error)
}
}