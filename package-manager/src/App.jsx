import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css'
import AddNewPackage from './AddNewPackage';
import UpdateLocation from './UpdateLocation';
import UpdateStatus from './UpdateStatus';



function App() {

  const [show, setShow] = useState(false);
  const [updateStatusShow, setUpdateStatusShow] = useState(false)
  const [updateLocationShow, setUpdateLocationShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleStatusClose = () => setUpdateStatusShow(false)
  const handleStatusShow = () => setUpdateStatusShow(true)

  const handleLocationClose = () => setUpdateLocationShow(false)
  const handleLocationShow = () => setUpdateLocationShow(true)

  const [PackageData, setPackageData] = useState({ id: "", SenderName: '', ReciverName: '', SourceLocation: "", DestinationLocation: "", CurrentLocation: "", Status: "Shipped" });

  const [lists, setLists] = useState([])
  const [currentLocation, setCurrentLocation] = useState("")
  const [currentId, setCurrentId] = useState('')

  const handlePackageInputChange = (e) => {
    const { name, value } = e.target;
    setPackageData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setCurrentLocation((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleAddNewPackage = () => {
    PackageData["id"] = lists.length + 1
    const newData = [...lists, PackageData];
    localStorage.setItem("tableData", JSON.stringify(newData))
    handleClose()
    window.location.reload()
  }
  const handleLocationSave = () => {
    const modifiedData = lists.map(obj => {
      if (obj.id === currentId) {
        return { ...obj, SourceLocation: currentLocation.CurrentLocation };
      }
      return obj;
    });
    localStorage.setItem("tableData", JSON.stringify(modifiedData))
    handleLocationClose()
    window.location.reload()
  }

  const handleLocationEdit = (id) => {
    handleLocationShow()
    setCurrentId(id)
  }

  useEffect(() => {
    const storedData = localStorage.getItem('tableData');
    if (storedData) {
      setLists(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <div className='container'>
        <div className="block-title">
          <h1>Package List
            <Button className="NewPackage" variant="primary" onClick={handleShow}>Add New Package</Button>
          </h1>
        </div>
        <br></br>

        <Table striped hover >
          <tbody>
            {
              lists?.map((current) => {
                return (<tr id={current.id} key={current.id}>
                  <td>
                    <div className='TableData'>
                      <label><b>No: {Math.floor(Math.random() * 100)}</b></label>
                      <label>From:{current.SenderName}({current.SourceLocation})</label>
                      <label>To:{current.ReciverName}({current.DestinationLocation})</label>
                      <Badge bg="primary">{current.Status}</Badge>
                    </div>
                  </td>
                  <td><b>Current Location:</b>{current.SourceLocation}</td>
                  <td>
                    <div className='TableData'>
                      <Button style={{ marginBottom: "5px", width: "200px" }} variant="primary" onClick={handleStatusShow}>Update Status</Button>
                      <Button style={{ marginBottom: "5px", width: "200px" }} variant="primary" onClick={() => handleLocationEdit(current.id)} >Update Location</Button>
                    </div>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </Table>
        <AddNewPackage show={show} handleClose={handleClose} handlePackageInputChange={handlePackageInputChange} handleAddNewPackage={handleAddNewPackage}> </AddNewPackage>
        <UpdateStatus updateStatusShow={updateStatusShow} handleStatusClose={handleStatusClose}></UpdateStatus>
        <UpdateLocation updateLocationShow={updateLocationShow} handleLocationClose={handleLocationClose} handleLocationChange={handleLocationChange} handleLocationSave={handleLocationSave} ></UpdateLocation>
      </div>
    </>
  )
}

export default App
