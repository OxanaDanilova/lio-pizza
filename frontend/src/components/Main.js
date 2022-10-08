
import "./Main.css"


function Home({data}) {
  
  console.log(data)
  return (
    <main>
    
     
      <section >
        {data.map((item)=>{
          return(
            <div key={item._id}>
              <div>{item.name}</div>
            </div>
          )
        })}
      </section>
      <div className='sidebar'></div>
    </main>

  )
}

export default Home