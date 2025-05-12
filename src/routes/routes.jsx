import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
export default function AppRoutes() {
    const navigationRoutes=[
        {path:"/", element:<Home/>},
        {path:"/shop", element:<Shop/>}
    ]
    return <Routes>
        {navigationRoutes.map(({path, element})=>(<Route key={path} path={path} element={element}/>))}
    </Routes>;
}