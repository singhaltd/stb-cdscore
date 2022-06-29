import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('province', 'CitiesController.indexProvince')
    Route.get('district/:pv_id', 'CitiesController.indexDistrict')
}).prefix('api/v1/city').middleware(['auth'])
