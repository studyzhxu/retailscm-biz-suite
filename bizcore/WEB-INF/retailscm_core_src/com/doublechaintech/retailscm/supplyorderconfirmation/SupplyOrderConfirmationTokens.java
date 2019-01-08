
package com.doublechaintech.retailscm.supplyorderconfirmation;
import com.doublechaintech.retailscm.CommonTokens;
import java.util.Map;
public class SupplyOrderConfirmationTokens extends CommonTokens{

	static final String ALL="__all__"; //do not assign this to common users.
	static final String SELF="__self__";
	static final String OWNER_OBJECT_NAME="supplyOrderConfirmation";
	
	public static boolean checkOptions(Map<String,Object> options, String optionToCheck){
		
		if(options==null){
 			return false; //completely no option here
 		}
 		if(options.containsKey(ALL)){
 			//danger, debug only, might load the entire database!, really terrible
 			return true;
 		}
		String ownerKey = getOwnerObjectKey();
		Object ownerObject =(String) options.get(ownerKey);
		if(ownerObject ==  null){
			return false;
		}
		if(!ownerObject.equals(OWNER_OBJECT_NAME)){ //is the owner? 
			return false; 
		}
		
 		if(options.containsKey(optionToCheck)){
 			//options.remove(optionToCheck);
 			//consume the key, can not use any more to extract the data with the same token.			
 			return true;
 		}
 		
 		return false;
	
	}
	protected SupplyOrderConfirmationTokens(){
		//ensure not initialized outside the class
	}
	
	public SupplyOrderConfirmationTokens merge(String [] tokens){
		this.parseTokens(tokens);
		return this;
	}
	
	public static SupplyOrderConfirmationTokens mergeAll(String [] tokens){
		
		return allTokens().merge(tokens);
	}
	
	protected SupplyOrderConfirmationTokens setOwnerObject(String objectName){
		ensureOptions();
		addSimpleOptions(getOwnerObjectKey(), objectName);
		return this;
	}
	
	
	public static SupplyOrderConfirmationTokens start(){
		return new SupplyOrderConfirmationTokens().setOwnerObject(OWNER_OBJECT_NAME);
	}
	
	protected static SupplyOrderConfirmationTokens allTokens(){
		
		return start()
			.withConsumerOrderList()
			.withSupplyOrderList();
	
	}
	public static SupplyOrderConfirmationTokens withoutListsTokens(){
		
		return start();
	
	}
	
	public static Map <String,Object> all(){
		return allTokens().done();
	}
	public static Map <String,Object> withoutLists(){
		return withoutListsTokens().done();
	}
	public static Map <String,Object> empty(){
		return start().done();
	}

	protected static final String CONSUMER_ORDER_LIST = "consumerOrderList";
	public String getConsumerOrderList(){
		return CONSUMER_ORDER_LIST;
	}
	public SupplyOrderConfirmationTokens withConsumerOrderList(){		
		addSimpleOptions(CONSUMER_ORDER_LIST);
		return this;
	}
	public SupplyOrderConfirmationTokens analyzeConsumerOrderList(){		
		addSimpleOptions(CONSUMER_ORDER_LIST+".anaylze");
		return this;
	}
	public boolean analyzeConsumerOrderListEnabled(){		
		
		return checkOptions(this.options(), CONSUMER_ORDER_LIST+".anaylze");
	}
	public SupplyOrderConfirmationTokens extractMoreFromConsumerOrderList(String idsSeperatedWithComma){		
		addSimpleOptions(CONSUMER_ORDER_LIST+".extractIds", idsSeperatedWithComma);
		return this;
	}
	
	
	
	
	private int consumerOrderListSortCounter = 0;
	public SupplyOrderConfirmationTokens sortConsumerOrderListWith(String field, String descOrAsc){		
		addSortMoreOptions(CONSUMER_ORDER_LIST,consumerOrderListSortCounter++, field, descOrAsc);
		return this;
	}
	private int consumerOrderListSearchCounter = 0;
	public SupplyOrderConfirmationTokens searchConsumerOrderListWith(String field, String verb, String value){		
		addSearchMoreOptions(CONSUMER_ORDER_LIST,consumerOrderListSearchCounter++, field, verb, value);
		return this;
	}
	
	public SupplyOrderConfirmationTokens searchAllTextOfConsumerOrderList(String verb, String value){	
		String field = "id|title|currentStatus";
		addSearchMoreOptions(CONSUMER_ORDER_LIST,consumerOrderListSearchCounter++, field, verb, value);
		return this;
	}
	
	
	
	public SupplyOrderConfirmationTokens rowsPerPageOfConsumerOrderList(int rowsPerPage){		
		addSimpleOptions(CONSUMER_ORDER_LIST+"RowsPerPage",rowsPerPage);
		return this;
	}
	public SupplyOrderConfirmationTokens currentPageNumberOfConsumerOrderList(int currentPageNumber){		
		addSimpleOptions(CONSUMER_ORDER_LIST+"CurrentPage",currentPageNumber);
		return this;
	}
	public SupplyOrderConfirmationTokens retainColumnsOfConsumerOrderList(String[] columns){		
		addSimpleOptions(CONSUMER_ORDER_LIST+"RetainColumns",columns);
		return this;
	}
	public SupplyOrderConfirmationTokens excludeColumnsOfConsumerOrderList(String[] columns){		
		addSimpleOptions(CONSUMER_ORDER_LIST+"ExcludeColumns",columns);
		return this;
	}
	
	
		
	protected static final String SUPPLY_ORDER_LIST = "supplyOrderList";
	public String getSupplyOrderList(){
		return SUPPLY_ORDER_LIST;
	}
	public SupplyOrderConfirmationTokens withSupplyOrderList(){		
		addSimpleOptions(SUPPLY_ORDER_LIST);
		return this;
	}
	public SupplyOrderConfirmationTokens analyzeSupplyOrderList(){		
		addSimpleOptions(SUPPLY_ORDER_LIST+".anaylze");
		return this;
	}
	public boolean analyzeSupplyOrderListEnabled(){		
		
		return checkOptions(this.options(), SUPPLY_ORDER_LIST+".anaylze");
	}
	public SupplyOrderConfirmationTokens extractMoreFromSupplyOrderList(String idsSeperatedWithComma){		
		addSimpleOptions(SUPPLY_ORDER_LIST+".extractIds", idsSeperatedWithComma);
		return this;
	}
	
	
	
	
	private int supplyOrderListSortCounter = 0;
	public SupplyOrderConfirmationTokens sortSupplyOrderListWith(String field, String descOrAsc){		
		addSortMoreOptions(SUPPLY_ORDER_LIST,supplyOrderListSortCounter++, field, descOrAsc);
		return this;
	}
	private int supplyOrderListSearchCounter = 0;
	public SupplyOrderConfirmationTokens searchSupplyOrderListWith(String field, String verb, String value){		
		addSearchMoreOptions(SUPPLY_ORDER_LIST,supplyOrderListSearchCounter++, field, verb, value);
		return this;
	}
	
	public SupplyOrderConfirmationTokens searchAllTextOfSupplyOrderList(String verb, String value){	
		String field = "id|title|currentStatus";
		addSearchMoreOptions(SUPPLY_ORDER_LIST,supplyOrderListSearchCounter++, field, verb, value);
		return this;
	}
	
	
	
	public SupplyOrderConfirmationTokens rowsPerPageOfSupplyOrderList(int rowsPerPage){		
		addSimpleOptions(SUPPLY_ORDER_LIST+"RowsPerPage",rowsPerPage);
		return this;
	}
	public SupplyOrderConfirmationTokens currentPageNumberOfSupplyOrderList(int currentPageNumber){		
		addSimpleOptions(SUPPLY_ORDER_LIST+"CurrentPage",currentPageNumber);
		return this;
	}
	public SupplyOrderConfirmationTokens retainColumnsOfSupplyOrderList(String[] columns){		
		addSimpleOptions(SUPPLY_ORDER_LIST+"RetainColumns",columns);
		return this;
	}
	public SupplyOrderConfirmationTokens excludeColumnsOfSupplyOrderList(String[] columns){		
		addSimpleOptions(SUPPLY_ORDER_LIST+"ExcludeColumns",columns);
		return this;
	}
	
	
		
	
	public  SupplyOrderConfirmationTokens searchEntireObjectText(String verb, String value){
		
		searchAllTextOfConsumerOrderList(verb, value);	
		searchAllTextOfSupplyOrderList(verb, value);	
		return this;
	}
}

