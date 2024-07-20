

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
            <form action="" className='border border-2 border-lg-5 p-4 w-50'>
                {children}
            </form>
        </div>
  )
}

export default layout