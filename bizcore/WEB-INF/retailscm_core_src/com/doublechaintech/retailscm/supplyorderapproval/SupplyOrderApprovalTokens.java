
package com.doublechaintech.retailscm.supplyorderapproval;
import com.doublechaintech.retailscm.CommonTokens;
import java.util.Map;
public class SupplyOrderApprovalTokens extends CommonTokens{

	static final String ALL="__all__"; //do not assign this to common users.
	static final String SELF="__self__";
	static final String OWNER_OBJECT_NAME="supplyOrderApproval";
	
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
	protected SupplyOrderApprovalTokens(){
		//ensure not initialized outside the class
	}
	
	public SupplyOrderApprovalTokens merge(String [] tokens){
		this.parseTokens(tokens);
		return this;
	}
	
	public static SupplyOrderApprovalTokens mergeAll(String [] tokens){
		
		return allTokens().merge(tokens);
	}
	
	protected SupplyOrderApprovalTokens setOwnerObject(String objectName){
		ensureOptions();
		addSimpleOptions(getOwnerObjectKey(), objectName);
		return this;
	}
	
	
	public static SupplyOrderApprovalTokens start(){
		return new SupplyOrderApprovalTokens().setOwnerObject(OWNER_OBJECT_NAME);
	}
	
	protected static SupplyOrderApprovalTokens allTokens(){
		
		return start()
			.withConsumerOrderList()
			.withSupplyOrderList();
	
	}
	public static SupplyOrderApprovalTokens withoutListsTokens(){
		
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
	public SupplyOrderApprovalTokens withConsumerOrderList(){		
		addSimpleOptions(CONSUMER_ORDER_LIST);
		return this;
	}
	public SupplyOrderApprovalTokens analyzeConsumerOrderList(){		
		addSimpleOptions(CONSUMER_ORDER_LIST+".anaylze");
		return this;
	}
	public boolean analyzeConsumerOrderListEnabled(){		
		
		return checkOptions(this.options(), CONSUMER_ORDER_LIST+".anaylze");
	}
	public SupplyOrderApprovalTokens extractMoreFromConsumerOrderList(String idsSeperatedWithComma){		
		addSimpleOptions(CONSUMER_ORDER_LIST+".extractIds", idsSeperatedWithComma);
		return this;
	}
	
	
	
	
	private int consumerOrderListSortCounter = 0;
	public SupplyOrderApprovalTokens sortConsumerOrderListWith(String field, String descOrAsc){		
		addSortMoreOptions(CONSUMER_ORDER_LIST,consumerOrderListSortCounter++, field, descOrAsc);
		return this;
	}
	private int consumerOrderListSearchCounter = 0;
	public SupplyOrderApprovalTokens searchConsumerOrderListWith(String field, String verb, String value){		
		addSearchMoreOptions(CONSUMER_ORDER_LIST,consumerOrderListSearchCounter++, field, verb, value);
		return this;
	}
	
	public SupplyOrderApprovalTokens searchAllTextOfConsumerOrderList(String verb, String value){	
		String field = "id|title|currentStatus";
		addSearchMoreOptions(CONSUMER_ORDER_LIST,consumerOrderListSearchCounter++, field, verb, value);
		return this;
	}
	
	
	
	public SupplyOrderApprovalTokens rowsPerPageOfConsumerOrderList(int rowsPerPage){		
		addSimpleOptions(CONSUMER_ORDER_LIST+"RowsPerPage",rowsPerPage);
		return this;
	}
	public SupplyOrderApprovalTokens currentPageNumberOfConsumerOrderList(int currentPageNumber){		
		addSimpleOptions(CONSUMER_ORDER_LIST+"CurrentPage",currentPageNumber);
		return this;
	}
	public SupplyOrderApprovalTokens retainColumnsOfConsumerOrderList(String[] columns){		
		addSimpleOptions(CONSUMER_ORDER_LIST+"RetainColumns",columns);
		return this;
	}
	public SupplyOrderApprovalTokens excludeColumnsOfConsumerOrderList(String[] columns){		
		addSimpleOptions(CONSUMER_ORDER_LIST+"ExcludeColumns",columns);
		return this;
	}
	
	
		
	protected static final String SUPPLY_ORDER_LIST = "supplyOrderList";
	public String getSupplyOrderList(){
		return SUPPLY_ORDER_LIST;
	}
	public SupplyOrderApprovalTokens withSupplyOrderList(){		
		addSimpleOptions(SUPPLY_ORDER_LIST);
		return this;
	}
	public SupplyOrderApprovalTokens analyzeSupplyOrderList(){		
		addSimpleOptions(SUPPLY_ORDER_LIST+".anaylze");
		return this;
	}
	public boolean analyzeSupplyOrderListEnabled(){		
		
		return checkOptions(this.options(), SUPPLY_ORDER_LIST+".anaylze");
	}
	public SupplyOrderApprovalTokens extractMoreFromSupplyOrderList(String idsSeperatedWithComma){		
		addSimpleOptions(SUPPLY_ORDER_LIST+".extractIds", idsSeperatedWithComma);
		return this;
	}
	
	
	
	
	private int supplyOrderListSortCounter = 0;
	public SupplyOrderApprovalTokens sortSupplyOrderListWith(String field, String descOrAsc){		
		addSortMoreOptions(SUPPLY_ORDER_LIST,supplyOrderListSortCounter++, field, descOrAsc);
		return this;
	}
	private int supplyOrderListSearchCounter = 0;
	public SupplyOrderApprovalTokens searchSupplyOrderListWith(String field, String verb, String value){		
		addSearchMoreOptions(SUPPLY_ORDER_LIST,supplyOrderListSearchCounter++, field, verb, value);
		return this;
	}
	
	public SupplyOrderApprovalTokens searchAllTextOfSupplyOrderList(String verb, String value){	
		String field = "id|title|currentStatus";
		addSearchMoreOptions(SUPPLY_ORDER_LIST,supplyOrderListSearchCounter++, field, verb, value);
		return this;
	}
	
	
	
	public SupplyOrderApprovalTokens rowsPerPageOfSupplyOrderList(int rowsPerPage){		
		addSimpleOptions(SUPPLY_ORDER_LIST+"RowsPerPage",rowsPerPage);
		return this;
	}
	public SupplyOrderApprovalTokens currentPageNumberOfSupplyOrderList(int currentPageNumber){		
		addSimpleOptions(SUPPLY_ORDER_LIST+"CurrentPage",currentPageNumber);
		return this;
	}
	public SupplyOrderApprovalTokens retainColumnsOfSupplyOrderList(String[] columns){		
		addSimpleOptions(SUPPLY_ORDER_LIST+"RetainColumns",columns);
		return this;
	}
	public SupplyOrderApprovalTokens excludeColumnsOfSupplyOrderList(String[] columns){		
		addSimpleOptions(SUPPLY_ORDER_LIST+"ExcludeColumns",columns);
		return this;
	}
	
	
		
	
	public  SupplyOrderApprovalTokens searchEntireObjectText(String verb, String value){
		
		searchAllTextOfConsumerOrderList(verb, value);	
		searchAllTextOfSupplyOrderList(verb, value);	
		return this;
	}
}

