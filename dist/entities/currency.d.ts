/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly ETHER: {
        3901: Currency;
        56: Currency;
        97: Currency;
        250: Currency;
        4002: Currency;
        1666600000: Currency;
        1666700000: Currency;
    };
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const ETHER: {
    3901: Currency;
    56: Currency;
    97: Currency;
    250: Currency;
    4002: Currency;
    1666600000: Currency;
    1666700000: Currency;
};
export { ETHER };
