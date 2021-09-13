import React from 'react'
import ButtonSite from './ButtonSite'

export const ButtonCustom = ({ text, type, callback }) => {
  return <ButtonSite type={type} text={text} oc={callback} />
}

const create = 'Create'
const edit = 'Edit'
const deleteItem = 'Delete'
const back = 'Back'

export const ButtonTypeList = { create, edit, deleteItem, back }
