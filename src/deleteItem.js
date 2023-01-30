"use strict";

const AWS = require("aws-sdk");

const deleteItem = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try {
    await dynamoDB
      .delete({
        TableName: "ItemTableNew",
        Key: { id },
      })
      .promise();
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 204,
    body: JSON.stringify({ msg: "Item Deleted" }),
  };
};

module.exports = {
  handler: deleteItem,
};
