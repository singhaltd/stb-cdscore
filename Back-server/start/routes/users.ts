import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('login', 'AuthensController.login')
    Route.post('auth/create', 'AuthensController.CreateUser')
    Route.get('/profile', 'AuthensController.profile').middleware(['auth'])


    // user managerment
    Route.get('/users', 'user/UsersController.index')//.middleware(['auth'])
    Route.get('/users/:id', 'user/UsersController.findOne')
}).prefix('api/v1')