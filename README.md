# projeto19-drivenpass


<div align="center">
<br/>
  
  
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>


  
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>


# Description

Drivenpass is a password management project made in Typescript.

</br>

## Features

-   Register users and Login users
-   Credentials
</br>


## API Reference

### Register users and Login users

```http
POST /signup
```
```http
POST /signin
```

#### Request:

| Body         | Type     |
| :------------| :------- |
| `email`      | `string` | 
| `password`  | `string`| 

`Password length: at least 10`

</br>

### Credentials
</br>

-   Create credentials

```http
POST /credentials
```

#### Request:

| Body         | Type     |
| :------------| :------- |
| `url`      | `string` | 
| `username`  | `string`| 
| `password`  | `string`| 
| `title`  | `string`|







`url must be an valid url`
</br>
`Password length: at least 5`


| Headers         | Type     |
| :------------| :------- |
| `token`      | `Bearer token` |

`An example of token usage: "Bearer eyJhbGciOiJIUzI1NiJ9.NA.hGzbhV32912Ae0JSyxaVYgTs8cng4L6dQCCucAbOLZI"`


</br>
</br>
</br>

-   Get credentials

```http
GET /credentials
```

`In this route, you can get all credentials from a user or an especific credential with the query string named "credentialId".`
</br>

`If you don't pass any query string, it will return all credentials.`

#### Request:

| Headers         | Type     |
| :------------| :------- |
| `token`      | `Bearer token` |



-   Delete credentials

```http
DELETE /credentials/:credentialId
```


#### Request:

| Params         | Type     |
| :------------| :------- |
| `credentialId`      | `int` |

| Headers         | Type     |
| :------------| :------- |
| `token`      | `Bearer token` |