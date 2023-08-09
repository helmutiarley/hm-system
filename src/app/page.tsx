import Header from './components/header'
import ProcessContainer from './components/process/process-container'
import './globals.css'

export default function Home() {
  const isProcessing = false

  return (
    <div>
      <Header />

      <div className="flex flex-col items-center mt-20">
        <div className="w-10/12 flex flex-row justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold leading-10">PDF files name Changer</h1>
            <p className="text-lg text-gray-800 mt-3">
              Turn multiple PDFs into HTML and rename them all at once with ease!
            </p>
          </div>
        </div>

        <ProcessContainer />
      </div>
    </div>
  )
}
