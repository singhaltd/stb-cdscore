import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('login', 'AuthensController.login')
    Route.post('auth/create', 'AuthensController.CreateUser')
}).prefix('api/v1')