import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get(':cust_no', 'crd/CollateralsController.Index')
    Route.get('other/:cust_no', 'crd/CollateralsController.otherIndex')

    Route.post('other/:cust_no', 'crd/CollateralsController.otherStore')
    Route.post('machine/:cust_no', 'crd/CollateralsController.machineStore')
    Route.post('solid/:cust_no', 'crd/CollateralsController.solidStore')
    Route.post('account/:cust_no', 'crd/CollateralsController.accountStore')
    Route.post('vihicle/:cust_no', 'crd/CollateralsController.vihicleStore')
    Route.post('project/:cust_no', 'crd/CollateralsController.projectStore')
}).prefix('api/v1/colleteral').middleware(['auth'])
