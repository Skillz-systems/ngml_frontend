import React from 'react'
import TextInput from 'src/components/TextInput'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const StaffPersonalDetails = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleOnChange = (event) => {
    console.log(event.target.value)
  }

  return (
        <div className='w-[100%] h-screen' style={{ background: ' #FFFFFF', padding: '30px' }} >
            <div className=' w-100vw h-screen ' style={{ border: '3px dashed var(--NGML-MAIN, #00AF50)', borderRadius: 'var(--get-general-numbers-00312, 12px)' }} >
                <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '22px', fontWeight: '700', lineHeight: '18px', fontStyle: 'normal' }}>PERSONAL DETAILS</div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div>
                        <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                            <div>Title <span style={{ color: 'red' }}>*</span> </div>
                        </div>
                        <div>
                            <TextInput
                                width='480px'
                                height='64px'
                                type="text"
                                label="title"
                                name="title"
                                radius="14px"
                                backgroundColor="none"
                                placeholder="Choose a title"
                                error={false}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                                <div>First Name <span style={{ color: 'red' }}>*</span> </div>
                            </div>
                            <div>
                                <TextInput
                                    width='480px'
                                    height='64px'
                                    type="text"
                                    label="name"
                                    name="name"
                                    radius="14px"
                                    placeholder="Input your name here"
                                    error={false}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div>
                        <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                            <div>Other Names <span style={{ color: 'red' }}>*</span> </div>
                        </div>
                        <div>
                            <TextInput
                                width='480px'
                                height='64px'
                                type="text"
                                label="name"
                                name="name"
                                radius="14px"
                                placeholder="Input other given names here"
                                error={false}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                                <div>Last Name <span style={{ color: 'red' }}>*</span> </div>
                            </div>
                            <div>
                                <TextInput
                                    width='480px'
                                    height='64px'
                                    type="text"
                                    label="name"
                                    name="name"
                                    radius="14px"
                                    placeholder="Input last name here"
                                    error={false}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div>
                        <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                            <div>Dirth of Birth <span style={{ color: 'red' }}>*</span> </div>
                        </div>
                        <div>
                            <TextInput
                                width='480px'
                                height='64px'
                                type="text"
                                label="number"
                                name="number"
                                radius="14px"
                                placeholder="Select DOB"
                                error={false}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                                <div>Gender <span style={{ color: 'red' }}>*</span> </div>
                            </div>
                            <div>
                                <TextInput
                                    width='480px'
                                    height='64px'
                                    type="text"
                                    label="name"
                                    name="name"
                                    radius="14px"
                                    placeholder="Select gender"
                                    error={false}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div>
                        <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                            <div>Nationality <span style={{ color: 'red' }}>*</span> </div>
                        </div>
                        <div>
                            <TextInput
                                width='480px'
                                height='64px'
                                type="select"
                                label="country"
                                name="country"
                                radius="14px"
                                placeholder="Select country"
                                error={false}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                                <div>State of Origin<span style={{ color: 'red' }}>*</span> </div>
                            </div>
                            <div>
                                <TextInput
                                    width='480px'
                                    height='64px'
                                    type="text"
                                    label="state"
                                    name="state"
                                    radius="14px"
                                    placeholder="Select state"
                                    error={false}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div>
                        <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                            <div>LGA<span style={{ color: 'red' }}>*</span> </div>
                        </div>
                        <div>
                            <TextInput
                                width='480px'
                                height='64px'
                                type="text"
                                label="lga"
                                name="lga"
                                radius="14px"
                                placeholder="Select LGA"
                                error={false}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                                <div>Marital Status<span style={{ color: 'red' }}>*</span> </div>
                            </div>
                            <div>
                                <TextInput
                                    width='480px'
                                    height='64px'
                                    type="text"
                                    label="marital staus"
                                    name="marital staus"
                                    radius="14px"
                                    placeholder="Select marital status"
                                    error={false}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                   <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div>
                        <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                            <div>Phone Number <span style={{ color: 'red' }}>*</span> </div>
                        </div>
                        <div>
                            <TextInput
                                width='480px'
                                height='64px'
                                type="number"
                                label="Phone number"
                                name="email"
                                radius="14px"
                                placeholder="Input phone number here"
                                error={false}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                                <div>Email Address <span style={{ color: 'red' }}>*</span> </div>
                            </div>
                            <div>
                                <TextInput
                                    width='480px'
                                    height='64px'
                                    type="text"
                                    label="name"
                                    name="name"
                                    radius="14px"
                                    placeholder="Input your email here"
                                    error={false}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={{ color: 'var(--TEXT-1, #49526A)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '500', lineHeight: '18px', fontStyle: 'normal' }}>
                                <div>Email Address <span style={{ color: 'red' }}>*</span> </div>
                            </div>
                            <div>
                                <TextInput
                                    width='960px'
                                    height='64px'
                                    type="text"
                                    label="name"
                                    name="name"
                                    radius="14px"
                                    placeholder="Input your email here"
                                    error={false}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default StaffPersonalDetails
