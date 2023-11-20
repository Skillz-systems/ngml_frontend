import React from 'react'
import CompanyLogo from 'src/Asset/CompanyLogo.png'
import guy from 'src/Asset/guy.jpeg'
import qrcode from 'src/Asset/bi_qr-code.png'

const StaffsummaryPage: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', padding: 16, borderRadius: 12, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
      <div style={{ width: 860, height: 1377, position: 'relative', background: 'white', border: '1.52px solid' }}>
        <div style={{ left: 262.95, top: 29, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
          <div style={{ width: 64, height: 64, borderRadius: 200, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
            <img style={{ width: 64, height: 64 }} src={CompanyLogo} />
          </div>
          <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4.58, display: 'flex' }}>
            <div style={{ color: '#252A2F', fontSize: 24, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>NNPC Gas Marketing Limited</div>
            <div style={{ color: '#252A2F', fontSize: 16, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>STAFF PRINTOUT</div>
          </div>
        </div>
        <div style={{ padding: 15.17, left: 327.50, top: 1224.67, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 15.17, display: 'inline-flex', marginTop: '70px' }}>
          <div style={{ textAlign: 'center', color: '#959595', fontSize: 16.68, fontFamily: 'Red Hat Display', fontWeight: '500', wordWrap: 'break-word' }}>Powered by John Okor</div>
        </div>
        <div style={{ padding: 20, left: 10, top: 182, position: 'absolute', borderRadius: 8, border: '1px #E2E4EB solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
          <div style={{ width: 800, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
            <div style={{ height: 40, paddingLeft: 19, paddingRight: 19, paddingTop: 10, paddingBottom: 10, background: '#00AF50', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
              <div style={{ color: 'white', fontSize: 16, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Personal Information</div>
            </div>
          </div>
          <div style={{ width: 800, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
            <div style={{ height: 130, justifyContent: 'space-between', alignItems: 'flex-start', display: 'flex' }}>
              <img style={{ width: 130, height: 130, borderRadius: 4 }} src={guy} alt="guy picture" />
              <div style={{ width: 234, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'inline-flex' }}>
                <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ width: 234, paddingTop: 4, paddingBottom: 4, paddingLeft: 4, background: '#F6F8FA', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ width: 100, color: '#828DA9', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>Title:</div>
                  </div>
                  <div style={{ paddingLeft: 4, paddingRight: 4, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#828DA9', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>LAST NAME:</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ width: 234, paddingTop: 4, paddingBottom: 4, paddingLeft: 4, background: '#F6F8FA', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ width: 100, color: '#828DA9', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>FIRST Name:</div>
                  </div>
                  <div style={{ paddingLeft: 4, paddingRight: 4, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#828DA9', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>OTHER NAMES:</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ width: 234, paddingTop: 4, paddingBottom: 4, paddingLeft: 4, background: '#F6F8FA', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#828DA9', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>PHONE NUMBER: </div>
                  </div>
                  <div style={{ paddingLeft: 4, paddingRight: 4, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#828DA9', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>EMAIL ADDRESS:</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 130, justifyContent: 'space-between', alignItems: 'flex-start', display: 'flex' }}>
              <div style={{ width: 234, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'inline-flex' }}>
                <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ paddingLeft: 4, paddingRight: 4, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#050505', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Mr.</div>
                  </div>
                  <div style={{ width: 234, paddingTop: 4, paddingBottom: 4, paddingLeft: 4, background: '#F6F8FA', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ width: 100, color: '#050505', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>Abraham</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ paddingLeft: 4, paddingRight: 4, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#050505', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>BAKO</div>
                  </div>
                  <div style={{ width: 234, paddingTop: 4, paddingBottom: 4, paddingLeft: 4, background: '#F6F8FA', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#050505', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>CLEMENT</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                  <div style={{ paddingLeft: 4, paddingRight: 4, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#050505', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>0803430480340</div>
                  </div>
                  <div style={{ width: 234, paddingTop: 4, paddingBottom: 4, paddingLeft: 4, background: '#F6F8FA', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#050505', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>username@gmail.com</div>
                  </div>
                </div>
              </div>
              <div style={{ width: 130, height: 130, position: 'relative' }}>
                <img src={qrcode} />
              </div>
            </div>
          </div>
          <div style={{ width: 800, paddingLeft: 19, paddingRight: 19, paddingTop: 10, paddingBottom: 10, background: '#00AF50', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
            <div style={{ color: 'white', fontSize: 16, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Other Personal Information</div>
          </div>
          <div style={{ paddingLeft: 4, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3, display: 'flex' }}>
            <div style={{ width: 785, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Verification No:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>9375829948</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>PSN:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>1665201239428</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Date of Biometric Capture:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 129, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Captured By:</div>
                </div>
                <div style={{ width: 129, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
            </div>
            <div style={{ width: 785, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>DOB:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>1985-01-01</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>BVN DOB:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '500', wordWrap: 'break-word' }}>1983-01-01</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Marital Status:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Single</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Gender:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Male</div>
                </div>
              </div>
            </div>
            <div style={{ width: 785, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>State:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Abia</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Lga:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Aba South</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>City:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Aba</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 129, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Nationality:</div>
                </div>
                <div style={{ width: 129, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Nigeria</div>
                </div>
              </div>
            </div>
            <div style={{ width: 785, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Address:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 800, paddingLeft: 19, paddingRight: 19, paddingTop: 10, paddingBottom: 10, background: '#00AF50', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
            <div style={{ color: 'white', fontSize: 16, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Employee Work Information</div>
          </div>
          <div style={{ paddingLeft: 4, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3, display: 'flex' }}>
            <div style={{ width: 785, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Designation:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Union Membership:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>MDA:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 129, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Department:</div>
                </div>
                <div style={{ width: 129, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
            </div>
            <div style={{ width: 785, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Employment Status:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>MINISTRY OF FINANCE</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Date of First Appointment:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>2019-01-01</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Date of Retirement:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>1/1/2045, 12:00 AM</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 129, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Salary Grade Level / Step:</div>
                </div>
                <div style={{ width: 129, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>15 / 6</div>
                </div>
              </div>
            </div>
            <div style={{ width: 785, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>PFA:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>CADRE:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Pension Number:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 129, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>National Identity number:</div>
                </div>
                <div style={{ width: 129, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
            </div>
            <div style={{ width: 785, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'inline-flex' }}>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Secret File:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Date of Comfirmation:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>0000-00-00</div>
                </div>
              </div>
              <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Date of Present Appt.:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>0000-00-00</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 800, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
            <div style={{ height: 40, paddingLeft: 19, paddingRight: 19, paddingTop: 10, paddingBottom: 10, background: '#00AF50', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
              <div style={{ color: 'white', fontSize: 16, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Education Information</div>
            </div>
            <div style={{ height: 40, paddingLeft: 19, paddingRight: 19, paddingTop: 10, paddingBottom: 10, background: '#00AF50', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
              <div style={{ color: 'white', fontSize: 16, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Account Details Supplied By Ministry</div>
            </div>
          </div>
          <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
            <div style={{ width: 391, paddingLeft: 4, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
              <div style={{ height: 47, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Qualification Type:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ height: 47, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Institution Attended :</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ height: 47, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Grade:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>N/A</div>
                </div>
              </div>
              <div style={{ height: 47, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ width: 129, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Year of graduation:</div>
                </div>
                <div style={{ width: 129, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>0000-00-00</div>
                </div>
              </div>
            </div>
            <div style={{ width: 391, paddingLeft: 4, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
              <div style={{ height: 53, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Account Name:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>ABENGOWE CLEMENT CHUKWUEMEKA</div>
                </div>
              </div>
              <div style={{ width: 387, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                    <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Account Number:</div>
                  </div>
                  <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                    <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>0091003515</div>
                  </div>
                </div>
                <div style={{ width: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ width: 129, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                    <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>BVN:</div>
                  </div>
                  <div style={{ width: 129, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                    <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>123456789032</div>
                  </div>
                </div>
              </div>
              <div style={{ height: 47, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Bank:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>Kuda Bank</div>
                </div>
              </div>
              <div style={{ height: 47, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ width: 391, height: 33, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#828DA9', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>Name Returned On Bank Account Validation:</div>
                </div>
                <div style={{ width: 391, height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex' }}>
                  <div style={{ color: '#050505', fontSize: 14, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word' }}>ROSELY CLARA OBIORA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffsummaryPage
