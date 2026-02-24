import axios from "axios";
import { transformEmployeeData } from "../utils/transformData";

export const fetchEmployees = async () => {
  const response = await axios.post(
    "https://backend.jotish.in/backend_dev/gettabledata.php",
    {
      username: "test",
      password: "123456",
    }
  );

  return transformEmployeeData(response.data.TABLE_DATA.data);
};