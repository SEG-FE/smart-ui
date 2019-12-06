module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/packages/$1"
  },
  // 生成快照
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  // create coverage
  // collectCoverage: true,
  // collectCoverageFrom: ["packages/components/**/*.{js,vue}"],
  coverageDirectory: "<rootDir>/tests/unit/coverage",
  coverageReporters: ["lcov", "text-summary"],
  testURL: "http://localhost/"
};
