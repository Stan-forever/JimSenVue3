enum PrototyeEnum {
  "[object Array]" = "Array",
  "[object Function]" = "Function"
}

export default PrototyeEnum;

interface DataType {
  age: number;
  addr: string;
}

interface MyType<T> {
  name: string;
  data: T;
}

const data: MyType<DataType> = {
  name: "mike",
  data: {
    age: 18,
    addr: "china"
  }
};
