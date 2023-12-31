import { useQuery } from "@tanstack/react-query";
import useAxiosAdmin from "../../../Hooks/useAxiosAdmin";
import useAuth from "../../../Hooks/useAuth";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useGetAdmin from "../../../Hooks/useGetAdmin";
import useAdmin from "../../../Hooks/useAdmin";
import UpcomingEvents from "./UpcomingEvents";
import { Circles } from "react-loader-spinner";


const MyTeam = () => {
    const axiosAdmin = useAxiosAdmin()
    const { user } = useAuth()
    const [isAdmin] = useAdmin()

    const { data: myTeam = [], refetch, isPending } = useQuery({
        queryKey: ['myTeam'],
        queryFn: async () => {
            const res = await axiosAdmin.get(`/addTeam/${user.email}`)
            return res.data;
        }
    })

    // const myEmployee = myTeam?.find((item) => item)

    const { allAdmin } = useGetAdmin(user.email)

    const handleDeleteTeam = async (id) => {
        const totalMembers = {
            members: allAdmin.members + 1,
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosAdmin.delete(`/addTeam/${id}`)
                    .then(async (res) => {
                        if (res.data.deletedCount > 0) {

                            //update admin route
                            const adminResult = await axiosAdmin.patch(`/adminUsers/${allAdmin._id}`, totalMembers);

                            if (adminResult.data.modifiedCount > 0) {
                                refetch()
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        }
                    })
            }
        });


    }

    if (isPending) {
        <div className="flex justify-center items-center w-full h-[300px] bg-white">
            <Circles
                height="80"
                width="80"
                color="indigo"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /> </div>
    }




    return (

        <div className="mb-20">
            <div className="flex gap-3 justify-evenly my-16 items-center">
                <h2 className="text-3xl"> All Employees </h2>
                <h2 className="text-3xl"> Total Employee {myTeam.length} </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full scroll-mx-16">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image </th>
                            <th>Name </th>
                            <th>Type  </th>
                            <th>Remove </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myTeam?.map((team, idx) => <tr key={team._id}>
                                <th>
                                    <label>
                                        {idx + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={team.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className="text-base font-bold"> {team.name}</h1>
                                </td>
                                <td>
                                    {team.role}
                                </td>
                                <th>
                                    {isAdmin ? <button onClick={() => handleDeleteTeam(team._id)} className="btn btn-ghost ">
                                        <FaTrash className="text-xl text-red-500"></FaTrash>
                                    </button> :
                                        <button disabled className="btn btn-ghost ">
                                            <FaTrash className="text-xl text-red-500"></FaTrash>
                                        </button>}
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div>
                <UpcomingEvents myTeam={myTeam}> </UpcomingEvents>
            </div>
        </div>

    );
};

export default MyTeam;