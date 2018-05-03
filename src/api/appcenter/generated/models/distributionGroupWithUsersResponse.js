/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a DistributionGroupWithUsersResponse.
 */
class DistributionGroupWithUsersResponse {
  /**
   * Create a DistributionGroupWithUsersResponse.
   * @member {string} id The unique ID of the distribution group
   * @member {string} name The name of the distribution group used in URLs
   * @member {number} totalUserCount The count of users in the distribution
   * group
   * @member {number} notifiedUserCount The count of non-pending users in the
   * distribution group who will be notified by new releases
   * @member {boolean} [isPublic] Whether the distribution group is public
   * @member {array} users The distribution group users
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupWithUsersResponse
   *
   * @returns {object} metadata of DistributionGroupWithUsersResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupWithUsersResponse',
      type: {
        name: 'Composite',
        className: 'DistributionGroupWithUsersResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          totalUserCount: {
            required: true,
            serializedName: 'total_user_count',
            type: {
              name: 'Number'
            }
          },
          notifiedUserCount: {
            required: true,
            serializedName: 'notified_user_count',
            type: {
              name: 'Number'
            }
          },
          isPublic: {
            required: false,
            serializedName: 'is_public',
            type: {
              name: 'Boolean'
            }
          },
          users: {
            required: true,
            serializedName: 'users',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DistributionGroupUserGetResponseElementType',
                  type: {
                    name: 'Composite',
                    className: 'DistributionGroupUserGetResponse'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupWithUsersResponse;