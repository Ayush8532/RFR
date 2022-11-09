import './SinglePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostwrapper">
            <img className='singlePostimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" alt="" />
            <h1 className='singlePosttitle'>
                Rahul Singh Dubey
                <div className="singlePostedit">
                    <i className="fa-solid fa-pen-to-square singlePosticon"></i>
                    <i className="fa-solid fa-trash singlePosticon"></i>
                </div>
            </h1>
            <div className="singlePostinfo">
                <span className='singlePostdetail' ><b>Blood Group:</b> AB+</span>
                <span className='singlePostdetail' ><b>Age:</b> 26</span>
                <span className='singlePostdetail'><b>Address:</b> Kaleswar,Karanprayg</span>
                <span className='singlePostdetail'><b>Contact Number:</b> 7563345670</span>
                <span className='singlePostdetail'><b>Email:</b> rahulsingh123@gmail.com</span>
                <span className='singlePostdetail'><b>NearBy Hospital:</b> Shri Mahant Indres Das ji Hospital</span>
                <span className="singlePostdate">1 hour ago</span>
            </div>
        </div>
    </div>
  )
}
