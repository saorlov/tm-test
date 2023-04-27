import {useRef, useState} from "react";
import {TiTick} from 'react-icons/ti';
import {TiTimes} from 'react-icons/ti';

const AuthForm = () => {

    const inputRef = useRef(null)
    const [number, setNumber] = useState('')
    const [numberTouched, setNumberTouched] = useState(false)
    const [numberIsValid, setNumberIsValid] = useState(false)
    const [showError, setShowError] = useState(false)

    const changeHandler = (e) => {
        setNumberIsValid(false)
        let telephoneString = e.target.value

        if (!telephoneString.startsWith('+') && telephoneString) {
            if (telephoneString.startsWith('8') || /^\D/.test(telephoneString)) {
                telephoneString = `+7 (`
            }
            else {
                telephoneString = `+7 (${telephoneString}`
            }
        }

        if (!telephoneString.startsWith('+7 (') || /^\+7\s\(\)/.test(telephoneString)) telephoneString = `+7 (`

        if (/^(\+7\s\(\d{1,2})\)/.test(telephoneString)) telephoneString = telephoneString.replace(/^(\+7\s\(\d{1,2})\)/, '$1')

        if (/^(\+7\s\()(\d{1,2})?(\D)$/.test(telephoneString)) {
            telephoneString = telephoneString.trim().replace(/^(\+7\s\()(\d{1,2})?(\D*)$/, '$1$2')
        }

        if(/^(\+7\s\()(\d{1,2})?(\D)(\))/) {
            telephoneString = telephoneString.trim().replace(/^(\+7\s\()(\d{1,2})?(\D)(\))/, '$1$2')
        }

        if (/^\+7\s\(\d{3}$/.test(telephoneString)) telephoneString = `${telephoneString}) `

        if (/^\+7\s\(\d{3}\)$/.test(telephoneString)) telephoneString = `${telephoneString} `

        if (/^(\+7\s\(\d{3}\)\s)(\d{1,2})?(\D)$/.test(telephoneString)) {
            telephoneString = telephoneString.trim().replace(/^(\+7\s\(\d{3}\)\s)(\d{1,2})?(\D)$/, '$1$2')
        }

        if (/^(\+7\s\(\d{3}\)\s)(\d{3})$/.test(telephoneString)) telephoneString = `${telephoneString}-`

        if (/^(\+7\s\(\d{3}\)\s\d{3}-\d?)(\D)$/.test(telephoneString)) {
            telephoneString = telephoneString.trim().replace(/^(\+7\s\(\d{3}\)\s\d{3}-\d?)(\D)$/, '$1')
        }

        if (/^(\+7\s\(\d{3}\)\s\d{3}-\d{2})$/.test(telephoneString)) telephoneString = `${telephoneString}-`

        if (/^(\+7\s\(\d{3}\)\s\d{3}-\d{2}-)(\d{1,2})?(\D)$/.test(telephoneString)) {
            telephoneString = telephoneString.trim().replace(/^(\+7\s\(\d{3}\)\s\d{3}-\d{2}-)(\d{1,2})?(\D)$/, '$1$2')
        }

        if (/^(\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2})(.)$/.test(telephoneString)) {
            telephoneString = telephoneString.replace(/^(\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2})(.)$/, '$1')
        }

        if (/^(\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2})$/.test(telephoneString)) {
            setNumberIsValid(true)
        }

        setNumber(telephoneString)
    }

    const handleKeyPress = (e) => {
        if (e.key !== 'Backspace') return

        setNumber('')
        setNumberIsValid(false)
    }

    const focusHandler = () => {
        setShowError(false)
        setNumberTouched(true)
    }

    const blurHandler = () => {
        if ((!numberIsValid && numberTouched && number)) setShowError(true)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (numberIsValid) {
            const result = number.replaceAll(/\D/gi, '')
            console.log(result)
        }
    }

    return (

        <div
            className={'component_box'}
        >
            <form
                onSubmit={submitHandler}
                className={'form_box'}
            >
                <div className={'form_box--element_box'}>
                    <input
                        className={'form_box--input_field'}
                        ref={inputRef}
                        value={number}
                        onChange={changeHandler}
                        onKeyDown={handleKeyPress}
                        onFocus={focusHandler}
                        onBlur={blurHandler}
                        placeholder={'Номер телефона'}
                        type="tel"
                    />
                    {
                        showError &&
                        <span
                            className={'form_box--error_message'}
                        >
                            неполный номер
                            <TiTimes />
                        </span>
                    }
                    {
                        numberIsValid &&
                        <span
                            className={'form_box--success_message'}
                        >
                            номер корректен
                            <TiTick />
                        </span>
                    }
                </div>
                <button
                    disabled={!numberIsValid}
                    className={'form_box--submit_button'}
                >
                    Отправить
                </button>

            </form>

        </div>
    );
};

export default AuthForm;


