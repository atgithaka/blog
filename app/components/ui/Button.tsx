export default function Button({ URL, name, type }: ButtonProps) {
    const buttonType =
        type === 'filled' ? 'filled css class' : 'outlined css class';
    return (
        <a href={URL}>
            <button className={buttonType}>{name}</button>
        </a>
    );
}
