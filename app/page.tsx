import Image from 'next/image'

export default function Home(){
  return (
    // use var defined above
    <div>{process.env.SECRET}</div>
  )
}