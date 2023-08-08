import Header from '../components/header/header'
import '../globals.css'
import { AiFillFile } from 'react-icons/ai'
import Input from '../components/api/input'
import Description from '../components/description'

export default function useAPI() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center mt-20">
        <div className="w-10/12 flex flex-row justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold leading-10">PDF files name Changer</h1>
            <p className="text-lg text-gray-800 mt-3">Description about the project</p>
          </div>
        </div>
        <Description page="api"/>
        <div className="flex flex-col items-center justify-center w-[70%] lg:w-[45%] h-60 mt-24 border-dashed border-2 border-gray-700 rounded-lg bg-slate-50 shadow-sm">
          <div className="flex flex-col items-center">
            <label
              className="flex flex-row gap-2 items-center justify-center w-56 sm:w-64 h-12 rounded-md bg-[#4361ee] shadow-md text-white cursor-pointer"
              htmlFor="file">
              <AiFillFile size={20} />
              <span className="font-normal">Selecionar ZIP</span>
              <Input />
            </label>
            <span className="mt-3 text-md">Não sei oque colocar aqui :/</span>
          </div>
        </div>
      </div>
    </div>
  )
}
