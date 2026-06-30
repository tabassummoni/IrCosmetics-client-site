import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../contex/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/users/admin/${user.email}`);
                return res.data?.admin;
            }
            return false;
        }
    });
    return [isAdmin, isAdminLoading];
}

export default useAdmin;