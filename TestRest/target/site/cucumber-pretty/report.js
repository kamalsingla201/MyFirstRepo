$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddNewProduct.feature");
formatter.feature({
  "line": 1,
  "name": "Add new product feature",
  "description": "",
  "id": "add-new-product-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"\u003cproduct_name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"\u003cproduct_category\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"\u003cUnit_Price\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send a request to add new product",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the response status as \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the newly added product \"\u003cproduct_name\u003e\" using search service",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;",
  "rows": [
    {
      "cells": [
        "product_name",
        "product_category",
        "Unit_Price",
        "status"
      ],
      "line": 15,
      "id": "add-new-product-feature;add-a-new-product;;1"
    },
    {
      "cells": [
        "A House in Bali",
        "Books",
        "15.39D",
        "SUCCESS"
      ],
      "line": 16,
      "id": "add-new-product-feature;add-a-new-product;;2"
    },
    {
      "cells": [
        "Keyboard",
        "Electronics",
        "18.49D",
        "SUCCESS"
      ],
      "line": 17,
      "id": "add-new-product-feature;add-a-new-product;;3"
    },
    {
      "cells": [
        "Mouse",
        "Electronics",
        "21.59D",
        "SUCCESS"
      ],
      "line": 18,
      "id": "add-new-product-feature;add-a-new-product;;4"
    },
    {
      "cells": [
        "17Monitor",
        "Electronics",
        "35.69D",
        "SUCCESS"
      ],
      "line": 19,
      "id": "add-new-product-feature;add-a-new-product;;5"
    },
    {
      "cells": [
        "Hammer",
        "Hardware",
        "40.79D",
        "SUCCESS"
      ],
      "line": 20,
      "id": "add-new-product-feature;add-a-new-product;;6"
    },
    {
      "cells": [
        "Screwdriver",
        "Hardware",
        "51.89D",
        "SUCCESS"
      ],
      "line": 21,
      "id": "add-new-product-feature;add-a-new-product;;7"
    },
    {
      "cells": [
        "English Dictionary",
        "Books",
        "19.99D",
        "SUCCESS"
      ],
      "line": 22,
      "id": "add-new-product-feature;add-a-new-product;;8"
    },
    {
      "cells": [
        "An Alaskan Odysse",
        "Books",
        "07.39D",
        "SUCCESS"
      ],
      "line": 23,
      "id": "add-new-product-feature;add-a-new-product;;9"
    },
    {
      "cells": [
        "LCD Projector",
        "Electronics",
        "25.29D",
        "SUCCESS"
      ],
      "line": 24,
      "id": "add-new-product-feature;add-a-new-product;;10"
    },
    {
      "cells": [
        "Smart Thermostat",
        "Electronics",
        "82.69D",
        "SUCCESS"
      ],
      "line": 25,
      "id": "add-new-product-feature;add-a-new-product;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1790191789,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The add product service is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.the_add_product_service_is_up_and_running()"
});
formatter.result({
  "duration": 639943328,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"A House in Bali\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"15.39D\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send a request to add new product",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the response status as \"SUCCESS\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the newly added product \"A House in Bali\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "A House in Bali",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 9421270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 21
    }
  ],
  "location": "Steps.i_enter_category_as(String)"
});
formatter.result({
  "duration": 207642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15.39D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 323306,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 729025376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUCCESS",
      "offset": 33
    }
  ],
  "location": "Steps.i_verify_the_status_as_in_step(String)"
});
