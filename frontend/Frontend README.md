# Frontend

Our frontend has been designed using React written in Javascript.

**The frontend can be customised for your study.**

## Environmental variables

`template.env` provides a template for the required environmental variables needed for deployment.

Five environmental variables are required:

- REACT_APP_MONGODB_DATABASE - The MongoDB database to save the user study results. See `Backend README.md` in `Backend/` for more info. _Possible values: `Production`, `Dev`, `Testing`_
- REACT_APP_ENVIRONMENT - _Possible values: `Production`, `Dev`, `Testing`_
- REACT_APP_PROLIFIC_REDIRECT_COMPLETE - The redirect link which you redirect your participants after completing the study.
- REACT_APP_PROLIFIC_REDIRECT_CONSENT - The redirect link which you redirect your participants if they do not consent to complete the study.
- REACT_APP_WORKERS_ENDPOINT - The API POST request URL to save study data. View `Backend/` for more information.

To set up the environmental variables:

1. Copy `template.env` into the same folder (`frontend/`) and rename `.env`
2. Set the appropriate values for each environmental variable required in the `.env` file.

## Getting started

1. Install all dependencies from `package.json`

   ```
   $ npm install
   ```

2. Run local server

   ```
   $ npm start
   ```
