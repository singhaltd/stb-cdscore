import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('custype/loantype', 'crd/CustsController.getLoanType')
    Route.get('cust_type', 'crd/QamsController.getCustType')
    Route.get('loan_type', 'crd/QamsController.getLoanType')
    Route.get('collateral_type', 'crd/QamsController.getCollaterType')


    Route.get('questions/:cust_type/:loan_type/:exp_id', 'crd/QamsController.getQlntype')



    Route.get('gradparams', 'crd/QamsController.getGradParams')
}).prefix('api/v1/crd')