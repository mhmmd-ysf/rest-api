# rest-api
REST API built with Express and Sequelize

List of basic routes:
Route                    | HTTP | Header(s) | Body   | Description          
-------------------------|------|-----------|--------|----------------------
`/api/hello?name={name}` | GET  | `none`    | `none` | Print hello, `{name}`

List of user routes:
Route | HTTP | Header(s) | Body | Description
------|------|-----------|------|------------
`/api/users` | GET | `none` | `none` | Get all the users
`/api/users/:id` | GET | `none` | `none` | Get a single user
`/api/users` | POST | `none` | `name:string` __(Required)__,<br>`email:string` __(Required)__,<br>`password:string` __(Required)__ | Create a user
`/api/users/:id` | DELETE | `none` | `none` | Delete a user
`/api/users/:id` | PUT | `none` |`name:string` __(Required)__,<br>`email:string` __(Required)__,<br>`password:string` __(Required)__ | Update a user with new info

List if filter routes:
Route | HTTP | Description
- | - | -
`/api/users?name=<KEYWORD>` | GET | Get users by name