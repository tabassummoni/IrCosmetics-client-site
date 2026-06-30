import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Layout/Main";
import SignUp from "../Page/SignUp/SignUp";
import Skin from "../Page/Products/Skin/Skin";
import MakeUp from "../Page/Products/MakeUp/MakeUp";
import Hair from "../Page/Products/Hair/Hair";
import BabyMom from "../Page/Products/Baby&Mom/BabyMom";
import Login from "../Page/LogIn/Login";
import SkinDetails from "../Page/Products/Skin/SkinDetails";
import MkDetails from "../Page/Products/MakeUp/MkDetails";
import HairDetails from "../Page/Products/Hair/HairDetails";
import BMDetails from "../Page/Products/Baby&Mom/BMDetails";
import AboutUsHome from "../Page/Home/AboutUsHome";
import AdminProductAdd from "../Page/Admin/AdminProductAdd";
import AddskinPro from "../Page/Admin/AddskinPro";
import AddHairCareProduct from "../Page/Admin/AddHairCareProduct";
import AddMakeUpProduct from "../Page/Admin/AddMakeUpProduct";
import AddBabyCareProduct from "../Page/Admin/AddBabyCareProduct";
import PrivetRoute from "./PrivetRoute";
import SkinEdit from "../Page/Admin/Edit/SkinEdit";
import HairEdit from "../Page/Admin/Edit/HairEdit";
import BabyEdit from "../Page/Admin/Edit/BabyEdit";
import MakeUpEdit from "../Page/Admin/Edit/MakeUpEdit";
import SkinShow from "../Page/Admin/ShowProduct/skin/SkinShow";

import Cart from "../Page/DashBoard/Cart/Cart";
import Dashboard from "../Page/DashBoard/Dashboard";
import BabyShow from "../Page/Admin/ShowProduct/Baby/BabyShow";
import MakeUpShow from "../Page/Admin/ShowProduct/MakeUp/MakeUpShow";
import HairShow from "../Page/Admin/ShowProduct/Hair/HairShow";
import AllUsers from "../Page/DashBoard/AllUsers";
import Payment from "../Page/DashBoard/Payment";
import AddReview from "../Page/Review/AddReview";
import ReviewShow from "../Page/Review/ReviewShow";
import ShowAllReviewAdmin from "../Page/DashBoard/ShowAllReviewAdmin";
import Adminhome from "../Page/DashBoard/AdminHome/Adminhome";
import Contact from "../Page/DashBoard/Contact";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
             {
                path: '/skincare',
                element: <Skin></Skin>
            },
            {
                path: 'skincare/:id',
                element: <SkinDetails></SkinDetails>,
                loader:({params})=>fetch(`http://localhost:4000/skin/${params.id}`)
         
            },
            {
                path: '/makeUpCare',
                element: <MakeUp></MakeUp>
            },
            {
                path: 'makeUpCare/:id',
                element: <MkDetails></MkDetails>,
                loader:({params})=>fetch(`http://localhost:4000/makeupcosmetics/${params.id}`)
            },
            
            {
                path: '/hairCare',
                element: <Hair></Hair>
            },
            {
                path: 'hairCare/:id',
                element: <HairDetails></HairDetails>,
                loader:({params})=>fetch(`http://localhost:4000/cosmetics/${params.id}`)
            }, 
            {
                path: '/babyCare',
                element: <BabyMom></BabyMom>
            },
            {
                path: 'babyCare/:id',
                element: <BMDetails></BMDetails>,
                loader:({params})=>fetch(`http://localhost:4000/babyCosmetics/${params.id}`)
            }, 
            {
                path: '/about',
                element:<AboutUsHome></AboutUsHome>
            },
            // {
            //     path: '/skinEdit/:id',
            //     element:<SkinEdit></SkinEdit>,
            //     loader:({params})=>fetch(`http://localhost:4000/skin/${params.id}`)
            // },
            {
                path: '/skinEditshow',
                element:<SkinShow></SkinShow>
            },
            
             {
                path: '/babyShow',
                element:<BabyShow></BabyShow>
            },
             {
                path: '/makeupShow',
                element:<MakeUpShow></MakeUpShow>
            },
             {
                path: '/hairshow',
                element:<HairShow></HairShow>
            },
            {
                path: '/showReview',
                element:<ReviewShow></ReviewShow>
            },
            {
                path: 'skinEditshow/:id',
                element: <SkinEdit></SkinEdit>,
                loader:({params})=>fetch(`http://localhost:4000/skin/${params.id}`)
         
            },
            {
                path: '/hairEdit/:id',
                element:<HairEdit></HairEdit>,
                loader:({params})=>fetch(`http://localhost:4000/cosmetics/${params.id}`)

            },
            {
                path: '/babyEdit/:id',
                element:<BabyEdit></BabyEdit>,
                loader:({params})=>fetch(`http://localhost:4000/babyCosmetics/${params.id}`)

            },
            {
                path: '/makeUpEdit/:id',
                element:<MakeUpEdit></MakeUpEdit>,
                loader:({params})=>fetch(`http://localhost:4000/makeupcosmetics/${params.id}`)

            },
        ]},
        {
            path:'dashboard',
            element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
            children :[
                {
                    path: 'cart',
                    element:<Cart></Cart>
                },
                {
                    path: 'payment',
                    element:<Payment></Payment>
                },
                
                //admin routes

                {
                    path:'allUsers',
                    element:<AdminRoute><AllUsers /></AdminRoute>
                },
                {
                path: 'adminProductAdd',
                element:<AdminRoute><AdminProductAdd /></AdminRoute>
            },
            {
                path: 'addSkinProduct',
                element:<AdminRoute><AddskinPro /></AdminRoute>
            },
            {
                path: 'addHairProduct',
                element:<AdminRoute><AddHairCareProduct /></AdminRoute>
            },
            {
                path: 'addMakeUpProduct',
                element:<AdminRoute><AddMakeUpProduct /></AdminRoute>
            },
            {
                path: 'addBabyProduct',
                element:<AdminRoute><AddBabyCareProduct /></AdminRoute>
            },
            // {
            //     path: 'skinEdit/:id',
            //     element:<SkinEdit></SkinEdit>,
            //     loader:({params})=>fetch(`http://localhost:4000/skin/${params.id}`)
            // },
            {
                path: 'skinEditshow',
                element:<AdminRoute><SkinShow /></AdminRoute>
            },
             {
                path: 'babyShow',
                element:<AdminRoute><BabyShow /></AdminRoute>
            },
             {
                path: 'makeupShow',
                element:<AdminRoute><MakeUpShow /></AdminRoute>
            },
             {
                path: 'hairshow',
                element:<AdminRoute><HairShow /></AdminRoute>
            },
             {
                path: 'adminHome',
                element:<AdminRoute><Adminhome /></AdminRoute>
            },
            {
                path: 'contact',
                element:<Contact></Contact>
            },
            {
                path: 'skinEditshow/:id',
                element: <SkinEdit></SkinEdit>,
                loader:({params})=>fetch(`http://localhost:4000/skin/${params.id}`)
         
            },
            {
                    path: 'review',
                    element:<AddReview></AddReview>
                },
                  {
                    path: 'allreview',
                    element:<AdminRoute><ShowAllReviewAdmin /></AdminRoute>
                },
            {
                path: 'hairEdit/:id',
                element:<HairEdit></HairEdit>,
                loader:({params})=>fetch(`http://localhost:4000/cosmetics/${params.id}`)

            },
            {
                path: 'babyEdit/:id',
                element:<BabyEdit></BabyEdit>,
                loader:({params})=>fetch(`http://localhost:4000/babyCosmetics/${params.id}`)

            },
            {
                path: 'makeUpEdit/:id',
                element:<MakeUpEdit></MakeUpEdit>,
                loader:({params})=>fetch(`http://localhost:4000/makeupcosmetics/${params.id}`)

            },
            ]
        }
    
    ])