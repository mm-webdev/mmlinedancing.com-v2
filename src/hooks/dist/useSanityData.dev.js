"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.useSanityData = void 0

var _gatsby = require("gatsby")

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n      query SanityData {\n        sanitySettings(_id: {eq: "settings"}) {\n          colorMain {\n            hex\n          }\n          favicon {\n            asset {\n              path\n            }\n          }\n          logo {\n            asset {\n              fluid {\n                src\n              }\n            }\n          }\n          nav {\n            _key\n            _type\n            name\n            path\n            hide\n          }\n          socials {\n            _key\n            _type\n            title\n            url\n            facode\n          }\n          title\n          aboutImage {\n            asset {\n              fluid {\n                src\n              }\n            }\n          }\n          aboutImageCaption\n          aboutBlurb {\n            _key\n            _type\n            style\n            list\n            _rawChildren\n            children {\n              _key\n              _type\n              text\n            }\n          }\n        }\n        allSanityTimetable {\n          edges {\n            node {\n              id\n            }\n          }\n          nodes {\n            _key\n            _rawScheduledDayAndTime\n            _type\n            _rev\n            _createdAt\n            _id\n            _updatedAt\n            cost\n            id\n            level\n            location\n            notes\n            scheduledDayAndTime {\n              _key\n              _type\n              closesAt\n              day\n              opensAt\n            }\n            title\n          }\n        }\n        allSanityDances {\n          edges {\n            node {\n              id\n              choreographer\n              level\n              songartist\n              title\n              file {\n                asset {\n                  path\n                  url\n                  title\n                  source {\n                    _key\n                    _type\n                    id\n                    name\n                    url\n                  }\n                  size\n                  sha1hash\n                  originalFilename\n                  mimeType\n                  label\n                  id\n                  extension\n                  description\n                  assetId\n                  _updatedAt\n                  _type\n                  _rev\n                  _rawSource\n                  _key\n                  _id\n                  _createdAt\n                }\n                _key\n                _rawAsset\n                _type\n              }\n              _id\n              _key\n              _createdAt\n              _rawFile\n              _updatedAt\n              youtube\n            }\n          }\n        }\n      }\n    ',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

var useSanityData = function useSanityData() {
  var sanity = (0, _gatsby.useStaticQuery)(
    (0, _gatsby.graphql)(_templateObject())
  )
  return sanity
}

exports.useSanityData = useSanityData
