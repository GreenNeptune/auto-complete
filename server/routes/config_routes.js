const indexR = require("./index");
const employeesR = require("./employees");




exports.corsAccessControl = (app) => {
  app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,auth-token');
    next();
  });
}

exports.routesInit = (app) => {
  app.use("/", indexR);
  app.use("/employees", employeesR);



  app.use((req, res) => {
    res.status(404).json({ msg: "404 url page not found" })
  })
}