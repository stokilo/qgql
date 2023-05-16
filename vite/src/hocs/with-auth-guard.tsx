
export const withAuthGuard = (Component) => (props) => (
    <Component {...props} />
);
