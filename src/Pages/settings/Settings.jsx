import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingWrapper">
          <div className="settingTitle">
            <span className="settingUpdatetitle">Update Your account </span>
            <span className="settingDeletetitle">Delete account </span>
          </div>
          <form className='settingForm'>
            <label>Profile Picture</label>
            <div className="settingPP">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsupI89wVbXLRzxaiHG_rezqk3FrqDeMmog&usqp=CAU" alt="" />
              <label htmlFor="fileInput">
                <i className="settingPPicon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id='fileInput' style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='Ayush' />
            <label>Email</label>
            <input type="email" placeholder='Ayush123@gmail.com' />
            <label>Password</label>
            <input type="password"/>
            <button className="settingSubmit">Update</button>
          </form>
        </div>

        <Sidebar/>
    </div>
  )
}
