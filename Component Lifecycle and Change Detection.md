### Component Lifecycle

---

Components have a lifecycle that begins with their initial instantiation, and continues with their rendering until they’re destroyed and removed from the application

#### Lifecycle hooks

---

During the rendering and lifecycle of a component, you can use various hooks to trigger application logic to execute. For example, you can run initialization logic once during the instantiation of the component and tear down logic during the destruction. You can also use these hooks to bring data
into the component.

#### List of lifecycle hooks and their roles

---

| LifeCycle Hook          | Role                                                         |
| ----------------------- | ------------------------------------------------------------ |
| **OnChanges**           | Fires any time the input bindings have changed. It will give you an object  called **SimpleChange** that includes the current and previous values so you can inspect what’s changed. This is most useful to read changes in binding values |
| **OnInit**              | This runs once after the component has fully initialized (though not necessarily when all child components are ready), which is after the first **OnChanges** hook. This is the best place to do any initialization code, such as loading data from APIs |
| **OnDestroy**           | Before a component is completely removed, the **OnDestroy** hook allows you to run some logic. This is most useful if you need to stop listening for incoming data or clear a timer |
| **DoCheck**             | Any time that change detection runs to determine whether the application needs to be updated, the **DoCheck** lifecycle hook lets you implement your own type of change detection |
| **AfterContentInit**    | When any content children have been fully initialized, this hook will allow you to do any initial work necessary to finish setting up the content children components, such as if you need to verify whether content passed in was valid or not. |
| **AfterContentChecked** | Every time that Angular checks the content children, this can run so you can implement additional change detection logic |
| **AfterViewInit**       | This hook lets you run logic after all View Children have been initially rendered. This lets you know when the whole component tree has fully initialized and can be manipulated |
| **AfterViewChecked**    | When Angular checks the component view and any View Children have been checked, you can implement additional logic to determine whether changes occurred |



> The **OnInit, OnChanges, and OnDestroy** hooks are the most commonly used lifecycle hooks

> The **DoCheck**, **AfterContentChecked**, and **AfterViewChecked** hooks are most useful to keep track of logic that needs to run during any change detection process, and respond if necessary

> The **OnInit**, **AfterContentInit**, and **AfterViewInit** hooks are primarily useful to run logic during the component’s initial rendering to set it up, and each one ensures a different level of component integrity (such as self  ready or if the child or content  components are also ready).



### Change detection and optimizations

---

Angular ships with a change detection framework that determines when components need to be rendered if inputs have changed.

Changes are always triggered by some  activity such as

- A user clicks a button to trigger a form submission (user activity).
- An interval fires every x seconds to refresh data (intervals or timers).
- Callbacks, observables, or promises are resolved (XHR requests, event streams).

Change Detection Strategies



| Default                                                      | OnPush                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Always check the component for changes on each change detection cycle | Explicitly tells Angular that this component only needs to check for changes if one of the component inputs has changed |
| Angular has highly optimized this process so that it’s efficient to run these checks | if a parent component hasn’t changed, it’s known that the child component’s inputs won’t change, so it can skip change detection on that component (and any grandchild components) |
|                                                              |                                                              |





