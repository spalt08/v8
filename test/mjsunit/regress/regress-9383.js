// Copyright 2019 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --throws --cache=code --enable-lazy-source-positions

// Test ensures that the getters and setters are added in the same order in the
// generated bytecode regardless of the isolate's hash seed. This gets tested
// because of the use of the code cache.
var c = {
  get b() {
  },
  get getter() {
  },
  set a(n) {
  },
  set a(n) {
  },
  set setter1(n) {
  },
  set setter2(n) {
  },
  set setter3(n) {
  },
  set setter4(n) {
  },
  set setter5(n) {
  },
  set setter6(n) {
  },
  set setter7(n) {
  },
  set setter8(n) {
  },
  set setter9(n) {
  },
  set setter10(n) {
  },
  set setter11(n) {
  },
  set setter12(n) {
  },
  set setter12(n) {
  },
};

for (x in c) {
  print(x);
}

throw new Error();
