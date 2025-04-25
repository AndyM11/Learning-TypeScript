"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserForm;
const react_1 = require("react");
const Button_1 = __importDefault(require("../components/Button"));
const Input_1 = __importDefault(require("../components/Input"));
const InitialValue = {
    name: "",
    username: "",
};
function UserForm({ handleSubmit }) {
    const [form, setForm] = (0, react_1.useState)(InitialValue);
    const handleChange = (e) => {
        const name = e.target.name;
        setForm({ ...form, [name]: e.target.value });
    };
    const handleClick = (e) => {
        e.preventDefault();
        handleSubmit(form);
        setForm(InitialValue);
    };
    return (<>
            <Input_1.default value={form.name} name="name" placeholder="Nombre" handleChange={handleChange}/>
            <Input_1.default value={form.username} name="username" placeholder="Usuario" handleChange={handleChange}/>
            <Button_1.default handleClick={handleClick}>Enviar</Button_1.default>
        </>);
}
//# sourceMappingURL=User.js.map