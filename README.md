# whyubuntuisbetter

##How to edit content:

This is the file you need to edit: https://github.com/mariogrip/whyubuntuisbetter/blob/master/items.json

Let's say the items.json file looks like this:

```

{
  "items": [
    {
      "title": "Example",
      "text":  "This is an awesome example."
    }
  ]
}

```
And you want to add new content with title = "Awesome!" and text = "This is just an awesome test!", you will need to format it like this:

```
  {
    "title": "Awesome",
    "text": "This is just an awesome test!"
  }
```

After that, you will need to add that new block into the existing file, the result should look something like this:

```

{
  "items": [
    {
      "title": "Example",
      "text":  "This is an awesome example."
    },
    {
      "title": "Awesome",
      "text": "This is just an awesome test!"
    }
  ]
}

```
