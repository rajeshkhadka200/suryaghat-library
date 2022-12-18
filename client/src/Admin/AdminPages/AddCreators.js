import React, { useContext, useState } from 'react'
import { ContexStore } from '../../ContexStore/ContexStore';
import { getApi } from '../../services';
import AdminNav from '../AdminComponents/AdminNav'
import Check from '../AdminComponents/Check';
import AdminLoginStyle from "../AdminCSS/AdminLogin.module.css";

const AddCreators = () => {

    const [creatorData, setCreatorData] = useState({
        name: '',
        description: '',
        file: null
    })
    const { admin } = useContext(ContexStore);
  
    Check();
  
    const handleOnchange = (e) => {
        if(e.target.name === 'name' || e.target.name === "description") {
            setCreatorData({
                ...creatorData,
                [e.target.name]: e.target.value
            })
        } else {
            setCreatorData({
                ...creatorData,
                file: e.target.files[0]
            })
        }
    };
    console.log(creatorData, "@@");

    async function onSubmitCreator(e) {
        e.preventDefault()
        const formData = new FormData()
        if(creatorData.file !== null){
            formData.append("file", creatorData.file)
        }
        formData.append("name", creatorData.name)
        formData.append("description", creatorData.description)
        await getApi
        .post("/hariBaba/api/admin/addcreators", formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }).then((res)=> {
            console.log(res, "@@1")
        }).catch((err)=> {
            console.log(err, "@@1");
        })
    }
  return (
    <div>
        <AdminNav />
        <form onSubmit={onSubmitCreator}>
        <div className={AdminLoginStyle.loginWrapper}>
          <div className={AdminLoginStyle.loginBox}>
            <span>Add owners</span>

            <div className={AdminLoginStyle.formControl}>
              <label>Name</label>
              <input
                name="name"
                onChange={handleOnchange}
                placeholder="Enter Name"
                type="text"
                required
                value={creatorData.name}
              />
              <label>Description</label>
              <textarea
                name="description"
                onChange={handleOnchange}
                placeholder="Enter Description"
                type="text"
                required
                value={creatorData.description}
              />
              <label>Image</label>
              <input
                name="file"
                onChange={handleOnchange}
                placeholder="Upload image"
                type="file"
                required
              />
            </div>

            <div className={AdminLoginStyle.btnGroup}>
              <button type="submit">Add Owner</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default AddCreators