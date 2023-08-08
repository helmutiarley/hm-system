export default function description(props) {
    return (
        props.page === "api" ? <div>Changes will be loaded using API</div> : <div>Changes will be loaded using client side</div>
    )
}