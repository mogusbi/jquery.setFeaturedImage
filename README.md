# jQuery Set Featured Image Plugin
> Set the correct srcset as the featured image background

## Getting started
### NPM
Install package with NPM and add it to your dependencies:
`npm install @mogusbi/jquery.setfeaturedimage --save`

## Introducing it to your page
See the example below. Please note this will select the correct image and set it as the background image of the container, you'll then need to add some addition styles to make it look how you want it to look.

```html
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    <div class="featured-image">
      <picture>
        <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source media="(min-width: 768px)" srcset="image-768.png" />
        <!--[if IE 9]></video><![endif]-->
        <img src="image.png" data-featured-image-fill />
      </picture>
    </div>

    <script src="jquery.js"></script>
    <script src="jquery.setfeaturedimage.js"></script>
    <script>
      $('.featured-image').setFeaturedImage();
    </script>
  </body>
</html>
```

## License
Copyright &copy; Mo Gusbi.
Licensed under the MIT license.