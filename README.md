reactjs-topcoat
===============

[Topcoat.io][1] components using [ReactJs][2]

```
var UI = require('reactjs-topcoat');
```


Button
======

default
```
<UI.Button>Default button</Ui.Button>
```

full-width
```
<UI.Button full>Default button</Ui.Button>
```

call to action
```
<UI.Button cta>Call to action button</Ui.Button>
```

Quit
```
<UI.Button quiet>Quiet button</Ui.Button>
```

Large
```
<UI.Button large>Large button</Ui.Button>
```

Icon Button
======
```
<UI.IconButton>
  <UI.Icon name="home" />
  Default button
</Ui.IconButton>
```

```
<UI.IconButton quiet large full>
  <UI.Icon name="home" />
  Default button
</Ui.IconButton>
```

Link Button
===========
```
<UI.LinkButton cta large href="#home">
Home
</UI.LinkButton>
```

Button Bar
==========
```
<UI.ButtonBar>
  <UI.ButtonBarItem>Button 1</UI.ButtonBarItem>
  <UI.ButtonBarItem>Button 2</UI.ButtonBarItem>
</Ui.ButtonBar>
```

Large & Full-width Button Bar 

```
<UI.ButtonBar full large>
  <UI.ButtonBarItem full>Button 1</UI.ButtonBarItem>
  <UI.ButtonBarItem full large>Button 2</UI.ButtonBarItem>
</Ui.ButtonBar>
```

List
====
```
<UI.List>
  <UI.ListHeader>
  List Header
  </UI.ListHeader>
  <UI.ListContainer>
    <UI.ListItem>
      <a href="#1">LINK1</a>
    </UI.ListItem>
    <UI.ListItem>
      <a href="#2">LINK2</a>
    </UI.ListItem>
    <UI.ListItem>
      Lorem
    </UI.ListItem>
  </UI.ListContainer>
</UI.List>
```

Nav Bar
=======
```
<UI.NavBar>
  <UI.NavBarItem left quarter>
    <UI.Icon name="listview" />
  </UI.NavBarItem>
  <UI.NavBarItem center half>
    APP TITLE
  </UI.NavBarItem>
  <UI.NavBarItem right quarter>
    <UI.Icon name="back" />
  </UI.NavBarItem>
</UI.NavBar>
```

Tab Bar
=======
```
<UI.TabBar>
  <UI.TabBarItem>
    First
  </UI.TabBarItem>
  <UI.TabBarItem>
   Second
  </UI.TabBarItem>
</UI.TabBar>
```

Full-Width
```
<UI.TabBar full>
  <UI.TabBarItem full>
    First
  </UI.TabBarItem>
  <UI.TabBarItem full>
   Second
  </UI.TabBarItem>
</UI.TabBar>
```



Text Input
============
```
<UI.TextInput />
```

```
<UI.TextInput large />
```

```
<UI.TextInput full />
```

```
<UI.TextInput name="username" disabled />
```

Textarea Input
============
```
<UI.Textarea />
```

```
<UI.Textarea large />
```

```
<UI.Textarea full />
```

Search Input
============
```
<UI.Search />
```

```
<UI.Search large />
```

```
<UI.Search full />
```

```
<UI.Search disabled />
```

Switch
======
```
<UI.Switch />
```

Checkbox
========
```
<UI.Checkbox label="Checkboc label" />
```

```
<UI.Checkbox checked />
```

```
<UI.Checkbox disabled />
```

Radio
=====
```
<UI.Radio name="myname" />
```

```
<UI.Radio left label="This label goes left" />
```

```
<UI.Radio right label="This label goes right" />
```

```
<UI.Radio disabled />
```

Notification
============
```
<UI.Notification value="10 new Msgs" />
```

Range
=====
```
<UI.Range />
```

```
<UI.Range vertical />
```

```
<UI.Range disabled />
```


Icon
====
```
<UI.Icon name="circle" />
```


[1]: http://topcoat.io/
[2]: https://github.com/facebook/react
