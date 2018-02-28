package stepDefinition;

import org.testng.Assert;

import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	private String productName;
	private String category;
	private double unitPrice;
	private RequestSpecification httpRequest;
	private String addProductPath;

	@Given("^The add product service is up and running$")
	public void the_add_product_service_is_up_and_running() throws Throwable {
		addProductPath="/insert";
	}

	@Given("^I clean the data$")

	public void i_clean_the_data() throws Throwable {

		httpRequest = RestAssured.given();
		Response response = httpRequest.request(Method.GET,"/search/clean");
		JsonPath jsonPathEvaluator = response.jsonPath();
		Assert.assertEquals(jsonPathEvaluator.get("status").toString(),"SUCCESS".toString());	
	}

	@When("^I enter product name as \"([^\"]*)\"$")
	public void i_enter_product_name_as(String productName) throws Throwable {
		this.productName=productName;
	}

	@When("^I enter category as \"([^\"]*)\"$")
	public void i_enter_category_as(String category) throws Throwable {
		this.category=category;
	}

	@When("^I enter price as \"([^\"]*)\"$")
	public void i_enter_price_as(String unitPrice) throws Throwable {
		this.unitPrice=Double.valueOf(unitPrice);	
	}

	@When("^I send a request to add new product$")
	public void i_send_post_request() throws Throwable {

		httpRequest = RestAssured.given().contentType("application/json").
				body("{\"name\" : \""+productName+"\",\"category\" : \""+category+"\",\"unitPrice\":"+unitPrice+"}");
	}

	@Then("^I verify the response status as \"([^\"]*)\"$")
	public void i_verify_the_status_as_in_step(String expected) throws Throwable {
		Response response = httpRequest.request(Method.POST,addProductPath);

		JsonPath jsonPathEvaluator = response.jsonPath();		
		Assert.assertEquals(jsonPathEvaluator.get("status"),expected, "Status is verified successfully");
	}

	@Then("^I verify the newly added product \"([^\"]*)\" using search service$")
	public void i_verify_the_newly_added_product_using_search_service(String productName) throws Throwable {
		//RestAssured.baseURI = "http://localhost:8080/SampleWebProject/restservices/productcatalog/search";
		httpRequest = RestAssured.given().queryParam("name", productName);
		Response response = httpRequest.request(Method.GET,"/search");
		JsonPath jsonPathEvaluator = response.jsonPath();
		Assert.assertEquals(jsonPathEvaluator.get("name").toString(),"["+productName+"]".toString(),"Product name is verified successfully");
	}
}


/**
Kamal_Singla
 */