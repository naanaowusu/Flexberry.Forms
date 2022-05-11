import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-forms-registration', 'Unit | Model | i-i-s-forms-registration', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-forms-course',
    'model:i-i-s-forms-registration',
    'model:i-i-s-forms-student',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
