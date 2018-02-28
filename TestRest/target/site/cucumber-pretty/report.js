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
  "duration": 1514404492,
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
  "duration": 497683763,
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
  "duration": 12698548,
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
  "duration": 155534,
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
  "duration": 324490,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 721229210,
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
formatter.result({
  "duration": 8743104284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A House in Bali",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 317526862,
  "status": "passed"
});
formatter.before({
  "duration": 78951,
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
  "duration": 92373,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"Keyboard\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"18.49D\"",
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
  "name": "I verify the newly added product \"Keyboard\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Keyboard",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 223038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 21
    }
  ],
  "location": "Steps.i_enter_category_as(String)"
});
formatter.result({
  "duration": 166983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18.49D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 208827,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 1915362,
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
formatter.result({
  "duration": 244390205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keyboard",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 192929663,
  "status": "passed"
});
formatter.before({
  "duration": 76582,
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
  "duration": 131060,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"Mouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"21.59D\"",
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
  "name": "I verify the newly added product \"Mouse\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mouse",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 163035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 21
    }
  ],
  "location": "Steps.i_enter_category_as(String)"
});
formatter.result({
  "duration": 151981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21.59D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 183168,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 1937863,
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
formatter.result({
  "duration": 213451113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mouse",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 247929992,
  "status": "passed"
});
formatter.before({
  "duration": 51319,
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
  "duration": 91979,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"17Monitor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"35.69D\"",
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
  "name": "I verify the newly added product \"17Monitor\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "17Monitor",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 128691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 21
    }
  ],
  "location": "Steps.i_enter_category_as(String)"
});
formatter.result({
  "duration": 160666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35.69D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 248697,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 2029052,
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
formatter.result({
  "duration": 241639537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17Monitor",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 188084413,
  "status": "passed"
});
formatter.before({
  "duration": 71846,
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
  "duration": 90004,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"Hammer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"Hardware\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"40.79D\"",
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
  "name": "I verify the newly added product \"Hammer\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Hammer",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 210405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hardware",
      "offset": 21
    }
  ],
  "location": "Steps.i_enter_category_as(String)"
});
formatter.result({
  "duration": 180799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40.79D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 225801,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 1654822,
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
formatter.result({
  "duration": 244865493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hammer",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 327618829,
  "status": "passed"
});
formatter.before({
  "duration": 69083,
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
  "duration": 3988627,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"Screwdriver\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"Hardware\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"51.89D\"",
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
  "name": "I verify the newly added product \"Screwdriver\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Screwdriver",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 156324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hardware",
      "offset": 21
    }
  ],
  "location": "Steps.i_enter_category_as(String)"
});
formatter.result({
  "duration": 143296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51.89D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 333175,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 1284539,
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
formatter.result({
  "duration": 276276714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Screwdriver",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 171193149,
  "status": "passed"
});
formatter.before({
  "duration": 76583,
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
  "duration": 116453,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"English Dictionary\"",
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
  "name": "I enter price as \"19.99D\"",
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
  "name": "I verify the newly added product \"English Dictionary\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "English Dictionary",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 189089,
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
  "duration": 146849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19.99D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 178430,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 1046501,
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
formatter.result({
  "duration": 207224609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English Dictionary",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 212405796,
  "status": "passed"
});
formatter.before({
  "duration": 80530,
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
  "duration": 93163,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"An Alaskan Odysse\"",
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
  "name": "I enter price as \"07.39D\"",
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
  "name": "I verify the newly added product \"An Alaskan Odysse\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "An Alaskan Odysse",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 1166508,
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
  "duration": 174088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07.39D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 180010,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 18513320,
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
formatter.result({
  "duration": 265683405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An Alaskan Odysse",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 244295858,
  "status": "passed"
});
formatter.before({
  "duration": 69872,
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
  "duration": 78951,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"LCD Projector\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"25.29D\"",
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
  "name": "I verify the newly added product \"LCD Projector\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LCD Projector",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 1616531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 21
    }
  ],
  "location": "Steps.i_enter_category_as(String)"
});
formatter.result({
  "duration": 144086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25.29D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 232117,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 1622452,
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
formatter.result({
  "duration": 434740919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LCD Projector",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 166744236,
  "status": "passed"
});
formatter.before({
  "duration": 73030,
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
  "duration": 89610,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add a new product",
  "description": "",
  "id": "add-new-product-feature;add-a-new-product;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter product name as \"Smart Thermostat\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter category as \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter price as \"82.69D\"",
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
  "name": "I verify the newly added product \"Smart Thermostat\" using search service",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Smart Thermostat",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_product_name_as(String)"
});
formatter.result({
  "duration": 150403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 21
    }
  ],
  "location": "Steps.i_enter_category_as(String)"
});
formatter.result({
  "duration": 140138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "82.69D",
      "offset": 18
    }
  ],
  "location": "Steps.i_enter_price_as(String)"
});
formatter.result({
  "duration": 232117,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_send_post_request()"
});
formatter.result({
  "duration": 1371781,
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
formatter.result({
  "duration": 244116638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smart Thermostat",
      "offset": 34
    }
  ],
  "location": "Steps.i_verify_the_newly_added_product_using_search_service(String)"
});
formatter.result({
  "duration": 222020501,
  "status": "passed"
});
formatter.uri("CleanProduct.feature");
formatter.feature({
  "line": 1,
  "name": "Clean products",
  "description": "",
  "id": "clean-products",
  "keyword": "Feature"
});
formatter.before({
  "duration": 69872,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Clean product",
  "description": "",
  "id": "clean-products;clean-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I clean the data",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_clean_the_data()"
});
formatter.result({
  "duration": 705881053,
  "status": "passed"
});
});