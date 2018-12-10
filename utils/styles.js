import styled from 'styled-components'
import Link from 'next/link'

export const theme = {
  colors: {},
  fonts: {
    primary: 'Roboto',
  },
}

const styledAnchor = styled.a`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 12pt;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
export const getStyledLink = (href, as, text) => (
  <Link href={href} as={as}>
    <styledAnchor>{text}</styledAnchor>
  </Link>
)
