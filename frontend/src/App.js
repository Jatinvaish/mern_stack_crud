import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from './common';
import Form from './components/Form';

function App() {
  const [dataList, setDataList] = useState([])
  const [addSection, setAddSection] = useState(false)
  const [editSection, setEditSection] = useState(false)
  const [formData, setFormData] = useState({
    userName: "",
    personalName: "",
    email: "",
    contactInfo: "",
  })
  const [formDataEdit, setFormDataEdit] = useState({
    userName: "",
    personalName: "",
    email: "",
    contactInfo: "",
    _id: ""
  })

  const handleOnChnage = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  const handleEditOnChnage = (e) => {
    const { value, name } = e.target
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  const handleEditOpen = (item) => {
    setFormDataEdit(item)
    setEditSection(true)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    debugger
    try {
      const data = await axios.post(`${BASE_URL}user/new`, formData)
      setAddSection(false);
      getAllUsers()
    }
    catch (e) {
      alert(e.message);
    }

  }
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.put(`${BASE_URL}user/${formDataEdit._id}`, formDataEdit)
      if (data.data.success) { 
        setEditSection(false);
      }

    }
    catch (e) {
      alert(e.message);
    }
  }
  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`${BASE_URL}user/${id}`)
      if (data.data.success) { }
      setAddSection(false);
      alert(data.data.message);
      getAllUsers();
    }
    catch (e) {
      alert(e.message);
    }
  }
  const getAllUsers = async (e) => {
    try {
      const data = await axios.get(`${BASE_URL}users`,)
      setDataList(data.data.users)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <>
      <div className="container">
        <button className="btn btn-add" onClick={() => setAddSection(true)}>Add</button >
        {
          addSection &&
          <Form
            handleClose={setAddSection}
            handleSubmit={handleSubmit}
            handleOnChnage={handleOnChnage}
            data={formData} />
        }
        {editSection &&
          <Form
            handleClose={setEditSection}
            handleSubmit={handleUpdate}
            handleOnChnage={handleEditOnChnage}
            data={formDataEdit} />}

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>UserName </th>
                <th>PersonalName </th>
                <th>email </th>
                <th>ContactInfo </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {
                dataList.length > 0 ?
                  dataList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.userName}</td>
                        <td>{item.personalName}</td>
                        <td>{item.email}</td>
                        <td>{item.contactInfo}</td>
                        <td style={{display:'flex', justifyContent:'space-between'}}><button className="btn btn-edit" onClick={() => { handleEditOpen(item) }}>update</button>
                        <button className="btn btn-danger" onClick={() => { handleDelete(item._id) }}>delete</button>   </td>
                      </tr>
                    )
                  })
                  :
                  <tr>
                    <td colSpan={6}>
                      data not found
                    </td>
                  </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}

export default App;
