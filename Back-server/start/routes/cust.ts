import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'crd/CustsController.index')
    Route.post('', 'crd/CustsController.storeCustomer')
    Route.get('/:id', 'crd/CustsController.CustomerDetail')
    Route.put('/:id', 'crd/CustsController.UpdateCustomer')
    Route.delete('/:cust_no', 'crd/CustsController.DeleteCustomer')
    Route.get('/crd/:cust_no', 'crd/QamsController.getCustQuestion')
}).prefix('api/v1/customer').middleware(['auth'])