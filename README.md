### Hexlet tests and linter status:
[![Actions Status](https://github.com/irina92-08/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/irina92-08/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/679b226ff8e32a00a087/maintainability)](https://codeclimate.com/github/irina92-08/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/679b226ff8e32a00a087/test_coverage)](https://codeclimate.com/github/irina92-08/frontend-project-46/test_coverage) [![genDiff](https://github.com/irina92-08/frontend-project-46/actions/workflows/gendiff-check.yml/badge.svg)](https://github.com/irina92-08/frontend-project-46/actions/workflows/gendiff-check.yml)

Difference Calculator is a program that determines the difference between two data structures.
Utility Features:

Support for various formats: yaml, json.
The classification is calculated in the form of simple text, stylish json.
```
# формат plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

Сomparison of two flat files with the extension .json
[![asciicast](https://asciinema.org/a/xuOAXiuSleovWtKcpLVLtNnMv.png)](https://asciinema.org/a/xuOAXiuSleovWtKcpLVLtNnMv)


Сomparison of two flat files with the extension .yml, .yaml
[![asciicast](https://asciinema.org/a/rWp6GU1cBrdN6WKBMsDiMxaY3.png)](https://asciinema.org/a/rWp6GU1cBrdN6WKBMsDiMxaY3)

Comparison of two files with a nested structure of different formats
[![asciicast](https://asciinema.org/a/z3MiSI47wIfP3dwJq0IOtge4R.png)](https://asciinema.org/a/z3MiSI47wIfP3dwJq0IOtge4R)

The result of differences between files can be displayed in different ways: flat format or nested structure
```gendiff --f stylish file1 file2``` or 
```gendiff --format plain file1 file2```
[![asciicast](https://asciinema.org/a/URdS3doLOoyTMo5cMDi5GAEv6.png)](https://asciinema.org/a/URdS3doLOoyTMo5cMDi5GAEv6)

The result of differences between files in Json format
[![asciicast](https://asciinema.org/a/tVW3SY14lVDE8Xgbncx3HTyNd.png)](https://asciinema.org/a/tVW3SY14lVDE8Xgbncx3HTyNd)