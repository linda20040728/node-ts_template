/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        this.numerator = numerator;
        this.denominator = denominator;
        this.normalize();
    }

    getNumerator(): number {
        return this.numerator;
    }

    getDenominator(): number {
        return this.denominator;
    }

    normalize(): Rational {
        const gcd = this.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
        return this;
    }

    isWhole(): boolean {
        return this.denominator === 1;
    }

    isDecimal(): boolean {
        return this.denominator !== 1;
    }

    equals(r: Rational): boolean {
        const r1 = this.normalize();
        const r2 = r.normalize();
        return r1.numerator === r2.numerator && r1.denominator === r2.denominator;
    }

    static _parseRational(num: string[], denom: string[]): Rational {
        const numerator = parseInt(num.join(''));
        const denominator = parseInt(denom.join(''));
        return new Rational(numerator, denominator);
    }

    static parseRational(input: string): Rational {
        const parts = input.split('/');
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    }

    private gcd(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}
