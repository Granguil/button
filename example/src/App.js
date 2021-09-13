import React from 'react'

import { ButtonCustom, ButtonTypeList } from 'button'
import 'button/dist/index.css'

const App = () => {
  return (
    <div>
      <ButtonCustom
        text='Création de Granguil'
        callback={() => alert('Création')}
        type={ButtonTypeList.create}
      />
      <ButtonCustom
        text='Suppression de Granguil'
        callback={() => alert('Suppression')}
        type={ButtonTypeList.deleteItem}
      />
      <ButtonCustom
        text='Retour de Granguil'
        callback={() => alert('Retour')}
        type={ButtonTypeList.back}
      />
      <ButtonCustom
        text='Modification de Granguil'
        callback={() => alert('Modification')}
        type={ButtonTypeList.edit}
      />
    </div>
  )
}

export default App
