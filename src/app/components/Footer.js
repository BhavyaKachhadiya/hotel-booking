import React from 'react'
import FooterLink from './FooterLink'

const Footer = () => {
    const footerLinks = [
        {
            id:0,
            main: "Home",
            menus:
            [
                {
                    id:0,
                    linkName:"Booking",
                    link:"#"
                },
                {
                    id:1,
                    linkName:"Facilities",
                    link:"#"
                },
                {
                    id:2,
                    linkName:"Location",
                    link:"#"
                },
                {
                    id:2,
                    linkName:"Contact",
                    link:"#"
                },
            ]
        },
        {
            id:1,
            main: "Help",
            menus:
            [
                {
                    id:0,
                    linkName:"About Us",
                    link:"#"
                },
                {
                    id:1,
                    linkName:"Help Center",
                    link:"#"
                },
                {
                    id:2,
                    linkName:"Privacy policy",
                    link:"#"
                },
                {
                    id:2,
                    linkName:"FAQs",
                    link:"#"
                },
            ]
        },
        {
            id:2,
            main: "Get the app",
            menus:
            [
                {
                    id:0,
                    linkName:"iOS App",
                    link:"#"
                },
                {
                    id:1,
                    linkName:"Android App",
                    link:"#"
                }
            ]
        }
    ]
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2  place-items-start gap-7 my-16'>
            <div className='social-links'>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='links flex mt-8 gap-7'>
                    <div className='fb'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8.00004C16 3.58173 12.4183 0 8.00001 0C3.58172 0 0 3.58173 0 8.00004C0 11.9931 2.92548 15.3027 6.75 15.9029V10.3125H4.71875V8.00004H6.75V6.23753C6.75 4.23252 7.94434 3.12502 9.77172 3.12502C10.647 3.12502 11.5625 3.28126 11.5625 3.28126V5.25002H10.5537C9.55992 5.25002 9.25001 5.8667 9.25001 6.49937V8.00004H11.4688L11.1141 10.3125H9.25V15.9029C13.0745 15.3027 16 11.9931 16 8.00004Z" fill="#1877F2" />
                            <path d="M11.1141 10.3123L11.4688 7.99978H9.24999V6.49909C9.24999 5.86644 9.55992 5.24976 10.5537 5.24976H11.5625V3.281C11.5625 3.281 10.647 3.12476 9.77171 3.12476C7.94434 3.12476 6.75 4.23225 6.75 6.23727V7.99978H4.71875V10.3123H6.75V15.9026C7.16351 15.9674 7.58144 15.9999 8 15.9998C8.42525 15.9998 8.8427 15.9665 9.24999 15.9026V10.3123H11.1141Z" fill="white" />
                        </svg>
                    </div>
                    <div className='ig'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00261 0C4.66268 0 3.68588 0.00344645 3.49601 0.0192016C2.8106 0.0761911 2.3841 0.184139 1.91945 0.415543C1.56136 0.593404 1.27895 0.799575 1.00024 1.08858C0.492639 1.61564 0.185005 2.26407 0.0736409 3.03484C0.0194972 3.40903 0.0037463 3.48534 0.000546906 5.39664C-0.000683632 6.03374 0.000546906 6.87221 0.000546906 7.99686C0.000546906 11.335 0.00423852 12.3111 0.0202355 12.5006C0.0756097 13.1678 0.180205 13.5875 0.401702 14.0466C0.825007 14.9254 1.63347 15.5852 2.58591 15.8314C2.91569 15.9163 3.27993 15.9631 3.74753 15.9852C3.94565 15.9938 5.96496 16 7.98551 16C10.006 16 12.0266 15.9975 12.2198 15.9877C12.7612 15.9622 13.0756 15.92 13.4233 15.8301C13.8955 15.709 14.3356 15.4862 14.7129 15.1773C15.0902 14.8684 15.3954 14.4808 15.6075 14.0417C15.8246 13.5936 15.9348 13.1579 15.9846 12.5256C15.9954 12.3878 16 10.1898 16 7.99477C16 5.79938 15.9951 3.60547 15.9842 3.46762C15.9338 2.8251 15.8237 2.39306 15.5995 1.93641C15.4155 1.56259 15.2112 1.28343 14.9147 0.997992C14.3855 0.492349 13.7383 0.184631 12.9668 0.0733601C12.5931 0.0193247 12.5187 0.00332336 10.6064 0H8.00261Z" fill="url(#paint0_radial_4029_327)" />
                            <path d="M8.00261 0C4.66268 0 3.68588 0.00344645 3.49601 0.0192016C2.8106 0.0761911 2.3841 0.184139 1.91945 0.415543C1.56136 0.593404 1.27895 0.799575 1.00024 1.08858C0.492639 1.61564 0.185005 2.26407 0.0736409 3.03484C0.0194972 3.40903 0.0037463 3.48534 0.000546906 5.39664C-0.000683632 6.03374 0.000546906 6.87221 0.000546906 7.99686C0.000546906 11.335 0.00423852 12.3111 0.0202355 12.5006C0.0756097 13.1678 0.180205 13.5875 0.401702 14.0466C0.825007 14.9254 1.63347 15.5852 2.58591 15.8314C2.91569 15.9163 3.27993 15.9631 3.74753 15.9852C3.94565 15.9938 5.96496 16 7.98551 16C10.006 16 12.0266 15.9975 12.2198 15.9877C12.7612 15.9622 13.0756 15.92 13.4233 15.8301C13.8955 15.709 14.3356 15.4862 14.7129 15.1773C15.0902 14.8684 15.3954 14.4808 15.6075 14.0417C15.8246 13.5936 15.9348 13.1579 15.9846 12.5256C15.9954 12.3878 16 10.1898 16 7.99477C16 5.79938 15.9951 3.60547 15.9842 3.46762C15.9338 2.8251 15.8237 2.39306 15.5995 1.93641C15.4155 1.56259 15.2112 1.28343 14.9147 0.997992C14.3855 0.492349 13.7383 0.184631 12.9668 0.0733601C12.5931 0.0193247 12.5187 0.00332336 10.6064 0H8.00261Z" fill="url(#paint1_radial_4029_327)" />
                            <path d="M7.99876 2.09253C6.39462 2.09253 6.19331 2.09955 5.56327 2.12822C4.93447 2.15703 4.50525 2.2566 4.12969 2.40271C3.74121 2.55361 3.41167 2.75548 3.08337 3.084C2.75481 3.41239 2.553 3.74202 2.40165 4.13048C2.25521 4.50627 2.15554 4.93572 2.12724 5.56445C2.09918 6.19466 2.0918 6.39615 2.0918 8.00072C2.0918 9.60528 2.09893 9.80604 2.12748 10.4362C2.1564 11.0652 2.25595 11.4945 2.40189 11.8702C2.55288 12.2588 2.75469 12.5884 3.08312 12.9168C3.4113 13.2455 3.74084 13.4478 4.12908 13.5987C4.50488 13.7448 4.93422 13.8444 5.5629 13.8732C6.19294 13.9019 6.39413 13.9089 7.99814 13.9089C9.60239 13.9089 9.8031 13.9019 10.4331 13.8732C11.0619 13.8444 11.4916 13.7448 11.8674 13.5987C12.2558 13.4478 12.5849 13.2455 12.913 12.9168C13.2416 12.5884 13.4434 12.2588 13.5948 11.8703C13.74 11.4945 13.8396 11.0651 13.8692 10.4364C13.8975 9.80616 13.9049 9.60528 13.9049 8.00072C13.9049 6.39615 13.8975 6.19478 13.8692 5.56457C13.8396 4.9356 13.74 4.50627 13.5948 4.13061C13.4434 3.74202 13.2416 3.41239 12.913 3.084C12.5845 2.75535 12.2559 2.55349 11.8671 2.40271C11.4905 2.2566 11.0611 2.15703 10.4323 2.12822C9.80223 2.09955 9.60166 2.09253 7.99703 2.09253H7.99876ZM7.46888 3.15723C7.62615 3.15699 7.80162 3.15723 7.99876 3.15723C9.57581 3.15723 9.76273 3.1629 10.3855 3.19121C10.9614 3.21755 11.274 3.3138 11.4822 3.39467C11.7578 3.50176 11.9543 3.62977 12.1609 3.83655C12.3677 4.04334 12.4956 4.24028 12.6029 4.51599C12.6838 4.72401 12.7801 5.03665 12.8063 5.6127C12.8347 6.23552 12.8408 6.42262 12.8408 7.99936C12.8408 9.57611 12.8347 9.7632 12.8063 10.386C12.78 10.9621 12.6838 11.2747 12.6029 11.4827C12.4959 11.7584 12.3677 11.9548 12.1609 12.1614C11.9542 12.3682 11.7579 12.4962 11.4822 12.6033C11.2742 12.6846 10.9614 12.7806 10.3855 12.8069C9.76286 12.8352 9.57581 12.8414 7.99876 12.8414C6.42157 12.8414 6.23465 12.8352 5.612 12.8069C5.03611 12.7803 4.72355 12.6841 4.51522 12.6032C4.23958 12.4961 4.04269 12.3681 3.83596 12.1613C3.62923 11.9545 3.50126 11.7581 3.39395 11.4822C3.31311 11.2742 3.21676 10.9616 3.19055 10.3855C3.16224 9.76271 3.15658 9.57562 3.15658 7.99789C3.15658 6.42015 3.16224 6.23405 3.19055 5.61122C3.21688 5.03518 3.31311 4.72253 3.39395 4.51427C3.50101 4.23856 3.62923 4.04162 3.83596 3.83483C4.04269 3.62804 4.23958 3.50003 4.51522 3.3927C4.72343 3.31146 5.03611 3.21545 5.612 3.18899C6.15688 3.16437 6.36804 3.15699 7.46888 3.15576V3.15723ZM11.1516 4.13824C11.0114 4.13824 10.8744 4.17983 10.7578 4.25774C10.6413 4.33566 10.5504 4.4464 10.4968 4.57596C10.4431 4.70553 10.4291 4.84809 10.4565 4.98563C10.4839 5.12316 10.5514 5.24949 10.6505 5.34864C10.7497 5.44778 10.876 5.51528 11.0135 5.54261C11.151 5.56994 11.2935 5.55587 11.4231 5.50217C11.5526 5.44847 11.6632 5.35756 11.7411 5.24093C11.819 5.12431 11.8605 4.98721 11.8604 4.84698C11.8604 4.45556 11.543 4.13799 11.1516 4.13799V4.13824ZM7.99876 4.96662C6.32362 4.96662 4.96548 6.32513 4.96548 8.00072C4.96548 9.6763 6.32362 11.0342 7.99876 11.0342C9.67389 11.0342 11.0317 9.6763 11.0317 8.00072C11.0317 6.32513 9.67377 4.96662 7.99863 4.96662H7.99876ZM7.99876 6.03132C9.08606 6.03132 9.96762 6.913 9.96762 8.00072C9.96762 9.08832 9.08606 9.97011 7.99876 9.97011C6.91133 9.97011 6.02989 9.08832 6.02989 8.00072C6.02989 6.913 6.91133 6.03132 7.99876 6.03132Z" fill="white" />
                            <defs>
                                <radialGradient id="paint0_radial_4029_327" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.25002 17.2323) rotate(-90) scale(15.8572 14.7484)">
                                    <stop stop-color="#FFDD55" />
                                    <stop offset="0.1" stop-color="#FFDD55" />
                                    <stop offset="0.5" stop-color="#FF543E" />
                                    <stop offset="1" stop-color="#C837AB" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_4029_327" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.68008 1.15261) rotate(78.6806) scale(7.08823 29.218)">
                                    <stop stop-color="#3771C8" />
                                    <stop offset="0.128" stop-color="#3771C8" />
                                    <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>

                    </div>
                    <div className='google'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4029_331)">
                                <path d="M3.54594 9.66892L2.989 11.748L0.953406 11.7911C0.345063 10.6628 0 9.3718 0 7.99992C0 6.67333 0.322625 5.42233 0.8945 4.3208H0.894938L2.70719 4.65305L3.50106 6.45443C3.33491 6.93883 3.24434 7.45883 3.24434 7.99992C3.24441 8.58717 3.35078 9.14983 3.54594 9.66892Z" fill="#FBBB00" />
                                <path d="M15.8601 6.50562C15.952 6.98955 15.9999 7.48933 15.9999 8.00012C15.9999 8.57287 15.9397 9.13155 15.825 9.67046C15.4355 11.5043 14.4179 13.1056 13.0083 14.2388L13.0078 14.2384L10.7252 14.1219L10.4022 12.1052C11.3375 11.5566 12.0685 10.6981 12.4536 9.67046H8.17578V6.50562H12.516H15.8601Z" fill="#518EF8" />
                                <path d="M13.0081 14.2382L13.0086 14.2386C11.6376 15.3406 9.89602 15.9999 8.00021 15.9999C4.95361 15.9999 2.30483 14.2971 0.953613 11.7911L3.54614 9.66895C4.22174 11.472 5.96108 12.7555 8.00021 12.7555C8.87668 12.7555 9.6978 12.5186 10.4024 12.105L13.0081 14.2382Z" fill="#28B446" />
                                <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z" fill="#F14336" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4029_331">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>
            {footerLinks.map((footerLink) => (
        <FooterLink key={footerLink.id} main={footerLink.main} menus={footerLink.menus} />
      ))}
            

        </div>
    )
}

export default Footer