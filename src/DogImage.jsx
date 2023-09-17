// @ts-check

export const DogImage = ({
  imageUrl,
  fetchDogUrl
}) => {
  return (
    <div className='dogimg'>
      <img src= {imageUrl}/>
      <button onClick={() => fetchDogUrl()}>更新</button>
    </div>
  )
}

export default DogImage
