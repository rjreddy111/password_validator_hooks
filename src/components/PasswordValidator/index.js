// Write your code here
import {useState} from 'react'

import {
  Mainbackground,
  SubCard,
  Inputtext,
  ErrorShow,
  Heading,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordtext, textSetter] = useState('')

  const onChangeInput = event => {
    textSetter(event.target.value)
  }

  return (
    <Mainbackground>
      <SubCard>
        <Heading>Password Validator</Heading>
        <p>Check how strong and secure is your password</p>
        <Inputtext
          type="password"
          onChange={onChangeInput}
          value={passwordtext}
        />
        {passwordtext.length < 8 && (
          <ErrorShow>Your password must be at least 8 characters</ErrorShow>
        )}
      </SubCard>
    </Mainbackground>
  )
}

export default PasswordValidator
