import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('custype/loantype', 'crd/CustsController.getLoanType')
    Route.get('cust_type', 'crd/QamsController.getCustType')
    Route.get('cust_type/:id', 'crd/QamsController.findCustType')
    Route.get('loan_type', 'crd/QamsController.getLoanType')
    Route.get('exp', 'crd/QamsController.getExp')
    Route.get('collateral_type', 'crd/QamsController.getCollaterType')

    // Query Customer answer Question
    Route.get('questions/:cust_no', 'crd/QamsController.getCustQuestionParams')
    Route.post('questions', 'crd/QamsController.SaveCustQuestionParams')



    Route.get('gradparams', 'crd/QamsController.getGradParams')
    Route.get('approach', 'crd/QamsController.getApproach')
}).prefix('api/v1/crd').middleware(['auth'])


Route.group(() => {
    Route.post('qamaping/:id', 'crd/ParamController.CrateAnswerQuestion')
}).prefix('api/v1/params')

