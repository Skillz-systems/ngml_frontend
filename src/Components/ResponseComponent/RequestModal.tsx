/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import ButtonComponent from '../ButtonComponent'
import polygonicon from '../../Asset/png-icons/Polygon.png'

interface ResponseModalProps {
  // type?: 'success' | 'error'
  width?: string
  height?: string
  text?: string
  backgroundColor?: string
  icon?: string
  onClose?: () => void
  showCloseButton?: boolean
  action?: () => void
  continueAction?: () => void
  subText?: string
}

const RequestModal: React.FC<ResponseModalProps> = ({
  // type = 'success',
  width = '500px',
  height = '310px',
  backgroundColor = '#FFFFFF',
  action,
  continueAction,
  text = 'Adjustment Form',
  subText = 'Include the field that requires adjustment and the reasons for'
}) => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ backgroundColor, height, width, borderRadius: '14px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '20px' }}>
          <div
            style={{
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '20px',
              marginTop: '22px'

            }}
          >
           {text}
          </div>
          <div
            style={{
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '0.8%',
              color: '#828DA9',
              marginLeft: '4px',
              textAlign: 'center',
              marginTop: '8px'
            }}
          >
            {subText}
          </div>
          <div
          style={{
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '12px',
            letterSpacing: '0.8%',
            color: '#828DA9',
            marginLeft: '4px',
            textAlign: 'center',
            marginTop: '8px'
          }}>
           each in the box below
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#49526A', lineHeight: '18px', marginRight: '280px' }}>Reasons for Adjustment *</div>
          <div>
            <textarea
              style={{
                width: '436px',
                border: '1px solid rgba(208, 213, 221, 1)',
                borderRadius: '8px',
                padding: '8px',
                fontSize: '12px',
                fontWeight: '400',
                fontFamily: ' inter',
                marginTop: '8px',
                height: '150px'
              }}
              placeholder="Type the fields and your reasons for adjustment is needed"
              rows={10}
              onChange={(e) => {
                console.log(e)
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            position: 'absolute',
            left: '40%',
            top: '370px',
            zIndex: 100000
          }}
        >
          <img src={polygonicon} alt="polgonicon" />
        </div>
      </div>
      <div
        style={{
          height: '100px',
          width: '500px',
          backgroundColor: '#00AF50',
          boxShadow: '#0000000D',
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: '20px',
          // bottom: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flexDirection: 'column'
        }}
       >
        <div style={{ display: 'flex' }}>
          <ButtonComponent
            backgroundColor="#00AF50"
            border="1px solid #FFFFFF"
            height="32px"
            radius="40px"
            width="114px"
            fontSize="14px"
            onClick={() => {
              action !== null && action!()
              // continueAction && continueAction()
            }}
          >
            Close
          </ButtonComponent>
          <ButtonComponent
            backgroundColor="#005828"
            border="0px"
            height="32px"
            radius="40px"
            width="312px"
            color="#E2E4EB"
            fontSize="14px"
            onClick={() => {
              // action && action()
            }}
          >
            Confirm
          </ButtonComponent>
        </div>
          <div style={{ fontWeight: '500', fontSize: '12px', lineHeight: '12px', letterSpacing: '0.8%', top: '20px', marginBottom: '20px', color: '#FFFFFF' }}>The Staff will be notified with the adjustment comments you make. </div>
      </div>
    </div>
  )
}

export default RequestModal
