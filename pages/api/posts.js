
import axios from 'axios';

export default async function handler(req, res) {

// Axios GET Default
try {
    const data = await axios
  .get("https://google.com");
// console.log("data",data.data)
    res.status(200).json({
        "s":"Sdc",
    })
} catch (error) {
    console.log(error)
}
}