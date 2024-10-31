const SubImg = ({sub_images}) => {
  return (
    <>
      {
        sub_images.map((sub_images,i)=>{
          return (
            <img key={i} src={sub_images} alt="" />
          )
        })
      }
    </>
  )
}

export default SubImg
