class Counter {
    public long startTime = 0;

    public Counter() {
    }

    public void Start() {
        startTime = System.nanoTime();
    }

    public void Print() {
        System.out.printf("\n[%s execution time : %fs]\n", lable, (float) (System.nanoTime() - startTime) / 1000000000);
    }
}
