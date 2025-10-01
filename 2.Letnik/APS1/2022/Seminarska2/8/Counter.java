class Counter {
    public long startTime = 0;
    public String lable;

    public long pauseTime = 0;

    public Counter(String lable) {
        this.lable = lable;
    }

    public void Start() {
        startTime = System.nanoTime();
    }

    public void Pause() {
        pauseTime = System.nanoTime();
    }

    public void Resume() {
        startTime = System.nanoTime() - (pauseTime - startTime);
        pauseTime = 0;
    }

    public void Print() {
        System.out.printf("\n[%s execution time : %fs]\n", lable, (float) (System.nanoTime() - startTime) / 1000000000);
    }
}
