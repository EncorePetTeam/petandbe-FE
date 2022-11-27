import React from 'react'

interface DetailReviewProps<T> {
  detailReview :Array<T>;
}

interface DetailReview {
  id :number;
  userName :string;
  regDate :string;
  content :string;
}

const DetailReview = ({detailReview} :DetailReviewProps<DetailReview>) => {
  return (
    <div className='flex'>
      {detailReview && detailReview.map((current)=>
        <div className="review">
          <div className="title">
            <div className="user__icon"></div>
            <div className="user__info">
              <p className='user__name'>{current.userName}</p>
              {current.regDate}
            </div>
          </div>
          <div className="user__review">
              {current.content}
            </div>
        </div>
      )}
      <style jsx>{`
        .flex {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        .review {
          width: 50%;
          margin: 10px 0;
        }
        .title {
          width: 100%;
          display: flex;
          align-items: center;
          margin: 10px 0;
        }
        .user__icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #ccc;
        }
        .user__info {
          padding: 0 10px;
        }
        .user__name {
          margin: 5px 0;
        }
      `}</style>
    </div>
  )
}

export { DetailReview }