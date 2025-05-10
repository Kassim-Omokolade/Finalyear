/* eslint-disable react/prop-types */
import '../../styles/Admin Styles/AdminModal.css'

const AdminModal = ({text1, text2, children, open, onClose}) => {
  if (!open) return null
  return (
    <div  onClick={onClose} className='overlay'>
        <div onClick={ (e) => {
        e.stopPropagation()
       }}className='deletemodalcontainer'>
            <h4 className="deleteh4">
                {text1}
            </h4>
            <p className='deletep'>
            {text2}
            </p>
           {children}
        </div>
    </div>
  )
}

export default AdminModal