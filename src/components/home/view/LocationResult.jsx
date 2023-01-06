const LocationResult = ({resultItem}) => {
  return(
    <>
      {resultItem.map((item, index) =>
        <li key={index}>
          <div className="img"></div>
          <div className="info">
            <p><strong>{item.place_name}</strong>5km</p>
            <p className="review">{item.road_address_name}</p>
            <p className="review">
              {/* 곱창이 맛없을 수 없지만 여긴 정말 맛있습니다. 2시간 반 <strong>웨이팅</strong>을 했지만 먹으니 */}
              {item.address_name}
            </p>
            {/* <div className="profile">
              <div className="pro_img"></div>
              <p>먹짱</p>
            </div> */}
          </div>
        </li>
      )}
      {/* 
        <li>
          <div className="info no_img">
            <p><strong>제일곱창</strong>5km</p>
            <p className="review">
              곱창이 맛없을 수 없지만 여긴 정말 맛있습니다. 2시간 반 <strong>웨이팅</strong>을 했지만 먹으니 곱창이 맛없을 수 없지만 여긴 정말 맛있습니다. 2시간 반 웨이팅을 했지만 먹으니
            </p>
            <div className="profile">
              <div className="pro_img"></div>
              <p>먹짱</p>
            </div>
          </div>
        </li> 
      */}
    </>
      
  )
}

export default LocationResult;