# formation_angular

- [Présentation (merci @ltearno)](http://lteconsulting.fr/angular/)
- [TP](http://lteconsulting.fr/angular/travaux-pratiques.html)

## Example des promises en es6
la feuille exo_1.html montre un example des promises en es6

## Angular1 != Angular2
### Angular1 : 
- nombre de directives à connaitre très important (genre ngClick, $http...)
- Perf pas très bonne à cause d'un graph de composants complexe et analysé au moins deux fois, code hotspot non optimisés (monomorphique/polymorphique/megamorphique)

### Angular2 :
- Au lieu de s'appuyer sur les directives, ng2 s'appuie sur ZoneJS(TLSAsynchrone) permettant de patcher toute les f° asynchrone de l'api du navigateur comme ci dessous! 
```javascript 
  let nativeSetTimeOut = setTimeout
  SetTimeout = function(cb, delay){
    nativeSetTimeout(() => {
      //Hook <= detection des changements
      cb();
    }, delay);
  }
  ```
 Ca veut dire qu'on peut utilise l'api standard normalement, et qu'elle est écouté par ng2 de manière transparente.
  
 - On ne gère pas le cycle de vie des composants, c'est ng2 qui s'en occupe via injection de dépendances => Ca permet de tester facilement avec des mocks et tout...
 
## Modules
- Classe déclaré avec @NgModule
- On peut donner accès à seulement certains composants pour d'autres modules
- boostrap => composant racine du module => vue principale de l'appli

## Composant
Brique de base d'une appli angular :
- Regroupe la vue html et le comportement en typescript, décoré avec ```@Composant```
- Deux option de base ```selector``` -> nom de l'élément html, ```template``` -> la vue du composant écrite en html avec syntaxe additionnelle spécifique à ng

- D'autres comme ```templateUrl```, ```styles```, ```styleUrls```, ```providers```, et il y en a d'autres.

## Templates
Partie vue du composant.

## Interpolation
-> ```{{user?.name}}``` va permettre d'éviter d'avoir un null pointer si user est null.

## Liaison de propriété
```html
<p>{{ user.name }}</p>
```
qui est en fait un raccourci pour injecter dans le dom une expression dans le style de 
```html
  <p [textContent]="user.name"/>
```

```$event``` permet de chopper l'évènement comme dans 
```javascript
el.addEventListener('click',
    function(event){
})
```

On peut filtrer les évènements du genre ```keydown.space```.

## Liaison double
```html
<input [(ngModel)]="hero.name" />
```

## Préconisations
- Il vaut mieux préfixer ses component (genre app-moncomposant)
