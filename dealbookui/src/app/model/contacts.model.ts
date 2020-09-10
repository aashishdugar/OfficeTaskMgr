export class ContactsModel {
    public API_END_POINTES = {
        contacts : "/dealbook/contacts/",
        createContact : "/dealbook/createbulkcontact/",
        deleteContact : "/dealbook/deletecontact/",
        addActivity : "/dealbook/createActivity/",
        deleteActivity : "/dealbook/deleteactivity/",
        hierarchy: "/dealbook/managersList/",
        activitiesList: '/dealbook/activitieslist/',
        createWidget: '/dealbook/createcriteria/',
        getWidgets: '/dealbook/criterias/',
        deleteWidgets: '/dealbook/deletecriteria/',
    }
    public TABLE_COLUMNS = [
        {column:"Name", title:"name", display: true, isFilter: false},
        {column:"Email", title:"email", display: true, isFilter: false},
        {column:"Phone", title:"mobile", display: true, isFilter: false},
        // {column:"Contact Number", title:"phone", display: true},
        {column:"Company", title:"contactOrg", display: true, isFilter: true},
        {column:"Designation", title:"designation", display: true, isFilter: true},
        {column:"Location", title:"location", display: true, isFilter: true},
        {column:"Report To", title:"reportingto", display: true, isFilter: true},
        {column:"Contact Owner", title:"contactOwner", display: true, isFilter: true},
        {column:"Last Activity Date", title:"updatedOn", display: true, isFilter: true},
        {column:"Creation Date", title:"createdOn", display: true, isFilter: true}
      ];
    // public TABLE_COLUMNS = {
    //     'id': 'Name', 'email': 'Email', 'phonenumber': 'Phone Number',
    //     'contactowner': 'contact owner', 'company': 'company',
    //     'lastactivitydate': 'last activity date', 'creationdate': 'creation date'
    //   };

    public ACTIVITY_TABLE_COLUMNS = [
        {column:"Activity Type", title:"activityType", display: true, isFilter: true},
        {column:"Subject", title:"subject", display: true, isFilter: false},
        {column:"Contact Name", title:"contactName", display: true, isFilter: false},
        {column:"FollowUp Date", title:"followUpDate", display: true, isFilter: true},
        {column:"Update By", title:"updateBy", display: true, isFilter: true},
        {column:"Creation Date", title:"date", display: true, isFilter: true},
    ]

    public const = {
        Activities : "ACTIVITY_TABLE_COLUMNS",
        Contacts : "TABLE_COLUMNS",
    }
}
