import Icon from "@ant-design/icons"
import type {CustomIconComponentProps} from "@ant-design/icons/lib/components/Icon"

// Yakit-icon
const YakitMenuRightSvg = () => (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M6 3.33332L10.6667 7.99999L6 12.6667'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)
export const YakitMenuRightSvgIcon = (props: Partial<CustomIconComponentProps>) => {
    return <Icon component={YakitMenuRightSvg} {...props} />
}

const YakitThemeLoadingSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M156.382 20.0155H177.31C177.769 20.0162 178.22 20.1344 178.621 20.3589C179.021 20.5835 179.358 20.9071 179.599 21.2988C179.84 21.6906 179.977 22.1375 179.997 22.5973C180.018 23.0572 179.921 23.5146 179.715 23.9262L102.67 178.509C102.446 178.957 102.102 179.334 101.677 179.597C101.252 179.861 100.762 180 100.263 180C99.763 180 99.2732 179.861 98.8481 179.597C98.4229 179.334 98.0791 178.957 97.8551 178.509L88.8173 160.377C88.6369 160.008 88.543 159.602 88.543 159.191C88.543 158.78 88.6369 158.374 88.8173 158.005L153.977 21.5498C154.193 21.0929 154.534 20.7065 154.959 20.4351C155.385 20.1636 155.878 20.0182 156.382 20.0155ZM64.5106 69.3718L42.0474 21.5498C41.829 21.0879 41.485 20.6974 41.0549 20.4232C40.6249 20.149 40.1263 20.0023 39.6167 20H22.6947C22.2354 19.9998 21.7837 20.1174 21.3825 20.3416C20.9813 20.5658 20.644 20.8892 20.4024 21.2811C20.1609 21.673 20.0233 22.1203 20.0027 22.5806C19.9821 23.0408 20.0791 23.4987 20.2846 23.9107L53.1297 88.9769C53.3554 89.4285 53.7027 89.8076 54.1324 90.0711C54.562 90.3347 55.0567 90.4721 55.5603 90.4678C56.0639 90.4635 56.5562 90.3176 56.9813 90.0468C57.4064 89.7759 57.7473 89.391 57.9653 88.9356L64.4694 75.3076L65.3654 73.4323C65.5409 73.0692 65.632 72.6709 65.632 72.2674C65.632 71.8638 65.5409 71.4655 65.3654 71.1024L64.5106 69.3718ZM136.555 20.0155H115.627C115.118 20.0169 114.62 20.1633 114.19 20.4377C113.761 20.7121 113.418 21.1031 113.201 21.5653L96.9488 56.3069L80.6293 21.5653C80.4114 21.1031 80.0674 20.7122 79.6373 20.4379C79.2071 20.1636 78.7083 20.0172 78.1986 20.0155H61.2508C60.7915 20.0153 60.3398 20.1329 59.9386 20.3571C59.5374 20.5813 59.2 20.9047 58.9585 21.2966C58.717 21.6885 58.5794 22.1358 58.5588 22.596C58.5382 23.0563 58.6352 23.5142 58.8407 23.9262L86.4794 78.6862L68.3214 117.493C68.1408 117.863 68.047 118.27 68.047 118.682C68.047 119.093 68.1408 119.5 68.3214 119.87L77.3592 138.003C77.5832 138.451 77.9269 138.827 78.3521 139.09C78.7773 139.354 79.2671 139.493 79.7667 139.493C80.2663 139.493 80.7561 139.354 81.1812 139.09C81.6064 138.827 81.9502 138.451 82.1742 138.003L138.945 23.9365C139.152 23.5257 139.251 23.0686 139.233 22.6086C139.214 22.1485 139.079 21.7009 138.839 21.3081C138.6 20.9153 138.265 20.5903 137.865 20.3641C137.465 20.1379 137.014 20.0179 136.555 20.0155V20.0155Z'
            fill='url(#paint0_linear_2905_79556)'
            stroke='#FAFAFA'
            strokeWidth='5'
        />
        <defs>
            <linearGradient
                id='paint0_linear_2905_79556'
                x1='19.9705'
                y1='100.006'
                x2='180.004'
                y2='100.006'
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='#FA931D' />
                <stop offset='1' stopColor='#EF5B27' />
            </linearGradient>
        </defs>
    </svg>
)
/** @name 加载组件主题色图标 */
export const YakitThemeLoadingSvgIcon = (props: Partial<CustomIconComponentProps>) => {
    return <Icon component={YakitThemeLoadingSvg} {...props} />
}
const YakitLoadingSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M156.382 20.0155H177.31C177.769 20.0162 178.22 20.1344 178.621 20.3589C179.021 20.5835 179.358 20.9071 179.599 21.2988C179.84 21.6906 179.977 22.1375 179.997 22.5973C180.018 23.0572 179.921 23.5146 179.715 23.9262L102.67 178.509C102.446 178.957 102.102 179.334 101.677 179.597C101.252 179.861 100.762 180 100.263 180C99.763 180 99.2732 179.861 98.8481 179.597C98.4229 179.334 98.0791 178.957 97.8551 178.509L88.8173 160.377C88.6369 160.008 88.543 159.602 88.543 159.191C88.543 158.78 88.6369 158.374 88.8173 158.005L153.977 21.5498C154.193 21.0929 154.534 20.7065 154.959 20.4351C155.385 20.1636 155.878 20.0182 156.382 20.0155ZM64.5106 69.3718L42.0474 21.5498C41.829 21.0879 41.485 20.6974 41.0549 20.4232C40.6249 20.149 40.1263 20.0023 39.6167 20H22.6947C22.2354 19.9998 21.7837 20.1174 21.3825 20.3416C20.9813 20.5658 20.644 20.8892 20.4024 21.2811C20.1609 21.673 20.0233 22.1203 20.0027 22.5806C19.9821 23.0408 20.0791 23.4987 20.2846 23.9107L53.1297 88.9769C53.3554 89.4285 53.7027 89.8076 54.1324 90.0711C54.562 90.3347 55.0567 90.4721 55.5603 90.4678C56.0639 90.4635 56.5562 90.3176 56.9813 90.0468C57.4064 89.7759 57.7473 89.391 57.9653 88.9356L64.4694 75.3076L65.3654 73.4323C65.5409 73.0692 65.632 72.6709 65.632 72.2674C65.632 71.8638 65.5409 71.4655 65.3654 71.1024L64.5106 69.3718ZM136.555 20.0155H115.627C115.118 20.0169 114.62 20.1633 114.19 20.4377C113.761 20.7121 113.418 21.1031 113.201 21.5653L96.9488 56.3069L80.6293 21.5653C80.4114 21.1031 80.0674 20.7122 79.6373 20.4379C79.2071 20.1636 78.7083 20.0172 78.1986 20.0155H61.2508C60.7915 20.0153 60.3398 20.1329 59.9386 20.3571C59.5374 20.5813 59.2 20.9047 58.9585 21.2966C58.717 21.6885 58.5794 22.1358 58.5588 22.596C58.5382 23.0563 58.6352 23.5142 58.8407 23.9262L86.4794 78.6862L68.3214 117.493C68.1408 117.863 68.047 118.27 68.047 118.682C68.047 119.093 68.1408 119.5 68.3214 119.87L77.3592 138.003C77.5832 138.451 77.9269 138.827 78.3521 139.09C78.7773 139.354 79.2671 139.493 79.7667 139.493C80.2663 139.493 80.7561 139.354 81.1812 139.09C81.6064 138.827 81.9502 138.451 82.1742 138.003L138.945 23.9365C139.152 23.5257 139.251 23.0686 139.233 22.6086C139.214 22.1485 139.079 21.7009 138.839 21.3081C138.6 20.9153 138.265 20.5903 137.865 20.3641C137.465 20.1379 137.014 20.0179 136.555 20.0155V20.0155Z'
            stroke='#FAFAFA'
            strokeWidth='5'
        />
    </svg>
)
/** @name 加载组件底色图标 */
export const YakitLoadingSvgIcon = (props: Partial<CustomIconComponentProps>) => {
    return <Icon component={YakitLoadingSvg} {...props} />
}

const YakitCloseSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M4 12L12 4M4 4L12 12'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)
/** @name 关闭图标 */
export const YakitCloseSvgIcon = (props: Partial<CustomIconComponentProps>) => {
    return <Icon component={YakitCloseSvg} {...props} />
}