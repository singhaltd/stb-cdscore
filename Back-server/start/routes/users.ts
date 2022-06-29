import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('login', 'AuthensController.login')
    Route.post('logout', 'AuthensController.signout')
    Route.post('auth/create', 'AuthensController.CreateUser')
    Route.get('/profile', 'AuthensController.profile').middleware(['auth'])
    Route.get('/access', 'AuthensController.permisAccess').middleware(['auth'])


    // user managerment
    Route.get('/workflow', 'AuthensController.userWorkflow').middleware(['auth'])
    Route.get('/users', 'user/UsersController.index').middleware(['auth'])
    Route.get('/users/:id', 'user/UsersController.findOne')

    // organization
    Route.get('/departments', 'ORG/DepartsController.index')
    Route.get('/branches', 'ORG/BranchesController.index')
}).prefix('api/v1')