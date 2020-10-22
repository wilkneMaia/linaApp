import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest/utils'

module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>'
  }),
  projects: ['<rootDir>/packages/server/**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.spec.ts']
}
