import React,{useState} from 'react';


function Card(props) {

    const [isShowMore,setIsShowMore] = useState(false);
    
    const {id,img,title,price, paragraph} = props.tour;
    const handleDelete = (id) => {
        const newArray = props.tours.filter(tour => tour.id !== id)
        props.setTours(newArray);
        
    }

    
    return (
        <>
        <div className='card'>
          <div>
              <img src={img} alt='image tours' width='100%'/>
          </div>
          <div className='head'>
              <h2>{title}</h2>
              <strong>{price}</strong>
          </div>
          <div className='content'>
          {/* {paragraph} */}
          {isShowMore ? paragraph : `${paragraph.substring(0, 250)}`}
          <a onClick={() => setIsShowMore(!isShowMore)}>{isShowMore ? " Show less" : " Show more"}</a>
          </div>
          <button type='button' className='btn' onClick={() => handleDelete(id)}>Not interested</button>
        </div>
       
        </>
    )
}

export default Card;