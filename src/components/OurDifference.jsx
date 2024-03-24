import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const OurDifference = () => {


    const differenceData = [
        {
            differenceLogo: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 21C0 15.4305 2.21249 10.089 6.15076 6.15076C10.089 2.21249 15.4305 0 21 0C26.5695 0 31.911 2.21249 35.8492 6.15076C39.7875 10.089 42 15.4305 42 21C42 26.5695 39.7875 31.911 35.8492 35.8492C31.911 39.7875 26.5695 42 21 42C15.4305 42 10.089 39.7875 6.15076 35.8492C2.21249 31.911 0 26.5695 0 21ZM19.6875 7.30009C19.6875 5.07463 17.5467 3.72982 16.167 5.47596C15.6663 6.10965 15.1858 6.84965 14.7341 7.6965C14.1101 8.86602 14.8584 10.2479 16.1712 10.4315C16.3918 10.4623 16.6141 10.4911 16.8381 10.5179C18.3885 10.7029 19.6875 9.4416 19.6875 7.88021V7.30009ZM9.83789 8.82148C10.565 9.10497 11.3629 8.70954 11.6758 7.99458C11.9088 7.46235 12.1563 6.95056 12.4163 6.46012C12.7906 5.75224 12.0756 4.91375 11.3934 5.33303C10.7214 5.74602 10.0763 6.20197 9.46231 6.69814C8.7114 7.30495 8.89536 8.45179 9.79413 8.80436C9.8087 8.81008 9.82329 8.81578 9.83789 8.82148ZM9.2085 19.6875C9.20996 19.6875 9.21116 19.6863 9.21121 19.6849C9.27692 17.736 9.48923 15.854 9.83061 14.0768C10.0782 12.7878 9.36535 11.4891 8.16018 10.9689C7.03923 10.4851 5.68978 10.7591 5.07909 11.8162C4.65612 12.5485 4.28519 13.3079 3.96842 14.0889C2.79574 16.9799 5.32297 19.6875 8.44284 19.6875H9.2085ZM16.2707 13.0934C14.3701 12.8528 12.4774 13.9645 12.1888 15.8584C12.1842 15.8882 12.1797 15.9181 12.1753 15.948C11.8714 17.9803 13.5382 19.6875 15.5931 19.6875H16.4736C18.2486 19.6875 19.6875 18.2486 19.6875 16.4736C19.6875 14.7398 18.3092 13.3345 16.5873 13.1321C16.4815 13.1197 16.376 13.1068 16.2707 13.0934ZM25.4123 13.1295C23.6899 13.3307 22.3125 14.7365 22.3125 16.4705C22.3125 18.2472 23.7528 19.6875 25.5295 19.6875H26.4058C28.4601 19.6875 30.1266 17.9812 29.8237 15.9493C29.8193 15.9198 29.8148 15.8903 29.8104 15.8608C29.5224 13.9658 27.6285 12.8524 25.7267 13.0914C25.6222 13.1045 25.5174 13.1173 25.4123 13.1295ZM15.6198 22.3125C13.5536 22.3125 11.8772 24.0323 12.1787 26.0764C12.1829 26.1054 12.1873 26.1343 12.1916 26.1633C12.4754 28.0514 14.3563 29.1545 16.2501 28.9117C16.361 28.8975 16.472 28.8838 16.583 28.8706C18.3062 28.6661 19.6875 27.2599 19.6875 25.5246C19.6875 23.7506 18.2494 22.3125 16.4754 22.3125H15.6198ZM25.5264 22.3125C23.7514 22.3125 22.3125 23.7514 22.3125 25.5264C22.3125 27.2602 23.6908 28.6655 25.4127 28.8679C25.5219 28.8807 25.6309 28.8941 25.7396 28.9079C27.6376 29.1487 29.5261 28.0444 29.8103 26.1524C29.8144 26.1251 29.8185 26.0978 29.8225 26.0704C30.1236 24.0301 28.451 22.3125 26.3886 22.3125H25.5264ZM16.1713 31.5695C14.8597 31.7521 14.1107 33.1352 14.7341 34.3035C15.1853 35.1494 15.6654 35.8884 16.1658 36.5214C17.5456 38.2667 19.6875 36.9226 19.6875 34.6978V34.118C19.6875 32.559 18.3905 31.2996 16.8424 31.4831C16.617 31.5098 16.3932 31.5387 16.1713 31.5695ZM11.3946 36.6667C12.0764 37.0854 12.7908 36.247 12.4163 35.5399C12.1497 35.0354 11.9019 34.5215 11.6733 33.999C11.3613 33.2861 10.5667 32.8907 9.8424 33.1752C9.82778 33.1809 9.81317 33.1867 9.79856 33.1924C8.90014 33.5475 8.71487 34.6981 9.46657 35.3049C10.0796 35.7998 10.7237 36.2546 11.3946 36.6667ZM8.11793 31.0486C9.31788 30.5315 10.0851 29.2214 9.83597 27.9388C9.67306 27.1001 9.54087 26.2559 9.43963 25.4078C9.23461 23.6902 7.83337 22.3125 6.10357 22.3125C4.2484 22.3125 2.75774 23.8991 3.22994 25.6932C3.64192 27.2584 4.26051 28.7639 5.07072 30.1694C5.68437 31.2339 6.98954 31.5348 8.11793 31.0486ZM29.5838 35.5399C29.2096 36.2477 29.9245 37.0862 30.6067 36.667C31.276 36.2556 31.9187 35.8016 32.5305 35.3077C33.2823 34.7008 33.0972 33.5498 32.1987 33.1945C32.1847 33.1889 32.1706 33.1834 32.1565 33.1779C31.4328 32.8934 30.6386 33.2882 30.3266 34.0006C30.098 34.5225 29.8502 35.0359 29.5838 35.5399ZM25.1516 31.4798C23.6054 31.2933 22.3125 32.5521 22.3125 34.1096V34.6931C22.3125 36.9219 24.4564 38.2683 25.8372 36.5187C26.3364 35.8862 26.8155 35.148 27.2659 34.3035C27.8892 33.1353 27.1397 31.7542 25.8287 31.5686C25.6033 31.5367 25.3776 31.5071 25.1516 31.4798ZM32.164 27.9388C31.9149 29.2214 32.6821 30.5315 33.8821 31.0486C35.0105 31.5348 36.3156 31.2339 36.9293 30.1694C37.7395 28.7639 38.3581 27.2584 38.7701 25.6932C39.2423 23.8991 37.7516 22.3125 35.8964 22.3125C34.1666 22.3125 32.7654 23.6902 32.5604 25.4078C32.4591 26.2559 32.3269 27.1001 32.164 27.9388ZM35.8894 19.6875C37.7484 19.6875 39.2421 18.0976 38.7683 16.3001C38.3558 14.7355 37.7369 13.2306 36.9265 11.8257C36.3141 10.7642 35.0125 10.4639 33.8872 10.9492C32.6862 11.4671 31.9204 12.7816 32.1676 14.066C32.326 14.889 32.4568 15.7347 32.5584 16.5992C32.76 18.3154 34.1614 19.6875 35.8894 19.6875ZM29.5838 6.46012C29.8451 6.95335 30.094 7.46817 30.3286 8.00366C30.6401 8.7147 31.4332 9.10722 32.1556 8.8231C32.1737 8.81598 32.1918 8.80883 32.2099 8.80166C33.1027 8.44777 33.2863 7.30372 32.5392 6.70021C31.9242 6.20349 31.2782 5.7471 30.6051 5.33381C29.9274 4.91767 29.209 5.7587 29.5838 6.46012ZM25.8287 10.4305C27.1419 10.2476 27.8864 8.86825 27.2659 7.6965C26.8145 6.85009 26.3343 6.11069 25.8338 5.47749C24.4543 3.73199 22.3125 5.07656 22.3125 7.30137V7.87663C22.3125 9.43854 23.6119 10.7004 25.1629 10.5163C25.3866 10.4897 25.6085 10.4611 25.8287 10.4305Z" fill="#212016"/>
            </svg>
            `,
            differenceName: "Instant Scaling",
            differenceDescription: "Very little onboarding time as most of the stakeholders from the ecosystem are already identified and have an established relationship."
        },
        {
            differenceLogo: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 21C0 15.4305 2.21249 10.089 6.15076 6.15076C10.089 2.21249 15.4305 0 21 0C26.5695 0 31.911 2.21249 35.8492 6.15076C39.7875 10.089 42 15.4305 42 21C42 26.5695 39.7875 31.911 35.8492 35.8492C31.911 39.7875 26.5695 42 21 42C15.4305 42 10.089 39.7875 6.15076 35.8492C2.21249 31.911 0 26.5695 0 21ZM19.6875 7.30009C19.6875 5.07463 17.5467 3.72982 16.167 5.47596C15.6663 6.10965 15.1858 6.84965 14.7341 7.6965C14.1101 8.86602 14.8584 10.2479 16.1712 10.4315C16.3918 10.4623 16.6141 10.4911 16.8381 10.5179C18.3885 10.7029 19.6875 9.4416 19.6875 7.88021V7.30009ZM9.83789 8.82148C10.565 9.10497 11.3629 8.70954 11.6758 7.99458C11.9088 7.46235 12.1563 6.95056 12.4163 6.46012C12.7906 5.75224 12.0756 4.91375 11.3934 5.33303C10.7214 5.74602 10.0763 6.20197 9.46231 6.69814C8.7114 7.30495 8.89536 8.45179 9.79413 8.80436C9.8087 8.81008 9.82329 8.81578 9.83789 8.82148ZM9.2085 19.6875C9.20996 19.6875 9.21116 19.6863 9.21121 19.6849C9.27692 17.736 9.48923 15.854 9.83061 14.0768C10.0782 12.7878 9.36535 11.4891 8.16018 10.9689C7.03923 10.4851 5.68978 10.7591 5.07909 11.8162C4.65612 12.5485 4.28519 13.3079 3.96842 14.0889C2.79574 16.9799 5.32297 19.6875 8.44284 19.6875H9.2085ZM16.2707 13.0934C14.3701 12.8528 12.4774 13.9645 12.1888 15.8584C12.1842 15.8882 12.1797 15.9181 12.1753 15.948C11.8714 17.9803 13.5382 19.6875 15.5931 19.6875H16.4736C18.2486 19.6875 19.6875 18.2486 19.6875 16.4736C19.6875 14.7398 18.3092 13.3345 16.5873 13.1321C16.4815 13.1197 16.376 13.1068 16.2707 13.0934ZM25.4123 13.1295C23.6899 13.3307 22.3125 14.7365 22.3125 16.4705C22.3125 18.2472 23.7528 19.6875 25.5295 19.6875H26.4058C28.4601 19.6875 30.1266 17.9812 29.8237 15.9493C29.8193 15.9198 29.8148 15.8903 29.8104 15.8608C29.5224 13.9658 27.6285 12.8524 25.7267 13.0914C25.6222 13.1045 25.5174 13.1173 25.4123 13.1295ZM15.6198 22.3125C13.5536 22.3125 11.8772 24.0323 12.1787 26.0764C12.1829 26.1054 12.1873 26.1343 12.1916 26.1633C12.4754 28.0514 14.3563 29.1545 16.2501 28.9117C16.361 28.8975 16.472 28.8838 16.583 28.8706C18.3062 28.6661 19.6875 27.2599 19.6875 25.5246C19.6875 23.7506 18.2494 22.3125 16.4754 22.3125H15.6198ZM25.5264 22.3125C23.7514 22.3125 22.3125 23.7514 22.3125 25.5264C22.3125 27.2602 23.6908 28.6655 25.4127 28.8679C25.5219 28.8807 25.6309 28.8941 25.7396 28.9079C27.6376 29.1487 29.5261 28.0444 29.8103 26.1524C29.8144 26.1251 29.8185 26.0978 29.8225 26.0704C30.1236 24.0301 28.451 22.3125 26.3886 22.3125H25.5264ZM16.1713 31.5695C14.8597 31.7521 14.1107 33.1352 14.7341 34.3035C15.1853 35.1494 15.6654 35.8884 16.1658 36.5214C17.5456 38.2667 19.6875 36.9226 19.6875 34.6978V34.118C19.6875 32.559 18.3905 31.2996 16.8424 31.4831C16.617 31.5098 16.3932 31.5387 16.1713 31.5695ZM11.3946 36.6667C12.0764 37.0854 12.7908 36.247 12.4163 35.5399C12.1497 35.0354 11.9019 34.5215 11.6733 33.999C11.3613 33.2861 10.5667 32.8907 9.8424 33.1752C9.82778 33.1809 9.81317 33.1867 9.79856 33.1924C8.90014 33.5475 8.71487 34.6981 9.46657 35.3049C10.0796 35.7998 10.7237 36.2546 11.3946 36.6667ZM8.11793 31.0486C9.31788 30.5315 10.0851 29.2214 9.83597 27.9388C9.67306 27.1001 9.54087 26.2559 9.43963 25.4078C9.23461 23.6902 7.83337 22.3125 6.10357 22.3125C4.2484 22.3125 2.75774 23.8991 3.22994 25.6932C3.64192 27.2584 4.26051 28.7639 5.07072 30.1694C5.68437 31.2339 6.98954 31.5348 8.11793 31.0486ZM29.5838 35.5399C29.2096 36.2477 29.9245 37.0862 30.6067 36.667C31.276 36.2556 31.9187 35.8016 32.5305 35.3077C33.2823 34.7008 33.0972 33.5498 32.1987 33.1945C32.1847 33.1889 32.1706 33.1834 32.1565 33.1779C31.4328 32.8934 30.6386 33.2882 30.3266 34.0006C30.098 34.5225 29.8502 35.0359 29.5838 35.5399ZM25.1516 31.4798C23.6054 31.2933 22.3125 32.5521 22.3125 34.1096V34.6931C22.3125 36.9219 24.4564 38.2683 25.8372 36.5187C26.3364 35.8862 26.8155 35.148 27.2659 34.3035C27.8892 33.1353 27.1397 31.7542 25.8287 31.5686C25.6033 31.5367 25.3776 31.5071 25.1516 31.4798ZM32.164 27.9388C31.9149 29.2214 32.6821 30.5315 33.8821 31.0486C35.0105 31.5348 36.3156 31.2339 36.9293 30.1694C37.7395 28.7639 38.3581 27.2584 38.7701 25.6932C39.2423 23.8991 37.7516 22.3125 35.8964 22.3125C34.1666 22.3125 32.7654 23.6902 32.5604 25.4078C32.4591 26.2559 32.3269 27.1001 32.164 27.9388ZM35.8894 19.6875C37.7484 19.6875 39.2421 18.0976 38.7683 16.3001C38.3558 14.7355 37.7369 13.2306 36.9265 11.8257C36.3141 10.7642 35.0125 10.4639 33.8872 10.9492C32.6862 11.4671 31.9204 12.7816 32.1676 14.066C32.326 14.889 32.4568 15.7347 32.5584 16.5992C32.76 18.3154 34.1614 19.6875 35.8894 19.6875ZM29.5838 6.46012C29.8451 6.95335 30.094 7.46817 30.3286 8.00366C30.6401 8.7147 31.4332 9.10722 32.1556 8.8231C32.1737 8.81598 32.1918 8.80883 32.2099 8.80166C33.1027 8.44777 33.2863 7.30372 32.5392 6.70021C31.9242 6.20349 31.2782 5.7471 30.6051 5.33381C29.9274 4.91767 29.209 5.7587 29.5838 6.46012ZM25.8287 10.4305C27.1419 10.2476 27.8864 8.86825 27.2659 7.6965C26.8145 6.85009 26.3343 6.11069 25.8338 5.47749C24.4543 3.73199 22.3125 5.07656 22.3125 7.30137V7.87663C22.3125 9.43854 23.6119 10.7004 25.1629 10.5163C25.3866 10.4897 25.6085 10.4611 25.8287 10.4305Z" fill="#212016"/>
            </svg>`,
            differenceName: "Superior results through network effects",
            differenceDescription: "The entire network's industry connections/expertise work for the success of our customers rather than one individual."
        },
        {
            differenceLogo: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 21C0 15.4305 2.21249 10.089 6.15076 6.15076C10.089 2.21249 15.4305 0 21 0C26.5695 0 31.911 2.21249 35.8492 6.15076C39.7875 10.089 42 15.4305 42 21C42 26.5695 39.7875 31.911 35.8492 35.8492C31.911 39.7875 26.5695 42 21 42C15.4305 42 10.089 39.7875 6.15076 35.8492C2.21249 31.911 0 26.5695 0 21ZM19.6875 7.30009C19.6875 5.07463 17.5467 3.72982 16.167 5.47596C15.6663 6.10965 15.1858 6.84965 14.7341 7.6965C14.1101 8.86602 14.8584 10.2479 16.1712 10.4315C16.3918 10.4623 16.6141 10.4911 16.8381 10.5179C18.3885 10.7029 19.6875 9.4416 19.6875 7.88021V7.30009ZM9.83789 8.82148C10.565 9.10497 11.3629 8.70954 11.6758 7.99458C11.9088 7.46235 12.1563 6.95056 12.4163 6.46012C12.7906 5.75224 12.0756 4.91375 11.3934 5.33303C10.7214 5.74602 10.0763 6.20197 9.46231 6.69814C8.7114 7.30495 8.89536 8.45179 9.79413 8.80436C9.8087 8.81008 9.82329 8.81578 9.83789 8.82148ZM9.2085 19.6875C9.20996 19.6875 9.21116 19.6863 9.21121 19.6849C9.27692 17.736 9.48923 15.854 9.83061 14.0768C10.0782 12.7878 9.36535 11.4891 8.16018 10.9689C7.03923 10.4851 5.68978 10.7591 5.07909 11.8162C4.65612 12.5485 4.28519 13.3079 3.96842 14.0889C2.79574 16.9799 5.32297 19.6875 8.44284 19.6875H9.2085ZM16.2707 13.0934C14.3701 12.8528 12.4774 13.9645 12.1888 15.8584C12.1842 15.8882 12.1797 15.9181 12.1753 15.948C11.8714 17.9803 13.5382 19.6875 15.5931 19.6875H16.4736C18.2486 19.6875 19.6875 18.2486 19.6875 16.4736C19.6875 14.7398 18.3092 13.3345 16.5873 13.1321C16.4815 13.1197 16.376 13.1068 16.2707 13.0934ZM25.4123 13.1295C23.6899 13.3307 22.3125 14.7365 22.3125 16.4705C22.3125 18.2472 23.7528 19.6875 25.5295 19.6875H26.4058C28.4601 19.6875 30.1266 17.9812 29.8237 15.9493C29.8193 15.9198 29.8148 15.8903 29.8104 15.8608C29.5224 13.9658 27.6285 12.8524 25.7267 13.0914C25.6222 13.1045 25.5174 13.1173 25.4123 13.1295ZM15.6198 22.3125C13.5536 22.3125 11.8772 24.0323 12.1787 26.0764C12.1829 26.1054 12.1873 26.1343 12.1916 26.1633C12.4754 28.0514 14.3563 29.1545 16.2501 28.9117C16.361 28.8975 16.472 28.8838 16.583 28.8706C18.3062 28.6661 19.6875 27.2599 19.6875 25.5246C19.6875 23.7506 18.2494 22.3125 16.4754 22.3125H15.6198ZM25.5264 22.3125C23.7514 22.3125 22.3125 23.7514 22.3125 25.5264C22.3125 27.2602 23.6908 28.6655 25.4127 28.8679C25.5219 28.8807 25.6309 28.8941 25.7396 28.9079C27.6376 29.1487 29.5261 28.0444 29.8103 26.1524C29.8144 26.1251 29.8185 26.0978 29.8225 26.0704C30.1236 24.0301 28.451 22.3125 26.3886 22.3125H25.5264ZM16.1713 31.5695C14.8597 31.7521 14.1107 33.1352 14.7341 34.3035C15.1853 35.1494 15.6654 35.8884 16.1658 36.5214C17.5456 38.2667 19.6875 36.9226 19.6875 34.6978V34.118C19.6875 32.559 18.3905 31.2996 16.8424 31.4831C16.617 31.5098 16.3932 31.5387 16.1713 31.5695ZM11.3946 36.6667C12.0764 37.0854 12.7908 36.247 12.4163 35.5399C12.1497 35.0354 11.9019 34.5215 11.6733 33.999C11.3613 33.2861 10.5667 32.8907 9.8424 33.1752C9.82778 33.1809 9.81317 33.1867 9.79856 33.1924C8.90014 33.5475 8.71487 34.6981 9.46657 35.3049C10.0796 35.7998 10.7237 36.2546 11.3946 36.6667ZM8.11793 31.0486C9.31788 30.5315 10.0851 29.2214 9.83597 27.9388C9.67306 27.1001 9.54087 26.2559 9.43963 25.4078C9.23461 23.6902 7.83337 22.3125 6.10357 22.3125C4.2484 22.3125 2.75774 23.8991 3.22994 25.6932C3.64192 27.2584 4.26051 28.7639 5.07072 30.1694C5.68437 31.2339 6.98954 31.5348 8.11793 31.0486ZM29.5838 35.5399C29.2096 36.2477 29.9245 37.0862 30.6067 36.667C31.276 36.2556 31.9187 35.8016 32.5305 35.3077C33.2823 34.7008 33.0972 33.5498 32.1987 33.1945C32.1847 33.1889 32.1706 33.1834 32.1565 33.1779C31.4328 32.8934 30.6386 33.2882 30.3266 34.0006C30.098 34.5225 29.8502 35.0359 29.5838 35.5399ZM25.1516 31.4798C23.6054 31.2933 22.3125 32.5521 22.3125 34.1096V34.6931C22.3125 36.9219 24.4564 38.2683 25.8372 36.5187C26.3364 35.8862 26.8155 35.148 27.2659 34.3035C27.8892 33.1353 27.1397 31.7542 25.8287 31.5686C25.6033 31.5367 25.3776 31.5071 25.1516 31.4798ZM32.164 27.9388C31.9149 29.2214 32.6821 30.5315 33.8821 31.0486C35.0105 31.5348 36.3156 31.2339 36.9293 30.1694C37.7395 28.7639 38.3581 27.2584 38.7701 25.6932C39.2423 23.8991 37.7516 22.3125 35.8964 22.3125C34.1666 22.3125 32.7654 23.6902 32.5604 25.4078C32.4591 26.2559 32.3269 27.1001 32.164 27.9388ZM35.8894 19.6875C37.7484 19.6875 39.2421 18.0976 38.7683 16.3001C38.3558 14.7355 37.7369 13.2306 36.9265 11.8257C36.3141 10.7642 35.0125 10.4639 33.8872 10.9492C32.6862 11.4671 31.9204 12.7816 32.1676 14.066C32.326 14.889 32.4568 15.7347 32.5584 16.5992C32.76 18.3154 34.1614 19.6875 35.8894 19.6875ZM29.5838 6.46012C29.8451 6.95335 30.094 7.46817 30.3286 8.00366C30.6401 8.7147 31.4332 9.10722 32.1556 8.8231C32.1737 8.81598 32.1918 8.80883 32.2099 8.80166C33.1027 8.44777 33.2863 7.30372 32.5392 6.70021C31.9242 6.20349 31.2782 5.7471 30.6051 5.33381C29.9274 4.91767 29.209 5.7587 29.5838 6.46012ZM25.8287 10.4305C27.1419 10.2476 27.8864 8.86825 27.2659 7.6965C26.8145 6.85009 26.3343 6.11069 25.8338 5.47749C24.4543 3.73199 22.3125 5.07656 22.3125 7.30137V7.87663C22.3125 9.43854 23.6119 10.7004 25.1629 10.5163C25.3866 10.4897 25.6085 10.4611 25.8287 10.4305Z" fill="#212016"/>
            </svg>`,
            differenceName: "Riskless option",
            differenceDescription: "Outcome-based engagement model with more than 50% of the payment upon realization of the committed results."
        },
        {
            differenceLogo: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 21C0 15.4305 2.21249 10.089 6.15076 6.15076C10.089 2.21249 15.4305 0 21 0C26.5695 0 31.911 2.21249 35.8492 6.15076C39.7875 10.089 42 15.4305 42 21C42 26.5695 39.7875 31.911 35.8492 35.8492C31.911 39.7875 26.5695 42 21 42C15.4305 42 10.089 39.7875 6.15076 35.8492C2.21249 31.911 0 26.5695 0 21ZM19.6875 7.30009C19.6875 5.07463 17.5467 3.72982 16.167 5.47596C15.6663 6.10965 15.1858 6.84965 14.7341 7.6965C14.1101 8.86602 14.8584 10.2479 16.1712 10.4315C16.3918 10.4623 16.6141 10.4911 16.8381 10.5179C18.3885 10.7029 19.6875 9.4416 19.6875 7.88021V7.30009ZM9.83789 8.82148C10.565 9.10497 11.3629 8.70954 11.6758 7.99458C11.9088 7.46235 12.1563 6.95056 12.4163 6.46012C12.7906 5.75224 12.0756 4.91375 11.3934 5.33303C10.7214 5.74602 10.0763 6.20197 9.46231 6.69814C8.7114 7.30495 8.89536 8.45179 9.79413 8.80436C9.8087 8.81008 9.82329 8.81578 9.83789 8.82148ZM9.2085 19.6875C9.20996 19.6875 9.21116 19.6863 9.21121 19.6849C9.27692 17.736 9.48923 15.854 9.83061 14.0768C10.0782 12.7878 9.36535 11.4891 8.16018 10.9689C7.03923 10.4851 5.68978 10.7591 5.07909 11.8162C4.65612 12.5485 4.28519 13.3079 3.96842 14.0889C2.79574 16.9799 5.32297 19.6875 8.44284 19.6875H9.2085ZM16.2707 13.0934C14.3701 12.8528 12.4774 13.9645 12.1888 15.8584C12.1842 15.8882 12.1797 15.9181 12.1753 15.948C11.8714 17.9803 13.5382 19.6875 15.5931 19.6875H16.4736C18.2486 19.6875 19.6875 18.2486 19.6875 16.4736C19.6875 14.7398 18.3092 13.3345 16.5873 13.1321C16.4815 13.1197 16.376 13.1068 16.2707 13.0934ZM25.4123 13.1295C23.6899 13.3307 22.3125 14.7365 22.3125 16.4705C22.3125 18.2472 23.7528 19.6875 25.5295 19.6875H26.4058C28.4601 19.6875 30.1266 17.9812 29.8237 15.9493C29.8193 15.9198 29.8148 15.8903 29.8104 15.8608C29.5224 13.9658 27.6285 12.8524 25.7267 13.0914C25.6222 13.1045 25.5174 13.1173 25.4123 13.1295ZM15.6198 22.3125C13.5536 22.3125 11.8772 24.0323 12.1787 26.0764C12.1829 26.1054 12.1873 26.1343 12.1916 26.1633C12.4754 28.0514 14.3563 29.1545 16.2501 28.9117C16.361 28.8975 16.472 28.8838 16.583 28.8706C18.3062 28.6661 19.6875 27.2599 19.6875 25.5246C19.6875 23.7506 18.2494 22.3125 16.4754 22.3125H15.6198ZM25.5264 22.3125C23.7514 22.3125 22.3125 23.7514 22.3125 25.5264C22.3125 27.2602 23.6908 28.6655 25.4127 28.8679C25.5219 28.8807 25.6309 28.8941 25.7396 28.9079C27.6376 29.1487 29.5261 28.0444 29.8103 26.1524C29.8144 26.1251 29.8185 26.0978 29.8225 26.0704C30.1236 24.0301 28.451 22.3125 26.3886 22.3125H25.5264ZM16.1713 31.5695C14.8597 31.7521 14.1107 33.1352 14.7341 34.3035C15.1853 35.1494 15.6654 35.8884 16.1658 36.5214C17.5456 38.2667 19.6875 36.9226 19.6875 34.6978V34.118C19.6875 32.559 18.3905 31.2996 16.8424 31.4831C16.617 31.5098 16.3932 31.5387 16.1713 31.5695ZM11.3946 36.6667C12.0764 37.0854 12.7908 36.247 12.4163 35.5399C12.1497 35.0354 11.9019 34.5215 11.6733 33.999C11.3613 33.2861 10.5667 32.8907 9.8424 33.1752C9.82778 33.1809 9.81317 33.1867 9.79856 33.1924C8.90014 33.5475 8.71487 34.6981 9.46657 35.3049C10.0796 35.7998 10.7237 36.2546 11.3946 36.6667ZM8.11793 31.0486C9.31788 30.5315 10.0851 29.2214 9.83597 27.9388C9.67306 27.1001 9.54087 26.2559 9.43963 25.4078C9.23461 23.6902 7.83337 22.3125 6.10357 22.3125C4.2484 22.3125 2.75774 23.8991 3.22994 25.6932C3.64192 27.2584 4.26051 28.7639 5.07072 30.1694C5.68437 31.2339 6.98954 31.5348 8.11793 31.0486ZM29.5838 35.5399C29.2096 36.2477 29.9245 37.0862 30.6067 36.667C31.276 36.2556 31.9187 35.8016 32.5305 35.3077C33.2823 34.7008 33.0972 33.5498 32.1987 33.1945C32.1847 33.1889 32.1706 33.1834 32.1565 33.1779C31.4328 32.8934 30.6386 33.2882 30.3266 34.0006C30.098 34.5225 29.8502 35.0359 29.5838 35.5399ZM25.1516 31.4798C23.6054 31.2933 22.3125 32.5521 22.3125 34.1096V34.6931C22.3125 36.9219 24.4564 38.2683 25.8372 36.5187C26.3364 35.8862 26.8155 35.148 27.2659 34.3035C27.8892 33.1353 27.1397 31.7542 25.8287 31.5686C25.6033 31.5367 25.3776 31.5071 25.1516 31.4798ZM32.164 27.9388C31.9149 29.2214 32.6821 30.5315 33.8821 31.0486C35.0105 31.5348 36.3156 31.2339 36.9293 30.1694C37.7395 28.7639 38.3581 27.2584 38.7701 25.6932C39.2423 23.8991 37.7516 22.3125 35.8964 22.3125C34.1666 22.3125 32.7654 23.6902 32.5604 25.4078C32.4591 26.2559 32.3269 27.1001 32.164 27.9388ZM35.8894 19.6875C37.7484 19.6875 39.2421 18.0976 38.7683 16.3001C38.3558 14.7355 37.7369 13.2306 36.9265 11.8257C36.3141 10.7642 35.0125 10.4639 33.8872 10.9492C32.6862 11.4671 31.9204 12.7816 32.1676 14.066C32.326 14.889 32.4568 15.7347 32.5584 16.5992C32.76 18.3154 34.1614 19.6875 35.8894 19.6875ZM29.5838 6.46012C29.8451 6.95335 30.094 7.46817 30.3286 8.00366C30.6401 8.7147 31.4332 9.10722 32.1556 8.8231C32.1737 8.81598 32.1918 8.80883 32.2099 8.80166C33.1027 8.44777 33.2863 7.30372 32.5392 6.70021C31.9242 6.20349 31.2782 5.7471 30.6051 5.33381C29.9274 4.91767 29.209 5.7587 29.5838 6.46012ZM25.8287 10.4305C27.1419 10.2476 27.8864 8.86825 27.2659 7.6965C26.8145 6.85009 26.3343 6.11069 25.8338 5.47749C24.4543 3.73199 22.3125 5.07656 22.3125 7.30137V7.87663C22.3125 9.43854 23.6119 10.7004 25.1629 10.5163C25.3866 10.4897 25.6085 10.4611 25.8287 10.4305Z" fill="#212016"/>
            </svg>`,
            differenceName: "No Personal Dependency",
            differenceDescription: "Don't have to worry about attrition/loss of contacts due to attrition."
        },
        {
            differenceLogo: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 21C0 15.4305 2.21249 10.089 6.15076 6.15076C10.089 2.21249 15.4305 0 21 0C26.5695 0 31.911 2.21249 35.8492 6.15076C39.7875 10.089 42 15.4305 42 21C42 26.5695 39.7875 31.911 35.8492 35.8492C31.911 39.7875 26.5695 42 21 42C15.4305 42 10.089 39.7875 6.15076 35.8492C2.21249 31.911 0 26.5695 0 21ZM19.6875 7.30009C19.6875 5.07463 17.5467 3.72982 16.167 5.47596C15.6663 6.10965 15.1858 6.84965 14.7341 7.6965C14.1101 8.86602 14.8584 10.2479 16.1712 10.4315C16.3918 10.4623 16.6141 10.4911 16.8381 10.5179C18.3885 10.7029 19.6875 9.4416 19.6875 7.88021V7.30009ZM9.83789 8.82148C10.565 9.10497 11.3629 8.70954 11.6758 7.99458C11.9088 7.46235 12.1563 6.95056 12.4163 6.46012C12.7906 5.75224 12.0756 4.91375 11.3934 5.33303C10.7214 5.74602 10.0763 6.20197 9.46231 6.69814C8.7114 7.30495 8.89536 8.45179 9.79413 8.80436C9.8087 8.81008 9.82329 8.81578 9.83789 8.82148ZM9.2085 19.6875C9.20996 19.6875 9.21116 19.6863 9.21121 19.6849C9.27692 17.736 9.48923 15.854 9.83061 14.0768C10.0782 12.7878 9.36535 11.4891 8.16018 10.9689C7.03923 10.4851 5.68978 10.7591 5.07909 11.8162C4.65612 12.5485 4.28519 13.3079 3.96842 14.0889C2.79574 16.9799 5.32297 19.6875 8.44284 19.6875H9.2085ZM16.2707 13.0934C14.3701 12.8528 12.4774 13.9645 12.1888 15.8584C12.1842 15.8882 12.1797 15.9181 12.1753 15.948C11.8714 17.9803 13.5382 19.6875 15.5931 19.6875H16.4736C18.2486 19.6875 19.6875 18.2486 19.6875 16.4736C19.6875 14.7398 18.3092 13.3345 16.5873 13.1321C16.4815 13.1197 16.376 13.1068 16.2707 13.0934ZM25.4123 13.1295C23.6899 13.3307 22.3125 14.7365 22.3125 16.4705C22.3125 18.2472 23.7528 19.6875 25.5295 19.6875H26.4058C28.4601 19.6875 30.1266 17.9812 29.8237 15.9493C29.8193 15.9198 29.8148 15.8903 29.8104 15.8608C29.5224 13.9658 27.6285 12.8524 25.7267 13.0914C25.6222 13.1045 25.5174 13.1173 25.4123 13.1295ZM15.6198 22.3125C13.5536 22.3125 11.8772 24.0323 12.1787 26.0764C12.1829 26.1054 12.1873 26.1343 12.1916 26.1633C12.4754 28.0514 14.3563 29.1545 16.2501 28.9117C16.361 28.8975 16.472 28.8838 16.583 28.8706C18.3062 28.6661 19.6875 27.2599 19.6875 25.5246C19.6875 23.7506 18.2494 22.3125 16.4754 22.3125H15.6198ZM25.5264 22.3125C23.7514 22.3125 22.3125 23.7514 22.3125 25.5264C22.3125 27.2602 23.6908 28.6655 25.4127 28.8679C25.5219 28.8807 25.6309 28.8941 25.7396 28.9079C27.6376 29.1487 29.5261 28.0444 29.8103 26.1524C29.8144 26.1251 29.8185 26.0978 29.8225 26.0704C30.1236 24.0301 28.451 22.3125 26.3886 22.3125H25.5264ZM16.1713 31.5695C14.8597 31.7521 14.1107 33.1352 14.7341 34.3035C15.1853 35.1494 15.6654 35.8884 16.1658 36.5214C17.5456 38.2667 19.6875 36.9226 19.6875 34.6978V34.118C19.6875 32.559 18.3905 31.2996 16.8424 31.4831C16.617 31.5098 16.3932 31.5387 16.1713 31.5695ZM11.3946 36.6667C12.0764 37.0854 12.7908 36.247 12.4163 35.5399C12.1497 35.0354 11.9019 34.5215 11.6733 33.999C11.3613 33.2861 10.5667 32.8907 9.8424 33.1752C9.82778 33.1809 9.81317 33.1867 9.79856 33.1924C8.90014 33.5475 8.71487 34.6981 9.46657 35.3049C10.0796 35.7998 10.7237 36.2546 11.3946 36.6667ZM8.11793 31.0486C9.31788 30.5315 10.0851 29.2214 9.83597 27.9388C9.67306 27.1001 9.54087 26.2559 9.43963 25.4078C9.23461 23.6902 7.83337 22.3125 6.10357 22.3125C4.2484 22.3125 2.75774 23.8991 3.22994 25.6932C3.64192 27.2584 4.26051 28.7639 5.07072 30.1694C5.68437 31.2339 6.98954 31.5348 8.11793 31.0486ZM29.5838 35.5399C29.2096 36.2477 29.9245 37.0862 30.6067 36.667C31.276 36.2556 31.9187 35.8016 32.5305 35.3077C33.2823 34.7008 33.0972 33.5498 32.1987 33.1945C32.1847 33.1889 32.1706 33.1834 32.1565 33.1779C31.4328 32.8934 30.6386 33.2882 30.3266 34.0006C30.098 34.5225 29.8502 35.0359 29.5838 35.5399ZM25.1516 31.4798C23.6054 31.2933 22.3125 32.5521 22.3125 34.1096V34.6931C22.3125 36.9219 24.4564 38.2683 25.8372 36.5187C26.3364 35.8862 26.8155 35.148 27.2659 34.3035C27.8892 33.1353 27.1397 31.7542 25.8287 31.5686C25.6033 31.5367 25.3776 31.5071 25.1516 31.4798ZM32.164 27.9388C31.9149 29.2214 32.6821 30.5315 33.8821 31.0486C35.0105 31.5348 36.3156 31.2339 36.9293 30.1694C37.7395 28.7639 38.3581 27.2584 38.7701 25.6932C39.2423 23.8991 37.7516 22.3125 35.8964 22.3125C34.1666 22.3125 32.7654 23.6902 32.5604 25.4078C32.4591 26.2559 32.3269 27.1001 32.164 27.9388ZM35.8894 19.6875C37.7484 19.6875 39.2421 18.0976 38.7683 16.3001C38.3558 14.7355 37.7369 13.2306 36.9265 11.8257C36.3141 10.7642 35.0125 10.4639 33.8872 10.9492C32.6862 11.4671 31.9204 12.7816 32.1676 14.066C32.326 14.889 32.4568 15.7347 32.5584 16.5992C32.76 18.3154 34.1614 19.6875 35.8894 19.6875ZM29.5838 6.46012C29.8451 6.95335 30.094 7.46817 30.3286 8.00366C30.6401 8.7147 31.4332 9.10722 32.1556 8.8231C32.1737 8.81598 32.1918 8.80883 32.2099 8.80166C33.1027 8.44777 33.2863 7.30372 32.5392 6.70021C31.9242 6.20349 31.2782 5.7471 30.6051 5.33381C29.9274 4.91767 29.209 5.7587 29.5838 6.46012ZM25.8287 10.4305C27.1419 10.2476 27.8864 8.86825 27.2659 7.6965C26.8145 6.85009 26.3343 6.11069 25.8338 5.47749C24.4543 3.73199 22.3125 5.07656 22.3125 7.30137V7.87663C22.3125 9.43854 23.6119 10.7004 25.1629 10.5163C25.3866 10.4897 25.6085 10.4611 25.8287 10.4305Z" fill="#212016"/>
            </svg>`,
            differenceName: "Overall cost-effective",
            differenceDescription: "Cheaper than hiring a full-time ecosystem manager in NA/Europe and not too much upfront."
        }
    ];
  

    return (
        <>
            <div className='h-screenflex'>
                <div className='flex flex-col  items-center text-4xl leading-loose tracking-wide font-semibold pt-8'>
                    Our Difference
                </div>
                <div className='w-3/4 mx-auto'>
                   <div className='mt-20'>
                  
                   <Swiper
                        modules={[Navigation, A11y]}
                        navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        spaceBetween={50}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {differenceData.map((item, index) => (
                            <SwiperSlide key={index} className='shadow-lg p-14 w-full flex flex-col items-center rounded-xl mb-10 mx-10'>
                                {/* <img 
                                src={item.differenceLogo} 
                                alt="differenceLogo" 
                                className="mb-4" /> */}
                                <div dangerouslySetInnerHTML={{ __html: item.differenceLogo }} />
                                <div className="font-medium text-2xl text-blue-400 my-3">{item.differenceName}</div>
                                <div className='text-lg leading-10'>{item.differenceDescription}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                   
                   </div>
                </div>
            </div>
        </>
    )
}

export default OurDifference