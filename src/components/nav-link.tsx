import { ComponentProps } from 'react'


interface NavLinkProps extends ComponentProps<'a'> {
  children: string,
}

export function NavLink(props: NavLinkProps) {
  return (
    <div>
      <a {...props} className="font-medium text-sm">
        {props.children}
      </a>
    </div>
  )
}