# API

| Endpoint     | Method | Parameter     | In     | Required |
| ------------ | ------ | ------------- | ------ | -------- |
| ./pdf        | POST   | authorization | header | ✔        |
|              |        | html          | body   | ✔        |
|              |        | name          | body   | ✔        |
|              |        | prefix        | body   | ✔        |
| ./pdf/system | POST   | x-api-key     | header | ✔        |
|              |        | html          | body   | ✔        |
|              |        | name          | body   | ✔        |
|              |        | prefix        | body   | ✔        |
|              |        | companyId     | body   | ✔        |
|              |        | userId        | body   | ✔        |
