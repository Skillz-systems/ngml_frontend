/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import ButtonComponent from '../ButtonComponent'
import polygonicon from '../../Asset/png-icons/Polygon.png'

const RequestModal: React.FC = () => {
  return (
    <div style={{ border: '2px solid red', width: '880px' }}>
      <div style={{ borderRadius: '14px', padding: '10px', display: 'flex', backgroundColor: '#fff5', height: '265px', width: '500px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div
            style={{
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '32px'
            }}
          >
            Adjustment Form
          </div>
          <div
            style={{
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '32px',
              letterSpacing: '0.8%',
              color: '#828DA9'
            }}
          >
            Include the field that requires adjustment and the reasons for  each in the box below
          </div>
        </div>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '500' }}>Reasons for Adjustment *</div>
          <div>
            <textarea
              style={{
                width: '100%',
                border: '1px solid rgba(208, 213, 221, 1)',
                borderRadius: '8px',
                padding: '20px',
                fontSize: '12px',
                lineHeight: '38px',
                fontWeight: '400',
                fontFamily: ' inter',
                marginTop: '8px',
                height: '40px'
              }}
              placeholder="Type the fields and your reasons for adjustment is needed"
              rows={5}
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
            left: '45%',
            top: '284px',
            zIndex: 100000
          }}
        >
          <img src={polygonicon} alt="polgonicon" />
        </div>
      </div>
      <div
        style={{
          height: '120px',
          width: '500px',
          backgroundColor: '#00AF50',
          boxShadow: '#0000000D',
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: '20px',
          bottom: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
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
              alert('rrrrrr')
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
      </div>
    </div>
  )
}

export default RequestModal
