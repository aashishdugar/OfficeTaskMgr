import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export class Contactsdata {
    columns = ["Candidate Name", "Target", "Start date", "Bill date", "Discount", "Vaction", "Self Health", 
  "GC", "C2C", "W2 hrly", "W2 sal", "Family Health", "H1B"];
  candidates =
  [
    {
      "id": 0,
      "Candidate Name": "Srikanth",
      "Target": "10%",
      "Start date": "11/01/19",
      "Bill date": "11/01/19",
      "Discount": "3",
      "Vaction": "1",
      "Self Health": "0",
      "Family Health": "1",
      "H1B":"1",
      "GC":"1",
      "C2C":"$2356",
      "W2 hrly":"$23435",
      "W2 sal":"$5345",
      "materials": [
        {
          "id": 1,
          
          "Candidate_Name": "Suresh",
          "created_at": "2017-10-26 03:03:43",
          "updated_at": "2017-10-26 03:03:43",
          "pivot": {
            "supplier_id": 0,
            "material_id": 1
          }
        },
        {
          "id": 2,
          "Candidate_Name": "Raghav",
          "created_at": "2017-10-26 03:19:54",
          "updated_at": "2017-10-26 03:23:21",
          "pivot": {
            "supplier_id": 0,
            "material_id": 2
          }
        },
        {
          "id": 3,
          
          "Candidate_Name": "Prakash",
          "created_at": "2017-10-26 03:33:06",
          "updated_at": "2017-10-26 03:33:06",
          "pivot": {
            "supplier_id": 0,
            "material_id": 3
          }
        }
      ]
    }
  ]

  contacts = 
  {"success":1,"message":"success","data":{"columns":{"account_name":"Account Name","computed_full_name":"Contact Name","first_name":"First Name","last_name":"Last Name","email_id":"Email ID","usercustom_reportsto_voqjbo":"ReportsTo"},"list":[{"account_name":"Wells Fargo","computed_full_name":"Denton Harryman","first_name":"Denton","last_name":"Harryman","email_id":null,"usercustom_reportsto_voqjbo":null,"id":83,"created_by":13,"account_id":3,"phone":"","use_as_primary_contact":0,"contact_owner":"Colby Orr","job_cnt":1,"notes_cnt":0,"contact_owner_format_name":"Colby Orr","record_level_access":{"edit":true,"delete":true},"contact_owner_id":"13","contact_notes_count":"","full_name":"Denton Harryman","encid":83},{"account_name":"Wells Fargo","computed_full_name":"Rama Nightingale","first_name":"Rama","last_name":"Nightingale","email_id":null,"usercustom_reportsto_voqjbo":null,"id":82,"created_by":13,"account_id":3,"phone":"","use_as_primary_contact":0,"contact_owner":"Colby Orr","job_cnt":1,"notes_cnt":0,"contact_owner_format_name":"Colby Orr","record_level_access":{"edit":true,"delete":true},"contact_owner_id":"13","contact_notes_count":"","full_name":"Rama Nightingale","encid":82},{"account_name":"Wells Fargo","computed_full_name":"Meng Jun","first_name":"Meng","last_name":"Jun","email_id":null,"usercustom_reportsto_voqjbo":null,"id":81,"created_by":13,"account_id":3,"phone":"","use_as_primary_contact":0,"contact_owner":"Colby Orr","job_cnt":1,"notes_cnt":0,"contact_owner_format_name":"Colby Orr","record_level_access":{"edit":true,"delete":true},"contact_owner_id":"13","contact_notes_count":"","full_name":"Meng Jun","encid":81},{"account_name":"Wells Fargo","computed_full_name":"Mrudang Majmudar","first_name":"Mrudang","last_name":"Majmudar","email_id":"mrudang.majmudar@wellsfargo.com","usercustom_reportsto_voqjbo":null,"id":80,"created_by":13,"account_id":3,"phone":"7323428115","use_as_primary_contact":0,"contact_owner":"Colby Orr","job_cnt":1,"notes_cnt":0,"contact_owner_format_name":"Colby Orr","record_level_access":{"edit":true,"delete":true},"contact_owner_id":"13","contact_notes_count":"","full_name":"Mrudang Majmudar","encid":80},{"account_name":"Wells Fargo","computed_full_name":"Raja Tangellamudi","first_name":"Raja","last_name":"Tangellamudi","email_id":"Raja.Tangellamudi@wellsfargo.com","usercustom_reportsto_voqjbo":null,"id":79,"created_by":13,"account_id":3,"phone":"","use_as_primary_contact":0,"contact_owner":"Colby Orr","job_cnt":1,"notes_cnt":0,"contact_owner_format_name":"Colby Orr","record_level_access":{"edit":true,"delete":true},"contact_owner_id":"13","contact_notes_count":"","full_name":"Raja Tangellamudi","encid":79},{"account_name":"Wells Fargo","computed_full_name":"Sam Li","first_name":"Sam","last_name":"Li","email_id":"sam.li1@wellsfargo.com","usercustom_reportsto_voqjbo":"Subrata Chatterjee","id":78,"created_by":13,"account_id":3,"phone":"","use_as_primary_contact":0,"contact_owner":"Colby Orr","job_cnt":3,"notes_cnt":0,"contact_owner_format_name":"Colby Orr","record_level_access":{"edit":true,"delete":true},"contact_owner_id":"13","contact_notes_count":"","full_name":"Sam Li","encid":78},{"account_name":"Wells Fargo","computed_full_name":"Stuart Krupnik","first_name":"Stuart","last_name":"Krupnik","email_id":null,"usercustom_reportsto_voqjbo":null,"id":77,"created_by":13,"account_id":3,"phone":"","use_as_primary_contact":0,"contact_owner":"Colby Orr","job_cnt":1,"notes_cnt":0,"contact_owner_format_name":"Colby Orr","record_level_access":{"edit":true,"delete":true},"contact_owner_id":"13","contact_notes_count":"","full_name":"Stuart Krupnik","encid":77}],"pagination":{"last_page":1,"total":7,"current_page":1},"default_view":"all","arrListofMailTemplates":[],"columns_data_type":{"account_name":"text","first_name":"text","last_name":"text","contact_owner":"multiselecttable","email_id":"email","usercustom_reportsto_voqjbo":"text","computed_full_name":""}},"status":1}

  getData(){
      return  of(new HttpResponse({ status: 200, body: {
        columns: this.columns, candidates:this.candidates
      } }))
  }

  getContacts(){
    return  of(new HttpResponse({ status: 200, body: this.contacts }))
}
}
