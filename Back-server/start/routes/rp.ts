import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('col/:cust_no', 'crd/RpsController.findColleter')
    Route.get('ccy/exchange', 'crd/RpsController.getCcy')
}).prefix('api/v1/rp').middleware(['auth'])
