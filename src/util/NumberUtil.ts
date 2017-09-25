class NumberUtil {
    public static convertToNumber(value: string): number {
        if (value === "") {
            return undefined;
        }

        let numericValue: number = Number.parseFloat(value);

        if (isNaN(numericValue)) {
            return undefined;
        }

        return numericValue;
    }
}

export default NumberUtil;
