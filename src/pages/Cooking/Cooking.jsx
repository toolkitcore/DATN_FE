import FoodCard from '../../components/CardComponents/FoodCard/FoodCard'
import React from 'react'
import { FaMedal } from 'react-icons/fa'
import FoodBanner from '../../components/FoodComponents/FoodBanner'
import { Link } from 'react-router-dom'

const foodItems = [
  {
    id: 1,
    title: 'Phở bò bát đá',
    time: '25 phút',
    date: '23/10/2023',
    like: '13k lượt thích',
    img: 'https://dominofilm.vn/uploads/albums/2019/01/photo_5c495cf04fcea.jpg',
    author: 'Godon Ramsey'
  },
  {
    id: 2,
    title: 'Phở bò bát đá',
    time: '25 phút',
    date: '23/10/2023',
    like: '13k lượt thích',
    img: 'https://dominofilm.vn/uploads/albums/2019/01/photo_5c495cf04fcea.jpg',
    author: 'Godon Ramsey'
  },
  {
    id: 3,
    title: 'Phở bò bát đá',
    time: '25 phút',
    date: '23/10/2023',
    like: '13k lượt thích',
    img: 'https://dominofilm.vn/uploads/albums/2019/01/photo_5c495cf04fcea.jpg',
    author: 'Godon Ramsey'
  },
  {
    id: 4,
    title: 'Phở bò bát đá',
    time: '25 phút',
    date: '23/10/2023',
    like: '13k lượt thích',
    img: 'https://dominofilm.vn/uploads/albums/2019/01/photo_5c495cf04fcea.jpg',
    author: 'Godon Ramsey'
  },
  {
    id: 5,
    title: 'Phở bò bát đá',
    time: '25 phút',
    date: '23/10/2023',
    like: '13k lượt thích',
    img: 'https://dominofilm.vn/uploads/albums/2019/01/photo_5c495cf04fcea.jpg',
    author: 'Godon Ramsey'
  },
  {
    id: 6,
    title: 'Phở bò bát đá',
    time: '25 phút',
    date: '23/10/2023',
    like: '13k lượt thích',
    img: 'https://dominofilm.vn/uploads/albums/2019/01/photo_5c495cf04fcea.jpg',
    author: 'Godon Ramsey'
  }
]

export default function Cooking() {
  return (
    <div className='h-full text-gray-900 dark:text-white py-4 mx-3'>
      <div className='w-full mb-14 grid grid-cols-1'>
        <FoodBanner />
      </div>

      <div className='grid mx-2 md:gap-10 grid-cols-1 lg:grid-cols-3'>
        <div className='col-span-2 '>
          <div className='grid xl:grid-cols-3 items-center'>
            <div className='col-span-2 mb-2'>
              <div className='text-xl font-medium mb-2'>
                <span>Tổng </span>
                <span className='text-red-600'>1000 </span>
                <span>công thức nấu ăn</span>
              </div>
              <div className='border-b-[3px] w-[20%] border-red-300 '></div>
            </div>
            <Link
              to='/cooking/cooking-food'
              className='col-span-1 lg:flex lg:justify-end text-lg font-bold hover:text-blue-700 cursor-pointer transition-all duration-100'
            >
              Xem thêm ...
            </Link>
          </div>

          <div className='grid gap-3 md:gap-4 mb-8 md:grid-cols-2 xl:grid-cols-3 pt-5'>
            {foodItems.map((foodItem) => {
              return <FoodCard key={foodItem.id} foodItem={foodItem} />
            })}
          </div>
        </div>
        <div className='col-span-1'>
          <div className=''>
            <div className='text-xl flex items-center font-medium mb-2'>
              <span className='mr-2'>Top BXH thành viên</span>
              <FaMedal className='text-yellow-500' />
            </div>
            <div className='border-b-[3px] w-[20%] border-red-300 '></div>
          </div>
          <div className='mt-5 w-full border shadow-sm bg-white rounded-lg dark:bg-slate-800 dark:border-none'>
            <div className='p-3'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center mb-4 mt-2 gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className=''>
                      <span className='text-sm opacity-50'>100 bài viết | </span>
                      <span className='text-sm opacity-50'>100 người follow</span>
                    </div>
                  </div>
                </div>
                <div className='border h-8 w-8 rounded-lg shadow-md bg-yellow-200 dark:text-black font-bold flex justify-center items-center'>
                  1
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center mb-4 mt-2 gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className=''>
                      <span className='text-sm opacity-50'>100 bài viết | </span>
                      <span className='text-sm opacity-50'>100 người follow</span>
                    </div>
                  </div>
                </div>
                <div className='border h-8 w-8 rounded-lg shadow-md bg-red-500 dark:text-black font-bold flex justify-center items-center'>
                  2
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center mb-4 mt-2 gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className=''>
                      <span className='text-sm opacity-50'>100 bài viết | </span>
                      <span className='text-sm opacity-50'>100 người follow</span>
                    </div>
                  </div>
                </div>
                <div className='border h-8 w-8 rounded-lg shadow-md bg-blue-400 dark:text-black font-bold flex justify-center items-center'>
                  3
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center mb-4 mt-2 gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className=''>
                      <span className='text-sm opacity-50'>100 bài viết | </span>
                      <span className='text-sm opacity-50'>100 người follow</span>
                    </div>
                  </div>
                </div>
                <div className='border h-8 w-8 rounded-lg shadow-md bg-green-500 dark:text-black font-bold flex justify-center items-center'>
                  4
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center mb-4 mt-2 gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className=''>
                      <span className='text-sm opacity-50'>100 bài viết | </span>
                      <span className='text-sm opacity-50'>100 người follow</span>
                    </div>
                  </div>
                </div>
                <div className='border h-8 w-8 rounded-lg shadow-md bg-green-500 dark:text-black font-bold flex justify-center items-center'>
                  5
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center mb-4 mt-2 gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className=''>
                      <span className='text-sm opacity-50'>100 bài viết | </span>
                      <span className='text-sm opacity-50'>100 người follow</span>
                    </div>
                  </div>
                </div>
                <div className='border h-8 w-8 rounded-lg shadow-md bg-green-500 dark:text-black font-bold flex justify-center items-center'>
                  6
                </div>
              </div>
            </div>
            <div className='w-full text-center pb-4 font-bold hover:text-blue-600 cursor-pointer transition-all duration-300'>
              Top thành viên ...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
