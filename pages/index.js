import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import Svg from './assets/login.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gate point</title>
      </Head>
      <div className="page">
        <div className="right">
          <p>Login here to access amazing resources to crack gate</p>
        </div>
        <div className="left">
          <Login/>
        </div>
      </div>
      <style jsx>{`
        .page{
          width: 100%;
          height: 100vh;
          display: flex;
        }

        p{
          color: white;
        }

        .right{
          width: 50%;
          height: 100%;
          padding: 2%;
        }

        .left{
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        h1{
          color: white;
        }

        @media (max-width: 700px){
          .page{
            flex-direction: column-reverse;
            padding: 2%;
          }

          .right{
            width: 100%;
            height: 20%;
          }

          .left{
            width: 100%;
            height: 80%;j
            background-color: red;
          }
        }
      `}</style>
    </div>
  )
}
