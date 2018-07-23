(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{176:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),n("ul",[n("li",[n("p",[t._v("The creation of TokenTypes using the class keyword syntax has been soft deprecated.\nand is no longer officially supported.\ne.g:")]),t._m(3),n("p",[t._v("See the reasoning in "),n("a",{attrs:{href:"https://github.com/SAP/chevrotain/issues/653",target:"_blank",rel:"noopener noreferrer"}},[t._v("this issue"),n("OutboundLink")],1),t._v(".")])])]),n("ul",[t._m(4),t._m(5),t._m(6),n("li",[n("p",[t._v("The constructors of all the gast (Grammar AST) structure have been\nrefactored to use the config object pattern additionally some properties have been renamed or removed.\nSee the new SDK docs for details:")]),n("ul",[n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/rule.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/terminal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terminal"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/nonterminal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NonTerminal"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/alternation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alternation"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/option.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Option"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/repetition.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Repetition"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/repetitionwithseparator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RepetitionWithSeparator"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/repetitionmandatory.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RepetitionMandatory"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/repetitionmandatorywithseparator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RepetitionMandatoryWithSeparator"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/2_0_0/classes/flat.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flat"),n("OutboundLink")],1),t._v(" (sequence)")])])])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_3-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-0","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.0.0")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ul",[n("li",[n("p",[t._v("A CST Node's children dictionary no longer contains empty arrays\nfor unmatched terminals and non-terminals. This means that some existence checks\nconditions in the CST visitor must be refactored, for example:")]),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MyVisitor")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("SomeBaseVisitor")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("atomicExpression")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// BAD - will fail due to \"TypeError: Cannot read property '0' of undefined\"")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Integer"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Integer"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// GOOD - safe check")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Integer"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// if a property exists it's value is guaranteed to have at least one element.")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Identifier"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"_2-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-0","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.0")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// No longer officially supported")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Identifier")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" pattern "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/[a-zA-Z_]\\w+/")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Use the createToken API instead")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Identifier "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("createToken")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Identifier"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pattern"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/[a-zA-Z_]\\w+/")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[this._v("defaultErrorProvider was renamed to defaultParserErrorProvider")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",[n("p",[n("strong",[t._v("All")]),t._v(" the gast namespace was flattened into the API's root, e.g:")]),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Old API - using nested namespace.")]),t._v("\nchevrotain"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gast"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Alternation\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// New API - No nested namespaces.")]),t._v("\nchevrotain"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Alternation\n")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[this._v("The exceptions namespace was also flattened into the API's root.")])])}],!1,null,null,null);a.default=e.exports}}]);