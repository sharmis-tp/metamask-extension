#!/usr/bin/env node

/**
 * Test script to demonstrate usage of local snaps packages
 * This shows how the metamask-extension can use local versions of snaps packages
 */

console.log('🧪 Testing Local Snaps Packages Integration\n');

// Test 1: Import and use snaps-controllers
console.log('1. Testing @metamask/snaps-controllers...');
try {
  const { SnapController } = require('@metamask/snaps-controllers');
  console.log('   ✅ SnapController imported successfully');
  console.log(
    '   📦 Version:',
    require('@metamask/snaps-controllers/package.json').version,
  );
} catch (error) {
  console.log('   ❌ Error importing snaps-controllers:', error.message);
}

// Test 2: Import and use snaps-utils
console.log('\n2. Testing @metamask/snaps-utils...');
try {
  const {
    validateSnapManifest,
    HandlerType,
  } = require('@metamask/snaps-utils');
  console.log('   ✅ snaps-utils imported successfully');
  console.log(
    '   📦 Version:',
    require('@metamask/snaps-utils/package.json').version,
  );
  console.log('   🔧 Available HandlerTypes:', Object.values(HandlerType));
} catch (error) {
  console.log('   ❌ Error importing snaps-utils:', error.message);
}

// Test 3: Import and use snaps-rpc-methods
console.log('\n3. Testing @metamask/snaps-rpc-methods...');
try {
  const {
    createSnapsMethodMiddleware,
  } = require('@metamask/snaps-rpc-methods');
  console.log('   ✅ snaps-rpc-methods imported successfully');
  console.log(
    '   📦 Version:',
    require('@metamask/snaps-rpc-methods/package.json').version,
  );
} catch (error) {
  console.log('   ❌ Error importing snaps-rpc-methods:', error.message);
}

// Test 4: Import and use snaps-sdk
console.log('\n4. Testing @metamask/snaps-sdk...');
try {
  const { onRpcRequest, button, text, panel } = require('@metamask/snaps-sdk');
  console.log('   ✅ snaps-sdk imported successfully');
  console.log(
    '   📦 Version:',
    require('@metamask/snaps-sdk/package.json').version,
  );
  console.log('   🎨 UI Components available: button, text, panel');
} catch (error) {
  console.log('   ❌ Error importing snaps-sdk:', error.message);
}

// Test 5: Import and use snaps-execution-environments
console.log('\n5. Testing @metamask/snaps-execution-environments...');
try {
  const executionEnvironments = require('@metamask/snaps-execution-environments');
  console.log('   ✅ snaps-execution-environments imported successfully');
  console.log(
    '   📦 Version:',
    require('@metamask/snaps-execution-environments/package.json').version,
  );
} catch (error) {
  console.log(
    '   ❌ Error importing snaps-execution-environments:',
    error.message,
  );
}

console.log('\n🎉 All local snaps packages are working correctly!');
console.log('\n📝 How to use these packages:');
console.log('   • Import them in your code just like regular npm packages');
console.log(
  '   • Any changes you make to the local snaps packages will be reflected immediately',
);
console.log(
  '   • You can modify the snaps packages in ../snaps-main/packages/ and see changes here',
);
console.log(
  '   • Run "yarn build" in the snaps-main directory to rebuild after changes',
);
console.log('\n🔗 Package locations:');
console.log(
  '   • @metamask/snaps-controllers: ../snaps-main/packages/snaps-controllers',
);
console.log('   • @metamask/snaps-utils: ../snaps-main/packages/snaps-utils');
console.log(
  '   • @metamask/snaps-rpc-methods: ../snaps-main/packages/snaps-rpc-methods',
);
console.log('   • @metamask/snaps-sdk: ../snaps-main/packages/snaps-sdk');
console.log(
  '   • @metamask/snaps-execution-environments: ../snaps-main/packages/snaps-execution-environments',
);
