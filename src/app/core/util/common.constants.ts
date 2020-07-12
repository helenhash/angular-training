export const CommonConstant = {
  DEFAULT_RETAIL_GROUP: 1,
  TITLE_DELETE: 'Confirmation',
  TITLE_COMFIRMATION: 'Confirmation',
  EMPTY: '',
  SPACE: ' ',
  STRING_ZERO: '0',
  FORMAT_DATE1: 'M/D/YYYY',
  FORMAT_DATE2: 'MM/DD/YYYY',
  FORMAT_DATE3: 'MM/DD/YYYY HH:mm:ss',
  PAGE_SIZE: 50,
  ACTION: 'Action',
  ZONE_MODEL: 'Zone Model',
  STORE_MOVE: 'Store Move',
  STORE_SETUP: 'Store Setup',
  INVALID_REQUEST: 'Invalid Request',
  TITLE_DOWNLOAD_AUDIT_LOGS: 'Audit Logs',
  ZONE_MAINTENANCE: 'Zone Maintenance',
};

export const MessageConstant = {
  REDIRECT_CAN_DEACTIVATE: 'There are unsaved changes on this page. Are you sure you want to continue?',
  NEW_ZONE_REQUIRED: 'Please enter New Zone number.',
  COPY_ZONE_REQUIRED: 'Please enter Zone number.',
  COPY_STORE_REQUIRED: 'Please enter Store number.',
  CREATE_ZONE_MODEL_SUCCESS: 'Zone Model request was successfully added.',
  UPDATE_ZONE_MODEL_SUCCESS: 'Your Zone Model request has been updated successfully.',
  ERROR_DELETE_HAD_SUBMITTED: 'Only Draft and Invalid request(s) can be deleted.',
  ERROR_SUBMIT_NOT_DRAFT_FAILED: 'Only Draft or Failed request(s) can be submitted.',
  REMOVED_ZONE_MODEL_ROWS_SUCCESS: 'Removed selected Zone Model request(s) successfully.',
  REMOVED_STORE_MOVE_ROWS_SUCCESS: 'Removed selected Store Move request(s) successfully.',
  ZONE_MODEL_NO_RECORD_SELECTED: 'No Zone Model request(s) are selected. \n' +
    'Please select at least one request and try again later.',
  STORE_MOVE_NO_RECORD_SELECTED: 'No Store Move request(s) are selected. \n' +
    'Please select at least one request and try again later.',
  CONFIRM_DELETE_ZONE_MODEL_MSG: 'Are you sure you want to delete the selected Zone Model request(s)?',
  CONFIRM_DELETE_STORE_MOVE_MSG: 'Are you sure you want to delete the selected Store Move request(s)?',
  SYSTEM_ENCOUNTERED_MSG: 'System has encountered an error. \n' +
    'Please try again later.',
  SUBMIT_VALIDATE_MSG: 'Only Draft and Failed request(s) can be submitted.',
  CONFIRM_SUBMIT_MSG: 'Are you sure you want to submit the selected Zone Model request(s)?',
  CONFIRM_SUBMIT_STORE_MOVE_MSG: 'Are you sure you want to submit the selected Store Move request(s)?',
  SUBMIT_SUCCESS_MSG: 'Submitted selected Zone Model request(s) successfully.',
  SUBMIT_STORE_MOVE_SUCCESS_MSG: 'Submitted selected Store Move request(s) successfully.',
  SESSION_EXPIRE_MSG: 'Your session is about to expire. You will be logged out in 3 seconds.',
  INVALID_USERNAME_PASS_MSG: 'Invalid Username and/or Password',
  UNAUTHORIZED_MSG: 'Unauthorized Access',
  LOST_CONNECTION_MSG: 'Server Connection Lost',
  ZONE_ARE_NOT_SAME_MSG: 'New Zone and Copy from Zone should not be the same.',
  NO_CHANGE_TO_UPDATE_MSG: 'There is no change to save.',
  REQUEST_IS_VALID_NOW_MSG: 'The request is valid now.',
  NEW_ZONE_AND_RETAIL_NOT_IN_RETAIL_GRP_ZONE_MSG: 'Relation between New Zone and Retail Group has not been setup.',
  COPY_ZONE_AND_RETAIL_NOT_IN_RETAIL_GRP_ZONE_MSG: 'Relation between Copy from Zone and Retail Group has not been setup.',
  COPY_STORE_AND_RETAIL_NOT_IN_RETAIL_ZONE: 'Relation between Copy from Store and Retail Group has not been setup.',
  DUPLICATE_ZONE_MODEL_REQUEST_MSG: 'Duplicate Zone Model request(s) were found.',
  CONTENT_DOWNLOAD_AUDIT_LOGS: 'Please wait while the file is being generated',
  NO_ZONE_MODEL_TO_AUDIT: 'There is no deleted Zone Modeling request to be generated.',
  STORE_AND_RETAIL_NOT_IN_RETAIL_ZONE_MSG: 'Relation between Store and Retail Group has not been setup.',
  DUPLICATE_STORE_MOVE_REQUEST_MSG: 'Duplicate Store Move request(s) were found.',
  CREATE_STORE_MOVE_SUCCESS: 'Store Move request was successfully added.',
  UPDATE_STORE_MOVE_SUCCESS: 'Your Store Move request has been updated successfully.',
  ZONE_ARE_NOT_SAME_STORE_MOVE_MSG: 'Old Zone and New Zone should not be the same.',
  NO_STORE_MV_TO_AUDIT: 'There is no deleted Store Move request to be generated.',
  ZONE_AND_RETAIL_NOT_IN_RETAIL_GRP_ZONE_MSG: 'Relation between Zone and Retail Group has not been setup.',
  STR_SETUP_STORE_ASSIGNED_MSG: 'Store has already been assigned to a Zone.',
  STR_SETUP_CREATE_SUCCESS: 'Store Setup request was successfully added.',
  ZONE_DES_REQUIRED_MSG: 'Please enter Description.',
  ZONE_CREATE_SUCCESS_MSG: 'New Zone was successfully created.',
  ZONE_UPDATE_SUCCESS_MSG: 'Zone information has been updated successfully.',

};

export const EventStatusConstant = {
  DRAFT: 'D',
  PUBLISHED: 'P'
};
export const ColumnGroupConstant = {
  // constant for column group header
  ZONE_INFORMATION: {
    headerName: 'ZONE INFORMATION'
  },
  STORE_INFORMATION: {
    headerName: 'STORE INFORMATION'
  },
  OLD_ZONE: {
    headerName: 'OLD ZONE'
  },
  NEW_ZONE: {
    headerName: 'NEW ZONE'
  },
  COPY_FROM_ZONE: {
    headerName: 'COPY FROM ZONE'
  },
  COPY_FROM_STORE: {
    headerName: 'COPY FROM STORE'
  },
  DETAILS: {
    headerName: 'DETAILS'
  }
}
export const ColumnConstant = {
  // constant for columns Zone model
  REQUEST_ID: {
    headerName: 'Request ID', field: 'requestID', description: 'Request ID'
  },
  ZONE_NUMBER: {
    headerName: 'Zone NBR', field: 'zoneNumber', description: 'Zone Number', required: true, dataType: 'integer',
    maxLength: 5, width: 130
  },
  ZONE_NAME: {
    headerName: 'Zone Name', field: 'zoneName', description: 'Zone Name', required: true, maxLength: 30, width: 243
  },
  ZONE_TYPE: {
    headerName: 'Zone Type', field: 'zoneType', description: 'Zone Type', required: true, maxLength: 1, width: 110
  },
  RETAIL_GROUP: {
    headerName: 'Retail Group', field: 'retailGroup', description: 'Retail Group', required: true, dataType: 'integer',
    maxLength: 3, width: 110
  },
  COPY_ZONE_NUMBER: {
    headerName: 'Zone NBR', field: 'copyZoneNumber', description: 'Zone Number', dataType: 'integer', maxLength: 5, width: 110
  },
  COPY_ZONE_NAME: {
    headerName: 'Zone Name', field: 'copyZoneName', description: 'Zone Name', maxLength: 30, width: 243
  },
  COPY_STORE_NUMBER: {
    headerName: 'Store NBR', field: 'copyStoreNumber', description: 'Store Number', dataType: 'integer', maxLength: 5,
    width: 110
  },
  COPY_STORE_NAME: {
    headerName: 'Store Name', field: 'copyStoreName', description: 'Store Name', maxLength: 30, width: 243
  },
  COPY_TYPE: {
    headerName: 'Copy Type', field: 'copyType', description: 'Copy Type', required: true, maxLength: 1, width: 110
  },
  STATUS: {
    headerName: 'Status', field: 'status', description: 'Status', required: true, maxLength: 15, width: 110
  },
  SUBMIT_ID: {
    headerName: 'Submit ID', field: 'submitId', description: 'Submit ID'
  },
  CREATE_ON: {headerName: 'Created On', field: 'createdTime'},
  CREATE_BY: {headerName: 'Created By', field: 'createdBy'},
  LAST_UPDATE_ON: {headerName: 'Last Updated On', field: 'lastUpdatedTime', width: 140},
  LAST_UPDATE_BY: {headerName: 'Last Updated By', field: 'lastUpdatedBy', width: 130},

  // Store move column
  STORE_NUMBER: {
    headerName: 'Store NBR', field: 'storeNumber', description: 'Store Number', required: true, dataType: 'integer', maxLength: 5
  },
  STORE_NAME: {
    headerName: 'Store Name', field: 'storeName', description: 'Store Name', required: true, maxLength: 30
  },
  STORE_TYPE: {
    headerName: 'Store Type', field: 'storeType', description: 'Store Type', required: true, maxLength: 1
  },

  OLD_ZONE_NUMBER: {
    headerName: 'Zone NBR', field: 'oldZoneNumber', description: 'Zone Number', required: true, dataType: 'integer', maxLength: 5
  },
  OLD_ZONE_NAME: {
    headerName: 'Zone Name', field: 'oldZoneName', description: 'Zone Name', required: true, maxLength: 30
  },
  NEW_ZONE_NUMBER: {
    headerName: 'Zone NBR', field: 'newZoneNumber', description: 'Zone Number', required: true, dataType: 'integer', maxLength: 5
  },
  NEW_ZONE_NAME: {
    headerName: 'Zone Name', field: 'newZoneName', description: 'Zone Name', required: true, maxLength: 30
  },
  EXCEPTION_FLAG: {
    headerName: 'W/Str Excep', field: 'exceptionFlag', description: 'Warehouse/Store Exception flag', required: true, maxLength: 1
  },

  // Zone Maintenance column
  ZONE_MAINTENANCE_NUMBER: {
    headerName: 'Zone Number', field: 'zoneNumber', description: 'Zone Number', required: true, dataType: 'integer',
    maxLength: 5, width: 130
  },
  ZONE_MAINTENANCE_DESC: {
    headerName: 'Description', field: 'zoneDesc', description: 'Description', required: true, maxLength: 30, width: 300
  },
  ZONE_MAINTENANCE_TYPE_CD: {
    headerName: 'Zone Type', field: 'zoneTypeCd', description: 'Zone Type', required: true, maxLength: 1, width: 300
  },
};

export const StatusConstant = {
  DRAFT: {
    code: 'D',
    value: 'Draft'
  },
  SUBMITTED: {
    code: 'S',
    value: 'Submitted'
  },
  PROCESSING: {
    code: 'P',
    value: 'Processing'
  },
  INVALID: {
    code: 'I',
    value: 'Invalid'
  },
  FAILED: {
    code: 'F',
    value: 'Failed'
  },
  COMPLETED: {
    code: 'C',
    value: 'Completed'
  },
}
export const ResponseConstant = {
  ERROR_CODE: -9999,
  SUCCESS_CODE: 100,
  QUEUE_FAIL_CODE: -99,
};
export const MaxlengthConstant = {
  CORP: 5,
  STORE_NAME: 30,
  STORE_TYPE: 50,
  HEB_REGION: 30,
  DIST_CD: 5,
  HEB_DIVISION: 30,
  DIST_CD_MIN_VALUE: 1,
};

export const TooltipConstant = {
  CANNOT_BE_GREATER_THAN_DATE_RANGE: 'Start Date cannot be greater than End Date.',
  FIELD_REQUIRED: 'This field is required to enter.',
  PLEASE_ENTER_SPECIFIED_DATA: 'Please enter the specified data.',
  ZONE_NOT_IN_PD_ZONES_MSG: 'New Zone has not been setup.',
  ZONE_PRESENT_IN_RETAIL_ZONE_MSG: 'There are Store(s) exist in New Zone.',
  STORE_NOT_IN_PD_STORE_MSG: 'Store has not been setup.',
  STR_SETUP_ZONE_NOT_IN_PD_ZONES_MSG: 'Zone has not been setup.',
};
