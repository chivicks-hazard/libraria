

const layout = ({children}: {children:React.ReactNode}) => {
  // const body = 

  return (
    <div className='py-5 books-bg'>
      <div className="d-flex justify-content-center align-items-center mt-4 mb-5 h-100">
        <form action="" className='border border-2 border-lg-5 p-4 w-md-50 glass'>
            {children}
        </form>
      </div>
      <div className="mb-sm-5 pb-sm-5 mb-lg-3 pb-lg-3"></div>
    </div>
  )
}

export default layout