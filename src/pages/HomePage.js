import { useFormik } from 'formik';
// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, removeData } from '../features/TodoSlice';



const HomePage = () => {

  // const d = {
  //   baka: {
  //     dat: []
  //   }
  // };

  // const { datb } = d.baka;
  // console.log(datb);



  const { sample } = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  console.log(sample);


  // const [data, setData] = useState([])

  const formik = useFormik({
    initialValues: {
      hype: '',
    },

    onSubmit: (val, { resetForm }) => {
      // setData([...data, val.hype])
      dispatch(addData(val.hype))

      resetForm();
    }
  })
  // console.log(data);

  return (
    <div className="container bg-slate-600 h-[80vh] space-y-4">
      <h1 className='text-4xl mx-auto font-bold'>Sample Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="inputs space-x-3 ">
          <label htmlFor="hype">
            name:
          </label>
          <input
            type="text"
            name='hype'
            id=' hype'
            onChange={formik.handleChange}
            value={formik.values.hype}
          />
        </div>

        {
          sample.map((d, i) => {
            return <div key={i} className='flex justify-between max-w-xs py-10 shadow-md'>
              <h1 >{`${i + 1}: `}{d}</h1>
              <button onClick={() => dispatch(removeData(i))} type='button'><i className="fa-solid fa-trash-can"></i>
              </button>
            </div>

          })
        }

      </form>
    </div>
  )
}

export default HomePage
