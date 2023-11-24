/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Doneicon from '../../Asset/png-icons/Done.png'
import ButtonComponent from '../ButtonComponent'
import polygonicon from '../../Asset/png-icons/Polygon.png'
// import cancelicon from '../../Asset/png-icons/Close.png'
import Deleteicon from '../../Asset/png-icons/Cancelicon.png'

interface ResponseModalProps {
  type?: 'success' | 'error'
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

const ResponseModal: React.FC<ResponseModalProps> = ({
  type = 'success',
  width = '500px',
  height = '265px',
  backgroundColor = '#FFFFFF',
  action,
  continueAction,
  text = 'Are you sure you want to cancel?',
  subText = 'All changes will be lost'
}) => {
  return (
    <div
      className="w-[100%]"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {type === 'success' && (
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '100%',
              backgroundColor: '#D2F69E33',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: '32%',
              top: '-25%',
              zIndex: 100000
            }}
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '100%',
                backgroundColor: '#D2F69E80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '100%',
                  backgroundColor: '#D2F69E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={Doneicon}
                  alt="doneicon"
                  style={{ height: '60px', width: '60px', color: '#00AF50' }}
                />
              </div>
            </div>
          </div>
        )}
        {type === 'error' && (
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '100%',
              backgroundColor: '#FFFDF7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: '35%',
              top: '-25%',
              zIndex: 100000
            }}
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '100%',
                backgroundColor: '#FEF8E6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '100%',
                  backgroundColor: '#FFF3D5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={Deleteicon}
                  alt="Deleteicon"
                  style={{ height: '60px', width: '60px' }}
                />
              </div>
            </div>
          </div>
        )}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              height,
              width,
              backgroundColor,
              boxShadow: '#0000000D',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {type === 'success' && (
              <div style={{ marginTop: '60px' }}>
                <div
                  style={{
                    fontWeight: '700',
                    fontSize: '32px',
                    lineHeight: '32px'
                  }}
                >
                  Congratulations
                </div>
                <div
                  style={{
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '32px',
                    letterSpacing: '0.8%',
                    color: '#828DA9'
                  }}
                >
                  This Record has been successfully accepted.
                </div>
              </div>
            )}
            {type === 'error' && (
              <div style={{ marginTop: '67px', marginBottom: '20px' }}>
                <div
                  style={{
                    fontWeight: '700',
                    fontSize: '22px',
                    lineHeight: '32px',
                    color: '#49526A'
                  }}
                >
                  {text}
                </div>
                <div
                  style={{
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '32px',
                    letterSpacing: '0.8%',
                    color: '#828DA9'
                  }}
                >
                  {subText}
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              style={{
                position: 'absolute',
                left: '45%',
                top: '210px',
                zIndex: 100000
              }}
            >
              <img src={polygonicon} alt="polgonicon" />
            </div>
            {type === 'success' && (
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
                <div>
                  <ButtonComponent
                    backgroundColor="#005828"
                    border="0px"
                    height="32px"
                    radius="40px"
                    width="142px"
                    color="#E2E4EB"
                    fontSize="14px"
                    onClick={() => {
                      action && action()
                    }}
                  >
                    Back to Home
                  </ButtonComponent>
                </div>
              </div>
            )}
            {type === 'error' && (
              <div
                style={{
                  height: '120px',
                  width: '500px',
                  backgroundColor: '#FF0000',
                  boxShadow: '#0000000D',
                  borderBottomRightRadius: '20px',
                  borderBottomLeftRadius: '20px',
                  bottom: '50px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  display: 'flex'
                }}
              >
                <div style={{ display: 'flex' }}>
                  <ButtonComponent
                    backgroundColor="#FF0000"
                    border="1px solid #FFFFFF"
                    height="32px"
                    radius="40px"
                    width="114px"
                    color="#E2E4EB"
                    fontSize="14px"
                    onClick={() => {
                      continueAction && continueAction()
                    }}
                  >
                    Yes, Continue
                  </ButtonComponent>
                  <ButtonComponent
                    backgroundColor="#050505"
                    border="0px"
                    height="32px"
                    radius="40px"
                    width="312px"
                    color="#E2E4EB"
                    fontSize="14px"
                    onClick={() => {
                      action && action()
                    }}
                  >
                    Cancel
                  </ButtonComponent>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponseModal
