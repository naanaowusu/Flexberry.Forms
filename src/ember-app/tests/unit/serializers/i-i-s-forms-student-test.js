import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-forms-student', 'Unit | Serializer | i-i-s-forms-student', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-forms-student',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-forms-t-course',
    'transform:i-i-s-forms-t-gender',

    'model:i-i-s-forms-course',
    'model:i-i-s-forms-registration',
    'model:i-i-s-forms-student',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
