import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SchoolCrud = () => {
    const [schools, setSchools] = useState([]);
    const [school, setSchool] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        contact: "",
        image: "",
        email_id: ""
    });
    const [editing, setEditing] = useState(false);
    const [id, setId] = useState(null);
    const API_URL = "http://localhost:3000/school"

    useEffect(() => {
        fetchSchools();
    },[])
    const fetchSchools = async () => {
       try{
        const response = await axios.get(API_URL);
        console.log(response.data); //console.log(response.data);
        setSchools(response.data.recordsets[0] || []);  //      setSchools(response.data.recordsets);
        setId(response.data.recordsets[0][0]?.id || null); // setId(response.data.recordsets.id);
       } 
       catch(error){
        console.log(error);
       }
    };

    const editSchool = async (id) => {
        try{
        const response = await axios.get(`${API_URL}/${id}`);
        setSchool(response.data.recordsets[0][0]); // fill form for editing
        setEditing(true);
        setId(response.data.recordsets[0][0]?.id || null); // setId(response.data.recordsets.id);//console.log(response);
            //setSchools(response.data.recordsets)
        }
        catch(error){
            toast.error("Failed to fetch school")
        }
    }
    const deleteSchool = async (id) => {
       if(window.confirm("Are you sure to delete this record?")){
        try{
            await axios.delete(`${API_URL}/${id}`);
            toast.success('School deleted successfylly');
            fetchSchools();
        }
        catch(error){
            toast.error(error);
        }
       }

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSchool({...school, [name]: value})
    }
    const handleAddAndUpdate = async () => {
        try{
            if(editing){
                axios.put(`${API_URL}/${id}`, school);
                toast.success("School updated successfully");
            }
            else
            {
                axios.post(API_URL, school);
                toast.success("School updated successfully");
            }
            fetchSchools();
            setEditing(false);
            setSchool({
        name: "",
        address: "",
        city: "",
        state: "",
        contact: "",
        image: "",
        email_id: ""
    });
        }
        catch(error){
            console.log(error)
        }
    }

    return( 
    <div className='w-full'>
        <ToastContainer />
        <button className='bg-blue-800 px-3 py-1 text-white rounded-md mx-3 my-5 hover:bg-blue-600' onClick={() => setEditing(false)} //
        >Add New School</button>
        <div className='my-5 mx-5 max-h-screen min-h-[600px]'>
            <h1 className='text-3xl text-gray-800 font-bold justify-center items-center text-center pt-3 bg-gray-200 shadow-md'>SCHOOLS CRUD OPERATIONS</h1>
            <table className="table-auto border-collapse border border-gray-400 w-full mt-5">
                <thead>
                    <tr className='bg-red-100 shadow-lg'>
                        <th className='border px-4 py-2'>Name</th>
                        <th className='border px-4 py-2'>Address</th>
                        <th className='border px-4 py-2'>City</th>
                        <th className='border px-4 py-2'>State</th>
                        <th className='border px-4 py-2'>Contact</th>
                        <th className='border px-4 py-2'>Image</th>
                        <th className='border px-4 py-2'>Email</th>
                        <th className='border px-4 py-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schools.map((sch) => (
                        <tr key={sch.id}>
                            <td className='border px-4 py-2'>{sch.name}</td>
                            <td className='border px-4 py-2'>{sch.address}</td>
                            <td className='border px-4 py-2'>{sch.city}</td>
                            <td className='border px-4 py-2'>{sch.state}</td>
                            <td className='border px-4 py-2'>{sch.contact}</td>
                            <td className='border px-4 py-2'><img src={sch.image} className="w-16 h-16 object-cover rounded-md" /></td>
                            <td className='border px-4 py-2'>{sch.email_id}</td>
                            <td className='justify-between flex mt-4'>
                                <button className='bg-yellow-600 px-3 py-1 text-white rounded-md hover:bg-yellow-400' onClick={() => editSchool(sch.id)}>
                                    EDIT
                                </button>
                                <button className='bg-red-600 px-3 py-1 text-white rounded-md hover:bg-red-400' onClick={() => deleteSchool(sch.id)}>
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/*modal code */}
            <div>
                <div>
                    <div className='h-15 w-full bg-gray-200 text-center p-1 font-bold text-2xl'>
                        <h5>{editing ? "Edit School" : "Add School"}</h5>
                        <button></button>
                    </div>
                    <div className='mt-4'>
                        <input type='text' name='name' placeholder='Enter School name' value={school.name}
                        onChange={handleInputChange}
                        />
                        <input type='text' name='address' placeholder='Enter School address' value={school.address}
                        onChange={handleInputChange}
                        />
                        <input type='text' name='city' placeholder='Enter School city' value={school.city}
                        onChange={handleInputChange}
                        />
                        <input type='text' name='state' placeholder='Enter School state' value={school.state}
                        onChange={handleInputChange}
                        />
                        <input type='number' name='contact' placeholder='Enter contact' value={school.contact}
                        onChange={handleInputChange}
                        />
                        <input type='url' name='image' placeholder='Enter img url' value={school.image}
                        onChange={handleInputChange}
                        />
                        <input type='email' name='email_id' placeholder='Enter email' value={school.email_id}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className='mt-3'><hr />
                        <button className='bg-green-600 hover:bg-green-700 px-3 py-1 mr-6 my-4 text-white rounded-md'>Close</button>
                        <button className='bg-green-600 hover:bg-green-700 px-3 py-1 text-white rounded-md' onClick={handleAddAndUpdate}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SchoolCrud; 