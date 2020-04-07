# React Advanced Topics

* Higher Order Component
----

```javascript
 const EnhancedComponent = higherOrderComponent(OriginalComponent)
 return EnhancedComponent;
```
* Render Props
---

```javascript
  App.js:
  import Counter from './renderProps/Counter';
  import ClickCounter from './components/ClickCounter';
   render() {
       return (
                 <Counter 
                    render={(count, incrementCounter) => 
                                    <ClickCounter count={count} handler={incrementCounter} /> } />
       );
   }
   
   Counter.js: 
   class Counter extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    count: 0
                };
            }

            incrementCounter = () => {
                this.setState(previousState => {
                    return { count: previousState.count + 1 };
                });
            }
    
            render() {
                return (
                    <React.Fragment>
                        {
                            this.props.render(this.state.count, this.incrementCounter)
                        }
                    </React.Fragment>
                )
            }
    }

    ClickCounter:
      render() {
            const { count, handler } = this.props
            return (
                <React.Fragment>
                    <button onClick={handler}> Clicked { count } times. </button>
                </React.Fragment>
            )
      }

```