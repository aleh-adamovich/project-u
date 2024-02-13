import classes from './Customer.module.scss';

export const Customer = () => {
  return (
    <div className={classes.container}>
      <h2>Customer: John</h2>
      <h2>Manager: Jane</h2>
      <h2>Amount: 100$</h2>
    </div>
  )
}