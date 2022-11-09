import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img  className='writeImg' src="https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg" alt="" />
            <form className='writeForm'>
                <div className='writeFromgroup mb-3'>
                    <label htmlFor="fileInput">
                        <i className=" writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} placeholder='Upload Image' />
                    <div class="col">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Name"/>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Blood Group" />
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" placeholder="Age"/>
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" placeholder="Mobile Number" />
                        </div>
                        <div class="col">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Address" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="NearBy Hospital" />
                        </div>
                    </div>
                    <div class='col'>
                    <input type="checkbox" id='check'/>
                            <label htmlFor="check">I am donating blood with my own will and i have no issues</label>
                    </div>
                </div>
                <button className="writeSubmit">Donate</button>
            </form>
        </div>
    )
}
