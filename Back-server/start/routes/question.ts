
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'crd/QasController.index')
    Route.post('/', 'crd/QasController.StoreQuestionWithAnswer')
}).prefix('api/v1/questions')//.middleware(['auth'])