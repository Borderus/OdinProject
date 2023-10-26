# CSS Lesson 2
## The Cascade
### Priorities
| Priority | CSS Source Type | Description |
|-------|-------|-------|
| 1 | Importance | Use of the `!important` annotation. |
| 2 | Inline | A style  |
| 3 | Media Type | ETC |
| 4 | User Defined | ETC |
| 5 | Selector Specificity | ETC |
| 6 | Rule Order | ETC |
| 7 | Parent Inheritance | ETC |
| 8 | CSS property definition in HTML document | ETC |
| 9 | Browser Default | ETC |

### Selector Specificity
A CSS declaration that is more specific will take greater precedence, creating this order of operations for the selectors we've used so far:
|Order|Selector|
|-----|--------|
|1|ID Selector|
|2|Class Selector|
|3|Type Selector|

In the event of a match, it can then begin to look at further selectors. For example, the following will produce a yellow background (as this is only defined in one of the definitions) but will create red text when resolving the conflict between the selectors - they both work at the ID level, but when those are cancelled out the latter is also working at the class level and gets priority.
#### HTML
```
<div class="main">
  <div class="list" id="subsection">
    Red text on yellow background
  </div>
</div>
```
#### CSS
```
#subsection {
    background-color: yellow;
    color: blue;
}

.main #subsection {
    color: red;
}
```
**Note:** The universal selector, nor any combinator, add specificity.

### Inheritance
Inheritance refers to certain properties which get passed on by elements to their descendants, such as `color`, `font-size`, `font-family` and other typographical ones.  
These get overwritten if we directly target the element.

### Rule Order
The most recently defined rule takes precedence here.