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
And you want to add new content with title = "Awesome" and text = "This is just an awesome test!", you will need to format it like this:

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

Use this tool to check if your JSON code is correct: http://json.parser.online.fr/ 

##How to add "Read More" to content:

Say you want to add a "Read More" page to this item:

```
    {
      "title": "Awesome new text!!!",
      "text": "This is just an awesome test!"
    }
```

Then the first thing you will need to do is to find the out what the url/file name will be on the content json file that will be placed inside the folder /content. To do this you need to take the title of the item and make everything to lowercase, replace space with - and remove any letter that does not match a-z and 1-9 (so "Awesome new text!!!" would be "awesome-new-text")

Then you need to make an .json with the name you just made (example "awesome-new-text.json") 

Now you can add the content

example:

```
{
"item": {
        "title": Awesome new text!!!",
        "text":  "This is just an awesome read more page :)"
    }
}
```

after that is done you need to enable "Read more" to your item in items.json:

example

```
    {
      "title": "Awesome new text!!!",
      "text": "This is just an awesome test!",
      "read-more": true
    }
```
