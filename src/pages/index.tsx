import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 8,
  border: 0,
  padding: '8px 12px',
  color: 'white',
  cursor: 'pointer',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  }
})

export default function Home() {
  return (
    <Button>
      <span>Hello</span> NextJS</Button>
  )
}
