import { FC } from 'react'
import Footer from '../../organisms/Footer/Footer'
import Header from '../../organisms/Header/Header'


const CommonLayout: FC = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex mx-auto w-full relative justify-center overflow-hidden">
        <Header />
        <div
          id="layout-body"
          className=""
        >
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default CommonLayout