package stepDefinition;

import io.restassured.RestAssured;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void initialize(){
		RestAssured.baseURI = "http://localhost:8080/SampleWebProject/restservices/productcatalog";
		System.out.println("");
	}
}


/**
Kamal_Singla
 */