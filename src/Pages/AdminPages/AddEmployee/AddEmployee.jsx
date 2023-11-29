import { useQuery } from "@tanstack/react-query";
import useAxiosAdmin from "../../../Hooks/useAxiosAdmin";
import { FaUsers } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";
import useGetAdmin from "../../../Hooks/useGetAdmin";


const AddEmployee = () => {
    const axiosAdmin = useAxiosAdmin();
    const { user } = useAuth()
    const [isAdmin] = useAdmin()

    const { data: allEmployee = [], refetch, } = useQuery({
        queryKey: ['allEmployee'],
        queryFn: async () => {
            const res = await axiosAdmin.get('/employeeUsers')
            return res.data;
        }
    })


    const { allAdmin } = useGetAdmin(user.email)


    const handleAddTeam = async (employee) => {

        const userInfo = {
            name: employee.name,
            image: employee.photoURL,
            email: employee.email,
            date: employee.date,
            role: employee.role,
            adminEmail: user.email,

        }

        const totalMembers = {
            members: allAdmin.members - 1,
        }

        if (allAdmin.members > 0 && allAdmin.members <= allAdmin.members) {

            axiosAdmin.post('/addTeam', userInfo)
                .then(async (res) => {
                    if (res.data.insertedId) {

                        //update admin route
                        const adminResult = await axiosAdmin.patch(`/adminUsers/${allAdmin._id}`, totalMembers);

                        if (adminResult.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: `${employee.name} added the ${user.displayName} team Successfully`,
                                showConfirmButton: false,
                                timer: 2500
                            });

                        }
                    }
                })
                .catch(err => {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: err.message,
                        showConfirmButton: false,
                        timer: 2500
                    });
                });
        }
        else {
            Swal.fire({
                position: "top",
                icon: "error",
                title: 'your limit is over',
                showConfirmButton: false,
                timer: 2500
            });
        }

    }

    return (
        <div className="mb-20">
            <div className="flex gap-3 justify-evenly my-16 items-center">
                <h2 className="text-3xl"> All Employees </h2>
                <h2 className="text-3xl"> Total Employee {allEmployee.length} </h2>

            </div>

            <div className="overflow-x-auto">
                <table className="table w-full scroll-mx-16">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image </th>
                            <th>Name </th>
                            <th>Type  </th>
                            <th>Add Team </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEmployee?.map((employee, idx) => <tr key={employee._id}>
                                <th>
                                    <label>
                                        {idx + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={employee.photoURL} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className="text-base font-bold"> {employee.name}</h1>
                                </td>
                                <td>
                                    {employee.role}
                                </td>
                                <th>
                                    {
                                        isAdmin ? <button onClick={() => handleAddTeam(employee)} className="btn btn-ghost ">
                                            <FaUsers></FaUsers>
                                        </button> : <button disabled className="btn btn-ghost ">
                                            <FaUsers></FaUsers>
                                        </button>
                                    }

                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddEmployee;