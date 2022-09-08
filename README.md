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



