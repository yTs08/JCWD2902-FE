/** @format */

import { useLocation } from "react-router-dom";

export default function ProfilePage() {
  const location = useLocation(); // mengambil route params
  return <h1>{location.pathname}</h1>;
}
