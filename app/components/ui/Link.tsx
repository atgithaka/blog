export default function Link({ URL, name }: LinkProps) {
    return <a href={URL}>{name}</a>;
}
