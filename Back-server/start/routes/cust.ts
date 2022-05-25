import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'crd/CustsController.index')
    Route.post('', 'crd/CustsController.storeCustomer')
}).prefix('api/v1/customer')