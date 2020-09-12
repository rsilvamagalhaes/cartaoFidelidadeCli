import React from "react";
import { useForm } from 'react-hook-form/dist/index.ie11'

import ContentHeader from '../components/contentHeader'
import Content from '../components/content'
import { getListVenda } from '../vendas/apiAction'
import {submitConsultarMinhasEstrelasAction} from '../vendas/consultarMinhasEstrelasAction'
import { useDispatch } from 'react-redux';


import { Redirect } from 'react-router-dom'


import { useHistory } from "react-router-dom";
export default function ConsultarMinhasEstrelasForm() {

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
 
  const onSubmit = data => {
    getListVenda(dispatch, data.telefone);
    debugger
  };

  return (
    <div>
      <ContentHeader title='Seja Bem Vindo' small='Informe o telefone e saiba quantas estrelas você tem.'/>
      <Content>
        <form role="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="box-body">
            <div className="input-group input-group-lg col-xs-8 col-sm-8 col-md-3">
                    <input id="telefone" value="19991289211" name="telefone" className="form-control input-lg" placeholder="(99) 9999-9999" type="text" ref={register}/> 
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-info btn-flat">Ver!</button>
                    </span>
              </div>
            </div>
          </form>
      </Content>
    </div>
  )
}
//export default connect(state => mapStateToProps, mapDispatchToProps)(ConsultarMinhasEstrelasForm)


// const selector = formValueSelector("ConsultarMinhasEstrelasForm"); // select current form
// // Decorate form with selected redux form state values
// const mapStateToProps = state => {
//   const telefone = selector(state, "telefone");
//   return {
//     telefone
//   };
// };

// // Decorate form with dispatchable actions
// const mapDispatchToProps = {
//   change
// };

// // create a redux form, then include the above decorators for the created form to utilize
// export default reduxForm({
//   form: "ConsultarMinhasEstrelasForm"
// })(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(ConsultarMinhasEstrelasForm)
// );




// reduxForm({form: 'consultarMinhasEstrelasForm'})(ConsultarMinhasEstrelasForm)
// const selector = formValueSelector('consultarMinhasEstrelasForm')
// const mapStateToProps = state => {
//   telefone: selector(state, 'telefone')
// }

// const mapDispatchToProps = {
//   change
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ConsultarMinhasEstrelasForm)