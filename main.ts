type func = () => void;
const main = (codes: func[]) => codes.forEach((code) => code());
export default main;