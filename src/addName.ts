export default function loader(source: string) {
    return `${JSON.stringify(source)} // this is mukai's file`
}