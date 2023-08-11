'use client'

import { forwardRef, useImperativeHandle, useState, useRef } from 'react'
import { AiFillFile } from 'react-icons/ai'
import Input from '../input'

const ProcessContainer = () => {
  const [isProcessing, setProcessing] = useState(true)
  const [filename, setFilename] = useState('asadasd' as string)
  const [currentFilename, setCurrentFilename] = useState('' as string)
  const [processPercentage, setProcessPercentage] = useState(0 as number)
  const [currentAmount, setCurrentAmount] = useState(0 as number)
  const [maxAmount, setMaxAmount] = useState(0 as number)

  const ProcessRef = useRef(null)

  const ProgressContainer = forwardRef((props: any, ref) => {
    useImperativeHandle(
      ref,
      () => {
        return {
          setProcessing: (value: boolean) => setProcessing(value),
          setFilename: (value: string) => setFilename(value),
          setCurrentFilename: (value: string) => setCurrentFilename(value),
          setProcessPercentage: (value: number) => setProcessPercentage(value),
          setCurrentAmount: (value: number) => setCurrentAmount(value),
          setMaxAmount: (value: number) => setMaxAmount(value),

          updateProgress: (amount: number, percentage: number) => {
            setCurrentAmount(amount)
            setProcessPercentage(Math.floor(percentage))
          }
        }
      },
      [currentAmount]
    )

    return (
      <div
        {...props}
        className={
          'flex flex-col w-[80%] lg:w-[45%] h-40 mt-24 rounded-sm bg-[#3e3e42] text-white shadow-xl justify-between ' +
          props?.className
        }>
        <div className="m-2 lg:m-3 w-fit h-fit bg-white rounded-sm">
          <h1 className="p-1 lg:p-2 text-sm text-black">{filename}</h1>
        </div>

        <div className="w-full flex flex-col items-center">
          <h1>Processing ZIP Files {processPercentage}%</h1>

          <div className="w-[90%] flex flex-col items-center m-4">
            <div className="w-full flex flex-row text-sm justify-between">
              <span>{currentFilename}</span>
              <span>
                {currentAmount}/{maxAmount}
              </span>
            </div>
            <div className="w-full h-6 bg-white shadow-md">
              <div
                className="h-full bg-red-500 transition-all duration-200"
                style={{ width: `${processPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div
        className={
          isProcessing
            ? 'hidden'
            : '' +
              ' flex flex-col items-center justify-center w-[80%] lg:w-[45%] h-60 mt-24 border-dashed border-2 border-gray-700 rounded-lg bg-slate-50 shadow-sm'
        }>
        <div className="flex flex-col items-center">
          <label
            className="flex flex-row gap-2 items-center justify-center w-56 sm:w-64 h-12 rounded-md bg-[#4361ee] shadow-md text-white cursor-pointer"
            htmlFor="file">
            <AiFillFile size={20} />
            <span className="font-normal">Select ZIP file</span>
            <Input progress={ProcessRef} />
          </label>
          <span className="mt-3 text-md">Select the ZIP file to process.</span>
        </div>
      </div>
      <ProgressContainer ref={ProcessRef} className={!isProcessing ? 'hidden' : ''} />
    </>
  )
}

export default ProcessContainer
