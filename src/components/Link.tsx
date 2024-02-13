import NextLink from 'next/link'
import React, { ReactNode } from 'react'

interface LinkProps {
    children: ReactNode
    href: string
    // Checar no futuro esse any, baixa segurança
    [propName: string]: any
}

export default function Link({ children, href, ...props }: LinkProps) {
    return (
        <div>
            <NextLink href={href} {...props}>
                {children}
            </NextLink>
        </div>
    )
}
