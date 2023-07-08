import './index.css'

const ThumbnailItem = props => {
  const {imagesList, imageChange, key} = props

  const onImage = () => {
    imageChange(key)
  }

  return (
    <div>
      {imagesList.map(each => (
        <img
          src={each.thumbnailUrl}
          alt={each.thumbnailAltText}
          className="thumbnail-img"
          onClick={onImage}
        />
      ))}
    </div>
  )
}

export default ThumbnailItem
