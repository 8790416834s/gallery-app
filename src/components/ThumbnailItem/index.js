import './index.css'

const ThumbnailItem = props => {
  const {imagesDetail, imageChange, clicked} = props
  const {id, thumbnailAltText, thumbnailUrl} = imagesDetail

  const isClicked = clicked ? 'clickedBtn' : ''

  const onImage = () => {
    imageChange(id)
  }

  return (
    <li className="item-container">
      <div className="list-item">
        <button
          type="button"
          onClick={onImage}
          className={`button${isClicked}`}
        >
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-img"
          />
        </button>
      </div>
    </li>
  )
}

export default ThumbnailItem
