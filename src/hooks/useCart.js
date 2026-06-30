import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../contex/AuthProvider";


const useCart = () => { 
    //tan stack query ....
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useContext(AuthContext);
    const {refetch ,data : cart=[]}= useQuery({
        queryKey:['cart', user?.email],
        enabled: !loading && !!user?.email,
        queryFn : async () => {
            if (!user?.email) return [];
             const res = await axiosSecure.get(`/cartItem?email=${user.email}`)
                return res.data;
}
    })
    return [cart,refetch]
};

export default useCart;