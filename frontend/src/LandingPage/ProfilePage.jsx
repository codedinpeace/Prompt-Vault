import React, {useState, useEffect} from 'react'
import { Camera } from 'lucide-react'
import axios from 'axios'
import { useAuthStore } from '../States/AuthStore'

const ProfilePage = () => {

  const [photo, setPhoto] = useState(null)
  const {authUser} = useAuthStore()

    useEffect(()=>{
      const storedItem = localStorage.getItem("profilePhoto")
      if(storedItem) return setPhoto(storedItem)
    },[])

    async function handlePhotoSubmit (e) {
      const file = e.target.files[0]
      if(!file) return
  
      const data = new FormData()
      data.append("file", file)
      data.append("upload_preset", "second_time_2")
      data.append("cloud_name", "dpz4owext")
  
      const response = await axios.post("https://api.cloudinary.com/v1_1/dpz4owext/image/upload", data)
      setPhoto(response.data.secure_url)
      localStorage.setItem("profilePhoto", response.data.secure_url)
      // https://api.cloudinary.com/v1_1/demo/image/upload
    }


  return (
    <div className='bg-[#9E92E8] h-[92.5vh]'>

    <div className='flex flex-col gap-5 justify-center items-center '>
      <div className='bg-white p-10 rounded-md mt-30 shadow-xl max-sm:p-2 flex flex-col justify-center items-center'>
        {/* <hr /> */}
        <div className="relative w-60 h-60 max-sm:w-40 max-sm:h-40   mt-10 mb-10">
  <img
    src={photo || "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"}
    className="w-60 h-60 rounded-full max-sm:w-40 max-sm:h-40 object-cover "
    alt=""
    />

  <label
    htmlFor="profile-update"
    className="absolute bottom-2 right-2  bg-white p-2 rounded-full cursor-pointer shadow"
    >
    <Camera className="w-6 h-6 text-gray-700" />
    <input type="file" onChange={handlePhotoSubmit} id="profile-update" className="hidden" />
  </label>
</div>
<div className='flex-col gap-5 flex '>
  <h3 className='text-xl max-sm:text-lg font-medium'>Name : {authUser.name}</h3>
  <div className='flex flex-col gap-5 '>
    <h3 className='text-xl font-medium max-sm:text-lg'>Email : {authUser.email}</h3>
    <h3 className='text-xl font-medium max-sm:text-lg'>User from : {authUser.createdAt.split("T")[0]}</h3>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default ProfilePage