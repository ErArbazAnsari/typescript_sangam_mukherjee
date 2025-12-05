class BankAccount {
    public owner: string;

    private account_balance = 0;

    constructor(owner: string) {
        this.owner = owner;
    }
    deposite(amt: number): void {
        if (amt <= 0) throw new Error("amount must be greater that 0");
        else this.account_balance += amt;
    }
    show_balance(): void {
        console.log(this.account_balance);
    }
}
