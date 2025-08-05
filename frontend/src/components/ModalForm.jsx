import React, { useState } from 'react'

const ModalForm = ({isOpen, onClose, mode, onSubmit}) => {

  const [rate, setRate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [job, setJob] = useState('')
  const [status, setStatus] = useState(false)

  const handleStatusChange = (e) => {
    setStatus(e.target.value === 'Active') 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <dialog id="my_modal_3" className="modal" open={isOpen} >
      <div className="modal-box">
        <h3 className='font-bold text-lg py-4 '>{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
        <form method="dialog" onSubmit={handleSubmit}>
          {/* if there is a button in form, it will close the modal */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-start">Name</legend>
            <input type="text" className="input" placeholder="Type here" value={name} onChange={(e) => setName(e.target.value)} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-start">Email</legend>
            <input type="text" className="input" placeholder="Type here" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-start ">Job</legend>
            <input type="text" className="input" placeholder="Type here" value={job} onChange={(e) => setJob(e.target.value)}/>
          </fieldset>

          <div className='flex mb-7 justify-between my-4 gap-4'>
            <label className='input input-bordered flex items-center gap-2'>
            Rate
            <input type='number' className='grow' placeholder='0' value={rate} onChange={(e) => setRate(e.target.value)}></input>
          </label>
            <select value={status ? 'Active' : 'inactive'} className="select" onChange={handleStatusChange}>
              <option>Inactive</option>
              <option>Active</option>
            </select>
          </div>


          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
          <button className='btn btn-success'>{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
        </form>
      </div>
    </dialog>
  )
}

export default ModalForm