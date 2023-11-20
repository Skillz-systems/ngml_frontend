import React from 'react'
import { useNavigate } from 'react-router-dom'
import Doneicon from '../../Asset/png-icons/Done.png'
import ButtonComponent from '../ButtonComponent'
import polygonicon from '../../Asset/png-icons/Polygon.png'

interface ResponsePopUpProps {
  type?: string
  width?: string
  height?: string
  text?: string
  backgroundColor?: string
  icon?: string
}

const ResponseModal: React.FC<ResponsePopUpProps> = ({
  type,
  width = '100%',
  height = 'h-full',
  text,
  backgroundColor,
  icon
}) => {
  const navigate = useNavigate()
  return (
    <div className='w-[100%] h-screen' style={{ backgroundColor: '#f5f5eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '180px', height: '180px', borderRadius: '100%', backgroundColor: '#D2F69E33', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '45%', top: '250px', zIndex: 100000 }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '100%', backgroundColor: '#D2F69E80', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '100%', backgroundColor: '#D2F69E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={Doneicon} alt='doneicon' style={{ height: '60px', width: '60px', color: '#00AF50' }} />
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ height: '265px', width: '500px', backgroundColor: '#FFFFFF', boxShadow: '#0000000D', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ marginTop: '60px' }}>
              <div style={{ fontWeight: '700', fontSize: '32px', lineHeight: '32px' }}>Congratulations</div>
              <div style={{ fontWeight: '500', fontSize: '16px', lineHeight: '32px', letterSpacing: '0.8%', color: '#828DA9' }}>This Record has been successfully accepted.</div>
            </div>
          </div>
         <div>
         <div style={{ position: 'absolute', left: '45%', top: '210px', zIndex: 100000 }}>
            <img src={polygonicon} alt='polgonicon' />
          </div>
          <div style={{ height: '120px', width: '500px', backgroundColor: '#00AF50', boxShadow: '#0000000D', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', bottom: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div>
              <ButtonComponent
                backgroundColor='#005828'
                border='0px'
                height="32px"
                radius="40px"
                width='142px'
                color='#E2E4EB'
                fontSize='14px'
                onClick={() => {
                  navigate('/customer/customerhomepage')
                }}
              >Back to Home</ButtonComponent>
            </div>
         </div>
         </div>
        </div>
      </div>

    </div>
  )
}

export default ResponseModal
