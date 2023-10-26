# CSS Lesson 1

## Basic Syntax

The basic structure of CSS is:

```
selector = {property: value;}
```

### Example:
The following example uses this principle to assert that any text in a `div` in the output we're defining is bold: 

```
div.bold-text = {font-weight: 700;}
```

<!-- REVISIT THIS ONE -->

## Selectors

The selector is simply the HTML elements to which the CSS rules we're defining apply; they're what's being 'selected' for each rule. We have a few different types:  
### Universal Selector
The universal selector will select elements of any type, hence the name 'universal' - the following, for example, makes every element have the `color: purple` attribute:

```
* { 
  color: purple;
}
```

### Type Selector
A type selector will select all elements of the given type, and the syntax is just the name of the element:
#### HTML File
```
<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>
```
#### CSS File
```
div {
    color: white;
}
```
This code will apply the white to the three **div** elements, by not to the **p**.

### Class Selector
A class is an attribute you can assign to a html-tag. This allows you to then assign styles to elements based on this class. 
#### HTML File
```
<div class="alert-text">
  Please agree to our terms of service.
</div>
```
#### CSS File
```
.alert-text {
    color: red;
}
```
**Note:** The class doesn't have to align a particular element type. In the syntax, it **is** case-sensistive though.  
A single element can also have multiple classes, such as `<div class="alert-text severe-alert">`, which gives both listed classes to the element.

### ID Selector
Similar to a class, except that an ID *must* be unique.
#### HTML File
```
<div id="title">
  My awesome Smashmouth Fan-site
</div>
```
#### CSS File
```
#title {
    background-color: red;
}
```
We now use a hash rather than a full stop, and once again it is case-sensitive. Use *sparingly*, as usually a class will do.

### Grouping Selector
What if we have two or more elements with parts of their declarations in common?
```
.read{
    color: white;
    background-color: black;
    /* several unique declarations */
}

.unread{
    color: white;
    background-color: black;
    /* several unique declarations */
}
```
Wouldn't it be easier to define these aspects at the same time?

```
.read,
.unread {
    color: white;
    background-color: black;
}

.read{
    /* several unique declarations */
}

.unread{
    /* several unique declarations */
}
```

### Chain Selector
We can capture the intersection of two classes by chaining them. Let's say we had the following HTML:
```
<div>
  <div class="subsection header">
    Latest Posts
  </div>
  <p class="subsection" id="preview">
    This is where a preview for a post sits.
  </p>
</div>
```
If we want to apply a rule to items which are in the `subsection` class, and in the `header` class (such as our title), we could use the following:
```
.subsection.header{
  color:red;
}
```
We can also use the ID to chain, allowing us to change our preview:
```
.subsection#preview {
  color: blue;
}
```
Note however that you can't chain more than one type selector, as an element can only be one type.

### Descendant Combinator
Denoted by listing two elements separated by a space. Matches all elements which are descendants of a specified element. For example, the following targets all `p` tags which are within a `div` tag:
```
div p {
  background-color: yellow;
}
``` 

### Child Combinator
Denoted by listing two elements separated by a `>`. Matches all elements which are the child of a specified element. For example, the following targets all `p` tags which children of a `div` tag:
```
div > p {
  background-color: yellow;
}
``` 

### Adjacent Sibling Combinator
Denoted by listing two elements separated by a `+`. Matches all elements which are adjacent siblings (i.e. are on the same level and are adjacent in the HTML code). For example, the following targets all `p` tags which follow a `div` tag:
```
div + p {
  background-color: yellow;
}
``` 

### General Sibling Combinator
Denoted by listing two elements separated by a `~`. Matches all elements which are siblings (i.e. are on the same level). For example, the following targets all `p` tags which are siblings to a `div` tag:
```
div ~ p {
  background-color: yellow;
}
```

## Example Properties

### Color
Determines the colour of the element - can be assigned with a hex code, RGB value or HSL value.
#### Hex Code
```
p {
  /* HEX Code */
  color: #1100ff;
}
```
#### RGB Value
```
p {
  /* RGB Example */
  color: rgb(100, 0, 127);
}
```
#### HSL Value
```
p {
  /* HSL Example */
  color: hsl(15, 82%, 56%);
}
```

### Background Color
Determines the background colour of the element.
```
p {
  /* HEX Code */
  background-color: #1a10ef;
}
```

### Font Family
Determines the font of text in the element. This can be used using the name of the family:
```
p {
  /* Using font family name */
  font-family: "Times New Roman";
}
```
Or the generic family name:
```
p {
  /* Using generic family name */
  font-family: sans-serif;
}
```
If multiple values are listed, it will use the first valid result. It's best practice to do this, starting with the one you want and ending with a generic family:
```
p {
  /* Using concatenated name */
  font-family: "Times New Roman", sans-serif;
}
```

### Font Size
Determines the size of the font:
```
p {
  font-size: 22px;
}
```

### Font Weight
Determines the weight of the font:
```
p {
  font-weight: bold;
  /* OR */
  font-weight: 700;
}
```

### Text Align
Determines the alignment of the text:
```
p {
  text-align: center;
}
```

### Image Height and Width
Allows the user to adjust height and width values, the `auto` option allows the retention of proportions. It is best practice to always state these values explicitly.
```
img {
  height: auto;
  width: 500px;
}
```

## Using CSS with HTML
### External CSS
The method by which we create a separate .css file and import it into the HTML code:
```
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

### Internal CSS
The method by which we embed the CSS in the actual HTL code:
```
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
</body>
```
It can be useful for adding unique styles to a *single page* of a website, but it can be messy.

### Inline CSS
It is possible to add it directly to the HTML elements, though this method isn't recommended:
```
<body>
  <div style="color: white; background-color: black;">
    ...
  </div>
</body>
```
As we're applying this directly to the element, we don't need selectors. If you need to add a *unique* style for a *single* element, this method can work fine. Generally though, it's not recommended for two main reasons:

1. Bloat.
2. This overrides the other two methods, which can produce unexpected consequences.
