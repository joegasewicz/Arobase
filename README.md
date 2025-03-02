# Arobase
A micro frontend library, inspired by [BackboneJS](https://backbonejs.org/).

⚠️ Work in progress, please call back soon...

### Why Micro?
Arobase is designed to be a *drop in* micro app within an existing html template,
ideal for such web frameworks as Rails, Django or Spring Boot.

### Register Views
```html
<div id="feedApp" class="feed">

    <div ar-view="main-view">
        <h1 ar-tag="title"></h1>
        <p ar-tag="body"></p>
    </div>

    <div ar-view="main-feed-view">
        <h1 ar-tag="title"></h1>
        <p ar-tag="body"></p>
    </div>

</div>

<script >
    const arobase = new Arobase("feeApp", model);

    arobase.registerView("main-view", function(state) {
        state.tags.update("title", "Welcome to Arobase!");
        state.tags.update("body", "Some more info...");
    });

    arobase.registerView("main-feed-view", function(state) {
        state.tags.update("title", "This is the main feed heading...");
        state.tags.update("body", "Main feed content...");
    });
</script>
```