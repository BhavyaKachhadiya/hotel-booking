import React from 'react'

const PopularHotelCard = ({img,location,name,price,rate}) => {
  return (
    <div className="card border-0 rounded-2xl md:w-[25rem] w-[21rem] overflow-hidden h-[30rem] bg-[#FAFAFA] mt-10 ">
    <div className='img w-[25rem] h-[20rem] bg-cover ' style={{ backgroundImage: `url('${img}')`, backgroundPosition: 'center' }}>
    </div>
    <div className='px-4'> 
      <div className="top">
        <p className='text-[.75rem] mt-[1.5rem] text-[#24AB70]'>{location}</p>
      </div>
      <div className="mid">
        <p className='md:text-[1.5rem] text-[1rem] mt-[.5rem] font-semibold'>{name}</p>
      </div>
      <div className="bottom mt-4 md:mt-[2rem]">
        <div className="flex gap-5 justify-start items-center">
          <span>{price}</span>
          <div className='line'>
            <svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="#DDDDDD" />
            </svg>

          </div>
          <div className="rate flex items-center">
            <div className='flex gap-3'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4029_28)">
                  <path d="M11.7065 14C11.5999 14.0004 11.4947 13.9753 11.3998 13.9266L7.99984 12.1466L4.59984 13.9266C4.48944 13.9847 4.36496 14.0106 4.24056 14.0014C4.11616 13.9923 3.99683 13.9484 3.89613 13.8748C3.79543 13.8012 3.7174 13.7008 3.67092 13.585C3.62443 13.4693 3.61136 13.3428 3.63318 13.22L4.29984 9.46664L1.55318 6.79997C1.46748 6.71446 1.40669 6.60722 1.37733 6.48977C1.34796 6.37232 1.35114 6.24909 1.38651 6.13331C1.42515 6.01482 1.49623 5.90954 1.59168 5.82941C1.68712 5.74928 1.80312 5.69751 1.92651 5.67997L5.72651 5.12664L7.39984 1.70664C7.45443 1.59393 7.53967 1.49887 7.64578 1.43236C7.7519 1.36584 7.8746 1.33057 7.99984 1.33057C8.12508 1.33057 8.24779 1.36584 8.3539 1.43236C8.46002 1.49887 8.54525 1.59393 8.59984 1.70664L10.2932 5.11997L14.0932 5.67331C14.2166 5.69084 14.3326 5.74262 14.428 5.82275C14.5235 5.90288 14.5945 6.00816 14.6332 6.12664C14.6685 6.24242 14.6717 6.36565 14.6424 6.4831C14.613 6.60055 14.5522 6.70779 14.4665 6.79331L11.7198 9.45997L12.3865 13.2133C12.4103 13.3383 12.3978 13.4675 12.3506 13.5856C12.3033 13.7037 12.2233 13.8059 12.1198 13.88C11.9991 13.9646 11.8538 14.0068 11.7065 14Z" fill="#F95F5F" />
                </g>
                <defs>
                  <clipPath id="clip0_4029_28">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4029_28)">
                  <path d="M11.7065 14C11.5999 14.0004 11.4947 13.9753 11.3998 13.9266L7.99984 12.1466L4.59984 13.9266C4.48944 13.9847 4.36496 14.0106 4.24056 14.0014C4.11616 13.9923 3.99683 13.9484 3.89613 13.8748C3.79543 13.8012 3.7174 13.7008 3.67092 13.585C3.62443 13.4693 3.61136 13.3428 3.63318 13.22L4.29984 9.46664L1.55318 6.79997C1.46748 6.71446 1.40669 6.60722 1.37733 6.48977C1.34796 6.37232 1.35114 6.24909 1.38651 6.13331C1.42515 6.01482 1.49623 5.90954 1.59168 5.82941C1.68712 5.74928 1.80312 5.69751 1.92651 5.67997L5.72651 5.12664L7.39984 1.70664C7.45443 1.59393 7.53967 1.49887 7.64578 1.43236C7.7519 1.36584 7.8746 1.33057 7.99984 1.33057C8.12508 1.33057 8.24779 1.36584 8.3539 1.43236C8.46002 1.49887 8.54525 1.59393 8.59984 1.70664L10.2932 5.11997L14.0932 5.67331C14.2166 5.69084 14.3326 5.74262 14.428 5.82275C14.5235 5.90288 14.5945 6.00816 14.6332 6.12664C14.6685 6.24242 14.6717 6.36565 14.6424 6.4831C14.613 6.60055 14.5522 6.70779 14.4665 6.79331L11.7198 9.45997L12.3865 13.2133C12.4103 13.3383 12.3978 13.4675 12.3506 13.5856C12.3033 13.7037 12.2233 13.8059 12.1198 13.88C11.9991 13.9646 11.8538 14.0068 11.7065 14Z" fill="#F95F5F" />
                </g>
                <defs>
                  <clipPath id="clip0_4029_28">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4029_28)">
                  <path d="M11.7065 14C11.5999 14.0004 11.4947 13.9753 11.3998 13.9266L7.99984 12.1466L4.59984 13.9266C4.48944 13.9847 4.36496 14.0106 4.24056 14.0014C4.11616 13.9923 3.99683 13.9484 3.89613 13.8748C3.79543 13.8012 3.7174 13.7008 3.67092 13.585C3.62443 13.4693 3.61136 13.3428 3.63318 13.22L4.29984 9.46664L1.55318 6.79997C1.46748 6.71446 1.40669 6.60722 1.37733 6.48977C1.34796 6.37232 1.35114 6.24909 1.38651 6.13331C1.42515 6.01482 1.49623 5.90954 1.59168 5.82941C1.68712 5.74928 1.80312 5.69751 1.92651 5.67997L5.72651 5.12664L7.39984 1.70664C7.45443 1.59393 7.53967 1.49887 7.64578 1.43236C7.7519 1.36584 7.8746 1.33057 7.99984 1.33057C8.12508 1.33057 8.24779 1.36584 8.3539 1.43236C8.46002 1.49887 8.54525 1.59393 8.59984 1.70664L10.2932 5.11997L14.0932 5.67331C14.2166 5.69084 14.3326 5.74262 14.428 5.82275C14.5235 5.90288 14.5945 6.00816 14.6332 6.12664C14.6685 6.24242 14.6717 6.36565 14.6424 6.4831C14.613 6.60055 14.5522 6.70779 14.4665 6.79331L11.7198 9.45997L12.3865 13.2133C12.4103 13.3383 12.3978 13.4675 12.3506 13.5856C12.3033 13.7037 12.2233 13.8059 12.1198 13.88C11.9991 13.9646 11.8538 14.0068 11.7065 14Z" fill="#F95F5F" />
                </g>
                <defs>
                  <clipPath id="clip0_4029_28">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4029_28)">
                  <path d="M11.7065 14C11.5999 14.0004 11.4947 13.9753 11.3998 13.9266L7.99984 12.1466L4.59984 13.9266C4.48944 13.9847 4.36496 14.0106 4.24056 14.0014C4.11616 13.9923 3.99683 13.9484 3.89613 13.8748C3.79543 13.8012 3.7174 13.7008 3.67092 13.585C3.62443 13.4693 3.61136 13.3428 3.63318 13.22L4.29984 9.46664L1.55318 6.79997C1.46748 6.71446 1.40669 6.60722 1.37733 6.48977C1.34796 6.37232 1.35114 6.24909 1.38651 6.13331C1.42515 6.01482 1.49623 5.90954 1.59168 5.82941C1.68712 5.74928 1.80312 5.69751 1.92651 5.67997L5.72651 5.12664L7.39984 1.70664C7.45443 1.59393 7.53967 1.49887 7.64578 1.43236C7.7519 1.36584 7.8746 1.33057 7.99984 1.33057C8.12508 1.33057 8.24779 1.36584 8.3539 1.43236C8.46002 1.49887 8.54525 1.59393 8.59984 1.70664L10.2932 5.11997L14.0932 5.67331C14.2166 5.69084 14.3326 5.74262 14.428 5.82275C14.5235 5.90288 14.5945 6.00816 14.6332 6.12664C14.6685 6.24242 14.6717 6.36565 14.6424 6.4831C14.613 6.60055 14.5522 6.70779 14.4665 6.79331L11.7198 9.45997L12.3865 13.2133C12.4103 13.3383 12.3978 13.4675 12.3506 13.5856C12.3033 13.7037 12.2233 13.8059 12.1198 13.88C11.9991 13.9646 11.8538 14.0068 11.7065 14Z" fill="#F95F5F" />
                </g>
                <defs>
                  <clipPath id="clip0_4029_28">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4029_38)">
                  <path d="M11.7065 14C11.5999 14.0004 11.4947 13.9753 11.3998 13.9266L7.99984 12.1466L4.59984 13.9266C4.48944 13.9847 4.36496 14.0106 4.24056 14.0014C4.11616 13.9923 3.99683 13.9484 3.89613 13.8748C3.79543 13.8012 3.7174 13.7008 3.67092 13.585C3.62443 13.4693 3.61136 13.3428 3.63318 13.22L4.29984 9.46664L1.55318 6.79997C1.46748 6.71446 1.40669 6.60722 1.37733 6.48977C1.34796 6.37232 1.35114 6.24909 1.38651 6.13331C1.42515 6.01482 1.49623 5.90954 1.59168 5.82941C1.68712 5.74928 1.80312 5.69751 1.92651 5.67997L5.72651 5.12664L7.39984 1.70664C7.45443 1.59393 7.53967 1.49887 7.64578 1.43236C7.7519 1.36584 7.8746 1.33057 7.99984 1.33057C8.12508 1.33057 8.24779 1.36584 8.3539 1.43236C8.46002 1.49887 8.54525 1.59393 8.59984 1.70664L10.2932 5.11997L14.0932 5.67331C14.2166 5.69084 14.3326 5.74262 14.428 5.82275C14.5235 5.90288 14.5945 6.00816 14.6332 6.12664C14.6685 6.24242 14.6717 6.36565 14.6424 6.4831C14.613 6.60055 14.5522 6.70779 14.4665 6.79331L11.7198 9.45997L12.3865 13.2133C12.4103 13.3383 12.3978 13.4675 12.3506 13.5856C12.3033 13.7037 12.2233 13.8059 12.1198 13.88C11.9991 13.9646 11.8538 14.0068 11.7065 14Z" fill="#E5E5E5" />
                </g>
                <defs>
                  <clipPath id="clip0_4029_38">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div><p className='ml-3'>{rate}</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PopularHotelCard