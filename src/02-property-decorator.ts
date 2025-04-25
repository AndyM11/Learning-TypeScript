function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    const original = propertyDescriptor.get;
    propertyDescriptor.get = function () {
        const r = original?.call(this);
        if (typeof r === "string") {
            return r.toUpperCase();
        }
        return r;
    }
}

function Min(min: number) {
    return (target: any, propertyName: string) => {
        let val: string
        const descriptor: PropertyDescriptor = {
            get() {
                return val;
            },
            set(v: string) {
                if (v.length < min) {
                    throw new Error(`El valor de ${propertyName} no puede ser menor a ${min}`);
                }
                val = v
            }
        }
        Object.defineProperty(target, propertyName, descriptor);

    }
}


class User {
    @Min(6)
    public password?: string
    constructor(public name: string, public lastname: string, password?: string) { }

    @UpperCase
    get fullName(): string {
        return `${this.name} ${this.lastname}`
    }
}

const user = new User("Jorge", "Gonzalez", "1234567");
console.log(user.password);
export { } // This line is necessary to make this file a module and avoid "Cannot use import statement outside a module" error.