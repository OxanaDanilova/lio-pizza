
import "./Home.css"


function Home({data}) {
  
  console.log(data)
  return (
    <div className='home'>
      <div className='header'>
        <div className="logo">
         

        <span>p</span>
        <span>i</span>
        <span>z</span>
        <span>z</span>
        <span>a</span>
        <span></span>
       
        </div>
        <div className="title">
      Pizza lio
        </div>
      <nav className= "nav">
          <div>Home</div>
          <div>Cart</div>
          <div>About us</div>
      </nav>
      </div>
     
      <div className='main'>
        {data.map((item)=>{
          return(
            <div>
              
            </div>
          )
        })}
      </div>
      <div className='sidebar'></div>
    </div>

  )
}

export default Home