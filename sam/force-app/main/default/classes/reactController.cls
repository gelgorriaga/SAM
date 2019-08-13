global with sharing class reactController {
    public reactController() {}

    @RemoteAction
     global static List<user> hello(integer times){
        List<user> ret = [select id, name from user];
        System.debug('test');
            return ret;
      
    }
}
