Branches = new Mongo.Collection('branches');

Branches.helpers({

});

Branches.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Branches.before.update(function (userId, doc) {
  doc.updatedAt = moment().toDate();
});

Branches.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200,
    label: "Branch Name"
  },
  description: {
    type: String,
    optional: true,
    max: 1000,
    label: "Branch Description"
  },
  treeOrBranch: {
    label: "Connected to Tree?",
    type: Boolean
  },
  treeOrBranchId: {
    type: String,
    max: 50,
    label: "Tree or Branch?" //0=Branch, 1=Tree
  }
}));
