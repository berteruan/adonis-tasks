'use strict'

const Route = use('Route')

// User CRUD
Route.post('users', 'UserController.store').validator('User')

// Sessions CRUD
Route.post('sessions', 'SessionController.store').validator('Session')

// Forgot Password
Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

// File upload
Route.get('files/:id', 'FileController.show')

// Routes under authorization
Route.group(() => {
  // File upload
  Route.post('files', 'FileController.store')

  // Project CRUD
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]))

  // Task CRUD
  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['projects.tasks.store'], ['Task']]]))
}).middleware(['auth'])
