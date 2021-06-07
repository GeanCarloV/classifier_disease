# Setup and Installation

##### Before starting the configuration make sure that you have the installation of the following:

- [Node](https://nodejs.org/en/download/) 12.19 this current version or onwards.

---

## Backend configuration

1. CD into the server directory.
2. Download your packages and their dependencies: `npm install`.
3. Run `npm run dev` to run the application locally.

Final backend: at this point the backend server locally must be running on http://localhost:4000/

---

## Frontend configuration

1. From root, CD into the client directory.
2. Download your packages and their dependencies: `npm install` .
3. In the client directory, add three new files:
   - .env

The contents of these files will be provided to you. They will look something like this:

```
  REACT_APP_BACKEND_URL=http://localhost:4000
```

4. Launch your UI locally: `npm start`

Final Frontend: You can view the frontend UI locally here: http://localhost:3000/
