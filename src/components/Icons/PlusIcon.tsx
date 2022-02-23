import { SVGProps } from 'react'

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
)
