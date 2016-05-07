# text-to-number

Convert a number written in words (e.g. "seven", "five hundred and six", "one thousand two hundred and thirty-four") to its numerical format (e.g. "7", "506", "1234").

At this moment numbers written in English and Spanish can be converted.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

Skip this section! The library does not need nothing installed in order to run :D


### Installing and usage

#### Browser

Just include the num2text.js file to your site.

```
<script src="text2num.js"></script>
```
Start using it:

```

//English numbers
var number = text2num.convert("Seven")); //number = 7
var number = text2num.convert("one thousand two hundred and thirty-four"); // number = 1234
var number = text2num.convert("five hundred and six million")); //number = 506000000

//Spanish numbers
var number = text2num.convert("Doscientos quince")); //number = 215
var number = text2num.convert("Siete mil doscientos doce") number = 7212

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jvadillo/text-to-number/tags). 

## Authors

* **Jon Vadillo** - *Initial work* - [jvadillo](https://github.com/jvadillo)

See also the list of [contributors](https://github.com/jvadillo/text-to-number/contributors) who participated in this project.

## License

This project is licensed under the MIT License.

