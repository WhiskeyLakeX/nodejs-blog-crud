module.exports = {
  multipleMongooseToObject: function (mongooseDataArray) {
    return mongooseDataArray.map((mongooseDataDoc) =>
      mongooseDataDoc.toObject()
    );
  },
  singleMongooseToObject: (mongooseDoc) => {
    return mongooseDoc ? mongooseDoc.toObject() : mongooseDoc;
  },
};
